* Character Class: 
A “character class”, also called “character set”, are the group of characters that you are searching for using Regex. 
[A-Z]	Any character from uppercase A to uppercase Z
[a-z]	Any character from lowercase a to lowercase z
[A-z]	Any character from uppercase A to lowercase z
[0-9]	Any character from the digit 0 to 9
(x|y) expression is used to find any of the alternatives specified

You can also use these shortcuts:
\d	Any digit character
\w	An alphanumeric character (“word character”)
\s	Any whitespace character (space, tab, newline, and similar)
\D	A character that is not a digit
\W	A nonalphanumeric character
\S	A nonwhitespace character
.	Any character except for newline
* Anchors: refers to the position 
^: finds pattern in the begining of the string.
$: finds pattern in the end of the string.

* Methods in regex
	* `RegExp.prototype.test`
	* `RegExp.prototype.exec`
* Capture Group: 

* [Quantifiers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers): Quantifiers indicate numbers of characters or expressions to match.

Regular expressions are particularly useful for defining filters. Regular expressions contain a series of characters that define a pattern of text to be matched—to make a filter more specialized, or general.

Lets see how we can use this in practice

1. Write a function called stripPunctuation that takes a string argument and returns that string with any non-alphanumeric characters removed.

```js 
stripPunctuation('abc+def+ghi!!!'); // 'abcdefghi'
stripPunctuation('+1 919-644-9821'); // '19196449821'
stripPunctuation("Don't play with me!"); // 'Dontplaywithme'
```

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

Key Methods

* `String.prototype.includes`
* `String.prototype.replace`
* `String.prototype.match`
* `RegExp.prototype.test`
* `RegExp.prototype.exec`
