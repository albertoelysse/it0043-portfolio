console.log("Portfolio JavaScript loaded successfully!");
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header p");
    if (header) {
        header.textContent += " | System Active";
    }
});
