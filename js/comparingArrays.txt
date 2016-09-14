
// create my two arrays 
var array_one = ["apple","dog","cat","food","kite","elephant","lunch","book","laptop"]; 

var array_two = ["dog","goose","kite","meal","laptop"]; 

// create a sim array that will use array_one that will be joined by 
// second array 

var sim = array_one.concat(array_two); 

// create a sort array in which the sim array will be sort by the sort() method
var sortArr = sim.sort(); 

// results array for output 
var results=[]; 

// for loop that counts the sim array by it's lenght and increments that count
for(var i=0;i< sim.length; i++)
{	// if the sortArr has any doubles in it's array then those values are pushed 
	// into thhe results array. 
	if(sortArr[i+1] === sortArr[i])
	{
		results.push(sortArr[i]); 
	}
}

// output of the result array in the console.
console.log(results); 