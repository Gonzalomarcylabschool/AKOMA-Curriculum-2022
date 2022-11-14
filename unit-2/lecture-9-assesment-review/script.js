
console.log(phoneCleanUp('1-123-123-1234'))

console.log(phoneCleanUp('2-123-123-1234'))
function phoneCleanUp(strNumber = "0000000000") {

	let newString = "";
	for (let i = 0; i < strNumber.length; i++) {
		if (parseInt(strNumber[i])) {
			newString += strNumber[i]
		}
	}

	if (newString.length == 11 && newString[0] === 1){
		return newString
	}
	else if (newString.length < 10 || (newString.length === 11 && newString[0] === !1)) {
		return '0000000000'
	}else{
		return '0000000000'
	}
}
