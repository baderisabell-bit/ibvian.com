document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    const header = document.getElementById('siteHeader');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Real-time Clock Animation Engine
    const handS = document.getElementById('handS');
    const handM = document.getElementById('handM');
    const handH = document.getElementById('handH');

    function updateClock() {
        const now = new Date();
        const seconds = now.getSeconds() + now.getMilliseconds() / 1000;
        const minutes = now.getMinutes() + seconds / 60;
        const hours = (now.getHours() % 12) + minutes / 60;

        if (handS) handS.style.transform = `rotate(${seconds * 6}deg)`;
        if (handM) handM.style.transform = `rotate(${minutes * 6}deg)`;
        if (handH) handH.style.transform = `rotate(${hours * 30}deg)`;

        requestAnimationFrame(updateClock);
    }
    requestAnimationFrame(updateClock);

    // Vector Watch Styling Engine
    const caseButtons = document.querySelectorAll('[data-case]');
    const dialButtons = document.querySelectorAll('[data-dial]');
    const caseEl = document.getElementById('watchCase');
    const dialEl = document.getElementById('watchDial');
    const configPrice = document.getElementById('configPrice');

    caseButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const type = e.target.getAttribute('data-case');
            const price = e.target.getAttribute('data-price');

            if (configPrice) configPrice.innerText = price;

            if (type === 'silver') {
                caseEl.style.background = 'linear-gradient(135deg, #E0E0E0 0%, #8A8A8A 50%, #D5D5D5 100%)';
                caseEl.style.boxShadow = '0 15px 35px rgba(0,0,0,0.8), inset 0 2px 5px rgba(255,255,255,0.6)';
            } else if (type === 'gold') {
                caseEl.style.background = 'linear-gradient(135deg, #F3E5AB 0%, #D4AF37 50%, #AA7C11 100%)';
                caseEl.style.boxShadow = '0 15px 35px rgba(212,175,55,0.3), inset 0 2px 5px rgba(255,255,255,0.6)';
            } else if (type === 'dark') {
                caseEl.style.background = 'linear-gradient(135deg, #444 0%, #111 50%, #222 100%)';
                caseEl.style.boxShadow = '0 15px 35px rgba(0,0,0,0.95), inset 0 2px 5px rgba(255,255,255,0.1)';
            }

            caseButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
        });
    });

    dialButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const colorType = e.target.getAttribute('data-dial');

            if (colorType === 'black') {
                dialEl.style.background = 'radial-gradient(circle, #1a1a1a 0%, #0a0a0a 100%)';
            } else if (colorType === 'champagne') {
                dialEl.style.background = 'radial-gradient(circle, #eed9b5 0%, #d4ba98 100%)';
            } else if (colorType === 'blue') {
                dialEl.style.background = 'radial-gradient(circle, #0f2b48 0%, #051329 100%)';
            }

            dialButtons.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
        });
    });

    // Web Audio Tick Sound Generator
    let audioCtx = null;
    let isTicking = false;
    let tickInterval = null;
    const soundToggle = document.getElementById('soundToggle');

    if (soundToggle) {
        soundToggle.addEventListener('click', function() {
            if (!audioCtx) {
                audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            }

            isTicking = !isTicking;
            if (isTicking) {
                this.innerHTML = '<i class="fa-solid fa-volume-high"></i> Ticken An';
                this.style.borderColor = 'var(--accent-gold)';
                tickInterval = setInterval(playTick, 250);
            } else {
                this.innerHTML = '<i class="fa-solid fa-volume-xmark"></i> Sound';
                this.style.borderColor = 'var(--border-color)';
                clearInterval(tickInterval);
            }
        });
    }

    function playTick() {
        if (!audioCtx) return;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(1200, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.015);

        gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.015);

        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.015);
    }

    // Form Handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Vielen Dank für Ihre Anfrage. Unser Atelier wird sich in Kürze mit Ihnen in Verbindung setzen.');
        });
    }
});