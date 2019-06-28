$(function(){
    'use strict'

    window.Validator=function(val,rule){
        
        this.validate_maxlength=function(){
             val=val.toString();
             return val.length<=rule.maxlength;
        }
        this.validate_minlength=function(){
            val=val.toString();
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
    }
})