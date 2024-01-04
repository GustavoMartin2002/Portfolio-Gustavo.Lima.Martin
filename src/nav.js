let sections = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a','div a button');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < ofsset + height){
            navLink.forEach(links=>{
                links.classList.remove('active')
                document.querySelectorAll('header nav a[href*=' + id + ']', 'div a button[href*=' + id + ']').classList.add('active');
            });
        };
    });
};