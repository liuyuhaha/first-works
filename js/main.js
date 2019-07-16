$(function(){
    'use strict';

//     var validator=new Validator('..',
//     {pattern:'^[a-zA-Z0-9]*$'
// });
//     // var result=validator.validate_maxlength();
//     // var result=validator.validate_numric();
//     var result=validator.validate_pattern();
//     console.log("result:"+result);

     var test=new Input("#test");//先实例化input，input已经在input.js实例化了
     var valid=test.validator.is_valid(); 
     console.log('valid:',valid);
    //  选中页面中所有的input
});