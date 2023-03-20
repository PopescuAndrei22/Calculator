const keys = document.querySelectorAll('.key');
const operators = document.querySelectorAll('.operators');
const output = document.querySelector('.output');
const input = document.querySelector('.input');

let result = "";
let current_entry = "";

let currentOperator = "";
let lastOperatorType = -1;

for (let key of keys) {
	const value = key.dataset.key;

    key.addEventListener('click', () => {

        current_entry += value;

        var expression = result + currentOperator;

        input.value = expression;

        if(current_entry == "")
          output.value = result;
        else
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
        
        var operatorType = -1;

        if(value == "+")
        {
            operatorType = 0;
        }

        if(value == "-")
        {
            operatorType = 1;
        }

        if(value == "*")
        {
            operatorType = 2;
        }

        if(value == "/")
        {
            operatorType = 3;
        }

        currentOperator = value;

        var operationType = operatorType;
        if(current_entry != "" && lastOperatorType!="")
            operationType = lastOperatorType;

        api.operations(resultINT, current_entryINT,parseInt(operationType)).then((operations) => {
          /*
          result = operations;

          current_entry = "";

          input.value = result;
          output.value = current_entry;
          */

          if(current_entry != "")
              {
                  result = operations;
                  current_entry = "";
              }

          var expression = result + currentOperator;

          input.value = expression;

          if(current_entry == "")
              output.value = result;
          else
              output.value = current_entry;

        }).catch((err) => {
          console.log(err);
        });

        lastOperatorType = operatorType;

    })
}