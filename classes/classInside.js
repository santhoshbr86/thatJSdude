class Foo {
    constructor(prop){
        this.prop=prop;
    }
    static staticMethod(){
        return 'Static method';
    }
    prototypeMethod(){
        return 'Prototype method';
    }
}

var f = new Foo('init constructor');
console.log(f.prop);
console.log(Foo.staticMethod());
console.log(f.prototypeMethod());