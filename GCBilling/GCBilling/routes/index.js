﻿'use strict';
var express = require('express');
var router = express.Router();

var http = require('../public/helpers/http');
var constants = require('../public/helpers/constants');
const url = "https://cloudpricingcalculator.appspot.com/static/data/pricelist.json";

const datatype = 'json';
var totalHoursInMonth = (365 / 12) * 24;
var sustainedUseDiscount = 30;
var globalLocation = 'us';

router.get('/',  (req, res) => {

    var finalResult = calculatePrices();

    res.send(finalResult);
});

router.post('/',  (req, res) => {
    var finalResult = calculatePrices();

    res.send(finalResult);

});
var calculatedobject = null;

var calculatePrices = () => {

    http.get(url, {}, datatype, successcallback, null);

    return calculatedobject;
}

var successcallback = (result) => {
    var location = "us";
    calculatedobject = {};

    calculatedobject["location"] = "us-central1";
    calculatedobject["commited-usage"] = "monthly";
    calculatedobject["currency"] = "USD";
    var priceList = result["gcp_price_list"];
    var computeenginecost = {};
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-F1-MICRO"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-F1-MICRO", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-G1-SMALL"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-G1-SMALL", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-1"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-1", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-2"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-2", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-4"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-4", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-8"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-8", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-16"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-16", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-32"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-32", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-64"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-64", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-96"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-96", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-HIGHMEM-2"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-HIGHMEM-2", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-HIGHMEM-4"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-HIGHMEM-4", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-HIGHMEM-8"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-HIGHMEM-8", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-HIGHMEM-16"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-HIGHMEM-16", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-HIGHMEM-32"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-HIGHMEM-32", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-HIGHMEM-64"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-HIGHMEM-64", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-HIGHMEM-96"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-HIGHMEM-96", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-HIGHCPU-2"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-HIGHCPU-2", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-HIGHCPU-4"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-HIGHCPU-4", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-HIGHCPU-8"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-HIGHCPU-8", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-HIGHCPU-16"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-HIGHCPU-16", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-HIGHCPU-32"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-HIGHCPU-32", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-HIGHCPU-64"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-HIGHCPU-64", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-HIGHCPU-96"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-HIGHCPU-96", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-MEGAMEM-96"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-MEGAMEM-96", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-F1-MICRO-PREEMPTIBLE"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-F1-MICRO-PREEMPTIBLE", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-G1-SMALL-PREEMPTIBLE"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-G1-SMALL-PREEMPTIBLE", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-1-PREEMPTIBLE"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-1-PREEMPTIBLE", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-2-PREEMPTIBLE"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-2-PREEMPTIBLE", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-4-PREEMPTIBLE"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-4-PREEMPTIBLE", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-8-PREEMPTIBLE"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-8-PREEMPTIBLE", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-16-PREEMPTIBLE"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-16-PREEMPTIBLE", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-32-PREEMPTIBLE"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-32-PREEMPTIBLE", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-64-PREEMPTIBLE"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-64-PREEMPTIBLE", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-96-PREEMPTIBLE"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-STANDARD-96-PREEMPTIBLE", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-HIGHMEM-2-PREEMPTIBLE"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-HIGHMEM-2-PREEMPTIBLE", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-HIGHMEM-4-PREEMPTIBLE"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-HIGHMEM-4-PREEMPTIBLE", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-HIGHMEM-8-PREEMPTIBLE"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-HIGHMEM-8-PREEMPTIBLE", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-HIGHMEM-16-PREEMPTIBLE"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-HIGHMEM-16-PREEMPTIBLE", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-HIGHMEM-32-PREEMPTIBLE"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-HIGHMEM-32-PREEMPTIBLE", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-HIGHMEM-64-PREEMPTIBLE"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-HIGHMEM-64-PREEMPTIBLE", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-HIGHMEM-96-PREEMPTIBLE"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-HIGHMEM-96-PREEMPTIBLE", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-HIGHCPU-2-PREEMPTIBLE"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-HIGHCPU-2-PREEMPTIBLE", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-HIGHCPU-4-PREEMPTIBLE"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-HIGHCPU-4-PREEMPTIBLE", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-HIGHCPU-8-PREEMPTIBLE"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-HIGHCPU-8-PREEMPTIBLE", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-HIGHCPU-16-PREEMPTIBLE"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-HIGHCPU-16-PREEMPTIBLE", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-HIGHCPU-32-PREEMPTIBLE"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-HIGHCPU-32-PREEMPTIBLE", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-HIGHCPU-64-PREEMPTIBLE"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-HIGHCPU-64-PREEMPTIBLE", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-HIGHCPU-96-PREEMPTIBLE"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-HIGHCPU-96-PREEMPTIBLE", location);
    computeenginecost["CP-COMPUTEENGINE-VMIMAGE-N1-MEGAMEM-96-PREEMPTIBLE"] = calculateComputePrice(priceList, "CP-COMPUTEENGINE-VMIMAGE-N1-MEGAMEM-96-PREEMPTIBLE", location);


    computeenginecost["CP-COMPUTEENGINE-OS"] = calculateComputeOSPrice(priceList, "CP-COMPUTEENGINE-OS");



    calculatedobject["compute-engine"] = computeenginecost;


    calculatedobject[constants.appEngine.appEngineStandardInstance] = calculateAppEngineStandardInstancePrice(priceList, 2);
    calculatedobject[constants.appEngine.appEngineFlexibleInstance] = calculateAppEngineFlexibleInstancePrice(priceList, 1, 1, 1);
    calculatedobject[constants.appEngine.appEngineApisServices] = calculateAppEngineAPIsServicesCost(priceList);
}

