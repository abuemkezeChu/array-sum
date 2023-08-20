'use strict';

const btn = document.getElementById('calculate-btn');
const display = document.getElementById('output');

// Function to sum the elements in the array
const sumElements = values => {
  let sum = 0;
  for (const value of values) {
    sum += value;
  }
  return sum;
};

// Function to display the sum
const displayOutput = () => {
  const input = document.querySelector('#input');
  // Convert all substrings from the input field into numbers 
  const values = input.value.split(',').map(Number);
  const result = sumElements(values);
  display.textContent = `Sum: ${result}`;
  display.style.color = '#fff'
};

btn.addEventListener('click', displayOutput);
