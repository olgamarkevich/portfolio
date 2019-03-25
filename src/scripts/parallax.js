const parallax = document.querySelector('.parallax')
const layers = parallax.children;

function moveLayersDependsOnScroll(wScroll) {
    Array.from(layers).forEach(layer => {
        const divider = layer.dataset.speed;
        const strafe = wScroll * divider / 10;
        layer.style.transform = 'translateY(-' + strafe + '%)';
    });
}

window.addEventListener('scroll', e => {
    const wScroll = window.pageYOffset;
    moveLayersDependsOnScroll(wScroll)
});

const parallax2 = document.querySelector('.parallax-bottom')
const layers2 = parallax2.children;

function moveLayersDependsOnScroll2(wScroll2) {
    Array.from(layers2).forEach(layer2 => {
        const divider2 = layer2.dataset.speed;
        const strafe2 = wScroll2 * divider2 / 10;
        layer2.style.transform = 'translateY(-' + strafe2 + '%)';
    });
}

window.addEventListener('scroll', e => {
    const wScroll2 = -parallax2.getBoundingClientRect().top;
    moveLayersDependsOnScroll2(wScroll2)
});
