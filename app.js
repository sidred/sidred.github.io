function systemClick() {
    window.open('https://www.sensibull.com', '_system');
}

function blankClick() {
    window.open('https://www.sensibull.com', '_blank');
}

function chromeInUrl() {
    const newUrl = 'googlechrome://navigate?url=' + url
    window.open(newUrl, '_system', 'location=yes', replace);
}

function intentInUrl() {

  const standalone = window.navigator.standalone;
  const userAgent = window.navigator.userAgent.toLowerCase();
  const safari = /safari/.test(userAgent);
  const ios = /iphone|ipod|ipad/.test(userAgent);

  let url = 'https://www.sensibull.com'

  if (ios) {
    if (!standalone && !safari) {
        // iOS webview
        window.close(); // Close the empty view window
        window.open(url, '_system', 'location=yes', replace);
        return
    }
  } else {
    const newUrl = 'googlechrome://navigate?url=' + url
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
