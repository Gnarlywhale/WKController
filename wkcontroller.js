// chrome.runtime.sendMessage({greeting: "hello"}, function() {
//   console.log("Test");
// });

chrome.commands.onCommand.addListener(function(command) {
  if(command === "my-command-name") {
     // Do your stuff
  }
});