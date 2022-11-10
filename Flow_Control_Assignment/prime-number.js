// function prime(num) {
//     if (num < 2) {
//         return
//     } else {
//         for (i = 2; i < num + 1; i++) {
//             for (j = 2; j < i + 1; j++) {
//                 if (j == i) {
//                     console.log(i);
//                 } else if (i % j == 0) {
//                     break;
//                 } else if (i % j !== 0) {
//                     continue;
//                 }
//             }
//         }

//     }
// }
function prime(num) {
    var arr = [1];
    // 遍歷任意數, 利用test方法判斷遍曆數是否為質數;如果是, 就加入數組;
    for (var i = 2; i < num + 1; i++) {
        if (test(i)) {
            arr.push(i);
            console.log(arr)
        }
    }
    return arr;
}
prime(11)