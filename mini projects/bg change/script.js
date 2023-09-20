const colorPicker = document.getElementById('colorPicker');
const resetButton = document.querySelector('.reset');

colorPicker.addEventListener('input', () => {
  const selectedColor = colorPicker.value;
  document.body.style.backgroundColor = selectedColor;
});

resetButton.addEventListener('click', () => {
  document.body.style.backgroundColor = '';} )
