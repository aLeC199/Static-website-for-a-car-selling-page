let index = 1;
  const itemClicked= document.querySelectorAll(".item-purchase-butt");



  

  itemClicked.forEach(button => {
    button.addEventListener('click', ()=>{
      const myitemClicked = button.getAttribute("data-index");
      console.log(myitemClicked);
      let cartNum = index++;
  document.getElementById("items-in-cart").innerHTML = cartNum;
    })
  });



function luxury() {
  window.location.href = "#Luxury";
  document.getElementById("myPremium").classList.remove("current-page-indi");
  document.getElementById("myLuxury").classList.add("current-page-indi");
  document.getElementById("myRugged").classList.remove("current-page-indi");
}

function premium() {
  window.location.href = "#Premium";
  document.getElementById("myPremium").classList.add("current-page-indi");
  document.getElementById("myLuxury").classList.remove("current-page-indi");
  document.getElementById("myRugged").classList.remove("current-page-indi");
}
function rugged() {
  window.location.href = "#Rugged";
  document.getElementById("myPremium").classList.remove("current-page-indi");
  document.getElementById("myLuxury").classList.remove("current-page-indi");
  document.getElementById("myRugged").classList.add("current-page-indi");
}

document.querySelectorAll(".item-purchase-butt").forEach((button) => {
  button.addEventListener("click", () => {
    const cart = button.getAttribute("data-index");
  });
});
