`use strict`

const toggleButton = document.getElementById("toggleButton");
const message = document.getElementById("message");
const lastTime = localStorage.getItem("lastTime");

const savePage = (lastTime, buttonState) => {
  localStorage.setItem('lastTime', lastTime);
  localStorage.setItem('buttonState', buttonState);
};

const handleButtonClick = () => {
  const now = new Date();
  const formattedDate = now.toLocaleString("uk-UA");

  if (toggleButton.innerHTML === "Turn off") {
    toggleButton.innerHTML = "Turn on";
    document.body.style.backgroundColor = "#333";
    message.innerHTML = `Last turn off: ${formattedDate}`;
    savePage(formattedDate, 'off');
  } else {
    toggleButton.innerHTML = "Turn off";
    document.body.style.backgroundColor = "#fff";
    message.innerHTML = `Last turn on: ${formattedDate}`;
    savePage(formattedDate, 'on');
  }
};

const startApp = () => {
  toggleButton.addEventListener("click", handleButtonClick);
  if (lastTime) {
    const buttonState = localStorage.getItem('buttonState');
    if (buttonState === 'on') {
      toggleButton.innerHTML = "Turn off";
      message.innerHTML = `Last turn on: ${lastTime}`;
      document.body.style.backgroundColor = "#fff";
    } else {
      toggleButton.innerHTML = "Turn on";
      message.innerHTML = `Last turn off: ${lastTime}`;
      document.body.style.backgroundColor = "#333";
    }
  }
};

document.addEventListener("DOMContentLoaded", startApp);
