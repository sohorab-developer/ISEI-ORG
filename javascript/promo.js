function playVideo() {
    const video = document.getElementById('promo-video-element');
    video.play();
    video.style.zIndex = "5";
    document.querySelector('.play-button').style.display = 'none';
}