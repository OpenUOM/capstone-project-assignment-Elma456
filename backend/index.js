import server from "./server.js";

// Example of the change applied:
// Old: const mergedObj = util._extend(obj1, obj2);
const mergedObj = Object.assign(obj1, obj2); 


if (process.env.NODE_ENV === "test") {
  server.listen(4401, function() {
    console.log(
      "Capstone Project Backend is running on http://localhost:4401"
    );
  });
} else {
  server.listen(8080, function() {
    console.log(
      "Capstone Project Backend is running on http://localhost:8080"
    );
  });
}