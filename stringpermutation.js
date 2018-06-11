function permutations(str){
    var arr = str.split('');
    var len = arr.length;
    perms = [],
    rest={},
    picked='',
    next='';
    if(len==0){
        return [str];
    }
    for(var i=0; i<len; i++){
        rest = Object.create(arr);
        picked.splice(i,1);
        restperms = permutations(rest.join(''));
        for(var j=0;j<restperms.length;j++){
         next = picked.concat(restperms[j]);
         perms.push(next.join(''));   
        }
    }
    return perms;
}

console.log(permutations('san'));