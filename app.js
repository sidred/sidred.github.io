function systemClick() {
    window.open('https://www.sensibull.com', '_system');
}

function blankClick() {
    // document.getElementById('window-blank').addEventListener("click", function changeContent() {
    //   window.open('https://www.sensibull.com', '_blank');
    // });
    // window.open('https://www.sensibull.com', '_blank');
    openLink()
}


function openLink() {

  const standalone = window.navigator.standalone;
  const userAgent = window.navigator.userAgent.toLowerCase();
  const safari = /safari/.test(userAgent);
  const ios = /iphone|ipod|ipad/.test(userAgent);

  let qq;
  let url = 'https://www.sensibull.com'

  if (ios) {
    if (!standalone && !safari) {
        // iOS webview
        window.close(); // Close the empty view window
        window.open(url, '_system', 'location=yes', replace);
        return
    }
  } else {
    if (userAgent.includes('wv')) {
        // Android webview
        window.close(); // Close the empty view window
        const winloc = 'intent:' + url + '#Intent;end';
        window.location = winloc;
        return
    }
  }
  window.open(url, '_blank');

}
