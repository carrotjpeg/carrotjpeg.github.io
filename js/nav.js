/* ============================================================
   SHARED TOP NAV
   ------------------------------------------------------------
   Edit the items array once — every page picks it up.
   Each page sets <body data-page="about|coursework|projects|
   research|resume"> to highlight the active link.
   ============================================================ */

(function () {
  const items = [
    { key: 'about',      label: 'about me',  href: 'index.html'     },
    { key: 'coursework', label: 'coursework', href: 'coursework.html' },
    { key: 'projects',   label: 'projects',   href: 'projects.html'   },
    { key: 'research',   label: 'research',   href: 'research.html'   },
    { key: 'resume',     label: 'resume',     href: 'resume.html'     },
  ];

  // If we're served from a subfolder (e.g. /projects/foo.html) prepend ../ so
  // links resolve back to the site root.
  const inSub = /\/projects\/[^/]+$/.test(location.pathname);
  const prefix = inSub ? '../' : '';

  const active = document.body.getAttribute('data-page') || '';

  const links = items.map(it => {
    const cls = `nav-link nav-${it.key}${it.key === active ? ' is-active' : ''}`;
    return `<a class="${cls}" href="${prefix}${it.href}">${it.label}</a>`;
  }).join('');

  const brand = `
    <a class="nav-brand" href="${prefix}index.html" aria-label="Home">
      <img src="${prefix}images/lightbulb.png" alt="Home" />
    </a>
  `;

  const html = `
    <header class="site-nav">
      <div class="nav-inner">
        ${brand}
        <nav class="nav-links" aria-label="Primary">
          ${links}
        </nav>
      </div>
    </header>
  `;

  const mount = document.getElementById('site-nav-mount');
  if (mount) {
    mount.outerHTML = html;
  } else {
    document.body.insertAdjacentHTML('afterbegin', html);
  }
})();
