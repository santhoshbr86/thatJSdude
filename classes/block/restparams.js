function sum(a,b,...args){
    return args.reduce((pre,cur) =>pre+cur);
}
console.log(sum(1,2,3,4));