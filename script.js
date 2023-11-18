
let productImg = document.getElementById("productImg");
let btn = document.getElementsByClassName("btn");

btn[0].onclick = function(){
    productImg.src = "images/shirt1.png";

    //for btn color change 
    for(bt of btn){
        bt.classList.remove("active");//Remove color when click the btn
    }
    this.classList.add("active");//Add color when click on it
}
btn[1].onclick = function(){
    productImg.src = "images/shirt2.png";

    //for btn color change 
    for(bt of btn){
        bt.classList.remove("active");//Remove color when click the btn
    }
    this.classList.add("active");//Add color when click on it
}
btn[2].onclick = function(){
    productImg.src = "images/shirt3.png";

    //for btn color change 
    for(bt of btn){
        bt.classList.remove("active");//Remove color when click the btn
    }
    this.classList.add("active");//Add color when click on it
}

