$(function(){
    'use strict';

    window.Validator=function(val,rule){

        //总方法
        this.is_valid = function(new_val){
            var key;
            val=new_val || val;
            //如果不是必填项且用户未填写任何内容则直接判定为合法跳过
            if(!rule.required && !val)
            return true;
            //获得值之后要判断用那种方法来验证
            //动态部分就是this.validate_的后半部分，用迭代的方式
            //rule{minlength：6，maxlength：10}，有几个规则就会迭代几次用几次方法
            for(key in rule){
                //一开始就已经检测了是否为必填项，就需要防止重复检查
                if(key==="required")
                continue;

                //调用rule中相对应的方法并触发它
                var r = this['validate_' +key]();
                //但如果迭代一个方法之后返回false就没必要进行下去
                if(!r) return false;
            }
            return true;

        }
        
        this.validate_maxlength=function(){
            pre_length();
             return val.length<=rule.maxlength;
        }
        this.validate_minlength=function(){
            pre_length();
            return val.length>=rule.minlength;       
        }
        this.validate_required=function(){
            var real=$.trim(val);
            if(!real&&real!==0){
                return false;
            }return true;
        }
        this.validate_max=function(){
            pre_max_min();
            return val <= rule.max;
        }
        this.validate_min=function(){
            pre_max_min();
            return val>=rule.min;
        }
        this.validate_numeric=function(){
            return $.isNumeric(val);
        }
        this.validate_pattern=function(){
            var reg= new RegExp(rule.pattern);
            return reg.test(val);
        }
// 用于完成this.validate_maxlength与this.validate_minlength前置工作
        function pre_max_min(){
            val=parseFloat(val);
        }

        function pre_length(){
            val=val.toString();
        }
        
    }
})