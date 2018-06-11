function fibo(n){
   
    if(n<=1) return n;
    else
        return fibo(n-1) + fibo(n-2);
}

function fiboAct(n){
    var fibo = [0,1];
    for(var i=2;i<=n;i++){
        fibo[i] = fibo[i-1]+fibo[i-2];
    }
    return fibo[n];
}

console.log(fibo(12));
console.log(fiboAct(12));