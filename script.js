function startCelebration() {
    // Smoothly hide the welcome container and show celebration screen
    const mainContainer = document.getElementById('main-container');
    const celebrationScreen = document.getElementById('celebration-screen');

    mainContainer.style.opacity = '0';
    mainContainer.style.transform = 'scale(0.9)';
    
    setTimeout(() => {
        mainContainer.classList.add('hidden');
        celebrationScreen.classList.remove('hidden');
        setTimeout(() => {
            celebrationScreen.style.opacity = '1';
        }, 50);
    }, 500);

    // Trigger continuous gorgeous confetti and bursts
    var duration = 15 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 1000 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        var particleCount = 50 * (timeLeft / duration);
        
        // Confetti explosions from multiple angles
        confetti(Object.assign({}, defaults, { 
            particleCount, 
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            colors: ['#ff69b4', '#ff1493', '#ffffff', '#ffd700', '#ffb6c1']
        }));
        confetti(Object.assign({}, defaults, { 
            particleCount, 
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            colors: ['#ff69b4', '#ff1493', '#ffffff', '#ffd700', '#ffb6c1']
        }));
    }, 250);
}

function resetCelebration() {
    // Reset back to the initial welcome screen
    const mainContainer = document.getElementById('main-container');
    const celebrationScreen = document.getElementById('celebration-screen');

    celebrationScreen.style.opacity = '0';
    setTimeout(() => {
        celebrationScreen.classList.add('hidden');
        mainContainer.classList.remove('hidden');
        mainContainer.style.opacity = '1';
        mainContainer.style.transform = 'scale(1)';
    }, 500);
}