const examples = 'https://github.com/severinbunse/Javascript-2026-examples';
const code = examples + '/tree/main/';

const siteNav = `
<nav id="index" class="site-nav">
  <a class="site-title" href="index.html">JavaScript, Fall 2026</a>
  <button class="nav-toggle" type="button" aria-expanded="false">Index +</button>

  <div class="site-intro">
    <p>This is the class site for JavaScript, Fall 2026. Below you'll find every project prompt and the <a href="${examples}">code examples</a> we went through in class.</p>
  </div>

  <ul class="projects">
    <li class="project" data-status="done">
      <details open>
        <summary><a class="project-title" href="Project1_09.10.26.html">Project 1: Hello World</a></summary>
        <ul class="activities">
          <li class="activity"><a href="Homework_09.03.26.html">Homework: Hello World pt. 1</a></li>
          <li class="activity"><time datetime="2026-09-03">9/3</time><a href="${code}2026-09-03-background-toggle-on-click">Background Toggle on Click</a></li>
        </ul>
      </details>
    </li>

    <li class="project" data-status="done">
      <details open>
        <summary><a class="project-title" href="Project2_10.01.26.html">Project 2: Generative Pattern</a></summary>
        <ul class="activities">
          <li class="activity"><time datetime="2026-09-10">9/10</time><a href="${code}2026-09-10-conditionals-loops-and-functions">Conditionals, Loops &amp; Functions</a></li>
          <li class="activity"><time datetime="2026-09-17">9/17</time><a href="${code}2026-09-17-functions-and-timing/parameters-delay-and-functions">Parameters, Delay &amp; Functions</a></li>
          <li class="activity same-date"><a href="${code}2026-09-17-functions-and-timing/box-pattern-with-delay">Box Pattern with Delay</a></li>
          <li class="activity same-date"><a href="${code}2026-09-17-functions-and-timing/images-from-an-array">Images from an Array</a></li>
          <li class="activity"><time datetime="2026-09-24">9/24</time><a href="${code}2026-09-24-random-conditionals-and-filters/random-boxes-with-conditionals">Random Boxes with Conditionals</a></li>
          <li class="activity same-date"><a href="${code}2026-09-24-random-conditionals-and-filters/aging-image-filter">Aging Image Filter</a></li>
        </ul>
      </details>
    </li>

    <li class="project" data-status="current">
      <details open>
        <summary><a class="project-title" href="Project3_10.22.26.html">Project 3: Garden</a></summary>
        <ul class="activities">
          <li class="activity"><time datetime="2026-10-01">10/1</time><a href="${code}2026-10-01-event-listeners/enzo-mari-homepage">Enzo Mari Homepage</a></li>
          <li class="activity same-date"><a href="${code}2026-10-01-event-listeners/random-boxes-on-click">Random Boxes on Click</a></li>
          <li class="activity same-date"><a href="${code}2026-10-01-event-listeners/event-types-overview">Event Types Overview</a></li>
          <li class="activity same-date"><a href="${code}2026-10-01-event-listeners/lightswitch-event-listener">Lightswitch Event Listener</a></li>
        </ul>
      </details>
    </li>
  </ul>

  <ul class="nav-links">
    <li><a href="syllabus.pdf">Syllabus</a></li>
    <li><a href="mailto:bunses@newschool.edu">Contact</a></li>
  </ul>
</nav>
`;

document.body.insertAdjacentHTML('afterbegin', siteNav);

const nav = document.getElementById('index');
const currentPage = location.pathname.split('/').pop() || 'index.html';

if (currentPage === 'index.html') {
    location.replace(nav.querySelector('[data-status="current"] .project-title').getAttribute('href'));
}

nav.querySelectorAll('a').forEach(function(link) {
    const href = link.getAttribute('href');
    if (href.startsWith('http') || href.endsWith('.pdf')) {
        link.target = '_blank';
    }
    if (href === currentPage) {
        link.setAttribute('aria-current', 'page');
    }
});

const navToggle = nav.querySelector('.nav-toggle');
navToggle.addEventListener('click', function() {
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
    navToggle.textContent = open ? 'Index –' : 'Index +';
});
