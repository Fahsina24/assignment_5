const donateNowButton = document.getElementById("donateNowBtn");
const historyTab = document.getElementById("historyBtn");
const donateTab = document.getElementById("donationBtn");
const currentAmountElement = document.getElementById("currentMoneyInAccount");
const donateMoneyElement = document.getElementById("donateMoneyUpdate");
const donationAmountElement = document.getElementById("donationInputBtn");
const donateValueElement = document.getElementById("donateMoneyValue");
const cardElement = document.getElementById("card");
const titleElement = document.getElementById("eventTitle");
const historyContainerElement = document.getElementById("historyList");

// donationButtonElement.addEventListener("click", function () {
//   console.log("donation btn clicked");
// });

// historyButtonElement.addEventListener("click", function () {
//   console.log("history btn clicked");
// });

donateNowButton.addEventListener("click", function () {
  const donationAmount = parseFloat(donationAmountElement.value);
  const currentAmount = parseFloat(currentAmountElement.innerText);
  let donateMoney = parseFloat(donateMoneyElement.innerText);
  const newAmount = currentAmount - donationAmount;
  currentAmountElement.innerText = newAmount.toFixed(2);
  donateMoney += donationAmount;
  donateMoneyElement.innerText = donateMoney.toFixed(2);
  donateValueElement.innerText = donateMoney.toFixed(2);
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
});

// History Tab Section
historyTab.addEventListener("click", function () {
  historyTab.classList.add("bg-[#B4F461]", "text-black", "hover:bg-[#B4F461]");
  historyTab.classList.remove("border-[#1111114D]");
  donateTab.classList.remove(
    "bg-[#B4F461]",
    "text-black",
    "hover:bg-[#B4F461]"
  );
  donateTab.classList.add(
    "bg-white",
    "border-[#1111114D]",
    "text-[#4B4B4B]",
    "hover:bg-white"
  );
  cardElement.classList.add("hidden");
  historyContainerElement.classList.remove("hidden");
});

//Donation Tab Section
donateTab.addEventListener("click", function () {
  donateTab.classList.add("bg-[#B4F461]", "text-black", "hover:bg-[#B4F461]");
  donateTab.classList.remove("border-[#1111114D]");
  historyTab.classList.remove(
    "bg-[#B4F461]",
    "text-black",
    "hover:bg-[#B4F461]"
  );
  historyTab.classList.add(
    "bg-white",
    "hover:bg-white",
    "text-[#4B4B4B]",
    "border-[#1111114D]"
  );
  cardElement.classList.remove("hidden");
  historyContainerElement.classList.add("hidden");
});
