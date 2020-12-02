document.querySelector('.j-btn-test').addEventListener('click', () => {
    alert(`Ширина экрана равна ${window.screen.width}, высота экрана равна ${window.screen.height}.`)
});

// Параметр size нигде не используется, поэтому лучше его не объявлять