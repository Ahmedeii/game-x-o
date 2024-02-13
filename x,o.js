let turn="x";
function show(id) {
  let element = document.getElementById(id)
  if(turn==="x"&& element.innerHTML==''){
    element.innerHTML="x"
    turn="o"
    kelma.innerHTML='o'
  }
    if (turn === "o" && element.innerHTML == '') {
      element.innerHTML = "o"
       turn='x'
      kelma.innerHTML="x"
    }
  compare()
  }
  square=[]
  
  function compare(){
    for(let i=1;i<10;i++){
   square[i]=document.getElementById('item'+i).innerHTML
    }
    function win(num1,num2,num3){
       kelma.innerHTML = `${square[num1]} winner`
    
       document.getElementById("item" + num1).style.background = "#000";
       document.getElementById("item" + num2).style.backgroundColor = "black";
       document.getElementById("item" + num3).style.backgroundColor = "black";
    
       setTimeout(function() { kelma.innerHTML = "new play" }, 1000)
        
       setInterval(function() { kelma.innerHTML += "." }, 1000)
       setTimeout(function() { location.reload() }, 2000)
     
    }
    if (square[1]==square[2]&&square[2]==square[3]&&square[1]!='') {
    win(1,2,3)
    }
    else if (square[4] == square[5] && square[5] == square[6]&&square[5]!='') {
    
    win(4,5,6)
    }
   else if (square[7] == square[8] && square[8] == square[9] &&square[9]!='') {
    
    win(7,8,9)
    }
   else if (square[1] == square[5] && square[5] == square[9] &&square[5]!='') {
    win(1,5,9)
    
    }
   else if (square[3] == square[5] && square[5] == square[6] &&square[5]!='') {
    win(3,5,6)
    
    }
    else if (square[1] == square[4] && square[4] == square[7] && square[7] != '') {
    
    win(1,4,7)
    }
    else if (square[3] == square[6] && square[6] == square[9] && square[6] != '') {
    
    win(3,6,9)
    }
   else if (square[2] == square[5] && square[5] == square[8] && square[8] != '') {
   
      win(2, 5, 8)
    
  }
  }
   