// Ninja animation controller - Chrome dino style
(function() {
    const ninja = document.getElementById('ninja');
    let isAnimating = false;

    ninja.addEventListener('click', function() {
        if (isAnimating) return;

        isAnimating = true;
        ninja.classList.add('animating');

        // Sequence 1: Crouch and jump
        ninja.style.animation = 'ninja-crouch 0.3s ease-in-out';

        setTimeout(() => {
            // Big jump
            ninja.style.animation = 'ninja-jump 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        }, 300);

        setTimeout(() => {
            // Run forward with leg movement
            const ninjaEl = ninja.querySelector('::before') || ninja;
            ninja.style.animation = 'ninja-run 1.8s linear, ninja-leg-run 0.2s steps(2) infinite';
        }, 1000);

        setTimeout(() => {
            // First flip trick
            ninja.style.animation = 'ninja-flip 0.5s ease-in-out';
        }, 2800);

        setTimeout(() => {
            // Continue running
            ninja.style.animation = 'none';
            ninja.style.left = 'calc(50vw - 24px)';
            setTimeout(() => {
                ninja.style.animation = 'ninja-leg-run 0.2s steps(2) infinite';
            }, 50);
        }, 3300);

        setTimeout(() => {
            // Epic backflip
            ninja.style.animation = 'ninja-backflip 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55)';
        }, 3800);

        setTimeout(() => {
            // Final sprint off screen
            ninja.style.animation = 'ninja-sprint 1.2s cubic-bezier(0.65, 0, 0.35, 1), ninja-leg-run 0.15s steps(2) infinite';
        }, 4600);

        setTimeout(() => {
            // Reset ninja to starting position
            ninja.style.animation = '';
            ninja.style.left = '60px';
            ninja.style.opacity = '1';
            ninja.classList.remove('animating');
            isAnimating = false;
        }, 5800);
    });
})();
