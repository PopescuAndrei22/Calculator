const keys = document.querySelectorAll('.key');
const operators = document.querySelectorAll('.operators');
const output = document.querySelector('.output');
const input = document.querySelector('.input');

let result = "";
let current_entry = "";
let last_operator = "";

for (let key of keys) {
	const value = key.dataset.key;

    key.addEventListener('click', () => {

        current_entry += value;

        input.value = result;
        output.value = current_entry;
    })
}

for (let operator of operators) {
	const value = operator.dataset.key;

    operator.addEventListener('click', () => {

        var resultINT = parseInt(result);
        var current_entryINT = parseInt(current_entry);

        if(Number.isNaN(resultINT))
            resultINT = 0;
        if(Number.isNaN(current_entryINT))
            current_entryINT = 0;
        
        if(value == "+")
        {
            api.sum(resultINT, current_entryINT).then((sum) => {
                result = sum;

                current_entry = "";

                input.value = result;
                output.value = current_entry;
              }).catch((err) => {
                console.log(err);
              });
            
           //var sum = resultINT + current_entryINT;
        }
    })
}