console.log('Edabit JS page is working!');

//Create a function that takes two numbers as arguments and return their sum.
function addition(a, b) {
	return (a + b);
}

//Create a function that reverses a boolean value and returns the string "boolean expected" if another variable type is given.
function reverse(bool) {
    if (bool === true) {
        return false;
    } //must be three equals - has to be exact
    if (bool === false) {
        return true;
    }
    else {
        return ('boolean expected');
    } //if not containing a boolean return this
}// end function

