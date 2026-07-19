(function() {
  const loadingScreen = document.getElementById('loadingScreen');
  const birthdayModal = document.getElementById('birthdayModal');
  const musicModal = document.getElementById('musicModal');
  const birthdayContinue = document.getElementById('birthdayContinue');
  const musicYes = document.getElementById('musicYes');
  const musicNo = document.getElementById('musicNo');
  const beginJourney = document.getElementById('beginJourney');
  const bgAudio = document.getElementById('bgAudio');
  const floatingMusic = document.getElementById('floatingMusic');
  const homeScreen = document.getElementById('homeScreen');

  let musicAllowed = false;

  const audioState = sessionStorage.getItem('birthdayAudioState');
  const audioTime = sessionStorage.getItem('birthdayAudioTime');

  setTimeout(function() {
    loadingScreen.classList.add('hide');
    setTimeout(function() {
      loadingScreen.style.display = 'none';
      if (audioState === 'playing') {
        birthdayModal.classList.add('show');
      } else {
        birthdayModal.classList.add('show');
      }
    }, 400);
  }, 1500);

  birthdayContinue.addEventListener('click', function() {
    birthdayModal.classList.remove('show');
    setTimeout(function() {
      if (audioState === 'playing' && audioTime) {
        if (bgAudio) {
          bgAudio.currentTime = parseFloat(audioTime);
          bgAudio.play().catch(function() {});
          floatingMusic.classList.add('visible');
          homeScreen.classList.add('visible');
        }
        musicAllowed = true;
        if (typeof window.goToHomePage === 'function') {
          window.goToHomePage();
        }
      } else {
        musicModal.classList.add('show');
      }
    }, 300);
  });

  musicYes.addEventListener('click', function() {
    musicAllowed = true;
    closeMusicModal(true);
  });

  musicNo.addEventListener('click', function() {
    musicAllowed = false;
    closeMusicModal(false);
  });

  function closeMusicModal(playMusic) {
    musicModal.classList.remove('show');
    if (playMusic && musicAllowed) {
      if (bgAudio) {
        bgAudio.play().catch(function() {});
        sessionStorage.setItem('birthdayAudioState', 'playing');
      }
      floatingMusic.classList.add('visible');
    } else {
      floatingMusic.classList.add('visible');
      if (bgAudio) {
        sessionStorage.setItem('birthdayAudioState', 'paused');
      }
    }
    setTimeout(function() {
      homeScreen.classList.add('visible');
      if (typeof window.goToHomePage === 'function') {
        window.goToHomePage();
      }
    }, 200);
  }

  beginJourney.addEventListener('click', function() {
    if (bgAudio && !bgAudio.paused) {
      sessionStorage.setItem('birthdayAudioState', 'playing');
      sessionStorage.setItem('birthdayAudioTime', bgAudio.currentTime.toString());
    }
    if (typeof window.goToHomePage === 'function') {
      window.goToHomePage();
    }
  });

  if (bgAudio) {
    bgAudio.volume = 0.3;
    if (audioState === 'playing' && audioTime) {
      bgAudio.currentTime = parseFloat(audioTime);
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
  }

  const homeImageWrapper = document.querySelector('.home-image-wrapper');
  if (homeImageWrapper) {
    homeImageWrapper.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.02)';
    });
    homeImageWrapper.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  }

  document.querySelectorAll('.modal-btn, .btn-start').forEach(function(btn) {
    btn.addEventListener('mouseenter', function() {
      this.style.transform = 'scale(1.02)';
    });
    btn.addEventListener('mouseleave', function() {
      this.style.transform = 'scale(1)';
    });
  });

  window.addEventListener('beforeunload', function() {
    if (bgAudio) {
      sessionStorage.setItem('birthdayAudioTime', bgAudio.currentTime.toString());
      sessionStorage.setItem('birthdayAudioState', bgAudio.paused ? 'paused' : 'playing');
    }
  });
})();