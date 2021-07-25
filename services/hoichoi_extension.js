let check = null;

if (detect(/http(s|)\:\/\/(www\.|)hoichoi\.tv\/films\/(.*)/gm)) {
  lookup();
} else {
  var el = document.querySelectorAll('.video-tray-item');
  for (var i = 0; i < el.length; i++) {
    el[i].addEventListener('click', function () {
      lookup();
    });
  }
}

function detect(regex) {
  let m,
    detected = false;
  while ((m = regex.exec(window.location.href)) !== null) {
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }
    m.forEach((match, groupIndex) => {
      detected = true;
    });
  }

  return detected;
}

function lookup() {
  if (check) {
    clearInterval(check);
  }
  check = setInterval(() => {
    let video = document.querySelector('.vjs-tech');
    console.log(video);
    let filename = 'File Name Here';
    if (video) {
      var cc = document.querySelector('.vjs-subs-caps-button');
      var newItem = document.createElement('div');
      var newButton = document.createElement('button');
      newItem.appendChild(newButton);
      newItem.style.display = 'flex';
      newButton.innerText = 'DL';

      cc.parentNode.insertBefore(newItem, cc);

      let showName = document.querySelectorAll('.episode-name .name')[1];
      let movieName = document.querySelector('h1.header-title');
      if (showName) {
        filename = showName.innerText;
      } else if (movieName) {
        filename = movieName.innerText;
      }
      document.querySelector('.vjs-resolution-menu').firstChild.click();
      newButton.addEventListener('click', function () {
        console.log('clicked');
        let url = video.src;
        chrome.runtime.sendMessage({
          url,
          filename,
          conflictAction: 'prompt',
        });
      });
      clearInterval(check);
    }
  }, 2000);
}
