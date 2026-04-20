document.addEventListener("DOMContentLoaded", () => {
  const name = localStorage.getItem("userName");
  const email = localStorage.getItem("userEmail");
  const github = localStorage.getItem("userGitHub");
  const avatar = localStorage.getItem("userAvatar");

  // Отображаем текстовые данные
  document.getElementById("display-name").textContent = name || "—";
  document.getElementById("display-gitHub").textContent = github || "—";

  // Заголовки
  document.getElementById("title-name").textContent = name || "—";
  document.getElementById("title-email").textContent = email || "—";

  // Фото
  if (avatar) {
    document.getElementById("user-avatar").src = avatar;
  }

  // Номер билета
  const ticketNumber = Math.floor(100000 + Math.random() * 900000);
  document.getElementById("ticket-number").textContent = `#${ticketNumber}`;
});

