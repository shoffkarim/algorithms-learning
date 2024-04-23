"use strict";
exports.__esModule = true;
var index_1 = require("./../index");
var selectionSort = function (arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        var min = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (index_1.comparator(arr[min], arr[j]) > 0) {
                console.log(arr[min], arr[j]);
                min = j;
            }
        }
        if (min !== i) {
            index_1.swap(arr, i, min);
        }
    }
    return arr;
};
console.log(selectionSort(index_1.arr));
