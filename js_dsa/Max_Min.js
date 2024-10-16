function FinMinMax(arr, n) {
    if (n === 1) {
      console.log("Min: " + arr[0] + ", Max: " + arr[0]);
      return;
    }
  
    let min = arr[0];
    let max = arr[0];
  
    for (let i = 1; i < n; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  
    console.log("Min: " + min + ", Max: " + max);
  }
  
  // Example usage:
  FinMinMax([23, 45, 3, 21, 22], 5);