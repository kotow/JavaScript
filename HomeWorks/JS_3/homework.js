// 01 NumberChecker
function printNumbers(value){
	count = false;
	for(var i=1; i<=value; i++){
		if(i % 4 != 0 && i % 5 != 0){
		console.log(i + " ");
		count = true;
		}
	}
	if(!count)
		return "No";
}
// 02 Find Min and Max Number
function findMinAndMax(value){
    value.sort(function (a, b) { return a - b });
    console.log("Min -> %d\nMax -> %d", value[0], value[value.length-1]);
}
// 03 Properties
// To Do
// 04 Create Array
function createArray(){
	var array = [];
	for(var i = 0; i < 20; i++){
	array[i] = i*5;
	}
	return(array);
}
// 05 Compare Chars
function compareChars(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return "Not Equal";
    }

    var areEqual = true;

    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] != arr2[i]) {
            areEqual = false;
        }
    }

    if (areEqual) {
        return "Equal";
    }
    else {
        return "Not Equal";
    }
}
// 06 Maximal Sequence
function findMaxSequence(value){
    var result = [];
    var temp = []; 
    if (value.length == 1) {
        console.log(value);
        return;
    }
    var initStart = value[0];

    for (var i = 1; i < value.length; i++) {
        if (value[i] === initStart) {
            temp.push(value[i]);
        }
        else {
            temp.push(initStart);
            if (result.length <= temp.length) {  
                result = temp;
            }
            temp = [];

        }
        initStart = value[i];
    }
    console.log(result);
}
// 07 Maximal Increasing Sequence
function findMaxSequence(value){
//To Do
}
// 08 Sort Array
function sortArray(value){
    var count = 1,
        maxCount = 1,
        currentIndex = 0,
        result = [],
        i;
    if (value.length === 1) {
        return console.log('no');
    }
    for (i = 0; i < value.length - 1; i += 1) {
        if (value[i] < value[i + 1]) {
            count += 1;
            if (count > maxCount) {
                maxCount = count;
                currentIndex = i;
            }
        } else {
            count = 1;
        }
    }
    if (maxCount === 1) {
        return console.log('no');
    }
    result = value.slice(currentIndex - maxCount + 2, currentIndex + 2);
    return(console.log(result));
}
// 09 Most Frequent Number
function findMostFreqNum(value){
	var maxLenght=0;
	var maxNum; 
	var curr = 0;
	for(var i = 0; i < 13; i++){
		if(curr > maxLenght){
			maxLenght = curr;
			maxNum = value[i];
		}
		for(var j = (i + 1); j < 13; j++){
			if(value[i] === value[j]){
				curr++;
			}
		}
	}console.log(value.lenght, curr)
	console.log(maxNum + " (" + maxLenght + " times)")
}
// 10 Reverse String
function reverseString(value){
    var length = value.length
    value = value.split("");
    var output = "";
    for (var i = 0; i < length; i++) {
        output += value.pop();
    }
    return output;
}
// 11 Check the Brackets
function checkBrackets(value){
    var isCorrect = true;
    var leftBrackets = 0;
    var rightBrackets = 0;
    var brackets = value.split(/[^()]/).filter(Boolean);
    for (var i = 0; i < brackets.length; i++) {
        var bracket = brackets[i];
        if (bracket == '(') {
            leftBrackets++;
        } else {
            rightBrackets++;
        }
    }
    if (brackets[0] == ")") {
        isCorrect = false;
    }
    if (leftBrackets != rightBrackets) {
        isCorrect = false;
    }
    if (isCorrect) {
        return "correct";
    } else {
        return "incorrect";
    }
}
// 12 Substring Count
function SubstringCount(input, substr){
	var	inp = input.value;
	var sub = substr.value;
	var result = 0;
	for (var i = 0; i < inp.length; i++) {
		if (inp.substr(i, sub.length).toLowerCase() == sub) {
			result++;
		};
	};
	document.getElementById("result12").innerHTML = result;
	console.log("result");
}
// 13 Replace the White-Spaces 
function spaceReplacer(input, repstring) {
	var	inp = input.value;
	var sub = "";
	inp = inp.replace(/ /g, sub);
	document.getElementById("result13").innerHTML = inp;
	console.log("result");
}
// 14 Palindromes
function palinDromes(input) {
	var inpArray = input.value.split(" ");
	var result = true;
	var finArray = [];
	var punctuation = [ '"', "'", ",", ";", ".", "+"];
	for (var i = 0; i < inpArray.length; i++) {
		var result = true;
		for (var j = 0; j < punctuation.length; j++) {
			if (inpArray[i].indexOf(punctuation[j]) != -1) {
				inpArray[i] = inpArray[i].replace(punctuation[j], "");
			};	
		};
		for (var j = 0; j < inpArray[i].length; j++) {
			if (inpArray[i].toLowerCase().charAt(j) != inpArray[i].toLowerCase().charAt(inpArray[i].length-j-1)) {
				result = false;
				break;
			};
		};
		if (result) {
			finArray.push(inpArray[i]);
		};

	};

	var finResult;
	if (finArray.length > 0) {
		finResult = finArray.toString();
	}else{
		finResult = "No palindromes.";
	}
	console.log(finResult);
}; 
//15 Most Frequent Word
function findMostFreqWord(value){
//To Do
}
// 16 Cards Frequencies
function indCardFrequency(inputString) {
    var cards = inputString.split(' ');
    var cardsFaces = [];
    var cardsAppearance = [];
    var i;
    for (i = 0; i < cards.length; i += 1) {
        var currentCard = cards[i];
        var cardFace = currentCard[0];
        var cardCounter = 0;

        //check if array contains cardFace
        if (cardsFaces.indexOf(cardFace) > -1) {
            continue;
        }
        cardsFaces.push(cardFace);

        for (var j = i; j < cards.length; j++) {
            var targetCard = cards[j];
            var targetCardFace = targetCard[0];

            if (targetCardFace === cardFace) {
                cardCounter += 1;
            }
        }
        cardsAppearance.push(cardCounter);
    }

    for (i = 0; i < cardsFaces.length; i += 1) {
        var percentage = (cardsAppearance[i] / cards.length * 100).toFixed(2);

        //if cardFace is '1' the card is 10 so print 10 :)
        if (cardsFaces[i] === '1') {
            console.log('10 -> ' + percentage + '%');

        } else {
            console.log(cardsFaces[i] + ' -> ' + percentage + '%');
        }
    }