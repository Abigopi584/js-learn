//Given an n x n matrix, where every row and column is sorted in non-decreasing order. Find the kth smallest element in the given 2D array.


function ksmallest(arr, k) {
    const newArr = arr.flat().sort((a, b) => a - b);
    return newArr.splice(k - 1, 1);
}


console.log(ksmallest([[10, 20, 30, 40], [15, 25, 35, 45],[24, 29, 37, 48],[32, 33, 39, 50]], 7));
