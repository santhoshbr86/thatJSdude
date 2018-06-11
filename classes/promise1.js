// var prom = new Promise( function(resolve, reject){
//    // setTimeout(resolve,100, 'foo');
//    return resolve;
// });
// console.log(prom);
function myAsync(url){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.onload = () => resolve(xhr.responseText);
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send();
    });
}

myAsync('https://jsonplaceholder.typicode.com/posts/1').then(function(res){
	console.log(temp);
}).catch(function(err){
	console.log(err);
});

