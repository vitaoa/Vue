// import "babel-polyfill";

let a = [];
for (let i = 0; i < 10; i++) {
    a[i] = () => {
        console.log(i);
    };
}
a[6]();

let show = item =>item;
console.log(show('1234567'));


let title = '标题';
let content = '内容';
let str = `<div>${title}
    <p>${content}</p>
</div>`;
console.log(str);


let promise = new Promise(function(resolve, reject) {
    console.log('Promise');
    resolve();
});

promise.then(function() {
    console.log('resolved.');
});

console.log('Hi!');

function* helloWorldGenerator() {
    console.log('abc');
    // yield;
     let a = yield  123;
    console.log('b');
    console.log(a);
}

let hw = helloWorldGenerator();
hw.next()
hw.next(2)


//es7/8
let json =[1,2,3,2,1];
// for(let i in json){ //下标
//     console.log(i);
// }
// for(let key of json.keys()){ //下标
//     console.log(key)
// }
// for(let i of json){ //值
//     console.log(i);
// }
// for(let value of json.values()){ //值
//     console.log(value)
// }
for(let ent of json.entries()){ //值-下标组
    console.log(ent)
}


//canvas
let oC = document.getElementById("canvas1");
let gd = oC.getContext('2d');
gd.beginPath();
gd.strokeRect(5,5,100,70);
gd.moveTo(10,20);
