var sinleton = (function(){
    var instance;
    function createInstance(){
        var object = Object('this ins new object');
        return object;
    }
    return{
        getInstance:function(){
            if(!instance){
                instance= createInstance();
            }
            return instance;
        }
    }
})();

var newobjA = sinleton.getInstance();
var newobjB = sinleton.getInstance();
console.log(newobjA);
console.log(newobjB);
