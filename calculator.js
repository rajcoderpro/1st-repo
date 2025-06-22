 const screen = document.querySelector('.screen');
  const buttons = document.querySelectorAll('.button');

  let expression = '';

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.innerText;

      switch (value) {
        case 'C':
          expression = '';
          break;

        case 'DEL':
        case '⌫':
        case 'x':
          expression = expression.slice(0, -1);
          break;

        case '=':
          try {
            expression = eval(expression).toString();
          } catch {
            expression = 'Error';
          }
          break;

        default:
          expression += value;
      }

      screen.innerText = expression;
    });
  });
  document.addEventListener('keydown', (e) => {
  const key = e.key;

  if (!isNaN(key) || ['+', '-', '*', '/', '.', '%'].includes(key)) {
    expression += key;
  } else if (key === 'Enter') {
    try {
      expression = eval(expression).toString();
    } catch {
      expression = 'Error';
    }
  } else if (key === 'Backspace') {
    expression = expression.slice(0, -1);
  } else if (key === 'Escape') {
    expression = '';
  }

  screen.innerText = expression;
});
const clickSound = new Audio('click.mp3');
button.addEventListener('click', () => {
  clickSound.play();
});
