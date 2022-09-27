"use strict";
exports.__esModule = true;
var index_1 = require("./../index");
var partition = function (arr, start, end) {
    var pivotValue = arr[end];
    var pivotIndex = start;
    for (var i = start; i < end; i++) {
        if (index_1.comparator(arr[i], pivotValue) < 0) {
            index_1.swap(arr, i, pivotIndex);
            pivotIndex++;
        }
    }
    index_1.swap(arr, pivotIndex, end);
    return pivotIndex;
};
var quickSort = function (arr, start, end) {
    if (start === undefined) {
        start = 0;
    }
    if (end === undefined) {
        end = arr.length - 1;
    }
    if (start >= end) {
        return "Error start >= end";
    }
    var pivot = partition(arr, start, end);
    quickSort(arr, start, pivot - 1);
    quickSort(arr, pivot + 1, end);
    return arr;
};
console.log(quickSort(index_1.arr));
