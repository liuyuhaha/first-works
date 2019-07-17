$(function(){
    'use strict';

//     var validator=new Validator(' ',
//     {maxlength:6
// });
//     // var result=validator.validate_maxlength();
//     var result=validator.validate_required();
//     // var result=validator.validate_pattern();
//     console.log("result:"+result);

     
    //  选中页面中所有的input[data-rule]
    // jquey属性选择器的写法
    var $inputs=$('[data-rule]');
    var inputs=[];
    $inputs.each(function(index,val){
        // 解析每一个input解析规则
        var tmp=new Input(val);
        inputs.push(tmp);
    });
    console.log("inputs",inputs);
});