const keys = document.querySelectorAll('.key');
const operators = document.querySelectorAll('.operators');
const output = document.querySelector('.output');
const input = document.querySelector('.input');

let result = "";
let current_entry = "";

for (let key of keys) {
	const value = key.dataset.key;

    key.addEventListener('click', () => {

        current_entry += value;

        input.innerHTML = result;
        output.innerHTML = current_entry;
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
            var suma = resultINT + current_entryINT;

            result = suma;
        }

        if(value == "C")
        {
            result = "";
        }

        if(value == "CE")
        {
            current_entry = "";
        }

        current_entry = "";

        input.innerHTML = result;
        output.innerHTML = current_entryINT;
    })
}