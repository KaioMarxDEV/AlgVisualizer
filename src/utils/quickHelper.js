export function quickSortHelper(mainArray, startIdx, endIdx, animations) {
  if (startIdx >= endIdx) return;
  let pivotIdx = startIdx;
  let leftIdx = startIdx + 1;
  let rightIdx = endIdx;
  animations.push(['comparison1', pivotIdx, rightIdx]);
  animations.push(['comparison2', pivotIdx, rightIdx]);
  while (rightIdx >= leftIdx) {
    animations.push(['comparison1', leftIdx, rightIdx]);
    animations.push(['comparison2', leftIdx, rightIdx]);
    if (mainArray[leftIdx] > mainArray[pivotIdx] && mainArray[rightIdx] < mainArray[pivotIdx]) {
      swap(leftIdx, rightIdx, mainArray);
      animations.push(['swap', leftIdx, mainArray[leftIdx], rightIdx, mainArray[rightIdx]]);
    }
    if (mainArray[leftIdx] <= mainArray[pivotIdx]) leftIdx++;
    if (mainArray[rightIdx] >= mainArray[pivotIdx]) rightIdx--;
  }
  swap(pivotIdx, rightIdx, mainArray);
  animations.push(['swap', pivotIdx, mainArray[pivotIdx], rightIdx, mainArray[rightIdx]]);
  if (rightIdx - 1 - startIdx < endIdx - (rightIdx + 1)) {
    quickSortHelper(mainArray, startIdx, rightIdx - 1, animations);
    quickSortHelper(mainArray, rightIdx + 1, endIdx, animations);
  } else {
    quickSortHelper(mainArray, rightIdx + 1, endIdx, animations);
    quickSortHelper(mainArray, startIdx, rightIdx - 1, animations);
  }
}

function swap(i, j, array) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
