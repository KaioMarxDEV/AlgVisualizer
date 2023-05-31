import { useEffect, useState } from 'react';
import Array from './Array';

import { getQuickSortAnimations } from '../utils/quickAnimation';

export default function Sorter() {
  const [array, setArray] = useState([]);

  useEffect(() => {
    resetArray()
  }, [])

  function resetArray() {
    const array = [];
    for (let i = 0; i < 100; i++) {
      array.push(randomIntFromInterval(5, 500));
    }
    setArray(array);
  }

  async function quickSort() {
    const animations = getQuickSortAnimations(array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = animations[i][0] === 'comparison1' || animations[i][0] === 'comparison2';
      if (isColorChange) {
        const color = animations[i][0] === 'comparison1' ? 'red' : 'turquoise';
        const [_, barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 100);
      } else {
        const [_, barOneIdx, newHeightOne, barTwoIdx, newHeightTwo] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        setTimeout(() => {
          barOneStyle.height = `${newHeightOne}px`;
          barTwoStyle.height = `${newHeightTwo}px`;
        }, i * 100);
      }
    }
  }

  function mergeSort() {
    // To be implemented
  }

  function bubbleSort() {
    // To be implemented
  }

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <div className='main'>
      <header>
        <button className='button' onClick={resetArray}>Gerar Novos Dados</button>
        <span>Algoritmos:</span>
        <button className='button' onClick={quickSort}>Quick Sort</button>
        {/* <button className='button' onClick={mergeSort}>Merge Sort</button>
        <button className='button' onClick={bubbleSort}>Bubble Sort</button> */}
      </header>
      <Array array={array} />
    </div>
  );
}
