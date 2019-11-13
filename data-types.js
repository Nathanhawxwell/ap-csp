
/* Data Types and Variables

Our programs allow us to manipulate data, and data is simply information. 
Your name is a piece of information, as well as your age and the fact that you are human.

When we write code, we make choices about the information we use and how a computer should understand that information.

In JavaScript (and in most programming languages), there are three basic types of data, and these are what you will use to represent any information about the world that you want to include or manipulate in your program.


   _____ _        _                 
  / ____| |      (_)                
 | (___ | |_ _ __ _ _ __   __ _ ___ 
  \___ \| __| '__| | '_ \ / _` / __|
  ____) | |_| |  | | | | | (_| \__ \
 |_____/ \__|_|  |_|_| |_|\__, |___/
                           __/ |    
                          |___/     


If you want to represent your name, you would probably use a STRING. We place a string in quotation marks like this: 

	"Eric"

The code below this comment will log this string -- my name -- to the console.

*/

console.log("Eric");

/* We use strings to represent textual information. But often we want to represent numbers -- like our ages -- instead. We *could* simply represent the number as text, but JavaScript doesn't like to add/subtract/multiply/find-the-square-root-of text. Actually, let's try. Represent "1" and "5" as strings in the console, like this: 

	"1" + "5"; 

What result do you get? 

Now try multiplying strings the same way...

	"1" * "5";

What result do you get?

JavaScript is smart enough to recognize that we want to manipulate a number when we multiply, but it uses the + sign to combine text when manipulating strings, so mathematical operations will get messy if we try to use strings. So instead we use...


  _   _                 _                   
 | \ | |               | |                  
 |  \| |_   _ _ __ ___ | |__   ___ _ __ ___ 
 | . ` | | | | '_ ` _ \| '_ \ / _ \ '__/ __|
 | |\  | |_| | | | | | | |_) |  __/ |  \__ \
 |_| \_|\__,_|_| |_| |_|_.__/ \___|_|  |___/
                                            
                                            
We use numbers to represent numbers. Makes sense! JavaScript dedicates a whole separate data type to mathematical operations. We represent these without quotation marks. Below I'll log my age to the console.

*/

console.log(33);

/* 


We can also represent equations, and JavaScript will run the calculations. Let's try adding numbers the right way this time:

	1 + 5;

We'd subtract like this:

	5 - 1;

Multiply like this:

	5 * 1;

And divide with a forward slash:

	25 / 5;

Like a calculator, JavaScript can handle mathematical operations that we might not be able to run quickly in our heads:

	365 * 33;
	12045 * 24;

Sometimes, we want to represent information not as text, and not as a number, but as an expression of truth or falsehood. This is called a...


  ____              _                  
 |  _ \            | |                 
 | |_) | ___   ___ | | ___  __ _ _ __  
 |  _ < / _ \ / _ \| |/ _ \/ _` | '_ \ 
 | |_) | (_) | (_) | |  __/ (_| | | | |
 |____/ \___/ \___/|_|\___|\__,_|_| |_|
                                       
                                       

A Boolean value can be either true or false. Am I human? True. Do I like egg salad? False. Am I 33? True for the moment. When Karel needs to check whether the front is clear, she checks for a Boolean value -- either the front is clear, or it isn't. We express Boolean values with the simple words true or false, no quotation marks.

	true;
	false;

I'm going to get a bit ahead and create a variable that identifies me as human and then log that fact to the console...

*/

var isHuman = true;
console.log(isHuman);

/*

*~* Mini-Exercise *~*

Let's try representing some basic biographical information about ourselves in the console using each of the three data types. 

* First, log a string to the console with your first name. 
* Next, log your age as a number.
* Next, use the JavaScript console to calculate your age in minutes. (For the purposes of this exercise, we'll calculate up to the point of your most recent birthday.) I gave you some hints about how you might do this above. Once you have your answer, copy it into the code below to find out whether you are over 500 million (500,000,000) seconds old or not.

var ageInMinutes = YOURANSWERHERE;
var ageInSeconds = 60 * ageInMinutes;
var bigQuestion = ageInSeconds > 500000000;
console.log(bigQuestion);

This will produce a Boolean statement stating whether it is true or false that you are over 500 million seconds old.
