function revWords(str){
    var rev=[],
    wordLen=0;  
    for(var i=str.length-1;i>=0;i--){
        if(str[i]==' '|| i==0){
            rev.push(str.substr(i,wordLen+1));
            wordLen=0;
            console.log(rev);
       }
       else
        wordLen++;
    }
    return rev.join(' ');
}

function quickREV(str){
    return str.split(' ').reverse().join(' ');
}

function reswordAlt(str){
    var rev=[];
    str = str.split(' ');
    for(var i=str.length-1;i>=0;i--){
        rev.push(str[i]);
    }
    return rev.join(' ');
}

console.log(reswordAlt('I am bit confuse dsadasdsa'));