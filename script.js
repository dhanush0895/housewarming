(function () {
    const countdownElement = document.getElementById('countdown');
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    // IMPORTANT: I have set a future date to show you the countdown.
    // CHANGE THIS to your actual event date! For example: 'May 16, 2026 09:00:00'
    const eventDate = new Date('Dec 25, 2025 09:00:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = eventDate - now;

        // This text will be shown after the event date has passed
        if (distance < 0) {
            countdownElement.innerHTML = "<h3 style='color:#8D2B2B; margin: 0;'>The auspicious day has arrived!</h3>";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        daysElement.innerText = String(days).padStart(2, '0');
        hoursElement.innerText = String(hours).padStart(2, '0');
        minutesElement.innerText = String(minutes).padStart(2, '0');
        secondsElement.innerText = String(seconds).padStart(2, '0');
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
})();
