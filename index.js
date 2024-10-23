function receivesAFunction(callback){
    callback();
}

function returnsANamedFunction(){
    function fn() {
        return "first class";
    }
    return fn;
}

function returnsAnAnonymousFunction(){
    return function() {
        return function() {
            return "is awesome"
        }
    }
}