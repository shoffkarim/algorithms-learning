"use strict";
exports.__esModule = true;
exports.swap = exports.comparator = exports.arr = void 0;
exports.arr = [9, 3, 4, 1, 5, 8, 2, 7, 6, 0];
var comparator = function (a, b) { return a - b; };
exports.comparator = comparator;
var swap = function (arr, i, j) {
    var _a;
    return _a = [arr[j], arr[i]], arr[i] = _a[0], arr[j] = _a[1], _a;
};
exports.swap = swap;
