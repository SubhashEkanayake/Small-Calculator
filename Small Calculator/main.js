let inputElObj = document.getElementById('inputEl');

let numberOne;
let numberTwo;

inputElObj.addEventListener('keyup',(event)=>{
    if(event.key == 'Enter' || event.keyCode == 13){
        let tempVal = inputElObj.value;
        if(!isNaN(tempVal)){
            if(numberOne == undefined){
                numberOne = parseInt(tempVal);
                document.getElementById('num1').textContent = numberOne;
                inputElObj.value = 0;
            }else if(numberTwo==undefined){
                numberTwo = parseInt(tempVal);
                document.getElementById('num2').textContent = numberTwo;
                inputElObj.value = 0;


            }else{
                alert('Numbers are already inserted!');
                numberOne = undefined;
                numberTwo = undefined;
                document.getElementById('num1').textContent = '?';
                document.getElementById('num2').textContent = '?';
                inputElObj.value = 0;

            }
        }
    }
})

const execute = (op)=>{
    if(!numberOne && !numberTwo){
        alert('Please insert numbers!');
        return;
    }

    switch(op){
        case '+' : operate((numberOne + numberTwo),'+');break;
        case '-' : operate((numberOne - numberTwo),'-');break;
        case '*' : operate((numberOne * numberTwo),'*');break;
        case '/' : operate((numberOne / numberTwo),'/');break;
        case '%' : operate((numberOne % numberTwo),'%');break;
    }
}

const operate=(result,op)=>{
    document.getElementById('ans').textContent = result;
    document.getElementById('op').textContent = op;
}

document.getElementById('btn-clear').addEventListener('click',()=>{
    document.getElementById('num1').textContent = '?';
    document.getElementById('num2').textContent = '?';
    document.getElementById('op').textContent = '__';
    document.getElementById('ans').textContent = '?';
})