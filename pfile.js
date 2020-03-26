function ngex(){
    setTimeout(
        ()=>{console.log('3초 흐름1');}
        ,3000
    );
}

function ngex2(){
    return new Promise(function(resolve){
        setTimeout(
            ()=>{
                console.log('3초 흐름2');
                resolve('next2');
            }
            ,3000
        );
    });
}

var a = new Promise(resolve => resolve('next1'))
     .then((result) => {return ngex();})
     .then(() => {return ngex2();})
     .then((result) => {console.log(result);
                        return new Promise((resolve)=>resolve(333));})
     .then(result => console.log(result));

console.log(typeof a);

function doSomthing(msg){
    return new Promise(function (resolve){
        setTimeout(
            function(){
                console.log(msg);
                resolve('old_result');
            }, 1000);
    });
}

doSomthing('1n')
    .then((result)=>{console.log(result);
                    return new Promise(
                        (resolve)=>{
                                    setTimeout(function(){
                                    console.log('2',result);
                                    resolve('old_next2');
                                    }, 1000);
                                });
                    })
    .then((result) => console.log(result));