import server from "./server.js";


if(process.env.NODE_ENV === "test"){
  server.listen(4401, function() {
    console.log(
      "Capstone Project Backend is running on http://localhost:4401"
    );
  });
}else{
  server.listen(8080, function() {
    console.log(
      "Capstone Project Backend is running on http://localhost:8080"
    );
  });
}