(() => {
  const formatTagline = () => {
    const subtitle = document.querySelector('#sidebar .site-subtitle');

    if (!subtitle || !/\\n|\r?\n/.test(subtitle.textContent)) {
      return;
    }

    const lines = subtitle.textContent.split(/\\n|\r?\n/);

    subtitle.replaceChildren();
    lines.forEach((line, index) => {
      if (index > 0) {
        subtitle.append(document.createElement('br'));
      }

      subtitle.append(document.createTextNode(line));
    });
  };

  const addExternalLinkFavicons = () => {
    const content = document.querySelector('main .content');

    if (!content) {
      return;
    }

    const createFallbackIcon = () => {
      const namespace = 'http://www.w3.org/2000/svg';
      const icon = document.createElementNS(namespace, 'svg');
      const firstLink = document.createElementNS(namespace, 'path');
      const secondLink = document.createElementNS(namespace, 'path');

      icon.classList.add('external-link-favicon', 'external-link-favicon-fallback');
      icon.setAttribute('viewBox', '0 0 24 24');
      icon.setAttribute('aria-hidden', 'true');
      icon.setAttribute('focusable', 'false');

      firstLink.setAttribute('d', 'M10.6 13.4a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1.7 1.7');
      secondLink.setAttribute('d', 'M13.4 10.6a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1.7-1.7');
      icon.append(firstLink, secondLink);

      return icon;
    };

    content.querySelectorAll('a[href]').forEach((link) => {
      if (link.querySelector('img, svg') || link.classList.contains('no-favicon')) {
        return;
      }

      let url;

      try {
        url = new URL(link.href, window.location.href);
      } catch {
        return;
      }

      if (!['http:', 'https:'].includes(url.protocol) || url.hostname === window.location.hostname) {
        return;
      }

      const favicon = document.createElement('img');
      const faviconUrl = new URL('https://www.google.com/s2/favicons');

      faviconUrl.searchParams.set('domain_url', url.origin);
      faviconUrl.searchParams.set('sz', '128');

      favicon.className = 'external-link-favicon';
      favicon.src = faviconUrl.toString();
      favicon.alt = '';
      favicon.width = 20;
      favicon.height = 20;
      favicon.decoding = 'async';
      favicon.referrerPolicy = 'no-referrer';
      favicon.setAttribute('aria-hidden', 'true');

      favicon.addEventListener('error', () => {
        favicon.replaceWith(createFallbackIcon());
      }, { once: true });

      link.prepend(favicon);
      link.classList.add('external-link-with-favicon');
    });
  };

  formatTagline();
  addExternalLinkFavicons();
})();
