// Lightweight particle background for subtle neon ambience
// Creates a full-screen canvas and animates small glowing particles

(function(){
    function initParticles() {
        const canvas = document.getElementById('bgCanvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let w = canvas.width = window.innerWidth;
        let h = canvas.height = window.innerHeight;
        const particles = [];
        const count = Math.max(Math.floor((w*h)/140000), 25);

        function rand(min, max){ return Math.random()*(max-min)+min; }

        function createParticles(){
            particles.length = 0;
            for(let i=0;i<count;i++){
                particles.push({
                    x: Math.random()*w,
                    y: Math.random()*h,
                    r: rand(0.8, 2.6),
                    vx: rand(-0.15, 0.15),
                    vy: rand(-0.05, 0.05),
                    hue: Math.random()*360
                });
            }
        }

        function resize(){
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
            createParticles();
        }

        window.addEventListener('resize', resize);

        function draw(){
            ctx.clearRect(0,0,w,h);
            // subtle vignette
            const g = ctx.createLinearGradient(0,0,0,h);
            g.addColorStop(0, 'rgba(10,10,15,0.05)');
            g.addColorStop(1, 'rgba(0,0,0,0.15)');
            ctx.fillStyle = g;
            ctx.fillRect(0,0,w,h);

            for (let p of particles){
                // move
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < -10) p.x = w + 10;
                if (p.x > w + 10) p.x = -10;
                if (p.y < -10) p.y = h + 10;
                if (p.y > h + 10) p.y = -10;

                // draw glow
                const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r*12);
                const color = `hsl(${(200 + (p.hue%60))}, 100%, ${40 + (p.r*10)}%)`;
                grad.addColorStop(0, color.replace(')', ', 0.9)'));
                grad.addColorStop(0.2, color.replace(')', ', 0.35)'));
                grad.addColorStop(1, color.replace(')', ', 0)'));

                ctx.beginPath();
                ctx.fillStyle = grad;
                ctx.arc(p.x, p.y, p.r*6, 0, Math.PI*2);
                ctx.fill();
            }

            requestAnimationFrame(draw);
        }

        createParticles();
        draw();
    }

    // expose
    window.initParticles = initParticles;
})();
