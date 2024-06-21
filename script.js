let hour = document.querySelector(".hour-time");
let min = document.querySelector(".min-time");
let sec = document.querySelector(".sec-time");


setInterval(function getdate() {
  let now = new Date();
  hour.textContent = now.getHours();
  min.textContent = now.getMinutes();
  sec.textContent = now.getSeconds();
},1000)


  