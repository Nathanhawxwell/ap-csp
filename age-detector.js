// This code snippet is intended for use in the CodeHS JavaScript (Console) Sandbox.

function start() {
    var age = readInt("What is your age?");
    ageDetector(age);
}

function ageDetector(age) {

if(age < 0) {
    println("You don't exist.");
}
if(age >= 0 && age <= 29) {
    println("You are young!");
    println("Enter another age, or enter a negative integer to stop.");
    start();
}

/* By calling the start function at the end -- which in turn calls the 
ageDetector function -- we're able to repeat the program. Note that we 
give the program a way to stop repeating: by only printing a result if
the age is below 0. */

if(age >= 30 && age <= 50) {
    println("You're middle-aged.");
    println("Enter another age, or enter a negative integer to stop.");
    start();
}
if(age >= 51 && age <= 120) {
    println("You are old.");
    println("Enter another age, or enter a negative integer to stop.");
    start();
}
if(age >= 121) {
    println("You're impossibly old.");
    println("Enter another age, or enter a negative integer to stop.");
    start();
}

}
