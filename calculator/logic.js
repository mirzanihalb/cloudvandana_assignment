
function handlebuttons(val){
    const inp = document.getElementById("inp")
    
    if(val==="ac"){
        inp.value =""
    }
    else{  
        inp.value += val
    }
  
}

function handle(){
    const inp = document.getElementById("inp")
    let temp = String(inp.value)

    
    inp.value = eval(temp)

    
}