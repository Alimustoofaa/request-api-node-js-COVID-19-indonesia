const express   = require('express')
const router    = express.Router()
const request   = require('request')
const fetch = require('node-fetch')


//assign api to constant
const dataIndo = "https://api.kawalcorona.com/indonesia/";
const dataProv = "https://api.kawalcorona.com/indonesia/provinsi/";

// function containing api parser
function tickers(){
 request(dataIndo, function(error, response, body){
    // handle errors if any
    if(error){
      console.log(error);
    } else {
      // parse json
      let data = JSON.parse(body);
      // get last price
      indo={
        meninggal : data[0].meninggal,
        sembuh : data[0].sembuh,
        positif : data[0].positif
    }
    }
  });

  request(dataProv, function(error, response, body){
    if(error){
      console.log(error);
    } else {
        let dataProv = JSON.parse(body);
        prov = (dataProv)
      //console.log(dataProv);
    }
  });
}
// function to trigger ticker function and set interval. (this is optional)
function getTickers(){
  tickers();
  // set interval
  setInterval(tickers, 60000);
}

//activate getTickers function
getTickers();
router.get('/', function(req, res){
    res.render('home', ({dataIndo: indo, dataProv: prov}));
   });
module.exports = router