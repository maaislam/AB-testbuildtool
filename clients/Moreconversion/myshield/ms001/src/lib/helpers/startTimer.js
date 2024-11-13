const startTimer = (id) => {
    const endTime = new Date().getTime() + (3 * 60 + 34) * 60 * 1000; //parse 'MM/DD/YYYY'

    //Update the count down every 1 second
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const timeRemaining = endTime - now;

        if (timeRemaining < 0) {
            clearInterval(interval);
            //countdownElement.innerHTML = "EXPIRED"; // Optional: Handle expiration
            return;
        }

        //Calculate time components
        //const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        //Update HTML elements with new values
        //document.getElementById(`${id}__days`).innerText = days < 10 ? `0${days}` : days;
        document.getElementById(`${id}__hours`).innerText = hours < 10 ? `0${hours}` : hours;
        document.getElementById(`${id}__minutes`).innerText = minutes < 10 ? `0${minutes}` : minutes;
        document.getElementById(`${id}__seconds`).innerText = seconds < 10 ? `0${seconds}` : seconds;
    }, 1000);
};

export default startTimer;
