function inputValidation() {
  let currentAmount = getElementInnerTextById("currentMoneyInAccount");
  let updatedDonateMoney = getElementInnerTextById("donateMoneyUpdate");
  let stringAmount = document.getElementById("donationInputBtn").value;
  let amountToDonate = getElementValueById("donationInputBtn");
  const mainMoneyElement = document.getElementById("mainMoney");
  let titleElement = document.getElementById("eventTitle");
  const donateMoneyElement = getCard("donateMoneyUpdate");
  const donateValueElement = getCard("donateMoneyValue");
  const currentAmountElement = getCard("currentMoneyInAccount");
  const isNumeric = /^[0-9]+$/.test(stringAmount);
  let money = currentAmount;
  let donationInput = amountToDonate;
  const donationAmount = amountToDonate;
  if (
    donationInput !== "" &&
    donationAmount <= currentAmount &&
    isNumeric &&
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
     <p class="bg-[#F9F7F3] text-gray-600 font-sm mt-4 ml-0 p-2 rounded-lg">Date: ${new Date()} </p >`;
    const historyContainer = document.getElementById("historyList");
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
    document.getElementById("donationInputBtn").value = "";
  } else {
    alert("Invalid Input");
    document.getElementById("donationInputBtn").value = "";
    return;
  }
}
