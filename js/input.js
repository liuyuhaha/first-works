$(function(){
    'use strict';
// var Input=function(){}类似于此,为对象window增加一个属性
    window.Input=function(selector){
// 定义某个元素，这一步就是先定义好一个元素等待传值
        var $ele
        ,me=this
        ,rule={required:true};

        this.load_validator=function(){
            var val=this.get_val();
            this.validator=new Validator(val,rule);
        }
            //Validatoe中要传入val值和rule规则（规则有了parse_rule）

        //get val的值
        this.get_val=function(){
            return $ele.val();
        }

//一开始就选好的方法
        function init(){
        //找到元素
            find_ele();
        //找到元素所绑定的验证规则
            parse_rule();
        //检测是否合法，传到validator里面，这次将其暴露出去
        //当使用new 关键字时候,this 指向的是当前开辟的这个对象实例，
        // 因此外部用一个变量引用它，就可以使用这个新对象实例当不使用new
        // ,this就是指向window 。但是对于dom事件中，需要另外理解了。
            me.load_validator(); 
        //开始检测用户是否输入，没刷新也可以检测
            listen();
        }

        function listen(){
            //change节省资源，keyup，当用户在输入过程就在检测
            $ele.on('change',function(){
               var re= me.validator.is_valid(me.get_val());
               console.log("valid:",re);
            })
        }


//封装load_validator
//确定我是谁的问题，进行封装
        function find_ele(){
            if(selector instanceof jQuery){
                $ele=$(selector);
            }else{
                $ele=$(selector);
            }
        }

        function parse_rule(){
            var i;
            //将自定义属性data-rule中字符串提取出来用jquery方法
            //$ele.data("data-后半部分名字")
            var rule_str=$ele.data("rule");
            //如果rule_str里面没东西，直接返回
            if(!rule_str) return;

            //这个时候rule_arr通过.split()的方法将rule_str分格的第一步
            //['maxlength:10','required:false',....],这个只是字符串构成的数组
            var rule_arr=rule_str.split('|');
            //继续分割，迭代的放法
            for(i = 0; i < rule_arr.length; i++){
                var item_str = rule_arr[i];//获得单条的['maxlength:10']
                //继续分割单条的字符串["mian","18"]
                var item_arr=item_str.split(":");
                //rule["min"]="18",打印这个rule就会是{min:18}
                rule[item_arr[0]]=JSON.parse(item_arr[1]);
                //不加只要是个值就一定是字符串,加了JSON的语法可以变成int和字符串
                //JSON.parse内部数据类型错误的话会出现
                
            }
            


        }

        init();
    }
});