const user = {
  username: "acel",
  password: "123",
};

function login() {
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  if (username.value == 0) {
    console.log("Username harus di isi!.");
    window.alert("Username harus di isi!.");
  }

  if (password.value == 0) {
    console.log("Password harus di isi!.");
    window.alert("Password harus di isi!.");
  } else {
    if (user.username != username.value) {
      console.log("Username salah.");
      window.alert("Username salah.");
    } else {
      if (user.password != password.value) {
        console.log("Password salah.");
        window.alert("Password salah.");
      } else {
        console.log("Login berhasil!");
        window.alert("Login berhasil!");
        window.location.href = "/pages/menu.html";
      }
    }
  }
}
