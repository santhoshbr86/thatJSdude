// class  which returns its name.
// class Can't hoisted as functions.
// Two types of Class declaration.
//  class declarations and class expressions.
    
const MyClass = class Me{
    getMyName(){
        return Me.name;
    }
};

let r = new MyClass();
console.log(r.getMyName());
