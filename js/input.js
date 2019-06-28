$(function(){
    'use strict';
// var Input=function(){}类似于此,为对象window增加一个属性
    window.Input=function(selector){
// 定义某个元素，这一步就是先定义好一个元素等待传值
        var $ele
        ,rule={};

        this.load_validator=function(){
            //Validatoe中要传入val值和rule规则（规则有了parse_rule）
            var val=this.get_val();
            this.validator=new Validator(val,rule);
        }

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
            this.load_validator();
        }
//确定我是谁的问题，进行封装
        function find_ele(){
            if(selector instanceof jquery){
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
                
            }
            


        }

        init();
    }
})