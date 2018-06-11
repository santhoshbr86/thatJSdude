function reverse(str){
    if(str === ''){
        return '';
    }
    else{
        //console.log(str.substr(1));
       // console.log(str.charAt(0));
       console.log(reverse(str.substr(1))+str.charAt(0));
        return reverse(str.substr(1))+str.charAt(0);

    }
}
console.log(reverse('dasdsa'));

function reverse(str){
    var rev='';
    for(var i=str.length-1;i>=0;i--){
        rev +=str[i]
        console.log('loop:'+rev);
    }
    return rev;
}
var str = 'wradarw'
console.log(reverse(str)===str);

String.prototype.reverse = function(){
    console.log(this.length);
    if(!this || this.length <2) return this;
    return this.split('').reverse().join('');
}


console.log('h'.reverse());