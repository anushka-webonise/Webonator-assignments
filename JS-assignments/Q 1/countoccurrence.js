
//Prompts user to enter comma separated integers
var arr = window.prompt("Enter elements in the array(in comma separated format)");
var n = arr.length;

//Displays entered array
console.log(arr)

countFreq(arr, n)
//Functions to count frequency
function countFreq(arr, n)
{
    var freqmap = new Map();
 
    // Traverses through array elements and count frequencies
    for (var i = 0; i < n; i++)
    {
        if(arr[i]!=','){
		    if(freqmap.has(arr[i]))
                freqmap.set(arr[i], freqmap.get(arr[i])+1)
            else
                freqmap.set(arr[i], 1)}
    }
 
    var keys = [];
    freqmap.forEach((value, key) => {
        keys.push(key);
    });
    keys.sort((a,b)=> a-b);
     
    // Traverses the map and print frequency of each element in ascending order of element
    keys.forEach((key) => {
        console.log(key + ": " + freqmap.get(key)+ "\n");
    });
}