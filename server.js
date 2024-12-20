var figlet = require("figlet");

figlet("My Works!!abcdupdates", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});