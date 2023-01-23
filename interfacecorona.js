let input=document.querySelector("input")
let button=document.querySelector("button")
let ul1=document.getElementById("enregistre")
let ul2=document.getElementById("vaccine")
let i=0
function addfirstlist(){
    if (input.value===''){
        alert("it's empty");
        return;
    }
    i++  
    let li=document.createElement("li")
    li.setAttribute("id",i)
    let span=document.createElement("span")
    span.value=input.value;  
    span.setAttribute("id",i) 
    li.setAttribute("style","display:flex;flex-direction:row;")
    ul1.appendChild(li);
    let vaccine=document.createElement('button');
    vaccine.innerText='X';
    vaccine.setAttribute('id',i-1);
    li.innerHTML=span.value
    li.appendChild(vaccine)
    vaccine.addEventListener("click",addsecondlist(event))
    li.setAttribute("style","display:flex;flex-direction:row;")
    input.value ="";
    }



function addsecondlist(event){
    let li=document.createElement("li")
    let s=document.getElementById(event.target.id)
    console.log(s)

    li.setAttribute("style","display:flex;flex-direction:row;")
    
    let supprim=document.createElement('button');
    supprim.innerText='Delete';
    supprim.setAttribute('id',"-"+event.target.id);
    ul2.appendChild(li);
    li.appendChild(supprim)
    supprim.style.color="red"
    //let l=document.getElementById(event.target.id)
    //ul1.removeChild(l)

}
button.addEventListener("click",addfirstlist)