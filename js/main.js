
function cal(){

    let number = document.getElementById("target").value;
    
    let result = document.getElementById("output");
    
    result.innerHTML = parseInt(number) * 0.025 + " جنية مصري " ;
    
    console.log(number * 0.25 + " جنية مصري ");
    
}