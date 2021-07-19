const receivesAFunction = function(callback) {
    callback();
}

const returnsANamedFunction = function() {
    return function namedFunction() {
        console.log("named function");
    }
}

const returnsAnAnonymousFunction = function() {
    return () => console.log("anonymous function");
}