var getConsumption = require('./getConsumption.js');
var Promise = require('bluebird');

//https://github.com/merencia/node-cron
//var cron = require('node-cron');

module.exports = function init(){
    return gladys.param.getValue(`TPLINK_SCRUT_CONSO`)
        .then((timerecupconso) => {

            // get consomation frequency
            sails.log.debug(`getConsumption will scan device each ${timerecupconso} minutes.`);
            // scan checkuserspresence at the given frequency
            setInterval(function(){
                getConsumption({'type': '%HS110%'});
                }, parseInt(timerecupconso)*60*1000);
            });
};