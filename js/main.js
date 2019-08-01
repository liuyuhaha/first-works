$(function(){
    'use strict';

//     var validator=new Validator('fsf',
//     {maxlength:6
// });
//     // var result=validator.validate_maxlength();
//     var result=validator.validate_required();
//     // var result=validator.validate_pattern();
//     console.log("result:"+result);

     
    //  选中页面中所有的input[data-rule]，服务于input检测
    // jquey属性选择器的写法
    var $inputs=$('[data-rule]')
    , $form=$('#signup')
    ,inputs=[]
    // cam定义服务于CAM子用户登录的点击动作
    ,cam=$('.inner')
    // 下面四个定义服务于主账号ID与登录方式弹出框
    ,spans=$('span[id]')
    ,someid
    ,$span
    // 服务于企业微信子用户登录切换
    ,deflog=$('.dif_login_list')
    ,$li=$('li[data-control]')
    ,flogid
    ,txt
    ,con=$('#container')
    ,loaded=false
    ;

// input检测是否合法
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
                $inputs.addClass('red');
                return;
            }
        } 
        //signup写好可以将alert替换掉
        alert("valid");
    });



    // 主账号ID与登录方式弹出框
    function get_loadid(){
        return '#'+someid+'_content';
    }

    function pack_loadid(){
        $span=$(get_loadid());
    }

    spans.on('mouseenter',function(){
        someid=$(this).attr('id');
        pack_loadid();
        $span.show();
    });

    spans.on('mouseleave',function(){
        someid=$(this).attr('id');
        pack_loadid();
        $span.hide();
    });



    // CAM子用户登录下拉选项
    $('#dif_login0').on('click',
    function(){
        if(cam.is(':visible')){
            cam.hide();
        }else{
            cam.show();
        }
    });
    

    // 企业微信子用户登录切换
    
    function get_txt(){
        // 改写change-value上的文字
        $('#change-value').text(txt);
    }
    

    deflog.on('click',function(){
        // flogid=$(this).attr('id')
        flogid=$(this).attr('id');
        // txt获取被点击按钮上的text
        txt=$(this).children().text();
        get_txt();
        if(!loaded && flogid=='dif_login2'){
            $li.addClass('disappear');
            con.removeAttr('style')
            .load('wechat.html');
            loaded=true;
        }else{
            if(loaded && flogid=='dif_login2'){
                $li.addClass('disappear');
                con.removeAttr('style').show();
            }else{
                con.hide();
                $li.removeClass('disappear');
            }
        }
    });







    // 最终跟服务器通信的function
    // function signup(){
    //     $.post("http://localhost:8000/index.html",{})
    // }
    // var form=$('#search');
    // var input=$('input#username');
    // var result=$('#result');
    // var username;

    // form.on('submit',function(e){
    //     e.preventDefault();
    //     username=input.val();
    //     $.ajax('https://api.github.com/users/' + username)
    //     .done(function(data){
    //         var html=
    //         '<div>用户名：'+data.login+'</div>'+
    //         '<div>介绍：'+(data.bio ||'nothing')+'</div>'
    //         result.html(html);
    //     });
    // });

});