$(function(){
    'use strict'

    var validator=new Validator('123456789',
    {pattern:'^[a-zA-Z0-9]*$'
});
    // var result=validator.validate_maxlength();
    // var result=validator.validate_numric();
    var result=validator.validate_pattern();
    console.log("result:"+result);
});