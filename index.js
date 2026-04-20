document.getElementById("ticket-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const gitHub = document.getElementById("github").value;
  const avatar = document.getElementById("avatar").files[0];

  // Если есть фото, читаем через FileReader
  if (avatar) {
    const reader = new FileReader();
    reader.onload = function() {
      localStorage.setItem("userName", name);
      localStorage.setItem("userEmail", email);
      localStorage.setItem("userGitHub", gitHub);
      localStorage.setItem("userAvatar", reader.result);
      window.location.href = "ticket.html";
    };
    reader.readAsDataURL(avatar);
  } 
  // Если фото нет
  else {
    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userGitHub", gitHub);
    window.location.href = "ticket.html";
  }
});
