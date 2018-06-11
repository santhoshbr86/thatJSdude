// var module = {
//     x:12,
//     getX:() => this.x
// };
// var retriveX = module.getX;
// //console.log(retriveX());
// var bondX = retriveX.bind(module);
// console.log(bondX());

var obj = {name:'ffafa'};

var greeting = function(){
    return this.name;
}

var g=greeting.call(obj);
console.log(g);
