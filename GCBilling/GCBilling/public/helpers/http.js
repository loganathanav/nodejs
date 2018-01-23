'use strict';
var axios = require("axios");
require('es6-promise').polyfill();

var http = {
     get: function (url, data, dataType, successCallback, errorCallback) {
             axios.get(url, { responseType: dataType }).then(function (result) {
            if(successCallback)
                successCallback(result.data);
        }).catch(function (error) {
            console.log(error);
            if(errorCallback)
                errorCallback(error);
        });
    },
    
    post: function (url, data, dataType, successCallback, errorCallback) {
     
        axios.post(url, data).then(function (result) {
            if(successCallback)
                successCallback(result.data);
        }).catch(function (error) {
            console.log(error);
            if(errorCallback)
                errorCallback(error);
        });
    }

};


module.exports = http;
