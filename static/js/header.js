window.addEventListener("DOMContentLoaded", (event) => {
    isActiveNavigation();    
});

// const navbar = document.querySelectorAll(".navbar-menu-item")
// navbar.forEach((item)=>{
//     item.addEventListener("mouseover", openSubmenu);
//     item.addEventListener("mouseout",(e)=>{
//         let subMenu = e.target.nextElementSibling;
//         if(subMenu){
//             subMenu.classList.remove("navbar-menu-hover");
//         }
//     });
// })

// /**
//  * @description navaber 메뉴클릭시 submenu속성 display:block
//  */
// function openSubmenu(e){
//     let subMenu = e.target.nextElementSibling;
//     if(subMenu){
//         subMenu.classList.add("navbar-menu-hover");
//     }
// }

/**
 * @description 현재 location.pathname기준으로 navbar 메뉴에 active클래스 적용
 */
function isActiveNavigation(){
    let nowLocation = window.location.pathname.split("/")[1]
    const menuItem = document.querySelectorAll(".navbar-menu-item");

    menuItem.forEach((item)=>{
        const navbaMenuUrl = item.firstElementChild.getAttribute("href").split("/")[1];
        if(navbaMenuUrl === nowLocation){
            item.firstElementChild.classList.add("navbar-menu-active");
        }
    })
}
