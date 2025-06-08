body {
    margin: 0;
    padding: 40px 20px;
    font-family: 'Hind', sans-serif;
    background-color: #FFF8E1; /* Light cream background */
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    box-sizing: border-box;
    position: relative;
    overflow-x: hidden;
}

.background-pattern {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('https://www.transparenttextures.com/patterns/paisley.png');
    opacity: 0.1;
    z-index: 0;
}

.invitation-card {
    background: #ffffff;
    border: 2px solid #8D2B2B; /* Deep maroon border */
    border-radius: 15px;
    box-shadow: 0 10px 40px rgba(141, 43, 43, 0.2);
    max-width: 650px;
    width: 100%;
    text-align: center;
    position: relative;
    z-index: 1;
    padding-top: 50px; /* Space for the garland */
    overflow: hidden;
}

.header-garland {
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 110%;
}

.header-garland img {
    width: 100%;
}

.content {
    padding: 0 40px 30px;
}

.deity-icon img {
    width: 60px;
    margin-bottom: 20px;
}

.intro-text, .invitation-line {
    font-size: 1.1em;
    color: #555;
    margin: 10px 0;
}

.hosts {
    font-family: 'Arima Madurai', cursive;
    font-size: 2.8em;
    font-weight: 700;
    color: #B8860B; /* Gold color */
    margin: 10px 0;
    line-height: 1.2;
}

.event-title {
    font-family: 'Arima Madurai', cursive;
    font-size: 2.2em;
    color: #8D2B2B;
    margin: 10px 0 25px 0;
}

#countdown {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin: 20px 0 30px;
    padding: 15px;
    background-color: rgba(184, 134, 11, 0.05); /* Faint gold background */
    border-radius: 10px;
}

.countdown-item {
    background-color: #8D2B2B;
    color: white;
    border-radius: 8px;
    padding: 10px;
    min-width: 70px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.countdown-item span {
    display: block;
    font-size: 2em;
    font-weight: 700;
}

.countdown-item p {
    margin: 0;
    font-size: 0.8em;
    text-transform: uppercase;
}

.event-details {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 30px;
    border-top: 1px dashed #B8860B;
    padding-top: 30px;
}

.detail-item h3 {
    font-family: 'Arima Madurai', cursive;
    font-size: 1.4em;
    color: #8D2B2B;
    margin-bottom: 10px;
}

.detail-item p {
    font-size: 1.05em;
    line-height: 1.6;
    margin: 5px 0;
    color: #333;
}

.footer-bell {
    margin-top: 20px;
}

.footer-bell img {
    width: 50px;
}

@media (min-width: 600px) {
    .event-details {
        grid-template-columns: 1fr 1fr;
    }
}
