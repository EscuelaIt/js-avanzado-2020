fetch('file-to-read.txt')
  .then( response => response.text() )
  .then( resultText => console.log(resultText) )
  .catch( err => console.log(err) ); 

// fetch("file-to-read.txt")
//   .then( function(response) {
//     return response.text()
//   })
//   .then( function(resultText) {
//     console.log(resultText);
//   })
//   .catch( function(err) {
//     console.log(err);
//   });