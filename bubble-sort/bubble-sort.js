"use strict";
exports.__esModule = true;
var index_1 = require("./../index");
var bubbleSort = function (arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        for (var j = 0; j < i; j++) {
            if (index_1.comparator(arr[j], arr[j + 1]) > 0) {
                console.log(arr[j], arr[j + 1]);
                index_1.swap(arr, j, j + 1);
            }
        }
    }
    return arr;
};
console.log(bubbleSort(index_1.arr));
