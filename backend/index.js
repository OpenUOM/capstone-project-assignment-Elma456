process.noDeprecation = true;
const server = require("./server.js");

// Use an env-specified port if present (autograder/test runner can set PORT).
// Default to 8080 so the Angular proxy config (/api/* -> localhost:8080) works
// in all environments including test.
const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Capstone Project Backend is running on http://localhost:${PORT}`);
});