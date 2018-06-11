function palindrome(str){
    var len = str.length;
    for(var i=0;i<len/2;i++){
        if(str[i]!==str[len-i-1]){
            return false;
        }
    }
    return true;
}

function quickPalindrome(str){
    return str === str.split('').reverse().join('');
}

console.log(quickPalindrome('madam'));
console.log(quickPalindrome('dasdasa'));
console.log(quickPalindrome('dsda'));