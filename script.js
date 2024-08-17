
const faqs = document.querySelectorAll(".faq-info")
const img = document.querySelectorAll(".plus-icon")

faqs.forEach(faq => {
    faq.addEventListener("click", ()=>{
        faq.classList.toggle("active")
    })
})

img.forEach(img =>{
    img.addEventListener("click",()=>{
    //    img.src= '/assets/images/icon-minus.svg'
        img.classList.toggle("active")
    })
})