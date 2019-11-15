
/* Basic Math and Operator Precedence

In this list, an ellipsis (...) represents a value that may be used by the various operators. This is not a comprehensive list of operators in JavaScript; you may find
a comprehensive list at this address (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence), and we will add operators as we move forward. This list is numbered from the highest level of precedence to the lowest. You'll notice that we are skipping some levels -- we will fill in some of them, and others will remain outside the scope of our class. */

// PRECEDENCE LEVEL 21

// Grouping: ()

25 * 4 + 2 = 102
25 * (4 + 2) = 150

// PRECEDENCE LEVEL 16

// Exponentiation: ... ** ...

4 ** 2 = 16

// PRECEDENCE LEVEL 15

// Multiplication: ... * ...
// Division: ... / ...
// Remainder: ... % ...

/* These operators have the SAME level of precedence and are resolved from left-to-right by the interpreter. So the expression... */

 5 * 10 / 25 = 2

 /* ...is read by the interpreter as... */

 (5 * 10) / 25 = 2

 /* In this case, you would get the same result if you grouped (10 / 25) instead, but left-to-right "associativity" -- as this interpretive process is called -- will be important when we add more operators (and some groups of operators will actually resolve from right-to-left.) */

 // PRECEDENCE LEVEL 14

 // Addition: ... + ...
 // Subtraction: ... - ...

 5 + 3 - 2 = 6

 // PRECEDENCE LEVEL 3

 // Assignment: ... = ...
 //             ... += ...
 //             ... -= ...
 //             ... **= ...
 //             ... *= ...
 //             ... /= ...
 //             ... %= ...

 // Note: This level of precedence resolves right-to-left!

