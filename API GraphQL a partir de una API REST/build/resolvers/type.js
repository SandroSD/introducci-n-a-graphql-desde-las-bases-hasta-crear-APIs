"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../lib/utils");
const type = {
    Season: {
        year: parent => parent.season,
        urlMobile: parent => utils_1.getWikipediaMobileUrl(parent.url)
    },
    Race: {
        name: parent => parent.raceName,
        circuit: parent => parent.Circuit,
        urlMobile: parent => utils_1.getWikipediaMobileUrl(parent.url)
    },
    Circuit: {
        id: parent => parent.circuitId,
        name: parent => parent.circuitName,
        location: parent => parent.Location,
        urlMobile: parent => utils_1.getWikipediaMobileUrl(parent.url)
    },
    Location: {
        lng: parent => parent.long
    },
    Driver: {
        id: parent => parent.driverId,
        urlMobile: parent => utils_1.getWikipediaMobileUrl(parent.url),
        name: parent => `${parent.givenName} ${parent.familyName}`
    }
};
exports.default = type;
