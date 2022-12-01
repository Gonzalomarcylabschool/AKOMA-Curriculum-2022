# Regular Expressions and String Processing

## The Why?

One of the cool things about this unit is that we get to give you more tools to have an easier time solving problems! You'll get to practice your PEDAC approach; Understanding the problem internalizing and comming up with your own examples, undestanding the data types.  

### Vocabulary
* Regular Expression:
Regular expressions are a way to describe patterns in string data.

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
* Capture Group: 
* [Quantifiers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers): Quantifiers indicate numbers of characters or expressions to match.

Regular expressions are particularly useful for defining filters. Regular expressions contain a series of characters that define a pattern of text to be matched—to make a filter more specialized, or general.


### Key Methods
* `String.prototype.indexOf`
* `String.prototype.split`
* `String.prototype.substring`
* `String.prototype.includes`
* `String.prototype.replace`
* `String.prototype.match`
* `RegExp.prototype.test`
* `RegExp.prototype.exec`