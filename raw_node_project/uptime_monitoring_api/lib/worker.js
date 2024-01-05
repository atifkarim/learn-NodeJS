/*
 * @File Name: worker.js
 * @Title: Worker related file
 * @Description: This will start the worker
 * @Author: Atif Karim
 * @Date: 05/01/2024
 */

// dependencies

// worker object - module scaffolding

const worker = {};

// timer to execute the worker process per minute

worker.loop = () => {
    setInterval(() => {
        worker.gatherAllChecks();
    }, 1000 * 60);
};

// start the worker
worker.init = () => {
    // execute all the  checks
    worker.gatherAllChecks();
    // call the loop so that hecks continue
    worker.loop();
};

// export
module.exports = worker;
