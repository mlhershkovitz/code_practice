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
    } else {
        return ('boolean expected');
    } //if not containing a boolean return this
} // end function

//Create a function that takes a number as its only argument and 
//returns true if it's less than or equal to zero, otherwise return false.
function lessThanOrEqualToZero(num) {
    if (num <= 0) {
        return true;
    } else {
        return false;
    }
} //end function

//Create a function that takes two strings as arguments and return either true 
//or false depending on whether the total number of characters in the first string
//is equal to the total number of characters in the second string.
function comp(str1, str2) {
    //need to get the length of the strings with .length before checking if equal 
    if (str1.length == str2.length) {
        return true;
    } else {
        return false;
    }
}

//Create a function that accepts a string (of a persons first and last name)
//and returns a string with the first and last name swapped.
function nameShuffle(str) {
    return str.split(' ').reverse().join(' ');
} //.split() splits up the strings in an array, creates 'substrings'
//.reverse() flips the first item in an array with the last item in the array
//.join() puts the 'substrings' back together into one string - 'joins' strings together

//Create a function that takes a string and returns a string with its letters in alphabetical order.
function AlphabetSoup(str) {
    return str.split('').sort().join('');
}

//Create a function that takes two strings and returns true if the first argument 
//ends with the second argument; otherewise return false .
function checkEnding(str1, str2) {
    return str1.endsWith(str2);
} //a.endsWith(b) checks if the ending of string a equals string b

//Create a function that takes an array of strings. 
//Return all words in the array that are exactly four letters.
function isFourLetters(arr) {
    let result = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length == 4) {
            result.push(arr[i]);
        }//end if
    }//end loop - return must be outside
    return result;
}//end function

//Create a function that takes two arguments (item, times). The first argument (item) 
//is the item that needs repeating while the second argument (times) is the 
//number of times the item is to be repeated. Return the result in an array.
function repeat(item, times) {
	for (let item of times) {
        
    }
}