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
    ,$card=$('span[name]')
    ,$nn
    ,loaded=false
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

//创建私有函数来获取由含有name属性的span元素，再return
    function get_span_name(){
        //return指定id元素，id名字如下
       return '#'+$card.attr('name')+'_content';
    }
    //同样创建另一个私有函数来调用获取id名称的函数，再赋值给一个变量，进而获取id元素
    function kid(){
         $nn=$(get_span_name());
    }
    
    $card.on("mouseover",function(){
        kid();
        //如果$nn为可见，则当有动作时就会隐藏，否则会显示
        if($nn.is(':visible')){
            $nn.slideUp();
        }else{
        //原本loaded为flase，所以！loaded为true，加载之后loaded会变为true
        //隐藏之后再次加载就不会再请求load了，因为此时的！loaded为false
            if(!loaded){
                $nn.load('card1.html');
                loaded=true;
            }
            $nn.slideDown();
        }
        
        // $nn.toggle();
    });
    

});