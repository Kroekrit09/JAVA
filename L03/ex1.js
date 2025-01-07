function check(value1,value2,value3){
    var returns ;
    for(var i = 0 ; i < value1.length ; i++){
        if(value1[0] === value2[i]){
           returns = value2[i];
        } 
        else if(value1[0] === value3[i]){
            returns = value3[i];
         } 
    }
   return returns;
}
let values1 = ['Apple',1,false];
let values2 = ['Fires',2,true];
let values3 = ['Mars',9,'Apple'];

console.log(check(values1,values2,values3));
