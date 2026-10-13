function addDot(event) {
    const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;

    const dot = document.createElement('div');
    dot.className = 'dot';
    dot.style.backgroundColor = randomColor;
    dot.style.left = `${event.pageX - 12.5}px`; // pageX/pageY include the scroll, so dots stay put when the page scrolls. The dots are 25px, so -12.5px centers them on the cursor.
    dot.style.top = `${event.pageY - 12.5}px`;

    document.body.append(dot);
}

document.addEventListener('click', addDot);
