const count = parseInt(process.argv[2]);

if (isNaN(count)) {
  console.log("Missing number of occurrences");
} else {
  for (let i = 0; i < count; i++) {
    console.log("C is fun");
  }
}
// This code prints "C is fun" a specified number of times based on the command line argument provided.
// If no valid number is provided, it outputs "Missing number of occurrences".