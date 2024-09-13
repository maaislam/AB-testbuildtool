const offerEndCountdown = () => {
    //Set the date we're counting down to
    const countdownEndDate = new Date('August 17, 2024 00:00:00').getTime();

    //Update the count down every 1 second
    const countdownTimer = setInterval(() => {
        //Get today's date and time
        const now = new Date().getTime();

        //Find the distance between now and the countdown date
        const distance = countdownEndDate - now;

        //Time calculations for days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        //Output the result in elements with class names "day", "hou", "min", and "sec"
        document.querySelector('.value.day').textContent = days;
        document.querySelector('.value.hou').textContent = hours;
        document.querySelector('.value.min').textContent = minutes;
        document.querySelector('.value.sec').textContent = seconds;

        //If the countdown is over, stop the timer
        if (distance < 0) {
            clearInterval(countdownTimer);
            document.querySelector('.countdown-timer').innerHTML = 'Offer Expired';
        }
    }, 1000);
};
export default offerEndCountdown;
