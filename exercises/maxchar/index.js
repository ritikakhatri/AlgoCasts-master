// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	var charMap = {};
	var max = 0;
	var maxChar = '';
	for(var char of str) {
		if(!charMap[char]) {
			charMap[char] = 1;
		} else {
			charMap[char]++;
		}
	}
	console.log(charMap)
	for(var key in charMap) {
		if(charMap[key] > max) {
			max = charMap[key];
			maxChar = key;
		}
		
	}
	return maxChar;
}
maxChar("abcccccccd");
module.exports = maxChar;
