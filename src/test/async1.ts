
var sleeper = (ms) => new Promise(resolve => setTimeout(() => resolve(ms), ms));

// sleeper(1000).then((ms) => console.log("Promise resolved to " + ms));

var testSleeper = () => {
    sleeper(1000).then((ms) => console.log("Promise resolved to " + ms));
}

var testSleeperAsync = async () => {
    console.log("Promise resolved to " + await sleeper(1000));
}

var doubler = (x) => new Promise(resolve => setTimeout(() => resolve(x*2), 1000));

var testDoublerAsync = async () => {
    // takes 2 seconds
    // console.log("Promise resolved to " + (await doubler(10) + await doubler(20)));
    
    // takes 1 seconds
    // var result1,result2;
    // await Promise.all([doubler(10).then(v => result1 = v), doubler(20).then(v => result2 = v)]);
    // console.log("Promise resolved to " + (result1+result2));
    
    // also takes 1 seconds
    // console.log("Promise resolved to " + (await Promise.all([doubler(10), doubler(20)])).
    //     reduce((a,b) => a + b)); // ignore ts error - it works fine!
}

var testImmediateResolve = async () => {
    // console.log("Result is " + (await Promise.all([Promise.resolve(30), Promise.resolve(20)])).reduce((a,b)=>a+b));
}

var testRace = async() => {
    // console.log("Result is " + await Promise.race([sleeper(1000), sleeper(2000)]));
}

var testImmediateReject = async () => {
    // console.log("Result is " + (await Promise.all([Promise.reject(30), Promise.reject(20)])).reduce((a,b)=>a+b)); // ignore ts error - it works fine!
}

// Throwing inside an async method causes the promise to be rejected.
// If called inside another async method, the throw will bubble up until 
// - caught within an async function with try{}cathc{}
// - caught byt calling .catch(reason => {}) on the promise
var returnNumber = async (shouldThrow) => { if (shouldThrow) {throw 42} return 42 };
var multBy2 = async (x) => {console.log("Multing"); return 2*x;}

var testExceptions = async (shouldThrow) => {
    let result = 0;

    // Version 1 caught using catch()
    result = await returnNumber(shouldThrow).then(x => multBy2(x)).then(x => multBy2(x)).catch(error => {
        console.log("Caught version 1",error);
        return -1;
    });

    console.log(result);
    
    // Version 2 - caught using try catch
    try {
        result = await returnNumber(shouldThrow);
        result = await multBy2(result);
        result = await multBy2(result);
    }
    catch (error) {
        console.log("Caught version 2",error);
        result = -1;
    }

    console.log(result);

    // Version 3 (not caught)
    result = await returnNumber(shouldThrow);
    result = await multBy2(result);
    result = await multBy2(result);

    console.log(result);
}

console.log("START");
// testDoublerAsync().catch(reason => console.log("Error", reason));
// testImmediateResolve();
// testRace();
// testImmediateReject().catch(reason => console.log("Error", reason));

// Test 
testExceptions(false).catch(reason => console.log("Caught top level", reason)).then(() =>
    testExceptions(true).catch(reason => console.log("Caught top level", reason))
)
console.log("END");
