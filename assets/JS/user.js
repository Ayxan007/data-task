
function updatePageBasedOnTime() {
    const now = new Date();
    const hours = now.getHours();
    let message = '';
    let backgroundColor = '';

    if (hours >= 5 && hours < 12) {
        message = 'SABAHINIZ XEYIR';
        backgroundColor = 'lightyellow'; 
    } else if (hours >= 12 && hours < 17) {
        message = 'GÜNORTANIZ XEYIR';
        backgroundColor = 'orange'; 
    } else if (hours >= 17 && hours < 21) {
        message = 'AXŞAMINIZ XEYIR';
        backgroundColor = 'lightblue'; 
    } else {
        message = 'GECƏNİZ XEYIR';
        backgroundColor = 'darkblue';
    }

    alert(message);

    document.body.style.backgroundColor = backgroundColor;
}
window.onload = updatePageBasedOnTime;
