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
                callAlert("Thanks For Your Responce !!");
                document.getElementById("name").value="";
                document.getElementById("email").value="";
                document.getElementById("subject").value="";
                document.getElementById("message").value="";
                
           })
           .catch((err)=>console.log(err));

}

window.alert=function(message,timeout=null){
    const alert = document.createElement('div');
    const alertButton = document.createElement('button');
    alertButton.innerText="OK";
    alert.appendChild(alertButton);
    alert.classList.add('alert');
    alert.setAttribute('style',`position:fixed;
    top:10%;
    left:40%;
    padding:20px ;
    border-radius:10px ;
    box-shadow:0 10px 5px 0 #00000022;
    display:flex;
    flex-direction:column;
    border:1px solid #333
    transform:translateX(-50);`
        
    )
    alertButton.setAttribute('style',
    `border:1px solid #333;
    background:orange;
    border-radius:5px;
    padding:5px;`)
    alert.innerHTML=`<span style="padding:10px;">${message}</span>`;
    alert.appendChild(alertButton);
    alertButton.addEventListener('click',(e)=>{
        alert.remove();
    });
    if(timeout!=null){
        setTimeout(()=>{
            alert.remove();
        },Number(timeout))
    }
    document.body.appendChild(alert);

}
function callAlert(msg){
    alert(msg)
}