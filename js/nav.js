// Site index (left), shared by every page.
// To add a page: give the item an href.
// Each project has data-status="done", "current" or "upcoming".
// Only list projects once they've been introduced in class; update the status as the semester goes on.
// Code examples from class go in the nested list under their project, by date.
// Only the first example of each class shows the date; the others get class="same-date" and no <time>.
// They live in github.com/severinbunse/Javascript-2026-examples; each title links to that example's code there.
// Each project's list starts open; the "–" after its title closes it.

const siteNav = `
<nav id="index" class="site-nav">

  <a class="site-title" href="index.html">JavaScript, Fall 2026</a>
  <button class="nav-toggle" type="button" aria-expanded="false">Index +</button>

  <div class="site-intro">
    <p>This is the class site for JavaScript, Fall 2026. Below you'll find every project prompt and the <a href="https://github.com/severinbunse/Javascript-2026-examples" target="_blank" rel="noopener">code examples</a> we went through in class.</p>
  </div>

  <ul class="projects">

    <li class="project" data-status="done">
      <details open>
        <summary><a class="project-title" href="Project1_09.10.26.html">Project 1: Hello World</a></summary>
        <ul class="activities">
          <li class="activity"><a href="Homework_09.03.26.html">Homework: Hello World pt. 1</a></li>
          <li class="activity"><time datetime="2026-09-03">9/3</time><a href="https://github.com/severinbunse/Javascript-2026-examples/tree/main/2026-09-03-background-toggle-on-click" target="_blank" rel="noopener">Background Toggle on Click</a></li>
        </ul>
      </details>
    </li>

    <li class="project" data-status="done">
      <details open>
        <summary><a class="project-title" href="Project2_10.01.26.html">Project 2: Generative Pattern</a></summary>
        <ul class="activities">
          <li class="activity"><time datetime="2026-09-10">9/10</time><a href="https://github.com/severinbunse/Javascript-2026-examples/tree/main/2026-09-10-conditionals-loops-and-functions" target="_blank" rel="noopener">Conditionals, Loops &amp; Functions</a></li>
          <li class="activity"><time datetime="2026-09-17">9/17</time><a href="https://github.com/severinbunse/Javascript-2026-examples/tree/main/2026-09-17-functions-and-timing/parameters-delay-and-functions" target="_blank" rel="noopener">Parameters, Delay &amp; Functions</a></li>
          <li class="activity same-date"><a href="https://github.com/severinbunse/Javascript-2026-examples/tree/main/2026-09-17-functions-and-timing/box-pattern-with-delay" target="_blank" rel="noopener">Box Pattern with Delay</a></li>
          <li class="activity same-date"><a href="https://github.com/severinbunse/Javascript-2026-examples/tree/main/2026-09-17-functions-and-timing/images-from-an-array" target="_blank" rel="noopener">Images from an Array</a></li>
          <li class="activity"><time datetime="2026-09-24">9/24</time><a href="https://github.com/severinbunse/Javascript-2026-examples/tree/main/2026-09-24-random-conditionals-and-filters/random-boxes-with-conditionals" target="_blank" rel="noopener">Random Boxes with Conditionals</a></li>
          <li class="activity same-date"><a href="https://github.com/severinbunse/Javascript-2026-examples/tree/main/2026-09-24-random-conditionals-and-filters/aging-image-filter" target="_blank" rel="noopener">Aging Image Filter</a></li>
        </ul>
      </details>
    </li>

    <li class="project" data-status="current">
      <details open>
        <summary><a class="project-title" href="Project3_10.22.26.html">Project 3: Garden</a></summary>
        <ul class="activities">
          <li class="activity"><time datetime="2026-10-01">10/1</time><a href="https://github.com/severinbunse/Javascript-2026-examples/tree/main/2026-10-01-event-listeners/enzo-mari-homepage" target="_blank" rel="noopener">Enzo Mari Homepage</a></li>
          <li class="activity same-date"><a href="https://github.com/severinbunse/Javascript-2026-examples/tree/main/2026-10-01-event-listeners/random-boxes-on-click" target="_blank" rel="noopener">Random Boxes on Click</a></li>
          <li class="activity same-date"><a href="https://github.com/severinbunse/Javascript-2026-examples/tree/main/2026-10-01-event-listeners/event-types-overview" target="_blank" rel="noopener">Event Types Overview</a></li>
          <li class="activity same-date"><a href="https://github.com/severinbunse/Javascript-2026-examples/tree/main/2026-10-01-event-listeners/lightswitch-event-listener" target="_blank" rel="noopener">Lightswitch Event Listener</a></li>
        </ul>
      </details>
    </li>

  </ul>

  <ul class="nav-links">
    <li><a href="syllabus.pdf" target="_blank" rel="noopener">Syllabus</a></li>
    <li><a href="mailto:bunses@newschool.edu">Contact</a></li>
  </ul>

</nav>
`;

document.body.insertAdjacentHTML('afterbegin', siteNav);

const currentPage = location.pathname.split('/').pop() || 'index.html';

// The home page opens the current project
if (currentPage === 'index.html') {
  const currentProject = document.querySelector('#index [data-status="current"] a.project-title');
  if (currentProject) {
    location.replace(currentProject.getAttribute('href'));
  }
}

// On phones the index is a menu: the button next to the title opens and closes it
const navToggle = document.querySelector('#index .nav-toggle');
navToggle.addEventListener('click', function () {
  const open = document.getElementById('index').classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
  navToggle.textContent = open ? 'Index –' : 'Index +';
});

// Highlight the page you are on
document.querySelectorAll('.site-nav a').forEach(function (link) {
  if (link.getAttribute('href') === currentPage) {
    link.setAttribute('aria-current', 'page');
  }
});
