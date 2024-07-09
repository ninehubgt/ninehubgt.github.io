document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('cosmosCanvas');
    const ctx = canvas.getContext('2d');

    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    
    const stars = 200; 
    const starData = [];
    for (let i = 0; i < stars; i++) {
        starData.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 2,
            speed: Math.random() * 0.05 + 0.05
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        starData.forEach(star => {
            ctx.fillStyle = 'white';
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
            ctx.fill();
            star.y += star.speed;
            if (star.y > canvas.height) {
                star.y = 0;
                star.x = Math.random() * canvas.width;
            }
        });
        requestAnimationFrame(animate);
    }

    animate();
});
