// Ninja animation controller
(function() {
    const ninja = document.getElementById('ninja');
    let isAnimating = false;

    ninja.addEventListener('click', function() {
        if (isAnimating) return;

        isAnimating = true;
        ninja.classList.add('animating');

        // Jump animation
        ninja.style.animation = 'ninja-jump 0.6s ease-in-out';

        setTimeout(() => {
            // Run forward
            ninja.style.animation = 'ninja-jump 0.6s ease-in-out, ninja-run 2s linear';
        }, 600);

        setTimeout(() => {
            // Flip animation
            ninja.style.animation = 'ninja-flip 0.4s linear 2';
        }, 1600);

        setTimeout(() => {
            // Continue running
            ninja.style.animation = 'ninja-run 1.5s linear';
        }, 2400);

        setTimeout(() => {
            // Backflip
            ninja.style.animation = 'ninja-jump 0.5s ease-in-out, ninja-flip 0.5s linear, ninja-run 1.5s linear';
        }, 3200);

        setTimeout(() => {
            // Sprint and exit
            ninja.style.animation = 'ninja-exit 1s ease-in';
        }, 4200);

        setTimeout(() => {
            // Reset ninja position
            ninja.style.animation = '';
            ninja.style.left = '40px';
            ninja.style.opacity = '1';
            ninja.classList.remove('animating');
            isAnimating = false;
        }, 5200);
    });

    // Add hover effect
    ninja.addEventListener('mouseenter', function() {
        if (!isAnimating) {
            ninja.style.transform = 'scale(1.1)';
        }
    });

    ninja.addEventListener('mouseleave', function() {
        if (!isAnimating) {
            ninja.style.transform = 'scale(1)';
        }
    });
})();
