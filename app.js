const buttons=document.querySelector(".buttons")
const remove=document.querySelector(".remove")
const cards=document.querySelector(".cards")
const taxd=0.18;
const shippingPrice=19.0;
let sayı=[]
cards.addEventListener("click",(e)=>{
    if(e.target.classList.contains("artı")){
        e.target.previousElementSibling.innerText ++;
        calculate(e.target.parentElement.parentElement)

        

    } else if (e.target.classList.contains("eksi") && e.target.nextElementSibling.innerText>1) {
        e.target.nextElementSibling.innerText --
          calculate(e.target.parentElement.parentElement)
    }else if(e.target.classList.contains("remove")){
        if(confirm("Silinsin mi?")){
             e.target.parentElement.parentElement.parentElement.remove()
               calculateSub()
        }
       
    }

})
const calculate=(e)=>{
    let sayi=e.querySelector(".sayi").innerText 
    let price=e.querySelector("span").innerText
    let sonuc=e.querySelector(".Product")
    sonuc.innerText=(sayi*price).toFixed(2)
    calculateSub(e)
}
const calculateSub=()=>{
    let subTotal=0
    let sonuc = document.querySelectorAll(".Product")
    sonuc.forEach((a)=>{
        subTotal += parseFloat(a.innerText)
    })
    let tax=taxd*subTotal
    let shipping=subTotal ? shippingPrice : 0
    let total=tax+ shipping + subTotal;



    document.querySelector(".foot1").innerText=subTotal.toFixed(2)
    document.querySelector(".foot2").innerText=tax.toFixed(2)
    document.querySelector(".foot3").innerText=shipping.toFixed(2)
    document.querySelector(".foot4").innerText=total.toFixed(2)

}