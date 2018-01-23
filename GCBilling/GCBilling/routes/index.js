'use strict';
var express = require('express');
var querystring = require('querystring');
var https = require('https');

var router = express.Router();


//https:// cloudpricingcalculator.appspot.com/static/data/pricelist.json
var host = 'cloudpricingcalculator.appspot.com';

/* GET home page. */
router.get('/', function (req, res) {
  //  res.render('index', { title: 'Express' });

    var dataString = '';// JSON.stringify(data);
    var endpoint = '/static/data/pricelist.json';

    //if (method == 'GET') {
    //    endpoint += '?' + querystring.stringify(data);
    //}
    //else {
    var    headers = {
            'Content-Type': 'application/json',
            'Content-Length': 0
        };
    //}

    var options = {
        host: host,
        path: endpoint,
        method: 'GET',
        headers: headers
    };

    var req1 = https.request(options, function (res1) {
        res1.setEncoding('utf-8');

        var responseString = '';

        res1.on('data', function (data) {
            responseString += data;
        });

        res1.on('end', function () {
            console.log(responseString);
            var responseObject = JSON.parse(responseString);
            success(responseObject);

            res.send({ result: responseObject });
        });
    });

    req1.write(dataString);
    req1.end();

   
});

module.exports = router;
