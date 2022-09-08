let button = document.getElementById("button");

function Click(){
    alert("Alert!");
    alert("Kliknąłeś X razy!");
}
let clicks = 0;

function klik(){
    clicks += 1;
    button.innerHTML = clicks;
};

button.onclick = Click;