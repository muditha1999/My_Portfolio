// function activeMenu(){
//     const li=document.querySelectorAll(".links");
//     const sec=document.querySelectorAll("section");
//     let len = sec.length;
//     let activeIndex = 0;
//     while (activeIndex < len && window.scrollY + 97 >= sec[activeIndex].offsetTop) {
//         activeIndex++;
//     }
//     li.forEach(ltx => ltx.classList.remove("active"));
//     if (activeIndex > 0) {
//         li[activeIndex - 1].classList.add("active");
//     }
// }
// activeMenu();
// window.addEventListener("scroll",activeMenu);

function activeMenu() {
    const divElements = document.querySelectorAll(".links");
    const sec = document.querySelectorAll("section");
    const scrollY = window.scrollY + 97;

    for (let i = sec.length - 1; i >= 0; i--) {
        if (scrollY > sec[i].offsetTop) {
            divElements.forEach(div => div.classList.remove("active"));
            divElements[i].classList.add("active");
            break;
        }
    }
}

activeMenu();
window.addEventListener("scroll", activeMenu);