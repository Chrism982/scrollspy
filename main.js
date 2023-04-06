const section = document.querySelectorAll('section');
const link = document.querySelectorAll('.nav-link');

window.onscroll = function(){
    section.forEach((sec) => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
    
        if (top >= offset && top < offset + height) {
            link.forEach(lin => {
                lin.classList.remove('active')
                document.querySelector('.nav-link[href*='+id+']').classList.add('active')
            })
        }
    });
}
