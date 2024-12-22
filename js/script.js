function updateDateTime() {
    const now = new Date();
    const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZoneName: 'short' };
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'America/New_York' };

    const time = now.toLocaleTimeString('en-US', timeOptions);
    const date = now.toLocaleDateString('en-US', dateOptions).toUpperCase();
    const location = 'CINCINNATI, OHIO, USA';

    document.getElementById('datetime-container').innerHTML = `${time}<br>${date}<br>${location}`;
}

document.addEventListener('DOMContentLoaded', () => {
    updateDateTime();
    setInterval(updateDateTime, 1000);
});
