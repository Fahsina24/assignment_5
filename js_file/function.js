// Common Function
function getElementValueById(id) {
  const btnValue = parseFloat(document.getElementById(id).value);
  return btnValue;
}

function getElementInnerTextById(id) {
  const textValue = parseFloat(document.getElementById(id).innerText);
  return textValue;
}

function getCard(id) {
  return document.getElementById(id);
}

function inputValidation() {
  let currentAmount = getElementInnerTextById("currentMoneyInAccount");
  let updatedDonateMoney = getElementInnerTextById("donateMoneyUpdate");
  let amountToDonate = getElementValueById("donationInputBtn");
  const mainMoneyElement = document.getElementById("mainMoney");
  let titleElement = document.getElementById("eventTitle");
  const donateMoneyElement = getCard("donateMoneyUpdate");
  const donateValueElement = getCard("donateMoneyValue");
  const currentAmountElement = getCard("currentMoneyInAccount");
  let money = currentAmount;
  let donationInput = amountToDonate;
  const donationAmount = amountToDonate;
  if (
    donationInput !== "" &&
    donationAmount <= currentAmount &&
    donationAmount > 0
  ) {
    //Modal Visibility section
    const modalContainer = document.getElementById("modalContent");
    modalContainer.show();

    let donateMoney = updatedDonateMoney;
    const newAmount = currentAmount - donationAmount;
    currentAmountElement.innerText = newAmount.toFixed(2);
    donateMoney += donationAmount;
    donateMoneyElement.innerText = donateMoney.toFixed(2);
    donateValueElement.innerText = donateMoney.toFixed(2);
    mainMoneyElement.innerText = `Money: ${newAmount} BDT`;
    //creating div for history section

    const historyItem = document.createElement("div");
    historyItem.className =
      "bg-white rounded-lg my-6 p-6 border-[#1111114D] border";
    historyItem.innerHTML = `<p class="text-black font-semibold">${donationAmount} Taka is Donated for ${
      titleElement.innerText
    }</p>
     <p class="text-gray-600 font-sm">Date: ${new Date()} </p >`;
    const historyContainer = document.getElementById("historyList");
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
  } else {
    alert("Invalid Input");
    return;
  }
}
