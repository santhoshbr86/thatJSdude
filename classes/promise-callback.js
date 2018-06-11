function two(){
    return 2;
}
function x(y){
    return y(); 
}
console.log(x(two));

function error(e){
    console.log(e);
}
var promise = new Promise(function(callback,e){
    console.log(callback());
});
promise.then(two,error);

