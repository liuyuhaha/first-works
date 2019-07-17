$(function(){
    'use strict';

//     var validator=new Validator('fsf',
//     {maxlength:6
// });
//     // var result=validator.validate_maxlength();
//     var result=validator.validate_required();
//     // var result=validator.validate_pattern();
//     console.log("result:"+result);

     
    //  选中页面中所有的input[data-rule]
    // jquey属性选择器的写法
    var $inputs=$('[data-rule]')
    , $form=$('#signup')
    ,inputs=[];

    $inputs.each(function(index,node){
        // 解析每一个input解析规则
        var tmp=new Input(node);
        inputs.push(tmp);
    });
    
    $form.on('submit',function(e){
        e.preventDefault(); 
    })
});