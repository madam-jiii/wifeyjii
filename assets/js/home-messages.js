(function() {
  const diaryEntries = [
    { title: "Where It All Started 🌟", date: "16 October 2024", diary: `I remember that day so clearly. It was just another evening, I was playing Free Fire with some random people, not expecting anything. And then I saw her in the lobby. Madam Jii. I don't even know why I called her that the first time, but it stuck. 🎮

We started talking in the game chat, then moved to Instagram. She was from Assam, I was from Bangalore. Two different worlds. But something about the way she spoke, so respectful and kind, made me want to know more. I asked for her number, and she gave it. That night I couldn't stop thinking about her. 💭

It wasn't love at first sight. It was more like a slow pull, like being drawn to a place you've never been but somehow feels familiar. We talked for hours, about nothing and everything. She told me about her day, I told her about mine. And somewhere between those messages, I started to realize this was special. ✨` },
    { title: "Getting To Know You 💕", date: "—", diary: `The first few weeks were all about discovery. I learned that she gets angry over small things, but she cools down just as fast. She has this way of holding herself, so much respect in her voice even when she's upset. I found myself enjoying every conversation, even the arguments. 😊

I remember confessing to her after a few days. I didn't plan it, it just came out. She said she wanted to remain friends. I respected that, but I couldn't stop thinking about her. So I kept trying, kept showing up, kept being there. Not because I expected anything, but because being around her felt right. 🌸

We played Free Fire together every night, and those games became my favorite part of the day. She laughed at my terrible aim, and I laughed at her jokes. It was simple, but it was everything. 💫` },
    { title: "Waiting For Your Messages 📱", date: "—", diary: `I started waking up earlier just to see if she had sent a message. Every notification made my heart skip. I'd check my phone a hundred times a day, hoping to see her name. 💌

She became part of my routine. Good morning, good night, how was your day? Those small questions felt huge. I'd replay our conversations in my head, remembering the way she typed, the emojis she used, the little things she shared. 🌙

There was something about her that made me want to be a better person. Not because she asked, but because she deserved it. I started noticing the small details, like how she always said 'thank you' and 'please', how she never made me feel small. That kind of respect is rare. 🌟` },
    { title: "10 December 2024 ❤️", date: "10 December 2024", diary: `She finally said yes. I still remember the exact moment, the way my heart raced when I read that message. It felt like everything had led to this one moment. 💖

We had been talking for months, and I had been patient. I never pushed, never forced. I just stayed consistent, stayed honest. And on that night, she told me she wanted to give it a try. 🌹

That was the start of something beautiful. I called her that night, and we talked for hours. I could hear the smile in her voice. It was one of the happiest moments of my life. I knew this was going to be different, that she was different. ✨` },
    { title: "3:30 PM 📞", date: "—", diary: `The first audio call. I still remember the time – 3:30 PM. I was nervous, but as soon as I heard her voice, everything felt right. She sounded just like I imagined, warm and kind. 🎵

We talked about everything, our day, our dreams, the things we wanted to do. I didn't want the call to end. Her voice became my favorite sound. 💕

I realized then that I was falling deeper than I expected. It wasn't just attraction anymore. It was connection. She understood me without me having to explain. And I wanted to know everything about her. 🌸` },
    { title: "The First Time I Saw You 👀", date: "—", diary: `The first video call. I can still picture it. She was the prettiest girl I had ever seen. Her smile, her eyes, the way she looked at me. I remember feeling so lucky, so grateful that she was willing to share this moment with me. 💫

I couldn't stop smiling. She had this way of making everything feel okay. We talked for hours, and I didn't want to hang up. I knew then that I had found someone truly special. ✨

That call changed everything. Seeing her made it all real. The distance didn't matter anymore. All that mattered was her. 🌟` },
    { title: "The Girl In The Red Dress 👗", date: "—", diary: `Another video call, and she was wearing a red dress. I'll never forget that image. She looked stunning, but it was more than that. She looked confident, beautiful, and completely herself. ❤️

I remember telling her how beautiful she looked, and she smiled. That smile, that moment, it's burned into my memory. I think I fell a little more that day. 💕

It wasn't just about her looks. It was the way she carried herself, the way she laughed, the way she made me feel like I was the only one in the world. That red dress, that smile, that girl. I was completely hers. 🌹` },
    { title: "Convincing Madam Jii 🤝", date: "—", diary: `There was a time she got really angry. I had posted an Instagram story with my sister, and she thought something else. She stopped talking to me, and I felt my heart sink. 😔

I tried to explain, but she wouldn't listen. So I asked my sister to talk to her. That's when she finally believed me. It took a lot of patience and understanding, but we worked through it. 💪

I learned that trust isn't automatic. It's built, slowly, through actions and honesty. And I was willing to do whatever it took to earn her trust. 🌟` },
    { title: "When Distance Became Hard 🌍", date: "—", diary: `As the months passed, something started to shift. It wasn't that we stopped caring — it was that we started seeing the future more clearly. And the future wasn't simple. 💭

I think we both knew, deep down, that a long-distance relationship came with challenges. But it wasn't just the distance itself. It was the thought of what came after. Her family, her parents — they meant everything to her. She loved them deeply, and I always respected that about her. 🌸

She never said it directly, but I could feel it. The weight of knowing that her parents would probably never accept a relationship where two people lived so far apart. She didn't want to disappoint them. She didn't want to hurt them. And I understood that, even though it made my heart ache. 😔

We never had a big argument about it. It just sat there, quietly, between us. In the way she sometimes paused during calls. In the way she talked about home. In the way she said my name sometimes — like she was holding something back. 💫

I wanted to find a way. I wanted to tell her that we could figure it out. But sometimes loving someone also means understanding the weight they're carrying. And she was carrying a lot. 🌟` },
    { title: "Thank You 🙏", date: "30 March 2026", diary: `On 30 March 2026, she told me she couldn't continue this further. She asked me to forget her. It wasn't dramatic or angry — it was quiet, like she had already made peace with it. 💔

She still loved me. I could feel it. But there was something she wasn't saying. Maybe it was her family, maybe it was the distance, maybe it was just the weight of everything we never talked about. She never blamed anyone, and neither do I. 🌸

After she said those words, I tried. I wanted to convince her, to find a way to keep us going. But she had made her decision. And I had to accept that. 😔

It hurt. It still does. But I know she didn't stop loving me. She just couldn't see a way forward. And sometimes that's enough of a reason. 💭

I don't feel angry. I don't feel bitter. What I feel is gratitude. For the laughter, for the calls, for the games we played together, for the mornings and nights we shared. She was the first person who made me feel truly seen. ✨

I'll always be thankful that one Free Fire match introduced me to you. 🎮

Thank you for being part of my life. 💖

<button class="surprise-btn" id="surpriseBtn"><i class="fas fa-star"></i> A little surprise for you ✨</button>` }
  ];

  let currentIndex = 0;
  let totalPages = diaryEntries.length;
  let isTransitioning = false;

  const container = document.getElementById('memoryContainer');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  const homeBtn = document.getElementById('homeBtn');
  const indicator = document.getElementById('pageIndicator');
  const navBar = document.getElementById('navBar');
  const surpriseModal = document.getElementById('surpriseModal');
  const bgAudio = document.getElementById('bgAudio');

  function buildPages() {
    container.innerHTML = '';
    diaryEntries.forEach(function(entry, idx) {
      const page = document.createElement('div');
      page.className = 'memory-page';
      page.dataset.index = idx;

      const paras = entry.diary.split(/\n\s*\n/).filter(function(p) { return p.trim().length > 0; });
      const diaryHtml = paras.map(function(p) { return '<p>' + p.trim() + '</p>'; }).join('');
      const readingTime = Math.max(1, Math.round(entry.diary.split(/\s+/).length / 180));

      page.innerHTML = `
        <div class="memory-card" data-aos="fade-up" data-aos-duration="500">
          <div class="reading-meta">
            <span><i class="fas fa-moon"></i>Chapter ${idx+1} of ${totalPages}</span>
            <span><i class="fas fa-clock"></i>${readingTime} min read</span>
          </div>
          <div class="memory-title" data-aos="fade-right" data-aos-delay="100">${entry.title}</div>
          <div class="memory-date" data-aos="fade-right" data-aos-delay="150"><i class="far fa-calendar-alt"></i> ${entry.date}</div>
          <div class="memory-diary" data-aos="fade-up" data-aos-delay="200">${diaryHtml}</div>
        </div>
      `;
      container.appendChild(page);
    });
  }
  buildPages();

  function getPages() { return document.querySelectorAll('.memory-page'); }

  function getMoonPhase(index) {
    const phases = ['🌑', '🌒', '🌓', '🌔', '🌕', '🌔', '🌓', '🌒', '🌑', '🌘'];
    return phases[index % phases.length] || '🌙';
  }

  function updateVisibility() {
    if (isTransitioning) return;
    const pages = getPages();
    pages.forEach(function(p, i) {
      if (i === currentIndex) {
        p.classList.add('active');
        p.style.display = 'flex';
        p.style.opacity = '1';
        if (i === totalPages - 1) {
          const btn = p.querySelector('#surpriseBtn');
          if (btn) {
            btn.removeEventListener('click', handleSurprise);
            btn.addEventListener('click', handleSurprise);
          }
        }
        setTimeout(function() {
          if (typeof AOS !== 'undefined') {
            AOS.refresh();
          }
        }, 100);
      } else {
        p.classList.remove('active');
        p.style.display = 'none';
        p.style.opacity = '0';
      }
    });
    const isLast = currentIndex === totalPages - 1;
    const isFirst = currentIndex === 0;
    prevBtn.disabled = isFirst;
    nextBtn.disabled = isLast;
    const phase = getMoonPhase(currentIndex);
    indicator.innerHTML = '<span class="moon-phase">' + phase + '</span> ' + (currentIndex+1) + ' / ' + totalPages;
    if (typeof AOS !== 'undefined') {
      setTimeout(function() { AOS.refresh(); }, 150);
    }
  }

  function handleSurprise(e) {
    e.stopPropagation();
    surpriseModal.classList.add('show');
  }

  function goToPage(index) {
    if (isTransitioning || index < 0 || index >= totalPages) return;
    isTransitioning = true;
    const pages = getPages();
    pages.forEach(function(p) {
      p.classList.remove('active');
      p.style.display = 'none';
      p.style.opacity = '0';
    });
    currentIndex = index;
    const newPage = pages[currentIndex];
    if (newPage) {
      newPage.classList.add('active');
      newPage.style.display = 'flex';
      newPage.style.opacity = '1';
      if (index === totalPages - 1) {
        const btn = newPage.querySelector('#surpriseBtn');
        if (btn) {
          btn.removeEventListener('click', handleSurprise);
          btn.addEventListener('click', handleSurprise);
        }
      }
      setTimeout(function() {
        if (typeof AOS !== 'undefined') {
          AOS.refresh();
        }
      }, 100);
    }
    const isLast = currentIndex === totalPages - 1;
    const isFirst = currentIndex === 0;
    prevBtn.disabled = isFirst;
    nextBtn.disabled = isLast;
    const phase = getMoonPhase(currentIndex);
    indicator.innerHTML = '<span class="moon-phase">' + phase + '</span> ' + (currentIndex+1) + ' / ' + totalPages;
    setTimeout(function() {
      isTransitioning = false;
      if (typeof AOS !== 'undefined') AOS.refresh();
    }, 200);
  }

  function goHome() {
    if (bgAudio && !bgAudio.paused) {
      sessionStorage.setItem('birthdayAudioState', 'playing');
      sessionStorage.setItem('birthdayAudioTime', bgAudio.currentTime.toString());
    }
    if (typeof window.goHome === 'function') {
      window.goHome();
    }
  }

  function goToBirthday() {
    if (bgAudio && !bgAudio.paused) {
      sessionStorage.setItem('birthdayAudioState', 'playing');
      sessionStorage.setItem('birthdayAudioTime', bgAudio.currentTime.toString());
    }
    if (typeof window.goToBirthdayPage === 'function') {
      window.goToBirthdayPage();
    }
  }

  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') { e.preventDefault(); if (currentIndex > 0) goToPage(currentIndex-1); }
    else if (e.key === 'ArrowRight') { e.preventDefault(); if (currentIndex < totalPages-1) goToPage(currentIndex+1); }
    else if (e.key === 'Home') { e.preventDefault(); goHome(); }
  });

  let touchStartX = 0, touchStartY = 0;
  document.addEventListener('touchstart', function(e) {
    touchStartX = e.changedTouches[0].screenX;
    touchStartY = e.changedTouches[0].screenY;
  }, { passive: true });

  document.addEventListener('touchend', function(e) {
    if (isTransitioning) return;
    const diffX = touchStartX - e.changedTouches[0].screenX;
    const diffY = touchStartY - e.changedTouches[0].screenY;
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
      if (diffX > 0 && currentIndex < totalPages-1) goToPage(currentIndex+1);
      else if (diffX < 0 && currentIndex > 0) goToPage(currentIndex-1);
    }
  }, { passive: true });

  prevBtn.addEventListener('click', function() {
    if (currentIndex > 0) goToPage(currentIndex - 1);
  });

  nextBtn.addEventListener('click', function() {
    if (currentIndex < totalPages - 1) {
      if (currentIndex === totalPages - 2) {
        goToPage(currentIndex + 1);
        setTimeout(function() {
          const btn = document.getElementById('surpriseBtn');
          if (btn) {
            btn.removeEventListener('click', handleSurprise);
            btn.addEventListener('click', function(e) {
              e.stopPropagation();
              surpriseModal.classList.add('show');
            });
          }
        }, 300);
      } else {
        goToPage(currentIndex + 1);
      }
    }
  });

  homeBtn.addEventListener('click', goHome);

  // Surprise modal click handler - close and go to birthday
  surpriseModal.addEventListener('click', function(e) {
    if (e.target === surpriseModal) {
      surpriseModal.classList.remove('show');
      if (currentIndex === totalPages - 1) {
        setTimeout(function() {
          goToBirthday();
        }, 300);
      }
    }
  });

  // Handle "Continue to Birthday" button click
  const surpriseContinueBtn = document.getElementById('surpriseContinueBtn');
  if (surpriseContinueBtn) {
    surpriseContinueBtn.addEventListener('click', function(e) {
      e.preventDefault();
      surpriseModal.classList.remove('show');
      setTimeout(function() {
        goToBirthday();
      }, 300);
    });
  }

  document.querySelectorAll('.memory-page').forEach(function(p) {
    p.classList.remove('active');
    p.style.display = 'none';
    p.style.opacity = '0';
  });

  if (navBar) {
    navBar.classList.add('visible');
  }

  const floatingMusic = document.getElementById('floatingMusic');
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

  currentIndex = 0;
  updateVisibility();

  if (typeof AOS !== 'undefined') {
    setTimeout(function() { AOS.refresh(); }, 500);
  }

  window.addEventListener('beforeunload', function() {
    if (bgAudio) {
      sessionStorage.setItem('birthdayAudioTime', bgAudio.currentTime.toString());
      sessionStorage.setItem('birthdayAudioState', bgAudio.paused ? 'paused' : 'playing');
    }
  });

  window.goHome = goHome;
  window.goToBirthday = goToBirthday;
})();