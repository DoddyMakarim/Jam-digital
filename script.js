function updateTime() {
  const jam = new Date();
  const jamString = jam.toLocaleTimeString();
  document.getElementById('jam').textContent = jamString;
}

setInterval(updateTime, 1000);