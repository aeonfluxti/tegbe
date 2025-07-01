function trocarVideo() {
  const video = document.getElementById('bg-video');
  if (!video) return;

  const isMobile = window.innerWidth <= 768;
  const src = isMobile
    ? "https://tegbe.com.br/public/bg-section-1-mobile.mp4"
    : "https://tegbe.com.br/public/bg-section-1.mp4";

  if (video.src.includes(src)) return;

  video.src = src;
  video.load();
  video.play();
}

window.addEventListener('DOMContentLoaded', trocarVideo);
window.addEventListener('resize', trocarVideo);

export default trocarVideo;
