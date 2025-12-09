// Ask how many marks
const marksCount = parseInt(prompt("How many marks will you enter today? ") || "0");
let sum = 0;

// Loop to enter each mark
for (let i = 1; i <= marksCount; i++) {
  const mark = parseFloat(prompt("Enter mark " + i + ": ") || "0");
  sum += mark;
}

// Calculate average
const average = sum / marksCount;

// Print average
console.log("You have entered " + marksCount + " marks. The student's average is " + average + "%.");

// Give feedback
if (average <= 49) {
  console.log("The student is failing.");
} else if (average <= 69) {
  console.log("The student's performance is just under average.");
} else if (average <= 79) {
  console.log("The student's performance is average.");
} else {
  console.log("The student is on the honour roll.");
}