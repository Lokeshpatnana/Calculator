let calc = document.getElementById("inputext")
let calculate=(num)=>{
calc.value+=num
}

let Result=()=>{
    try{
    calc.value=eval(calc.value)
}
catch(err){
    alert("Enter Numbers only")
}
}
function clr(){
    calc.value="";
}

function del(){
    calc.value=calc.value.slice(0,-1);
}