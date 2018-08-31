// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
	var aObjMap = createObjectMap(stringA);
	var bObjMap = createObjectMap(stringB);

	if(Object.keys(aObjMap).length !== Object.keys(bObjMap)) {
		return false;
	}
	for(let char in aObjMap) {
		if(aObjMap[char] !== bObjMap[char]) {
			return false;
		} 
	}
	return true;
}

function createObjectMap(str) {
	var objMap = {};

	for(let key of str.replace(/[^w]/g,'').toLowerCase()) {
		objMap[key] = objMap[key] +1 || 1;
	}
	return objMap;
}
module.exports = anagrams;
