class CountDown{
    constructor(counter, action){
        this._counter = counter;
        this._action = action;
    }
    dec(){
        if(this._counter<1) return;
        this._counter--;
        console.log(this._counter);
        if(this._counter==0){
            console.log(this._counter);
           return this._action();
        }
            
    }
}

var c = new CountDown(1, () =>console.log('Done'));
console.log(c.dec());