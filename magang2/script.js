const burgerIcon = document.querySelector('.burger-icon');
const menuList = document.querySelector('.menu-list');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('header, .mayaloka, .keuntungan, .paket, .contact');

burgerIcon.addEventListener('click', () => {
    menuList.classList.toggle('active');
    burgerIcon.classList.toggle('active');
});
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuList.classList.remove('active');
        burgerIcon.classList.remove('active');
    });
});

window.addEventListener('scroll', () => {
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${section.id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});