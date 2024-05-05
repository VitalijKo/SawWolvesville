var audio = new Audio();

function play(filename) {
    audio.pause();
    audio.src = '/audio/' + filename;
    audio.play();
}

function music(title) {
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
}

music(document.title);

new MutationObserver((mutations) => {
    music(mutations[0].target.textContent);
}).observe(
    document.querySelector('title'),
    { subtree: true, characterData: true, childList: true }
);
