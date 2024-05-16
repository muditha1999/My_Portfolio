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


//************************************Contact ************************************

function sendMail(){
    let parms={
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    };

    emailjs.send("service_wgb8jx1","template_t7zcabf",parms)
           .then((res)=>{
                console.log(res)
                document.getElementById("name").value="";
                document.getElementById("email").value="";
                document.getElementById("subject").value="";
                document.getElementById("message").value="";
                alert("Email Sent!!")
           })
           .catch((err)=>console.log(err));

}