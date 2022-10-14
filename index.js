// code your solution here
function saturdayFun(activity = "roller-skate"){
return `This Saturday, I want to ${activity}!` 
} 
saturdayFun("bathe my dog")

const mondayWork = function(a ="go to the office"){
    return `This Monday, I will ${a}.`
}
mondayWork()

const wrapAdjective = function(b){
    return function(c){
    return `You are ${b}${c}${b}!`
    }
    

    
}

wrapAdjective("*")("A decicated programmer")