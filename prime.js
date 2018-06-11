function prime(n){
    var divisor=2;
    while(n/2>divisor){
        if(n % divisor == 0){
            return false;
        }
        else{
            divisor++;
        }
    }
return true;
}

console.log(prime(137));