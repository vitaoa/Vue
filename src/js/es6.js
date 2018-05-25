
var a = [];
for (let i = 0; i < 10; i++) {
    a[i] = () => {
        console.log(i);
    };
}
a[6](); // 6