var calculateAppEngineAPIsServicesCost = (priceList) => {
    let appenginceapicost = {};


    appenginceapicost[constants.totalEstimatedCostPerMonth] = 0;

    return appenginceapicost;
}

var calculateAppEngineFlexibleInstancePrice = (priceList, noOfCores, noOfMemoryInGB, noOfPersistentInGB) => {
    let flexappengincecost = {};
    let flexCore = priceList[constants.labels.CP_GAE_FLEX_INSTANCE_CORE_HOURS];
    let flexRAM = priceList[constants.labels.CP_GAE_FLEX_INSTANCE_RAM];
    let flexStoragePD = priceList[constants.labels.CP_GAE_FLEX_STORAGE_PD_CAPACITY];

    let coreCpuHourlyPrice = flexCore[globalLocation], ramHourlyPrice = flexRAM[globalLocation], storagePDMonthyPrice = flexStoragePD[globalLocation], totalFlexiblePrice = 0;

    let totalCorePrice = (noOfCores * totalHoursInMonth) * coreCpuHourlyPrice;
    let totalRAMPrice = (noOfMemoryInGB * totalHoursInMonth) * ramHourlyPrice;
    let totalPDPrice = noOfPersistentInGB * storagePDMonthyPrice;

    totalFlexiblePrice = totalCorePrice + totalRAMPrice + totalPDPrice;

    flexappengincecost["noOfCoresCpus"] = noOfCores;
    flexappengincecost["noOfMemoryInGB"] = noOfMemoryInGB;
    flexappengincecost["noOfPersistentDiskInGB"] = noOfPersistentInGB;
    flexappengincecost["coreCPUsPrice"] = totalCorePrice.toFixed(4);
    flexappengincecost["memoryPrice"] = totalRAMPrice.toFixed(4);
    flexappengincecost["persistentDiskPrice"] = totalPDPrice.toFixed(4);
    flexappengincecost[constants.totalEstimatedCostPerMonth] = totalFlexiblePrice.toFixed(2);
    flexappengincecost["description"] = "App Engine flexible environment instances";

    return flexappengincecost;
}

var calculateAppEngineStandardInstancePrice = (priceList, noOfInstances) => {
    let appengincecost = {};
    let appengine = priceList["CP-APP-ENGINE-INSTANCES"];
    let freeQuota = 0, hourlyPrice = appengine[globalLocation];
    if (appengine["freequota"]) {
        freeQuota = calculateFreeQuotaQuantity(appengine["freequota"]);
    }
    let totalInstanceHours = noOfInstances * totalHoursInMonth;
    let priceableUsage = totalInstanceHours - freeQuota;

    let monthlyCost = (hourlyPrice * priceableUsage).toFixed(2);

    appengincecost["noOfInstances"] = noOfInstances;
    appengincecost[constants.totalEstimatedCostPerMonth] = monthlyCost;
    appengincecost["description"] = "App Engine standard environment instances"
    appengincecost["totalInstanceHours"] = totalInstanceHours;
    appengincecost["freeQuotaHours"] = freeQuota;

    return appengincecost;
}

var calculateFreeQuotaQuantity = (freequota) => {
    let quantity = 0;
    if (freequota["quantity"]) {
        quantity = freequota["quantity"];
    }

    return quantity;
}

