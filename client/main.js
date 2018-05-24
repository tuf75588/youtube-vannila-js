const API_URL = "https://server-flpaxndxrd.now.sh/videos";
const videosElement = document.querySelector("#videos");
const filterInput = document.querySelector('#filter');
let allVideos;

filterInput.addEventListener('keyup', filterList);

function filterList(event) {
  const filter = event.target.value;
  if (allVideos) {
    const regExp = new RegExp(filterInput.value, 'gi')
    allVideos.forEach(video => {
      if (video.snippet.title.match(regExp)) {
        //show video
        console.log(video)
      } else {
        //hide the video
      }
    })
  }
}

fetch(API_URL)
  .then(response => response.json())
  .then(videos => {
    allVideos = videos

    videos.forEach(video => {
      const colDiv = document.createElement('div');
      colDiv.className = 'col-4'

      const videoElement = document.createElement("div");
      videoElement.className = "card ma-1";

      colDiv.appendChild(videoElement)

      const img = document.createElement("img");
      const imageRes = video.snippet.thumbnails.standard || video.snippet.thumbnails.medium || video.snippet.thumbnails.high;


      img.src = video.snippet.thumbnails.high.url;
      img.className = "card-img-top";
      videoElement.appendChild(img);

      const mediaBody = document.createElement("div");
      mediaBody.className = "card-body";
      videoElement.appendChild(mediaBody);

      const h5 = document.createElement("h5");
      h5.className = "card-title";
      h5.textContent = video.snippet.title;

      mediaBody.appendChild(h5);
      videosElement.appendChild(colDiv);
    });
  });