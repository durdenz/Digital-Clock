let clock = () => {
    let date = new Date();
    let hrs = date.getUTCHours();
    let mins = date.getUTCMinutes();
    let secs = date.getUTCSeconds();

    hrs = hrs < 10 ? "0" + hrs : hrs;
    mins = mins < 10 ? "0" + mins : mins;
    secs = secs < 10 ? "0" + secs : secs;

    console.log("hrs = " + hrs);

    let time = hrs+":"+mins+":"+secs+" UTC";

    document.getElementById("clock").innerText = time;

    setTimeout(clock, 1000);
};

clock();