import server from "./server.js";

// You can keep this as a commented-out reminder of the migration:
// Old: const mergedObj = util._extend(obj1, obj2);
// New syntax would be: const mergedObj = Object.assign({}, target, source);

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