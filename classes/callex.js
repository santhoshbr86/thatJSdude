function method(ff){
    console.log(2);
    return 'returning object'+ff;
    }

function method2(DADA){
       console.log(DADA);
       var r = method.call(this,DADA);
       console.log(r);
}
 
console.log(method2(['fsfs','fsdfsdf','fsdfdsgg']));