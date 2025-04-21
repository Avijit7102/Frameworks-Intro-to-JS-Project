const transactionForm = document.getElementById("transactionForm");
const transactionTable = document.querySelector("table tbody");
const checkingCard = document.getElementById("checkingBalance");
const savingsCard = document.getElementById("savingsBalance");

// Get current balance from text
let checkingBalance = parseFloat(checkingCard.textContent.replace(/[$,]/g, ""));
let savingsBalance = parseFloat(savingsCard.textContent.replace(/[$,]/g, ""));

// Handle form submission
transactionForm.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload

  const date = document.getElementById("transactionDate").value;
  const type = document.getElementById("transactionType").value.toLowerCase();
  const description = document.getElementById("description").value.trim();
  const amount = document.getElementById("amount").value;
  const amountValue = parseFloat(amount);
  const account = document.getElementById("accountType").value;

  // Validate inputs
  if (
    !date ||
    !type ||
    !description ||
    isNaN(amountValue) ||
    amountValue <= 0 ||
    !account
  ) {
    alert("Please fill in all fields correctly");
    return;
  }
  // new code with new logic starts

  //Deposit or Withdraw Logic
  let flag = false;
  let updatedBalance = 0;

  if (account === "checking") {
    if (type === "deposit") {
      checkingBalance += amountValue;
      flag = true;
    } else if (type === "withdraw") {
      if (amountValue > checkingBalance) {
        alert("Insufficient balance.");
        return;
      } else {
        checkingBalance -= amountValue;
        flag = true;
      }
    }

    checkingCard.textContent = `$${checkingBalance.toFixed(2)}`;
    updatedBalance = "$" + checkingBalance.toFixed(2);
  }

  if (account === "savings") {
    if (type === "deposit") {
      savingsBalance += amountValue;
      flag = true;
    } else if (type === "withdraw") {
      if (amountValue > savingsBalance) {
        alert("Insufficient balance.");
        return;
      } else {
        savingsBalance -= amountValue;
        flag = true;
      }
    }
    savingsCard.textContent = `$${savingsBalance.toFixed(2)}`;
    updatedBalance = "$" + savingsBalance.toFixed(2);
  }

  if (!flag) {
    alert("Insufficient Balance or Invalid transaction");
    return;
  }

  const formattedAmount =
    (type === "withdraw" ? "- $" : "+ $") + amountValue.toFixed(2);

  // Adding new row to table dynamically

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${date}</td>
    <td>${description}</td>
    <td>${formattedAmount}</td>
    <td>${updatedBalance}</td>
    <td>${account}</td>
  `;
  transactionTable.prepend(newRow);

  // Reset the form
  transactionForm.reset();
});
