/* ================= MOBILE NAV ========================= */
const mobileNavButton = document.querySelector('.mobile-nav-button');
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon');
const mobileNav = document.querySelector('.mobile-nav');

mobileNavButton.addEventListener('click', function () {
    mobileNavIcon.classList.toggle('active');
    mobileNav.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

/* ================= VIDEO ========================= */
const videoBtn = document.querySelector('#video-story-btn');
const videoBtnIcon = document.querySelector('#video-story-btn-icon');
const videoOverlay = document.querySelector('#story-video-overlay');
const videoFile = document.querySelector('#video-story');

videoBtn.addEventListener('click', function () {
    function toggleOverlay(event){
        console.log('vent.type',event.type)
        if (event.type === 'mouseleave') {
            videoOverlay.classList.add('hidden');
        } else {
            videoOverlay.classList.remove('hidden');
        }
    }

    if (videoFile.paused) {
        videoFile.play();
        console.log('111 videoBtnIcon',videoBtnIcon)
        videoBtnIcon.src = './img/story/pause-white.png';

        videoOverlay.onmouseleave = toggleOverlay;
        videoOverlay.onmouseenter = toggleOverlay;

    } else {
        videoFile.pause();
        console.log('videoBtnIcon',videoBtnIcon)
        videoBtnIcon.src = './img/story/play-white.svg';
        videoOverlay.onmouseleave = null;
        videoOverlay.onmouseenter = null;

    }

})