var calculateComputeOSPrice = (priceList, computeName) => {
    var priceCalculated = [];
    var computePlan = priceList[computeName];

    if (computePlan["win"]) {
        let os = computePlan["win"];
        let osObject = {};
        osObject["os"] = "windows";
        osObject["description"] = "Windows Server 2008r2, Windows Server 2012r2, Windows Server 2016, Windows Core";
        osObject[constants.totalEstimatedCostPerMonth] = (os["low"] * totalHoursInMonth).toFixed(2);
        priceCalculated.push(osObject);
    }
    if (computePlan["rhel"]) {
        let os = computePlan["rhel"];
        let osObject = {};
        osObject["os"] = "redhatlinux";
        osObject["description"] = "Red Hat Enterprise Linux";
        osObject[constants.totalEstimatedCostPerMonth] = (os["low"] * totalHoursInMonth).toFixed(2);
        priceCalculated.push(osObject);
    }
    if (computePlan["suse"]) {
        let os = computePlan["suse"];
        let osObject = {};
        osObject["os"] = "suse";
        osObject["description"] = "SUSE";
        osObject[constants.totalEstimatedCostPerMonth] = (os["low"] * totalHoursInMonth).toFixed(2);
        priceCalculated.push(osObject);
    }

    if (computePlan["suse-sap"]) {
        let os = computePlan["suse-sap"];
        let osObject = {};
        osObject["os"] = "suse-sap";
        osObject["description"] = "SLES for SAP";
        osObject[constants.totalEstimatedCostPerMonth] = (os["low"] * totalHoursInMonth).toFixed(2);
        priceCalculated.push(osObject);
    }
    if (computePlan["sql-standard"]) {
        let os = computePlan["sql-standard"];
        let osObject = {};
        osObject["os"] = "sql-standard";
        osObject["description"] = "SQL Server Standard (2012, 2014, 2016)";
        osObject[constants.totalEstimatedCostPerMonth] = (os["low"] * totalHoursInMonth).toFixed(2);
        priceCalculated.push(osObject);
    }
    if (computePlan["sql-web"]) {
        let os = computePlan["sql-web"];
        let osObject = {};
        osObject["os"] = "sql-web";
        osObject["description"] = "SQL Server Web (2012, 2014, 2016)";
        osObject[constants.totalEstimatedCostPerMonth] = (os["low"] * totalHoursInMonth).toFixed(2);
        priceCalculated.push(osObject);
    }
    if (computePlan["sql-enterprise"]) {
        let os = computePlan["sql-enterprise"];
        let osObject = {};
        osObject["os"] = "sql-enterprise";
        osObject["description"] = "SQL Server Enterprise (2012, 2014, 2016)";
        osObject[constants.totalEstimatedCostPerMonth] = (os["low"] * totalHoursInMonth).toFixed(2);
        priceCalculated.push(osObject);
    }

    return priceCalculated;
}

var calculateComputePrice = (priceList, computeName, location) => {
    var priceCalculated = {};
    var computePlan = priceList[computeName];
    var hourlyPrice = computePlan[location];
    hourlyPrice = hourlyPrice - ((hourlyPrice * sustainedUseDiscount) / 100);

    var monthlyPrice = (totalHoursInMonth * hourlyPrice).toFixed(2)

    priceCalculated["no-of-instances"] = 1;
    priceCalculated["total-hours-per-month"] = totalHoursInMonth;
    priceCalculated["sustained-use-discount"] = sustainedUseDiscount + " %";
    priceCalculated["effective-hourly-price"] = hourlyPrice.toFixed(4);
    priceCalculated[constants.totalEstimatedCostPerMonth] = monthlyPrice;

    if (computePlan["cores"]) {
        priceCalculated["cores"] = computePlan["cores"];
    }
    if (computePlan["memory"]) {
        priceCalculated["memory"] = computePlan["memory"];
    }
    if (computePlan["gceu"]) {
        priceCalculated["gceu"] = computePlan["gceu"];
    }
    if (computePlan["maxNumberOfPd"]) {
        priceCalculated["maxNumberOfPd"] = computePlan["maxNumberOfPd"];
    }
    if (computePlan["maxPdSize"]) {
        priceCalculated["maxPdSize"] = computePlan["maxPdSize"];
    }
    if (computePlan["ssd"]) {
        priceCalculated["ssd"] = computePlan["ssd"];
    }

    return priceCalculated;
}

module.exports = router;
