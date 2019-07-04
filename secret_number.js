'use strict';
module.exports = function() {
    let num = Math.floor(Math.random() * 1000001);
    function secretNumber(){
        
        return num;
    };
    return secretNumber;
};