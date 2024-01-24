let display = document.getElementById('display');
let transparentStyle = true;

function appendCharacter(char) {
  if (display.value === '0' && char !== '.') {
    display.value = char;
  } else {
    display.value += char;
  }
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}

function clearDisplay() {
  display.value = '0';
}

function backspace() {
  if (display.value.length > 1) {
    display.value = display.value.slice(0, -1);
  } else {
    display.value = '0';
  }
}

function toggleStyle() {
  const body = document.body;

  if (transparentStyle) {
    body.style.backgroundColor = 'black';
    document.querySelector('.calculator-container').style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  } else {
    body.style.backgroundColor = 'transparent';
    document.querySelector('.calculator-container').style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
  }

  transparentStyle = !transparentStyle;
}
