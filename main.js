const songs = [
    "binary.mp3",
    "dual.mp3",
    "heroes.mp3",
    "imperial.mp3",
    "main.mp3",
    "yavin.mp3",
];

const player = document.getElementById("player");

const createSongList = () => {
  const list = document.createElement("ol");
  for (let i = 0; i < songs.length; i++) {
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(songs[i]));
    list.appendChild(item);
  }
  return list;
};

const songList = document.getElementById("songList");
songList.appendChild(createSongList());

// 5. the last thiing to fix is an issue selecting our songs
// currently, we are adding a click listener to our songList section
// this can cause a problem because if the user clicks just outside a link
// it will select the full contents of our section
// demo-click just above the first song link and will set all songs

// 6.to fix this, we can add the click listener instead to the list items
// since we have multiple list items for our songs, we need to loop over them
// all and add the click handler to each one
const links = document.querySelectorAll("li");
// for-of loop
// gives us a constant value for each "link" in our list of links:
for (const link of links) {
  // we can then use this link and add an event listener:
  link.addEventListener("click", setSong);
}

// 7. change to setSong function name to match above -test/done:
function setSong(e) {
  console.log(e);
  // 4. remove any existing pulse classes when we select a new song
  document.querySelector("#headphones").classList.remove("pulse");

  const source = document.getElementById("source");
  source.src = "songs/" + e.target.innerText;
  document.getElementById(
    "currentSong"
  ).innerText = `Now Playing:  ${e.target.innerText}`;

  player.load();
  player.play();
  // 3. first add headphones id in index, then set class of pulse:

  document.querySelector("#headphones").classList.add("pulse");
}

function playAudio() {
  if (player.readyState) {
    player.play();
  }
}

function pauseAudio() {
  player.pause();
}

const slider = document.getElementById("volumeSlider");
slider.oninput = function (e) {
  const volume = e.target.value;
  player.volume = volume;
};

function updateProgress() {
  if (player.currentTime > 0) {
    const progressBar = document.getElementById("progress");
    progressBar.value = (player.currentTime / player.duration) * 100;
  }
}