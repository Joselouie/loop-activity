function sum (){
const num = document.getElementById('number').value;
const display = document.getElementById('display');
 

 let answer ="";
 let sum = 0;
for (let a = 1; a <= num; a++) {
    answer += a + "<br/>";
    sum += a;
}                      
answer += "The sum is" +sum;
display.innerHTML = answer;
}

function factorial() {
    const num = document.getElementById('number').value;
    const display = document.getElementById('display');

    let factorial = 1;
    let answer = "";
  
    for (let a = num; a > 0; a--) {
      factorial *= a;
      answer += a + (a === 1 ? "" : " x ");  
    }
  
    answer += "<br/>The factorial is " + factorial;
    display.innerHTML = answer;
  }
    function odd() {
      display.innerHTML = answer;
    }

    function odd(){
      const num = document.getElementById('number').value;
      const display = document.getElementById('display').value;

      let answer = "odd number <br/>";

      for (let i = 1; i <= num; i++) {
        if (i  % 2 !==0){
          answer += i + "<br/>";
        }
      }
      display.innerHTML = answer;
    }

    function even(){
      const num = document.getElementById('number').value;
      const display = document.getElementById('display').value;

      let answer = "Even number <br/>";

      for (let i = 1; i <= num; i++) {
        if (i  % 2 !==0){
          answer += i + "<br/>";
        }
      }
    }










