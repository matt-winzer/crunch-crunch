$(document).ready(function(){
  $.get('http://localhost:3000/granolas', addGranola);
});


function addGranola(data) {
  console.log(data);
}
