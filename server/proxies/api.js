// 'use strict';

// const proxyPath = '/api';

// module.exports = function(app) {
//   const express=require('express');
//   const curlRequest=require('request');
//   app.use(express.json());
//   app.use(proxyPath, function(req, res, next){
//     const curl= new curlRequest();

//   curl
//     .setHeaders([
//      'Authorization: Bearer b6qMxSFhGdH5bVaXOQJ-f35nUO9elJ9amKQLLrR2jr9ZyKb0ylF4m4YXi_q1SGCDzrm94ayzza4XzwFqhdbg36U4yAyLu4gvDuoHD0PekofxoZ9Qh8ysSfj1op2XXXYx'
//     ])
//     .setBody(req.body)
//   .post('https://api.yelp.com/v3/graphql')
//   .then(({statusCode,body,headers})=>{
//     res.send(body);
//     console.log(statusCode,body,headers);

//   })
//   .catch(e=>{
//     console.log(e);
//   })
//   });
// };
'use strict';

const proxyPath = '/api';

module.exports = function(app) {
  const express = require('express');
  const request = require('request');
  app.use(express.json());
  app.post(proxyPath, function(req, res, next) {
    req.body.variables = JSON.stringify(req.body.variables);

    let options = {
      url: 'https://api.yelp.com/v3/graphql',
      headers: {
        Authorization:'Bearer b6qMxSFhGdH5bVaXOQJ-f35nUO9elJ9amKQLLrR2jr9ZyKb0ylF4m4YXi_q1SGCDzrm94ayzza4XzwFqhdbg36U4yAyLu4gvDuoHD0PekofxoZ9Qh8ysSfj1op2XXXYx'

      },
      method: 'POST',
      body: req.body,
      json: true
    };

    request(options, function(err, httpResponse, body) {
      res.send(body);
      // console.log(err, httpResponse, body);
    });
  });
};