// Local stand-in for api/chat.js (a Vercel Edge Function) so the chatbot can
// be tested with `npm run dev` alone, without a Vercel account/login. Vite's
// dev server proxies /api/* to this process (see vite.config.js). Not used
// in production — Vercel runs api/chat.js directly there.
import http from 'node:http';

const PORT = 8787;
const NVIDIA_URL = 'https://integrate.api.nvidia.com/v1/chat/completions';

const server = http.createServer(async (req, res) => {
  if (req.method !== 'POST' || req.url !== '/api/chat') {
    res.writeHead(404);
    res.end('Not found');
    return;
  }

  const apiKey = process.env.NVIDIA_API_KEY;
  if (!apiKey) {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Server missing NVIDIA_API_KEY (check .env)' }));
    return;
  }

  let raw = '';
  for await (const chunk of req) raw += chunk;

  let upstream;
  try {
    upstream = await fetch(NVIDIA_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: raw,
    });
  } catch (err) {
    res.writeHead(502, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: `Upstream fetch failed: ${err.message}` }));
    return;
  }

  res.writeHead(upstream.status, {
    'Content-Type': upstream.headers.get('content-type') || 'application/json',
  });

  for await (const chunk of upstream.body) res.write(chunk);
  res.end();
});

server.listen(PORT, () => {
  console.log(`[dev-api] proxying NVIDIA chat completions on http://localhost:${PORT}/api/chat`);
});
