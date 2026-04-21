function updateTime() {
    const timestampElement = document.getElementById('timestamp');
    const now = new Date();
    timestampElement.textContent = now.toLocaleTimeString();
}

// Initial update
updateTime();

// Update every second
setInterval(updateTime, 1000);

console.log("Hello World app initialized.");
