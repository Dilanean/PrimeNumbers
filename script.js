const numbersBox = document.querySelector(".numbers_box");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  const inputNumber = document.querySelector(".input_number");
  const number = parseInt(inputNumber.value);
  showPrimes(number);

  inputNumber.addEventListener("change", () => {
    numbersBox.innerHTML = null;
  });
});

function showPrimes(number) {
  for (let i = 2; i <= number; i++) {
    if (!isPrime(i)) {
      continue;
    }
    let primeNumber = document.createElement("p");
    primeNumber.textContent = i;
    numbersBox.appendChild(primeNumber);
  }

  function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }
}
