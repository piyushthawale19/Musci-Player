let progress = document.getElementById('progress');
let song = document.getElementById('song'); 
let ctrlIcon = document.getElementById('ctrlIcon');
let musicList = document.getElementById('musicList');
let menuIcon = document.getElementById('menuIcon');
let songTitle = document.querySelector('h1');
let songArtist = document.querySelector('p');
let songImage = document.querySelector('.song-img');
let backBtn = document.getElementById('back');
let nextBtn = document.getElementById('next');

// Song list data
const songs = [
    {
        title: "Cinnamon Girl",
        artist: "Lana Del Rey",
        src: "Lana Del Rey - Cinnamon Girl.mp3",
        img: "OIP.webp"
    },
    {
        title: "Summertime Sadness",
        artist: "Lana Del Rey",
        src: "Lana Del Rey - Summertime Sadness (Official Music Video).mp3",
        img: "download.jpg"
    },
    {
        title: "Born To Die",
        artist: "Lana Del Rey",
        src: "Lana Del Rey - Born To Die.mp3",
        img: "download (1).jpg"
    },
    {
        title: "Young and Beautiful",
        artist: "Lana Del Rey",
        src: "Lana Del Rey - Young and Beautiful.mp3",
        img: "download (2).jpg"
    },
    {
        title: "Sorry",
        artist: "Justin Bieber",
        src: "Justin Bieber - Sorry (PURPOSE _ The Movement).mp3",
        img: "images.jpg"
    },
    {
        title: "Good For You",
        artist: "Selena Gomez",
        src: "Selena Gomez - Good For You.mp3",
        img: "download (3).jpg"
    },
    {
        title: "Lily",
        artist: "Alan Walker",
        src: "Lily.mp3",
        img: "lily.jpg"
    },
    {
        title: "Cold/Mess",
        artist: "Prateek Kuhad",
        src: "Prateek Kuhad - cold_mess.mp3",
        img: "download (4).jpg"
    }
];

let currentSong = 0;

function loadSong(index) {
  const s = songs[index];
  song.src = s.src;
  songTitle.textContent = s.title;
  songArtist.textContent = s.artist;
  songImage.src = s.img;

  song.load();
  song.play();
  ctrlIcon.classList.remove('fa-play');
  ctrlIcon.classList.add('fa-pause')
}
menuIcon.addEventListener("click", () => {
    musicList.style.display = musicList.style.display === "block" ? "none" : "block";
});

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

function playPause() {
    if (ctrlIcon.classList.contains('fa-pause')) {
        song.pause();
        ctrlIcon.classList.remove('fa-pause');
        ctrlIcon.classList.add('fa-play');
    } else {
        song.play();
        ctrlIcon.classList.add('fa-pause');
        ctrlIcon.classList.remove('fa-play');
    }
}

if (song.play) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}

progress.onchange = function () {
    song.currentTime = progress.value;
    song.play();
    ctrlIcon.classList.add('fa-pause');
    ctrlIcon.classList.remove('fa-play');
};

function loadSong(index) {
    const selected = songs[index];
    document.querySelector('h1').innerText = selected.title;
    document.querySelector('.music-player p').innerText = selected.artist;
    document.querySelector('.song-img').src = selected.img;
    song.src = selected.src;
    song.load();
    song.play();
    ctrlIcon.classList.add('fa-pause');
    ctrlIcon.classList.remove('fa-play');
    musicList.style.display = "none";
}
backBtn.addEventListener('click', () => {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(currentSong);
});

nextBtn.addEventListener('click', () => {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
});

loadSong(currentSong);
