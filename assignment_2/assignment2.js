/*
Exercise #1
Create a for loop that prints out the numbers 1 to 100 in the console.
*/

console.log("Exercise #1:")
for (i=1; i<101; i++){
    console.log(i);
}


/*
Exercise #2
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

console.log("Exercise #2:");
for (i=1; i<8; i++){

    // Using .length method, as per the hint provided
    var string1 = '';
    while (string1.length < i){
        string1 = string1 + '#';
    }
    console.log(string1);

    // Using .repeat method (googled)
    /*
    var string2 = '#';
    console.log(string2.repeat(i));
    */

    // For loop within a for loop
    /*
    var string3 = '';
    for (x=i; x>0; x--){
        string3 = string3 + '#';
    }
    console.log(string3);
    */
}