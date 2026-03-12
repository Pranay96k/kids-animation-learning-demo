function loadComponent(id, file)
{
fetch(file)
.then(response => response.text())
.then(data => {
document.getElementById(id).innerHTML = data;
});
}
function toggleMenu(){

    let menu = document.getElementById("navLinks");
    
    if(menu.style.display === "flex"){
    menu.style.display = "none";
    }else{
    menu.style.display = "flex";
    }
    
    }
loadComponent("navbar","components/navbar.html");
loadComponent("footer","components/footer.html");