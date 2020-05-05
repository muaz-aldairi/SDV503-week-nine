
// Number data type

let numOne = 1000 ;
console.log(numOne);

// using Number object : we use it to convert to number
let numTwo = Number(1000);
console.log(numTwo);

// using new : we use it to convert to object 
let numThree = new Number(1000);
console.log(numThree);

let strThree = new String(1000);
console.log(strThree);

// using typeof : to check the data type 
console.log(typeof numTwo);
console.log(typeof numThree);
console.log(typeof strThree);

console.log(numOne==numTwo);
console.log(numTwo==numThree);

console.log(numOne===numTwo);
console.log(numTwo===numThree);

// using Number.isNaN() : it is used to check if the value of the variable is NaN datatype or not.

let x =  Number("Hello") - 2 ; 
let y = 5 - 2 ;

console.log(Number.isNaN(x));
console.log(Number.isNaN(y));

// toFixed() it round the number based on the number inside () and convert it to a string

let num1 = 12.34567594567;
console.log(typeof num1);
let str2 =num1.toFixed(5);
console.log(typeof str2);
console.log(str2);



// using .toLocaleString()  : it converts a number to a locale-specific representation of the number (rounding the result where necessary) and then returns its value as a string.

var num2 = 123456.789;

console.log(num2.toLocaleString());

// example
function money(x,y) {
    x = Number(x)
    y = y || "$"

    if ( Number.isNaN(x)  || typeof y !="string") { return null }

    return y + x.toFixed(2)
}
console.log(money(6,"$"))
console.log(money(6))




// gitbook review 

// numbers
let a1= 355.0000;
let a2=355.;
console.log(a1==a2);

let b2=.34;
let b1=0.34;
console.log(b1==b2);

let c1=1234500000;
let c2=12345e5;
console.log(c1==c2);

let e1= 0.0000002;
let e2= 2e-7;
console.log(e1==e2);

// converting number to a string
// using .toString() method , the benefit her is we can specify which base it should use to represent that number by putting the number in ()
let str1= 55;
console.log(typeof str1);
let str11= str1.toString(2);
console.log(str11);
console.log(typeof str2);
// using String()
let str3= 55;
console.log(typeof str3);
let str4= String(str3);
console.log(str4);
console.log(typeof str4);
//Using template literals
let str5= 55;
console.log(typeof str5);
let str6= `${str5}`;
console.log(str6);
console.log(typeof str6);
// Concatenating the number with an empty string
let str7= 55;
console.log(typeof str7);
let str8= "" + str7;
console.log(str8);
console.log(typeof str8);
// toFixed() it round the number based on the number inside() and convert it to a string
let str9 = 12.34567594567;
console.log(typeof str9);
let str10 =str9.toFixed(5);
console.log(typeof str10);
console.log(str10);

//Testing for integers and floats

// Infinity, -Infinity,strings,booleans and NaN are not integers 
// we can use Number.isSafeInteger() or  Number.isInteger()

// not integer
let num00= "12" ;
console.log(Number.isSafeInteger(num00));
// it is integer
let num01= -12.0;
console.log(Number.isInteger(num01));

// not float number
console.log(1234 !== parseInt(1234));
console.log(87 !== Math.ceil(parseFloat(87)));
// it is float number
console.log(1234.11 !== parseInt(1234.11));
console.log(87.5 !== Math.ceil(parseFloat(87.5)));





//Find the Length of a String. start counting from 0
let name= "Muaz Aldairi";

console.log(name.length);
console.log('Muaz Aldairi'.length);

// find the latter of the string. start counting from 0
let myInitial= name[5];
let d = name[name.length - 5];
console.log(myInitial);
console.log(d);

// .charAt()
let myInitial2 =name.charAt(5);
let d2= name.charAt(name.length-5);
console.log(myInitial2);
console.log(d2);

// to uppercase or lowercase. that will not change the original variable
console.log(name.toLowerCase());
console.log(name.toUpperCase());
console.log(name);


