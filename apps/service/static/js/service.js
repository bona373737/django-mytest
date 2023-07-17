const tabButton = document.querySelectorAll(".tab-btn-wrap>button")
const tabContent = document.querySelectorAll(".tab-content")

//서비스메뉴_tab content : 클릭된 탭기준으로 includes탬플릿 display
tabButton.forEach((btn)=>{
    const clickedTab = btn.dataset.tab;
    btn.addEventListener("click", ()=>{
        tabContent.forEach((item)=>{
            if(item.dataset.tab === clickedTab){
                item.style="display:block";
            }else{
                item.style="display:none";
            }
        })
    });
})