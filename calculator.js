

// getting elements from the DOM
let formulaScreen = document.getElementById('formulascreen');
let outputScreen = document.getElementById('outputscreen');

// declare a variable to store values after button click.
let values = '';


function calculate(button){
    // getting button value
    let btnValue = button.value;
    
    // checking button value and take action accordingly
    if (btnValue === '='){
        if(values.length > 0){
            outputScreen.innerText = math.evaluate(values);
            formulaScreen.innerText = values;
            values= outputScreen.innerText;
        }
    }else if(btnValue === 'AC'){
         outputscreen.innerText = '';
         formulaScreen.innerText= '';
         values= '';
    }
    else if(btnValue === 'DEL'){
            values = values.slice(0,-1);
            outputScreen.innerText = values;
    }
    else{
        values += btnValue;
        console.log('values: ',values);
        outputScreen.innerText = values;
    }
    
}
