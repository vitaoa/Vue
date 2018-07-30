'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(helloWorldGenerator);

// import "babel-polyfill";

var a = [];

var _loop = function _loop(i) {
    a[i] = function () {
        console.log(i);
    };
};

for (var i = 0; i < 10; i++) {
    _loop(i);
}
a[6]();

var show = function show(item) {
    return item;
};
console.log(show('1234567'));

var title = '标题';
var content = '内容';
var str = '<div>' + title + '\n    <p>' + content + '</p>\n</div>';
console.log(str);

var promise = new Promise(function (resolve, reject) {
    console.log('Promise');
    resolve();
});

promise.then(function () {
    console.log('resolved.');
});

console.log('Hi!');

function helloWorldGenerator() {
    var a;
    return _regenerator2.default.wrap(function helloWorldGenerator$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    console.log('abc');
                    // yield;
                    _context.next = 3;
                    return 123;

                case 3:
                    a = _context.sent;

                    console.log('b');
                    console.log(a);

                case 6:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this);
}

var hw = helloWorldGenerator();
hw.next();
hw.next(2);

//es7/8
var json = [1, 2, 3, 2, 1];
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
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = json.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var ent = _step.value;
        //值-下标组
        console.log(ent);
    }

    //canvas
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}

var oC = document.getElementById("canvas1");
var gd = oC.getContext('2d');
gd.beginPath();
gd.strokeRect(5, 5, 100, 70);
gd.moveTo(10, 20);
//# sourceMappingURL=es6.js.map