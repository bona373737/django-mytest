window.addEventListener("DOMContentLoaded", (event) => {
    isActiveNavigation();
    
});

/**
 * @description 현재 location.pathname기준으로 navbar 메뉴에 active클래스 적용
 */
function isActiveNavigation(){
    let nowLocation = window.location.pathname.split("/")[1]
    const menuItem = document.querySelectorAll(".navbar-menu-item");

    menuItem.forEach((item)=>{
        const navbaMenuUrl = item.getAttribute("href").split("/")[1];
        if(navbaMenuUrl === nowLocation){
            item.classList.add("navbar-menu-active");
        }
    })
}