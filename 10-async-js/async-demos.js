(()=> {
  // sync
  function addSync(x, y) {
    console.log(`   [@service] - processing ${x} and ${y}`);
    const result = x + y;
    console.log(`   [@service] - return result`);
    return result;
  }

  function addSyncClient(x, y) {
    console.log(`[@client] invoking the service`);
    const result = addSync(x, y);
    console.log(`[@client] result = ${result}`);
  }
  window["addSyncClient"] = addSyncClient;

  // async
  function addAsync(x, y, onResult) {
    console.log(`   [@service] - processing ${x} and ${y}`);
    setTimeout(function(){
        const result = x + y;
        console.log(`   [@service] - return result`);
        onResult(result);
    }, 4000)
  }

  function addAsyncClient(x, y) {
    console.log(`[@client] invoking the service`);
    addAsync(x, y, function(result){
        console.log(`[@client] result = ${result}`);
    });
    
  }
  window["addAsyncClient"] = addAsyncClient;

  function addAsyncPromise(x,y){
    console.log(`   [@service] - processing ${x} and ${y}`);
    const p = new Promise(function (resolveFn, rejectFn) {
      setTimeout(function () {
        const result = x + y;
        console.log(`   [@service] - return result`);
        resolveFn(result);
      }, 4000);
    });
    return p;
  }
  
  /* 
  function addAsyncPromiseClient(x,y){
    console.log(`[@client] invoking the service`);
    p = addAsyncPromise(x,y);
    p.then(function (result) {
      console.log(`[@client] result =', ${result}`);
    });
  } 
  */

  async function addAsyncPromiseClient(x, y) {
    console.log(`[@client] invoking the service`);
    const result = await addAsyncPromise(x, y);
    console.log(`[@client] result =', ${result}`);
    const doubleResult = result * 2
    return doubleResult
  }

  window["addAsyncPromiseClient"] = addAsyncPromiseClient;



})()