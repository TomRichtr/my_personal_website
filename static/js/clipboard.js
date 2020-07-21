document.querySelector("#email").addEventListener("click", () => {
  navigator.clipboard.writeText("t.richtr@email.cz");
});

document.querySelector("#phone").addEventListener("click", () => {
  navigator.clipboard.writeText("+420778540970");
});

document.querySelector("#skype").addEventListener("click", () => {
  navigator.clipboard.writeText("live:tomas.richtr.87");
});

$("#email").click(function () {
  $(".alert").fadeIn(300).delay(1500).fadeOut(400);
});

$("#phone").click(function () {
  $(".alert").fadeIn(300).delay(1500).fadeOut(400);
});

$("#skype").click(function () {
  $(".alert").fadeIn(300).delay(1500).fadeOut(400);
});