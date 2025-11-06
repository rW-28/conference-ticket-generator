document.addEventListener("DOMContentLoaded", () => {
    const name = localStorage.getItem("userName");
    const email = localStorage.getItem("userEmail");
    const github = localStorage.getItem("userGitHub");

    document.getElementById("display-name").textContent = name || "—";
    document.getElementById("display-gitHub").textContent = github || "—";

    document.getElementById("title-name").textContent = name || "—";
    document.getElementById("title-email").textContent = email || "—";

    const ticketNumber = Math.floor(100000 + Math.random() * 99999);
    document.getElementById("ticket-number").textContent = `#${ticketNumber}`;

});