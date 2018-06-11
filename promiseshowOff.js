
var ifMomHappy=true;
var willIgetphone = new Promise(function(resolve, reject){
    if(ifMomHappy){
        var phone = {
            phone:'Moto',
            color:'black'
        }
        resolve(phone);
    }
    else{
        var reason = new Error('Mom not happy');
        reject(reason);
    }
});

var showoff = function(phone){
    var message = "Hey friend I have Phone" + phone.name;
    return new Promise(function(resolve, reject){
        resolve(message);
    })
}
var askMom = function(){
    willIgetphone
    .then(showoff)
    .then(function(fullfilled){
        console.log(fullfilled);
    })
    .catch(function(error){
        console.log(error);
    })
    
}
askMom();