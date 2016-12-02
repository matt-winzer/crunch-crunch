var express = require('express');
var cors = require('cors');
var app = express();


// var express = require('express')
//   , cors = require('cors')
//   , app = express();


app.use(cors());

app.listen(3000, function (){
console.log("working!");

});

const granolas = [{
  name: "Dirty Hippie Feet",
  description: "As crunchy as the crust that forms on a foot that hasnt been washed in a week.",
  vegan: "Yes",
  gluten: "No"
}, {
  name: "Unshaven Armpit",
  description: "The smell of this granola will knoock your socks off (in a good way)!",
  vegan: "Yes",
  gluten: "Yes"
}, {
  name: "Dreadlock and Hoola Hoops",
  description: "So delicious you feel tripping acid at a Phish show!",
  vegan: "Yes",
  gluten: "Yes"
}];

app.get('/granolas', function(req, res, next){
  res.json(granolas);
});
