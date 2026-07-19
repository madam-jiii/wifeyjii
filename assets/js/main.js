document.addEventListener('DOMContentLoaded', function() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 600,
      once: false,
      mirror: true
    });
  }

  const audioState = sessionStorage.getItem('birthdayAudioState');
  const audioTime = sessionStorage.getItem('birthdayAudioTime');

  const bgAudio = document.getElementById('bgAudio');
  if (bgAudio) {
    bgAudio.volume = 0.3;
    
    if (audioState === 'playing' && audioTime) {
      bgAudio.currentTime = parseFloat(audioTime);
      bgAudio.play().catch(function() {});
    }

    bgAudio.addEventListener('play', function() {
      sessionStorage.setItem('birthdayAudioState', 'playing');
    });

    bgAudio.addEventListener('pause', function() {
      sessionStorage.setItem('birthdayAudioState', 'paused');
    });

    bgAudio.addEventListener('timeupdate', function() {
      sessionStorage.setItem('birthdayAudioTime', bgAudio.currentTime.toString());
    });

    window.addEventListener('beforeunload', function() {
      if (bgAudio) {
        sessionStorage.setItem('birthdayAudioTime', bgAudio.currentTime.toString());
        sessionStorage.setItem('birthdayAudioState', bgAudio.paused ? 'paused' : 'playing');
      }
    });
  }

  createFireflies();

  function createFireflies() {
    const container = document.getElementById('firefliesContainer');
    if (!container) return;
    for (let i = 0; i < 25; i++) {
      const ff = document.createElement('div');
      ff.className = 'firefly';
      ff.style.left = Math.random() * 100 + '%';
      ff.style.top = Math.random() * 80 + 10 + '%';
      ff.style.animationDelay = Math.random() * 10 + 's';
      ff.style.animationDuration = (8 + Math.random() * 8) + 's';
      ff.style.width = (2 + Math.random() * 4) + 'px';
      ff.style.height = ff.style.width;
      ff.style.boxShadow = '0 0 ' + (10 + Math.random() * 20) + 'px #B8A9FFaa';
      container.appendChild(ff);
    }
  }

  createShootingStars();

  function createShootingStars() {
    const sky = document.getElementById('nightSky');
    if (!sky) return;
    setInterval(function() {
      const star = document.createElement('div');
      star.className = 'shooting-star';
      star.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background: #F8F9FF;
        border-radius: 50%;
        box-shadow: 0 0 6px #F8F9FFaa;
        z-index: 3;
        left: ${20 + Math.random() * 60}%;
        top: ${5 + Math.random() * 30}%;
        animation: shoot 2s ease-out forwards;
        opacity: 0;
      `;
      sky.appendChild(star);
      setTimeout(function() { star.remove(); }, 2500);
    }, 15000);
    setTimeout(function() {
      const star = document.createElement('div');
      star.className = 'shooting-star';
      star.style.cssText = `
        position: absolute;
        width: 2px;
        height: 2px;
        background: #F8F9FF;
        border-radius: 50%;
        box-shadow: 0 0 6px #F8F9FFaa;
        z-index: 3;
        left: 30%;
        top: 15%;
        animation: shoot 2s ease-out forwards;
        opacity: 0;
      `;
      sky.appendChild(star);
      setTimeout(function() { star.remove(); }, 2500);
    }, 5000);
  }

  const style = document.createElement('style');
  style.textContent = `
    @keyframes shoot {
      0% { transform: translate(0, 0) scale(1); opacity: 1; }
      100% { transform: translate(-300px, 200px) scale(0); opacity: 0; }
    }
  `;
  document.head.appendChild(style);

  document.addEventListener('click', function(e) {
    for (let i = 0; i < 6; i++) {
      const sparkle = document.createElement('div');
      sparkle.style.cssText = `
        position: fixed; pointer-events: none; z-index: 9999;
        width: 4px; height: 4px; background: #F8F9FF;
        border-radius: 50%; box-shadow: 0 0 8px #B8A9FF;
        left: ${e.clientX + (Math.random()-0.5)*30}px;
        top: ${e.clientY + (Math.random()-0.5)*30}px;
        opacity: 1; transition: all 0.8s ease;
      `;
      document.body.appendChild(sparkle);
      setTimeout(function() {
        sparkle.style.opacity = '0';
        sparkle.style.transform = 'translate(' + ((Math.random()-0.5)*60) + 'px, ' + ((Math.random()-0.5)*60) + 'px) scale(0)';
      }, 10);
      setTimeout(function() { sparkle.remove(); }, 800);
    }
  });
});