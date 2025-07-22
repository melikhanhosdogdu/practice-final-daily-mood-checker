// Daily Mood Tracker App 

// -------------------------------------------
// Values, Data Types, and Operations
// Save today's mood and rating
let mood = "happy"; // string
let rating = 8;     // number from 1 to 10
console.log("Mood today is:", mood, "with rating", rating);

// -------------------------------------------
//  Stringing Characters Together
// Combine text to make a custom message
let username = "Mike Melikhan";
let moodMessage = "Hello " + username + "! Today you feel " + mood + ".";
console.log(moodMessage); // Output: Hello Mike Melikhan! Today you feel happy.

// -------------------------------------------
// Control Structures and Logic
// Give a suggestion based on mood
if (mood === "sad") {
  console.log("It's okay to feel sad. Try taking a walk.");
} else if (mood === "happy") {
  console.log("That's great! Keep smiling 😊");
} else {
  console.log("Mood saved. Keep tracking!");
}

// -------------------------------------------
// Working with Loops
// Show past 5 days of moods
let pastMoods = ["happy", "tired", "sad", "happy", "excited"];

for (let i = 0; i < pastMoods.length; i++) {
  console.log("Day " + (i + 1) + " mood: " + pastMoods[i]);
}

// -------------------------------------------
// Building Arrays
// Start with an empty mood history, then add moods
let moodHistory = []; // Empty array
moodHistory.push("happy");
moodHistory.push("sad");
console.log("Mood History:", moodHistory); // ["happy", "sad"]

// -------------------------------------------
// Using Arrays
// Use forEach to display each mood with its day
moodHistory.forEach(function(mood, index) {
  console.log("Mood on day " + (index + 1) + ": " + mood);
});
