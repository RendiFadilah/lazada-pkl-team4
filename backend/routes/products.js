var express = require('express');
var route = express.Router();
var landingPage = require('../model/product_model');




/* GET home page. */
route.get('/v1/api/lazada', function(req, res, next) {
  let body;
  if(!req.query.searchKey){
    body = {searchKey: ''};
  }else{
    body = req.query;
  }
  landingPage.AllDataProducts(body, function(err,result) {
   if(err) throw console.log('Error When routing landingpage',err)
  res.send(result)
  });

});

route.get('/v1/api/lazada/dp/:id', (req, res) => {
  const userId = req.params.id;
  landingPage.DetailProducts(userId, (err,result) => {
      console.log(result);
      if(err) throw console.log("error when find one data" , err);
      res.send(result)
  })
})

route.post('/v1/api/lazada', function(req, res, next) { 
  landingPage.insertDataProducts(req.body,(err, result) => {
    if(err) throw console.log('Error when routing landingpagge',err);
    res.send(result)
  })  
})





route.put('/v1/api/lazada/:id', (req, res)=> {
  let paramsId = req.params.id;
  landingPage.updateProduct(req.body,paramsId,(err, result) => {
    if(err) throw console.log('Error when routing landingpagge',err);
    res.send(result)
  })  
})


module.exports = route;

