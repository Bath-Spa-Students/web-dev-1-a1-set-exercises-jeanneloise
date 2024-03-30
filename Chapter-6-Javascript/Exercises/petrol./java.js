let price, liter;

function calculatePetrolCost(){
    price=document.getElementById("price").value ;
    liter= document.getElementById("liter"). value;
    if (price && liter){
        const cost=parseFloat(price)* parseFloat(liter);
        document.getElementById("cost").innerText=cost.toFixed(2);
    }

}

window.onload=function(){
    initializeGame();
}