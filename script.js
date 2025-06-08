
const countdownElement = document.getElementById('countdown');
const eventDate = new Date("2025-05-16T07:00:00+05:30");

function updateCountdown() {
    const now = new Date();
    const diff = eventDate - now;

    if (diff <= 0) {
        countdownElement.innerHTML = "🎉 ಸಮಾರಂಭ ಆರಂಭವಾಗಿದೆ! 🎉";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownElement.innerHTML = `⏳ ಸಮಾರಂಭಕ್ಕೆ ಇನ್ನು: ${days} ದಿನ, ${hours} ಗಂಟೆ, ${minutes} ನಿಮಿಷ, ${seconds} ಸೆಕೆಂಡ್`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
