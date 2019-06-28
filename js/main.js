$(function(){
    'use strict'

    var validator=new Validator('123',{maxlength:10});
    // var result=validator.validate_maxlength();
    var result=validator.validate_numric();
    console.log("result:"+result);
});