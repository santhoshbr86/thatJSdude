for(var i=0;i<5;i++){
    setTimeout(function(x){
       return function(){ console.log(x)};
    }(i));
}
