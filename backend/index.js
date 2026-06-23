const server = require("./server.js");

const port = process.env.PORT || (process.env.NODE_ENV === "test" ? 3000 : 8080);

server.listen(port, () => {
  console.log(`Capstone Project Backend is running on http://localhost:${port}`);
});
