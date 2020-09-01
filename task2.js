//_______________TASK #2_____________//

let input_value;
do{input_value = prompt("Enter number in range 100 - 200:");
    if(input_value<100 || input_value>200){
        alert('number not in range');
    }
    else{
        alert("Number is fine and is stored in `input_value` variable. Have a nice day!");
    }
    }
while(input_value<100 || input_value>200)