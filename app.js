const number = document.getElementById('value');
const btn = document.querySelectorAll('.btn');

let count = 0;

btn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList;
    if (styles.contains('increase')) {
      count++;
    } else if (styles.contains('decrease')) {
      count--;
    } else count = 0;

    if (count > 0) {
      number.style.color = 'green';
    } else if (count < 0) {
      number.style.color = 'red';
    } else number.style.color = 'var(--clr-grey-1)';
    number.textContent = count;
  });
});
