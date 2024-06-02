const changeDue = document.getElementById("change-due");
const cashInput = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn");

let price = 1.87;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];

const checkPurchase = () => {
  const cash = Number(cashInput.value);
  if (cash < price) {
    alert("Customer does not have enough money to purchase the item");
  } else if (cash === price) {
    changeDue.innerText = "No change due - customer paid with exact cash";
  } else {
    checkFunds(cash);
  }
};

const checkFunds = (input) => {
  const change = input - price;
  let totalCid = 0;
  for (let i = 0; i < cid.length; i++) {
    totalCid = (totalCid * 100 + cid[i][1] * 100) / 100;
  }
  if (totalCid < change) {
    changeDue.innerText = "Status: INSUFFICIENT_FUNDS";
  }
};

purchaseBtn.addEventListener("click", checkPurchase);