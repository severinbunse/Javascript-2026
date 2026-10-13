function addStar(event) {
    const mouseX = event.pageX;
    const mouseY = event.pageY;

    const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    const randomRotation = Math.random() * 360;

    const star = document.createElement('div');
    star.textContent = '★';
    star.style.fontSize = '25px';
    star.style.lineHeight = '1';
    star.style.color = randomColor;
    star.style.position = 'absolute';
    star.style.left = `${mouseX}px`; // pageX and pageY include the scroll, so the stars stay in place when the page scrolls. clientX and clientY would put them in the wrong spot.
    star.style.top = `${mouseY}px`;
    star.style.transform = `translate(-50%, -50%) rotate(${randomRotation}deg)`; // translate moves the star back by half its size so it's centered on the cursor, rotate spins it.
    star.style.pointerEvents = 'none'; // lets clicks go through the star to the links underneath.
    star.style.userSelect = 'none'; // stops the star from being selected (the blue box) when you click fast.
    star.style.webkitUserSelect = 'none'; // the same for Safari.

    document.body.append(star);

}

document.addEventListener('click', addStar);
