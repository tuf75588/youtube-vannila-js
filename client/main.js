const API_URL = "https://server-flpaxndxrd.now.sh/videos";
const videosElement = document.querySelector("#videos");
fetch(API_URL)
  .then(response => response.json())
  .then(videos => {
    console.log("====================================");
    console.log(videos);
    console.log("====================================");
    videos.forEach(video => {
      const videoElement = document.createElement("div");
      videoElement.className = "media";
      const img = document.createElement("img");
      img.src = video.snippet.thumbnails.high.url;
      img.className = "mr-3";
      videoElement.appendChild(img);
      const mediaBody = document.createElement("div");
      mediaBody.className = "media-body";
      videoElement.appendChild(mediaBody);
      const h5 = document.createElement("h5");
      h5.className = "mt-0";
      h5.textContent = video.snippet.title;
      mediaBody.appendChild(h5);
      videosElement.appendChild(videoElement);
    });
  });
