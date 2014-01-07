debugger;
var example = "this is a string";
printExampleText();

example = "updated string"
printExampleText();

console.log("Exiting - bye bye");


function printExampleText(){
	console.log("========================");
	console.log(example);
	console.log("========================");
}
