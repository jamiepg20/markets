'use strict';
const _ = require('lodash');
const sdk = require('node-huobi');

module.exports = class HuobiSdk {
    async coins() {
        return await sdk.market.coins();
    }

    async ticker(id) {
        return await sdk.market.ticker(id);
    }
};