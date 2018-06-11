{
    function foo() {return 1;}
    foo()===1   
    console.log(foo());
    {
        function foo() {return 2;}
        foo()===2;
        console.log(foo());
    }
   function foo(){return 3;}
    console.log(foo());
}