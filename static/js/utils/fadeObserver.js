
window.addEventListener("DOMContentLoaded", (event) => {
    fadeInUpObserver();
});


/**
 * @description intersectionObserver활용 스크롤위치감지 fadeInUp animation구현
 */
function fadeInUpObserver(){
    function fadeIn(entries, observer){
        entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add("animate__animated");
            entry.target.classList.add("animate__fadeInUp");
        } 
    });
    }

    function fadeDown(entries, observer){
        entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
            entry.target.classList.add("animate__animated");
            entry.target.classList.add("animate__fadeInDown");
        } 
    });
    }

    let options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
    }

    let observer = new IntersectionObserver(fadeIn, options);
    let fadeDownObsever = new IntersectionObserver(fadeDown, options);

    const fadeInElements = document.querySelectorAll(".fadein")
    const fadeDownElements = document.querySelectorAll(".fadedown")

    fadeInElements.forEach((el)=>{
    el.style.setProperty('--animate-duration', '2s');
    observer.observe(el)
    })
    fadeDownElements.forEach((el)=>{
    el.style.setProperty('--animate-duration', '2s');
    fadeDownObsever.observe(el)
    })

}