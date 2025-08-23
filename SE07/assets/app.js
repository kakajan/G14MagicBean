function setDebt() {
  let currentDebt = debtIn.value;
  balance = balance - +currentDebt;
  updateBalance();
  debtIn.value = '';
  debtIn.focus();
}
function setCredit() {
  let currentCredit = creditIn.value;
  balance = balance + +currentCredit;
  updateBalance();
  creditIn.value = '';
  creditIn.focus();
}

function updateBalance() {
  balanceArea.innerText = Math.abs(balance);
  if (balance < 0) {
    balanceArea.classList.remove("text-cyan-600");
    balanceArea.classList.remove("text-gray-800");
    balanceArea.classList.add("text-pink-600");
  } else if (balance == 0) {
    balanceArea.classList.remove("text-pink-600");
    balanceArea.classList.remove("text-cyan-600");
    balanceArea.classList.add("text-gray-800");
  } else {
    balanceArea.classList.remove("text-pink-600");
    balanceArea.classList.remove("text-gray-800");
    balanceArea.classList.add("text-cyan-600");
  }
}
