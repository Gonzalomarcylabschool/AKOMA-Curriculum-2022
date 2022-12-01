/* Write a program that cleans up user-entered phone numbers so that they can be sent as SMS messages. Other than digits, the number may also contain special character such as spaces, dash, dot, and parentheses that should be ignored.
The rules are as follows:
If the phone number is less than 10 digits, assume that it is a bad number.
If the phone number is 10 digits, assume that it is good.
If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
If the phone number is 11 digits and the first number is not 1, then it is a bad number.
If the phone number is is more than 11 digits, assume that it is a bad number.
For bad numbers, just a return a string of 10 0s.

P 
input is a string
ouput is a string

1. valid US number(s) return the number(s)
     10 or 11 digits(only if 1 is the first number and cut the 1)
3. if not valid number return "0000000000"
    negative numbers
    more than 11
    less than 10
    its 11 and the first number is not 1
    
4. remove any special charaters

E

cleanNumbers('2342342344') => '2342342344'
cleanNumbers('12342342344') => '2342342344'
cleanNumbers('(234)-234-2344') => '2342342344'
cleanNumbers('+1(234)-234-2344') => '2342342344'

Edge cases
cleanNumbers() => "0000000000"
cleanNumbers('+1(234)-234') => '000000000'
cleanNumbers('19292348871x8322');
cleanNumbers(''); => '000000000'
cleanNumbers("whatever") +> "0000000000"

D
Strings

A
1. variable to store the numbers after we strip any characters that is not a number. (use regex)
2. check the length of the string is < 10 or > 11 => "0000000000"

3. check the string if its === 11 and the first digit is != 1  => "0000000000"

4. return the string 

C

*/

function cleanNumbers(str) {
   let filterNum = str.replace(/[\D]/g, "");
   if (filterNum.length === 11 && filterNum[0] !== "1"){
       return "0000000000";
   }
   else if (filterNum.length < 10 || filterNum.length > 11 ){
       return "0000000000";
   } else {
       if(filterNum.length === 11){
           return filterNum.slice(1, filterNum.length);
       }
       else{
           return filterNum;
       }
   }
}
console.log(cleanNumbers('12342342344'));