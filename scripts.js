(function () {
    setupTimer();
})();

function setupTimer() {
    const timestamp = document.querySelector(".timestamp .val");
    const date = document.querySelector(".date .val");
    date.innerHTML = getDate() + " (Week nr. " + getWeekNumber()+")";
    timestamp.innerHTML = getUnixTimestamp();

    setInterval(function () {
        timestamp.innerHTML = getUnixTimestamp();
    }, 1000);
}

function getDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }

    return dd + '/' + mm + '/' + yyyy;
}

function getUnixTimestamp() {
    return Math.floor(Date.now() / 1000);
}

function getWeekNumber() {
    var d = new Date();
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    return weekNo;
}