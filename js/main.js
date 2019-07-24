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
    ,inputs=[]
    ,oh
    ,$nn
    ,$boh
    ,loaded=false
    ,reload=false
    ;


    $inputs.each(function(index,val){
        // 解析每一个input解析规则
        var tmp=new Input(val);
        inputs.push(tmp);
    });
    
    $form.on('submit',function(e){
        //.preventDefault()方法阻止元素发生默认的行为
        e.preventDefault();
        // trigger() 方法触发被选元素的指定事件类型。为了当用户提交的时候不刷新
        //并且将所有input元素自动blur，进行检测
        $inputs.trigger("blur");
        for(var i=0; i<inputs.length; i++){
            var item =inputs[i];
            //.validator.is_valid()用来检测的私有方法
            var r=item.validator.is_valid();
            if(!r){
                alert("invalid");
                return;
            }
        } 
        //signup写好可以将alert替换掉
        alert("valid");
    });

    // 最终跟服务器通信的function
    // function signup(){
    //     $.post("http://localhost:8000/index.html",{})
    // }
function pack_ele(){
    $nn=$('#'+oh+'_content');
    $boh=oh+'_content.html';
    return $nn,$boh;
}

function find_def(){
    
}

$('span').on("mouseover",function(e){
    oh=$(e.target).attr('name');
    pack_ele();
    if(!loaded && !reload){
        $nn.load($boh);
        $nn.slideDown();   
        loaded=true; 
        reload=true;               
    }else{
        $nn.slideDown();
        loaded=true;
        
    }
});

$('span').on("mouseleave",function(e){
    oh=$(e.target).attr('name');
    pack_ele();
    if(loaded){
        $nn.slideUp();
        loaded=false;           
    }   
});



});