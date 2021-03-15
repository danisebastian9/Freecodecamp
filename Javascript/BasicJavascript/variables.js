// variable "a" created and assigned with the 7 value. var a;

a = 7;

// variable "a" created and assigned with the 7 value. 


// Assigning a value from one variable "a" to another variable "b"

var a;
a = 7;
var b;
b = a;

// Variable created and in the same line the value is assigned.

var a = 9; 

/* variable "a" and "b" created with numbers and they can be provided with
mathematical operations without crashing but "c" is created with strings and needs to be 
Defined with that data type to not be undefined*/

var a = 5;
var b = 10;
var c = "I am a";


a = a + 1;
b = b + 5;
c = c + " String!";

/*camelCase recommended way, which means first word with lower case and the capital for
each additional word upper cased */

// Variable declarations
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Variable assignments
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

//Summing 2 values inside a variable

var sum = 10 + 10;

// Substracting values insiade a variable

var difference = 45 - 33;

// Multiplying values inside a variable

var product = 8 * 10;

// Dividing values inside a variable

var quotient = 66 / 33;

// " variable ++;" with add 1 to the result, so in this example the result is 88. 

var myVar = 87;

myVar ++;

// "variable --;" Will reduce 1 to the result in this example the result is 10.

var myVar = 11;

myVar --;

// creating a float variable

var ourDecimal = 5.7;

var myDecimal = 5.7;

// multiplying 2 decimals

var product = 2.0 * 2.5;

// dividing 2 decimals

var quotient = 4.4 / 2.0; // Change this line

/* Remainder % will find the pending integer from a division 5 / 2 = 2 
 2 x 2 = 4 The remainder is 1 to 5 */

var remainder = 11 % 3;

// Augmented addition "var += val;"" is equal to "variable = vairable + value;"

var a = 3;
var b = 17;
var c = 12;

a = a + 12;
a += 12; //augmented addition

b = 9 + b;
b += 9;  //augmented addition

c = c + 7;
c += 7;  //augmented addition

// Augmented substraction "var -= val;"" is equal to "Variable = variable - value"

var a = 11;
var b = 9;
var c = 3;

a = a - 6;
a -= 6;  // audmented substraction

b = b - 15;
b -= 15; // audmented substraction

c = c - 1;
c -=1;   // audmented substraction

// Augmented multiplication "var *= val;"" is equal to "Variable = variable * value"

var a = 5;
var b = 12;
var c = 4.6;

a = a * 5;
a *= 5;    // audmented multiplication

b = 3 * b;
b *= 3;   // audmented multiplication

c = c * 10;
c *= 10;  // audmented multiplication

// Augmented Division "var /= val;"" is equal to "Variable = variable / value"

var a = 48;
var b = 108;
var c = 33;

a = a / 12;
a /= 12;   // audmented division

b = b / 4;
b /= 4;    // audmented division

c = c / 11;
c /= 11;   // audmented division

// String variables 

var myFirstName = "Daniel"
var myLastName = "Cubides"

/* double ("") quotes inside a string are written in the following method 
"the backslash is generated with \"Alt GR\" + \" ? \" sign." */

var myStr = "I am a \"double quoted\" string inside \"double quotes\"."; 
var quotes = "the backslash is generated with \"Alt GR\" + \" ? \" sign."

//  single quotes strings, it can also be escapped with the \' 

var myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

var string = 'This is another valid string. It\'s another valid method to do it.' 
var string = "This is another valid string. It's another valid method to do it." 

/* Escape characters (" \' " Single Quote), (" \" " Double Qoute), (" \\ " Backslash),
(" \n " Newline), (" \r " carriage return), (" \" " Tab), (" \b " Word Boundary), 
(" \f " Form feed) */ 

var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
/* FirstLine
       \SecondLine
   ThirdLine */ 


// Concatenating Strings "string" + "String" = "String String"
var myStr = "This is the start. " + "This is the end.";
// "This is the start. This is the end"


// Concatenating strings with the "+=" operator
var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";
// "This is the first sentence. This is the second sentence."


// Strings with variables.
var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?";
//ourStr is now "Hello, our name is freeCodeCamp, how are you?" 
var myName = "Daniel";
var myStr = "My name is " + myName + " and I am well!";
// "My name is Daniel and I am well!"


//Appending string variables with "+=" 
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;  
//ourStr is now "freeCodeCamp is awesome!" 

var someAdjective = "Amazing!";
var myStr = "Learning to code is ";
myStr += someAdjective;
// "Learning to code is Amazing!"

// String Lenght (.length)
"Alan Peter".length; // 10

var lastNameLength = 0;
var lastName = "Lovelace";
lastNameLength = lastName.length // 8


//Bracket notation [0]
var firstName = "Charles";
var firstLetter = firstName[0]; // firstLetter is "C"

var firstLetterOfLastName = "";
var lastName = "Lovelace";
firstLetterOfLastName = lastName[0]; // firstLetterOfLastName = "L"

// String immutability
var myStr = "Bob";
myStr[0] = "J"; // Bob can't be changed to Job, the entire string will need to be changed.

var myStr = "Jello World";
// mySrt[0] = "H" can't be executed as the string is immutable
myStr = "Hello World";


// Bracket notation to find Nth character in a string.
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1]; // secondLetterOfFirstName is "d"

var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2]; // thirdLetterOfLastName is "v"

// Bracket notation to find last character in as string ( firstName[firstName.length - 1] )
var firstName = "Charles";
var lastLetter = firstName[firstName.length - 1]; // lastLetter is "s"

var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1]; // lastLetterOfLastName is "e"

// Bracket notation to find Nth to last character in a string
var firstName = "Charles";
var thirdToLastLetter = firstName[firstName.length - 3]; // thirdToLastLetter is "l"

var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length - 2]; // secondToLastLetterOfLastName is "c"

// Mad Libs
// "It was really ____, and we ____ ourselves ____".
var sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";

