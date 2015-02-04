//Ryan Postma
//CMP237
//reverse array
//2/3/2015


function reverseArray(array) {
	var newArray = [];
	for (i = 0; i < array.length; i) {
		var x = array.pop();
		newArray.push(x);
	}	
	return newArray;
}


print(reverseArray(["A", "B", "C"]));
