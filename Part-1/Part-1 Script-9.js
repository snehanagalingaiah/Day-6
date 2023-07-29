let value = parseInt(prompt('How many runs you scored in this ball'));
console.log(value)
if (value === 4) 
{
      console.log("You hit a Four");
} else if (value === 6) 
{
      console.log("You hit a Six");
} 
else if(typeof value === "number")
{
    console.log("You scored", value)
}
else 
{
      console.log("I couldn't figure out");
}