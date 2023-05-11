abs = Math.abs(682.571);
ceil = Math.ceil((682.571) * 10) / 10;

const numbers = []; // создаём массив
for (let i = 0; i < 7; i += 1) { 
    numbers.push(Math.random());
  }
let sum = 0;
for (let i = 0; i < numbers.length; i += 1) { 
   sum += numbers[i];
 }
document.writeln(sum);
