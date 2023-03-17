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

        var expression = result + last_operator;

        input.value = expression;
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
            var sum = resultINT + current_entryINT;

            result = sum;
        }

        if(value == "*")
        {
            var multiplication = resultINT * current_entryINT;

            result = multiplication;
        }

        if(value == "/")
        {
            var dividing = resultINT / current_entryINT;

            result = dividing;
        }

        if(value == "-")
        {
            var substract = resultINT - current_entryINT;

            result = substract;
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
        
        last_operator = value;

        var expression = result + last_operator;

        input.value = expression;
        output.value = current_entry;
    })
}