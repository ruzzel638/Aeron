
const avoidButton = document.getElementById('avoid-button');

avoidButton.addEventListener('mouseover', moveButton);
avoidButton.addEventListener('click', moveButton);

function moveButton() {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const randomX = Math.floor(Math.random() * (viewportWidth - avoidButton.offsetWidth));
    const randomY = Math.floor(Math.random() * (viewportHeight - avoidButton.offsetHeight));

    avoidButton.style.position = 'absolute';
    avoidButton.style.left = randomX + 'px';
    avoidButton.style.top = randomY + 'px';
}