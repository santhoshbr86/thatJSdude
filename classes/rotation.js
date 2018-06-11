const a='india';

function calc(a,b){
    var t=false;
    for(var i=0;i<a.length;i++){
        for(var j=0;j<b.length;j++){
         if(a[i]===b[j]){ t=true;}
    }        
    }
    return t;
}
console.log(calc(a,'ndiai'));