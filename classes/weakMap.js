// private data you can access out the class
// Creating private data with WeakMap(), Symobl(), _
let private1 = new WeakMap();
let private2 = new WeakMap();
let private3 = Symbol();
class exampleWeakMap{
    constructor(){
        this.setPrivate1('Somthing');
        private2.set(this,'somthing else');
        this.publicData='this is public';
        this[private3]='this is again private with Symbol';
        this._private4 = 'this is private with underscore(_)';
    }
    getPrivate1(){
        //return this.private1;
        return private1.get(this);
    }
    getPrivate2(){
        return private2.get(this);
    }
    setPrivate1(s){
        private1.set(this,s);
    }
    getPrivate3(){
        return this[private3];
    }
    getPrivate4(){
        return this._private4;
    }
    greet(){
        return `${private1.get(this)} and checking data with tilda ${private2.get(this)}`;
    }
}
let obj = new exampleWeakMap();
console.log(obj.getPrivate1());
console.log(obj.getPrivate2());
console.log(obj.private1);
console.log(obj.private2);
console.log(obj.publicData);
console.log(obj.greet());
console.log(obj.getPrivate3());
console.log('*********');
console.log(obj);
console.log(obj.private3);
console.log(obj.getPrivate4());