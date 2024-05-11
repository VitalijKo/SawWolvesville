var audio = new Audio();
var theme = new Audio('/audio/hello-vit.mp3');

var playing = false;

function play(filename) {
  audio.pause();
  audio.src = '/audio/' + filename;
  audio.play();
}

function loadThemeButton() {
  const button = document.querySelector('.player-btn');
  const icon = document.querySelector('.svg-play');

  button.addEventListener('click', () => {
    button.classList.toggle('active');

    if (!icon.classList.contains('to-pause')) {
      icon.classList.add('to-pause');
      icon.classList.remove('to-play');
    } else {
      icon.classList.remove('to-pause');
      icon.classList.add('to-play');
    }
    
    if (playing) {
      theme.pause();

      playing = false;
    } else {
      theme.play();

      playing = true;
    }
  });
}

function music(title) {
  if (playing) {
    theme.pause();

    playing = false;
  }

  theme.src = '/audio/hello-vit.mp3';

  if (title.includes('Introduction')) play('main.mp3');

  else if (title.includes('Corruptor')) play('corruptor.mp3');

  else if (title.includes('Evil Detective')) play('evil-detective.mp3');

  else if (title.includes('Arsonist')) play('arsonist.mp3');

  else if (title.includes('Illusionist')) play('illusionist.mp3');

  else if (title.includes('Bomber')) play('bomber.mp3');

  else if (title.includes('Cannibal')) play('cannibal.mp3');

  else if (title.includes('Hypno')) play('hypno.mp3');

  else if (title.includes('Main Characters')) pass;

  else play('change.mp3');

  loadThemeButton();
}

music(document.title);

new MutationObserver((mutations) => {
  music(mutations[0].target.textContent);
}).observe(
  document.querySelector('title'),
  { subtree: true, characterData: true, childList: true }
);

