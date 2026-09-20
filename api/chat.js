// Vercel Edge Function — proxies chat completions to NVIDIA NIM.
//
// The browser can't call integrate.api.nvidia.com directly: it sends no
// Access-Control-Allow-Origin header, so the request is blocked as CORS
// before it ever reaches the network (confirmed via a manual OPTIONS probe —
// Groq's endpoint sends `access-control-allow-origin: *`, NVIDIA's sends
// nothing). Routing through this same-origin function sidesteps that, and
// keeps the API key server-side instead of shipped in the client bundle.
export const config = { runtime: 'edge' };

const NVIDIA_URL = 'https://integrate.api.nvidia.com/v1/chat/completions';

export default async function handler(req) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  const apiKey = process.env.NVIDIA_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: 'Server missing NVIDIA_API_KEY' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return new Response('Invalid JSON body', { status: 400 });
  }

  const upstream = await fetch(NVIDIA_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  });

  return new Response(upstream.body, {
    status: upstream.status,
    headers: {
      'Content-Type': upstream.headers.get('content-type') || 'application/json',
    },
  });
}
