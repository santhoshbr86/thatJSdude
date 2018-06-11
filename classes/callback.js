function logoff(userData){

    if(typeof userData ==='string'){
        console.log(userData);
    }
    else{
        if(typeof userData === 'object'){
            for(var item in userData){
                console.log(item+':'+userData[item]);
            }
        }
    }
}

var obj = {
    name:'gggg', 
    class:'1st',
    grade:'A',
    setName:function(f){
        logoff(f);
        console.log('dasdas!1@##');
    }
};
function getItem(option,callback, callobj){
    callback.call(callobj,option);
}

//getItem(obj,logoff);
//getItem('nkdsadsadsad',logoff);
getItem({name:'dada',class:'dasdada'},obj.setName,obj);
