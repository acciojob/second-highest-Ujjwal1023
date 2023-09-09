//your JS code here. If required.
// let arr = [3, 10, 9, 12, 18, 5];
// //                i=2

let a = arr[0],
  b = arr[1];

for (let i = 2; i < arr.length; i++) {
  let currentMax = a > b ? a : b; //3
  let currentMin = a < b ? a : b; //

  if (currentMax > arr[i]) {
    a = currentMin; // a = 3
    b = arr[i]; // b = 9
  }
}

console.log(a > b ? a : b);
