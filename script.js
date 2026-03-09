$(function () {
  const storedTheme = localStorage.getItem('codex-theme');
  if (storedTheme === 'light') $('body').addClass('light');

  $('#themeToggle').on('click', function () {
    $('body').toggleClass('light');
    localStorage.setItem('codex-theme', $('body').hasClass('light') ? 'light' : 'dark');
  });

  function revealOnScroll() {
    $('.reveal').each(function () {
      const top = this.getBoundingClientRect().top;
      if (top < window.innerHeight - 60) {
        $(this).addClass('show');
      }
    });
  }

  revealOnScroll();
  $(window).on('scroll', revealOnScroll);

  const lines = [
    '> Prompt: Build a secure AI onboarding workflow',
    '> Codex: Generating architecture draft...',
    '> Codex: Adding threat-model checklist...',
    '> Codex: Proposing test cases + policy gates...',
    '> Status: ✅ Ready for human review.'
  ];

  $('#runSim').on('click', function () {
    const $t = $('#terminal');
    $t.text('');
    let i = 0;
    const timer = setInterval(() => {
      if (i >= lines.length) {
        clearInterval(timer);
      } else {
        $t.append(lines[i] + '\n');
        i += 1;
      }
    }, 650);
  });
});
