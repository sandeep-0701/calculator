const userInput = document.getElementById("userInput");
let exp = '';

press = (num) => {
    exp += num;
    userInput.value = exp;
}

equal = () => {
    userInput.value = eval(exp);
    exp ='';
}

erase = () =>{
    userInput.value ='';
    exp='';
}
