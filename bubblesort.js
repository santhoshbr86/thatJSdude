function bubble(a){
    var temp;
    for(var i=0;i<a.length;i++){
        for(var j=i+1;j<a.length;j++){
            if(a[i]>a[j]){
                temp=a[i];
                a[i]=a[j];
                a[j]=temp;
            }
        }
    }
    return a;
}
var arr = [12,30,44,32,56,88,12,43];
console.log(bubble(arr));