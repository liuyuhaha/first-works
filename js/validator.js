$(function(){
    'use strict'

    window.Validator=function(val,rule){
        
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
        this.validate_numric=function(){
            return $.isNumeric(val);
        }
        this.validate_pattern=function(){
            var reg= new RegExp(rule.pattern);
            return reg.test(val);
        }
// 用于完成this.validate_maxlength与this.validate_minlength前置工作
        function pre_length(){
            val=val.toString();
        }
    }
})