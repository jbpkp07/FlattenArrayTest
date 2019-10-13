"use strict";
function flattenArray(array) {
    if (!Array.isArray(array)) {
        throw new Error("ERROR flattenArray(array):  input argument was not an array.");
    }
    const flattenedArray = [];
    for (const item of array) {
        if (!Array.isArray(item)) {
            flattenedArray.push(item);
        }
        else {
            const subArray = flattenArray(item);
            for (const subItem of subArray) {
                flattenedArray.push(subItem);
            }
        }
    }
    return flattenedArray;
}
module.exports = flattenArray;
