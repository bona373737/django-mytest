const consolBusButton = document.querySelectorAll(".consolbus-btn-wrap>button")
const consolBusContent = document.querySelectorAll(".consolbus-info")

/**
 * @description 콘솔버스메뉴페이지_
 * - 클릭된 버튼기준으로 includes탬플릿 display
 * - 클릭된 버튼 active스타일 적용
 */
consolBusButton.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
        const clickedBtnName = e.target.dataset;
        consolBusContent.forEach((item)=>{
            if(item.dataset.tab === clickedBtnName){
                item.style="display:block";

            }else{
                item.style="display:none";
            }
        })
    });
})
