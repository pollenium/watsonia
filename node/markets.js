"use strict";
exports.__esModule = true;
var Market_1 = require("./classes/Market");
var pollenium_buttercup_1 = require("pollenium-buttercup");
var marketStructs = [
    {
        id: 0,
        name: 'Trump Convicted',
        imageFileName: 'trump-shocked.jpg'
    },
    {
        id: 1,
        name: 'Trump Re-Elected 2020',
        imageFileName: 'trump-victorious.jpg'
    },
    ,
    {
        id: 2,
        name: 'Reccession 2020',
        imageFileName: 'trump-victorious.jpg'
    }
];
exports.markets = marketStructs.map(function (marketStruct) {
    return new Market_1.Market(marketStruct.id, marketStruct.name, marketStruct.imageFileName, pollenium_buttercup_1.Address.genNull());
});
