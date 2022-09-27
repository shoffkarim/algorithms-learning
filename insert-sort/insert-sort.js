"use strict";
exports.__esModule = true;
var index_1 = require("./../index");
var insertSort = function (arr) {
    for (var i = 1; i < arr.length; i++) {
        var cur = i;
        while (arr[cur - 1] !== undefined && index_1.comparator(arr[cur], arr[cur - 1]) < 0) {
            index_1.swap(arr, cur - 1, cur);
            cur--;
        }
    }
    return arr;
};
console.log(insertSort(index_1.arr));
