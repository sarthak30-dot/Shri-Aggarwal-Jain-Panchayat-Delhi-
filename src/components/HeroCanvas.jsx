import React, { useEffect, useRef } from 'react';

const HeroCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    const particles = [];
    const maxParticles = 60;
    const mouse = { x: null, y: null, radius: 120 };
    let scrollY = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const handleMouseLeave = () => { mouse.x = null; mouse.y = null; };
    const handleScroll = () => { scrollY = window.scrollY; };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });
    resizeCanvas();

    class Particle {
      constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 80;
        this.size = Math.random() * 2.5 + 0.8;
        this.speedY = Math.random() * 0.4 + 0.15;
        this.speedX = (Math.random() - 0.5) * 0.25;
        this.alpha = Math.random() * 0.5 + 0.15;
        this.angle = Math.random() * Math.PI * 2;
        this.spinSpeed = Math.random() * 0.01 + 0.005;
      }

      update() {
        this.y -= this.speedY * (1 + scrollY * 0.0035);
        this.angle += this.spinSpeed;
        this.x += this.speedX + Math.sin(this.angle) * 0.15;

        if (mouse.x !== null && mouse.y !== null) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            this.x += (dx / distance) * force * 1.8;
            this.y += (dy / distance) * force * 1.8;
          }
        }

        if (this.y < canvas.height * 0.2) this.alpha -= 0.008;
        if (this.y < -20 || this.alpha <= 0 || this.x < -10 || this.x > canvas.width + 10) this.reset();
      }

      draw() {
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        const grad = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 1.5);
        grad.addColorStop(0, `hsla(43, 98%, 70%, ${this.alpha})`);
        grad.addColorStop(0.3, `hsla(43, 90%, 55%, ${this.alpha * 0.8})`);
        grad.addColorStop(1, 'hsla(43, 90%, 55%, 0)');
        ctx.fillStyle = grad;
        ctx.shadowColor = 'hsla(43, 98%, 68%, 0.4)';
        ctx.shadowBlur = this.size * 3;
        ctx.fill();
        ctx.restore();
      }
    }

    for (let i = 0; i < maxParticles; i++) particles.push(new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => { p.update(); p.draw(); });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 2,
      }}
    />
  );
};

export default HeroCanvas;
