
const texbox=document.getElementById("num");
const radio1=document.getElementById("faran");
const radio2=document.getElementById("celsius");
const result=document.getElementById("result");
let temp;

function convert(){
    if(radio1.checked){
        temp=Number(texbox.value);
        temp=temp * 9 / 5 + 32;
        result.textContent=temp.toFixed(1)+" °F";
    }
    else if(radio2.checked){
        temp=Number(texbox.value);
        temp=(temp-32) * (5/9);
        result.textContent=temp.toFixed(1)+" °C";
    }
    else{
        result.textContent="Select a value";
    }
}
