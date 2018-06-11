function x(){
    this.name="dddd";
   return function y(){
        return this.name;
    }
}

var c = new x();
var b = x();
console.log(c);
console.log(b());
