(function() {
  const bgAudio = document.getElementById('bgAudio');
  const floatingMusic = document.getElementById('floatingMusic');
  const sections = document.querySelectorAll('.celebration-section');
  const cakeMessage = document.getElementById('cakeMessage');
  const cakeCelebration = document.getElementById('cakeCelebration');
  const wishBtn = document.getElementById('wishBtn');
  const wishInput = document.getElementById('wishInput');
  const wishResult = document.getElementById('wishResult');
  const shootingStarAnim = document.getElementById('shootingStarAnim');
  const restartBtn = document.getElementById('restartBtn');
  let currentSection = 0;
  let isTransitioning = false;

  if (floatingMusic) {
    floatingMusic.classList.add('visible');
  }

  const audioState = sessionStorage.getItem('birthdayAudioState');
  const audioTime = sessionStorage.getItem('birthdayAudioTime');

  if (bgAudio) {
    bgAudio.volume = 0.3;
    if (audioState === 'playing' && audioTime) {
      bgAudio.currentTime = parseFloat(audioTime);
      bgAudio.play().catch(function() {});
    } else if (audioState === 'playing') {
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
  }

  function showSection(index) {
    if (isTransitioning || index < 0 || index >= sections.length) return;
    isTransitioning = true;
    sections.forEach(function(s, i) {
      s.classList.remove('active');
      s.style.display = 'none';
    });
    currentSection = index;
    const section = sections[currentSection];
    section.style.display = 'flex';
    setTimeout(function() {
      section.classList.add('active');
      if (typeof AOS !== 'undefined') {
        AOS.refresh();
      }
    }, 50);
    setTimeout(function() {
      isTransitioning = false;
    }, 400);
  }

  function nextSection() {
    if (currentSection < sections.length - 1) {
      showSection(currentSection + 1);
    }
  }

  function goToSection(index) {
    showSection(index);
  }

  function restartWebsite() {
    if (bgAudio) {
      bgAudio.pause();
      bgAudio.currentTime = 0;
      sessionStorage.removeItem('birthdayAudioState');
      sessionStorage.removeItem('birthdayAudioTime');
    }
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
  }

  const candles = document.querySelectorAll('.candle');
  let extinguishedCount = 0;
  const totalCandles = candles.length;

  candles.forEach(function(candle) {
    candle.addEventListener('click', function() {
      if (this.classList.contains('extinguished')) return;
      this.classList.add('extinguished');
      extinguishedCount++;
      if (extinguishedCount === totalCandles) {
        triggerCakeCelebration();
      }
    });
  });

  function triggerCakeCelebration() {
    cakeMessage.style.display = 'none';
    cakeCelebration.style.display = 'block';
    launchConfetti(150);
    setTimeout(function() {
      launchConfetti(100);
    }, 500);
    setTimeout(function() {
      launchConfetti(120);
    }, 1000);
    setTimeout(function() {
      document.getElementById('cakeNextBtn').style.display = 'inline-flex';
    }, 1500);
  }

  function launchConfetti(count) {
    if (typeof confetti !== 'undefined') {
      confetti({
        particleCount: count || 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
    for (let i = 0; i < 20; i++) {
      const heart = document.createElement('div');
      heart.textContent = ['❤️', '💖', '💗', '💕', '💫', '✨', '🌟'][Math.floor(Math.random() * 7)];
      heart.style.cssText = `
        position: fixed;
        font-size: ${1 + Math.random() * 2}rem;
        pointer-events: none;
        z-index: 999;
        left: ${20 + Math.random() * 60}%;
        top: ${20 + Math.random() * 60}%;
        animation: heartFloat ${2 + Math.random() * 3}s ease-out forwards;
        opacity: 0;
      `;
      document.body.appendChild(heart);
      setTimeout(function() {
        heart.style.opacity = '1';
      }, 10);
      setTimeout(function() {
        heart.remove();
      }, 5000);
    }
  }

  if (wishBtn) {
    wishBtn.addEventListener('click', function() {
      const wishText = wishInput ? wishInput.value.trim() : '';
      if (!wishText) {
        alert('Please write your wish first! ✨');
        return;
      }
      this.disabled = true;
      this.textContent = '✨ Sending your wish...';
      wishResult.style.display = 'block';
      shootingStarAnim.style.display = 'block';
      setTimeout(function() {
        shootingStarAnim.style.display = 'none';
        wishBtn.textContent = '💫 Wish Sent!';
        wishBtn.style.background = 'rgba(255, 215, 0, 0.15)';
        wishBtn.style.borderColor = 'rgba(255, 215, 0, 0.2)';
        launchConfetti(80);
        setTimeout(function() {
          document.getElementById('wishNextBtn').style.display = 'inline-flex';
        }, 1000);
      }, 2000);
    });
  }

  if (restartBtn) {
    restartBtn.addEventListener('click', restartWebsite);
  }

  document.querySelectorAll('.section-btn[data-next]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const target = this.dataset.next;
      if (target) {
        const targetSection = document.getElementById(target);
        if (targetSection) {
          const index = Array.from(sections).indexOf(targetSection);
          if (index !== -1) {
            goToSection(index);
          }
        }
      }
    });
  });

  document.querySelectorAll('.section-btn[data-goto]').forEach(function(btn) {
    btn.addEventListener('click', function() {
      const target = this.dataset.goto;
      if (target) {
        const targetSection = document.getElementById(target);
        if (targetSection) {
          const index = Array.from(sections).indexOf(targetSection);
          if (index !== -1) {
            goToSection(index);
          }
        }
      }
    });
  });

  const style = document.createElement('style');
  style.textContent = `
    @keyframes heartFloat {
      0% { transform: translateY(0) scale(0.5); opacity: 0; }
      20% { opacity: 1; }
      100% { transform: translateY(-200px) scale(1.2); opacity: 0; }
    }
  `;
  document.head.appendChild(style);

  if (typeof AOS !== 'undefined') {
    setTimeout(function() { AOS.refresh(); }, 200);
  }

  showSection(0);

  window.addEventListener('beforeunload', function() {
    if (bgAudio) {
      sessionStorage.setItem('birthdayAudioTime', bgAudio.currentTime.toString());
      sessionStorage.setItem('birthdayAudioState', bgAudio.paused ? 'paused' : 'playing');
    }
  });

  window.nextSection = nextSection;
  window.goToSection = goToSection;
  window.restartWebsite = restartWebsite;
})();