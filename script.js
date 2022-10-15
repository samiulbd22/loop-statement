// while loop
var digitNumber= prompt("Enter your digit: ");
var namta= parseInt(digitNumber);
var number =1;
var donumber=1;
while(number<=10)
{
    console.log(namta + "*" + number +"="+ number*namta);
    number++;
}
console.log("do while loop");
do {
    console.log(namta + "*" + donumber +"="+ donumber*namta);
    donumber++;
}while(donumber<=10);
console.log("for loop");
let digit=parseInt(prompt("Enter your Number"));
for (let i=1;i<=10; i++)
{
    console.log(digit + "*" + i +"="+ i*digit);
    i++;
}