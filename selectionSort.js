function selection(a){
var curr;
for(var j=0;j<a.length;j++){
    for(var i=j+1;i<a.length;i++){
        if(a[j]>a[i]){
            curr = a[j];
            a[j]=a[i];
            a[i]=curr;
        }
    }
    
    }
return a;
}
let arr = 'hkkk'.split('');
let result=[];
for(let i=0;i<arr.length;i++){
    result.push(Number(arr[i]));
}
console.log(selection(result));