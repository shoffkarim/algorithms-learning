"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var index_1 = require("./../index");
var mergeSortedArrays = function (left, right) {
    var newArray = [];
    var index1 = 0;
    var index2 = 0;
    while (index1 < left.length && index2 < right.length) {
        var min = 0;
        if (index_1.comparator(left[index1], right[index2]) <= 0) {
            min = left[index1];
            index1++;
        }
        else {
            min = right[index2];
            index2++;
        }
        newArray.push(min);
    }
    return __spreadArrays(newArray, left.slice(index1), right.slice(index2));
};
var mergeSort = function (arr) {
    if (arr.length <= 1) {
        return arr;
    }
    var middle = Math.floor(arr.length / 2);
    var left = arr.slice(0, middle);
    var right = arr.slice(middle);
    return mergeSortedArrays(mergeSort(left), mergeSort(right));
};
console.log(mergeSort(index_1.arr));
