// #1  What will the console display and why?

    for (let i = 0; i < 10; i++) {
      setTimeout(function() {
        console.log(i);
      })
    }

// #1
// На консоли будет выведено число 10 десять раз, так как все колбэки setTimeout ссылаются на одну и ту же переменную i,
//     и они выполняются после того, как цикл завершается, когда i уже равно 10.
// the console will display the number 10 ten times, since all setTimeout callbacks refer to the same variable i,
//     and they are executed after the loop ends when i is already equal to 10.



// #2
// Write a JavaScript program to display the current day and time in the following format.
// Sample Output :
// Today is: Friday.
// Current time is: 4PM:50:22

      function getCurrentDayAndTime() {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const now = new Date();

        const day = days[now.getDay()];
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const period = hours >= 12 ? 'PM' : 'AM';

        const formattedTime = `${hours % 12}${period}:${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        return `Today is: ${day}.\nCurrent time is: ${formattedTime}`;
      }
      console.log(getCurrentDayAndTime());



// #3
// Write a JavaScript function that reverse a number.
// Example x = 32243;
// Expected Output : 34223

    function reverseNumber(number) {
        const reversedString = number.toString().split('').reverse().join('');
        const reversedNumber = parseInt(reversedString);
        return reversedNumber;
    }
    console.log('x = 32243 reversedNumber = ' + reverseNumber(32243));



// #4
// Write a JavaScript program to calculate the factorial of a number. In mathematics,
//     the factorial of a non-negative integer n, denoted by n!,
//     is the product of all positive integers less than or equal to n.
// For example, 5! = 5 x 4 x 3 x 2 x 1 = 120


    function factorial(n) {
        if(n < 0){
            return 'Factorial is not defined for negative numbers.';
        }else if (n === 1 || n === 0){
            return 1;
        } else {
            let result = 1
            for (let i = 2; i <= n; i++){
                result = result * i;
            }
            return result;
        }
    }
    console.log('factorialOfNum 5! = ' + factorial(5));


// #5
//  Write a JavaScript program that accepts two integers in prompt() and alert the larger one.

    const firstNumber = parseInt(prompt('Введите первое целое число:'));
    const secondNumber = parseInt(prompt('Введите второе целое число:'));

    if (firstNumber > secondNumber) {
      alert(`Большее число: ${firstNumber}`);
    } else if (secondNumber > firstNumber) {
      alert(`Большее число: ${secondNumber}`);
    } else {
      alert('Числа равны');
    }


// #6
// Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array: myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// "Red+Green+White+Black"

    const myColor = ['Red', 'Green', 'White', 'Black'];

    const result1 = myColor.join(',');
    const result2 = myColor.join('+');

    console.log(`With commas: '${result1}'`);
    console.log(`With plus signs: '${result2}'`);


//
// #7
// Write a JavaScript function to get the month name from a particular date.
// Test Data :
// console.log(month_name(new Date("10/11/2009")));
// console.log(month_name(new Date("11/13/2014")));
// Output :
// "October"
// "November"

    function monthName(date) {
      const d = new Date(date);
      const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
      const monthNumber = d.getMonth();
      const currentMonth = monthNames[monthNumber];
      return currentMonth;
    }
    console.log(monthName(new Date('10/11/2009')));
    console.log(monthName(new Date('11/13/2014')));



// #8
// Write a JavaScript program to test the first character of a string is uppercase or not

    function isUppercase(str) {
      const firstChar = str.charAt(0);
      return firstChar === firstChar.toUpperCase();
    }
    console.log(isUppercase('Hello'));
    console.log(isUppercase('world'));


// #9
// Write a JavaScript program to draw a smile
// console.log(“: )”)

    console.log(': )');
    console.log('\u{1F604}');
