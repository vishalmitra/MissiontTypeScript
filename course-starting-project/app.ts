//console.log('Time to get started...');

function add(num1 :number, num2:number) {
    return +num1  +  +num2;
}

/* we can also use variable like this
const number1 : number;
number1 = 12;
* if number1 = " start " hence it gives error
*/

const number1 = 34;
const number2 = 4.34;
const result = add(number1, number2)

console.log(result);

