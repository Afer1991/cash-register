const changeDue = document.getElementById("change-due");
const cashInput = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn");

let price = 3.26;
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
  } else {
    checkForChange(change);
  }
};

const checkForChange = (input) => {
  let change = input;
  const cashArray = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
  const changeArray = [];
  for (let i = 9; i >= 0; i--) {
    if(change / cashArray[i] >= 1) {
      const requiredUnits = Math.floor(change / cashArray[i]);
      const availableUnits = cid[i][1] / cashArray[i];
      if (availableUnits >= requiredUnits) {
        let requiredAmount = (cashArray[i] * requiredUnits).toFixed(2);
        change = (change - requiredAmount).toFixed(2);
        changeArray.push([cid[i][0], requiredAmount]);
      } else {
        let availableAmount = (cashArray[i] * availableUnits).toFixed(2);
        change = (change - availableAmount).toFixed(2);
        changeArray.push([cid[i][0], availableAmount]);
      }
    }
  }
  console.log(change, changeArray);
};

purchaseBtn.addEventListener("click", checkPurchase);