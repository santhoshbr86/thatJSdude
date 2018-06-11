// function Person() {
//   this.age = 0;
//   setInterval(function growUp() {
//     this.age++;
//   }, 1000);
// }
function Person()
{
    this.age=0;
    setInterval(()=>
    {
        this.age++;
    },1000);
}
 var p = new Person();
 console.log(p);

 var fun = () =>( {f:20});
 console.log(fun());

