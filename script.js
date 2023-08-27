let stranger = document.querySelector("#card h3");
let btn = document.querySelector("#card button");
let cheak = 0;

btn.addEventListener("click" , function(){
    if (cheak == 0){
        stranger.innerHTML = "friends";
        stranger.style.color = "green";
        btn.innerHTML = "Remove friend";
        cheak = 1;
        
    }else{
        stranger.innerHTML = "Stranger";
        stranger.style.color = "Red";
        btn.innerHTML = "Add Friend";
        cheak = 0;
    }
})