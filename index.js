let btn = document.getElementById("toggleBtn");
let moreText = document.querySelector(".more");
let dots = document.querySelector(".dots");
let count = document.getElementById("count");
let text = document.querySelector(".text").innerText;

count.innerText = text.length;

btn.onclick = function(){
    if(moreText.style.display === "inline"){
        moreText.style.display = "none";
        dots.style.display = "inline";
        btn.innerText = "Read More";
    } else {
        moreText.style.display = "inline";
        dots.style.display = "none";
        btn.innerText = "Read Less";
    }
}