// searching in the string .indexOf()  .lastIndexOf()

// .indexOf() will start searching from the beginning .lastIndexOf() will start searching from the end 
// if the character/word is not exist, the result will be -1
//we can also add optional parameter to specify the index at which the method should begin its search.
let a = 'Something to be found.';
console.log(a.indexOf("o"));
console.log(a.indexOf("z"));
console.log(a.indexOf("found"));
console.log(a.lastIndexOf("o"));
console.log(a.indexOf("o",5));
console.log(a.lastIndexOf("o",5));

// .includes() .startsWith() .endsWith(). they are case sensitive
console.log(a.includes("To"));
console.log(a.includes("i"));
console.log(a.startsWith("something"));
console.log(a.startsWith("S"));
console.log(a.endsWith("found"));
console.log(a.endsWith("."));

// gitting a substring .substring(,) .substr(,)  .slice(,)
//substring returns a substring between the start and end indices.not including the end index.
// The slice returns a substring from start to end, not including the end index.
// the substr returns a substring, from start, of a length you specified.
console.log(a.substring(2,8));
console.log(a.substr(2,5));
console.log(a.slice(2,8));

// Template literals
// Embedding variable inside template literal
let b = `This is ${name} calling.`
b 
// Embedding expression inside template literal
let c = `The answer is ${7 * 9 / 2}.`
c 
// Multi-line text with template literal
let e = `Todo:
- write code
- write more code
- write even more code
`
e

let e0 = 'Todo:\n- write code\n- write more code\n- write even more code'
e0


// convert string to number 

// parseInt() convert the string into integer.
let num11 = "195";
console.log(typeof num11);
num11=parseInt(num11);
console.log(typeof num11);
console.log(num11);
// parseFloat() convert the string into float/ decimal.
// using parseInt() with decimal (14.6) will convert the string into integer(14). so we need to use parseFloat() to be accurate
let num22 = "14.6";
console.log(typeof num22);
num22=parseFloat(num22);
console.log(typeof num22);
console.log(num22);
// Math.floor will round down the string into integer 
let num3="-12.33";
console.log(typeof num3);
num3=Math.floor(num3);
console.log(typeof num3);
console.log(num3);
// Math.ceil will round up the string into integer 
let num4="12.01";
console.log(typeof num4);
num4=Math.ceil(num4);
console.log(typeof num4);
console.log(num4);
// Math.round will round (up or down) the string into the closer integer (12.50) is closer to 13 not 12
let num5="12.50";
console.log(typeof num5);
num5=Math.round(num5);
console.log(typeof num5);
console.log(num5);
// using unary operators (- , +)
let num6="12.77";
console.log(typeof num6);
num6= -num6
console.log(typeof num6);
console.log(num6);
// using multiplying by 1
let num7="12.77";
console.log(typeof num7);
num7 *= 1
console.log(typeof num7);
console.log(num7);
// using Number object
let num8="12.77";
console.log(typeof num8);
num8 = Number(num8)
console.log(typeof num8);
console.log(num8);
//when string contains some non-numerical characters
// The floor(), round(), ceil(),unary operator, multiplication by 1 and Number object will not work at all. JavaScript will return NaN.
let num9="12.77 words";
console.log(typeof num9);
num9= Math.round(num9);
console.log(typeof num9);
console.log(num9);
//parseInt() and parseFloat() JavaScript will remove non-numerical characters. It will return only the integer or float.
let num10="12.77 words";
console.log(typeof num10);
num10= parseFloat(num10);
console.log(typeof num10);
console.log(num10);






// Callbacks are a way to make sure certain code doesn’t execute until other code has already finished execution.
// callback is a function that is to be executed after another function has finished executing
//callback function is passed as an argument of the function that we want to run first .

// example
function finish(){ console.log("finish my homework");}
function doHomework(subject,callback) {

console.log(`Starting my ${subject} homework.`);
callback()
}

doHomework("Math",finish);




























