export function getBubbleSortAnimations(array) {
  const animations = [];
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      animations.push([j, j + 1]); // Adicionar pares de índices para animação de comparação
    }
  }

  return animations;
}

export async function swap(arr, i, j) {
  await sleep(30); // Delay para visualizar a troca
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

export async function playAnimations(animations, sortedArray) {
  for (let i = 0; i < animations.length; i++) {
    const [firstIndex, secondIndex] = animations[i];
    const arrayBars = document.getElementsByClassName('array-bar');
    const firstBarStyle = arrayBars[firstIndex].style;
    const secondBarStyle = arrayBars[secondIndex].style;

    firstBarStyle.backgroundColor = 'red'; // Destacar barras sendo comparadas

    await sleep(10); // Delay para visualizar a comparação

    if (sortedArray[firstIndex] > sortedArray[secondIndex]) {
      await swap(sortedArray, firstIndex, secondIndex);
      firstBarStyle.height = `${sortedArray[firstIndex]}px`;
      secondBarStyle.height = `${sortedArray[secondIndex]}px`;
    }

    firstBarStyle.backgroundColor = 'turquoise'; // Resetar cor da primeira barra
  }
}

export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}