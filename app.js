function systemClick() {
    document.getElementById('window-system').addEventListener("click", function changeContent() {
      window.open('https://www.sensibull.com', '_system');
    });
}

function blankClick() {
    document.getElementById('window-blank').addEventListener("click", function changeContent() {
      window.open('https://www.sensibull.com', '_blank');
    });
}