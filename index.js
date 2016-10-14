/**
 * Created by Administrator on 2016/10/11.
 */
var express = require('express');
var app = express();
var profiles = require('./user/profiles.js');
app.get('/api/getUserInfo',function(req,res,next){
  var infoObj = profiles.getProfiles();
  res.json(infoObj);
});

app.listen('3000',function(){
  console.log('server started!');
});