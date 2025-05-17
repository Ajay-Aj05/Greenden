var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav=document.getElementById("closenav")
menuicon.addEventListener("click",function()
{
    sidenav.style.right=0
})
closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})
var search = document.getElementById("search")
var container = document.getElementById("product")
var h1list = container.querySelectorAll("h1")
search.addEventListener("keyup",function(){
    var entered = event.target.value.toUpperCase()
    for(count=0;count<h1list.length;count=count+1)
    {
        if(h1list[count].textContent.toUpperCase().indexOf(entered)<0)
        {
            h1list[count].parentElement.style.display="none"
        }
        else{
            h1list[count].parentElement.style.display="block"
        }
    }
})