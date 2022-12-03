/*
2. Write a function that takes a string, and returns an object containing the following three properties:
The number of characters in the string that are lowercase letters
The number of characters that are uppercase letters
The number of characters that are neither
You may assume that the string will always contain at least one character.

```js
letterCaseCounts('abCdef 123');
// { lowercase: 5, uppercase: 1, neither: 4 }

letterCaseCounts('AbCd +Ef');
// { lowercase: 3, uppercase: 3, neither: 2 }

letterCaseCounts('123');
// { lowercase: 0, uppercase: 0, neither: 3 }
```
*/


function letterCaseCounts(str){
	const obj = {
	}
	const lower = str.match(/[a-z]/g);//.match returns an array or null
	const upper = str.match(/[A-Z]/g);
	const neither = str.match(/[^A-z]/g);// 
	// if (lower){
	// 	obj.lowercase = lower.length
	// }
	// else {
	// 	obj.lowercase = 0
	// }
	obj.lowercase = lower ? lower.length : 0;
	obj.uppercase = upper ? upper.length : 0;
	obj.neither = neither ? neither.length : 0;
	return obj;
}









