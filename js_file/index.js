const historyTab = document.getElementById("historyBtn");
const donateTab = document.getElementById("donationBtn");
const historyContainerElement = document.getElementById("historyList");
const donateButton = document.getElementById("donateNowBtn");
const donateButtonCard2 = document.getElementById("donateNowBtn2");
const donateButtonCard3 = document.getElementById("donateNowBtn3");
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

// Donate Button Functions
donateButton.addEventListener("click", function () {
  inputValidation();
});

donateButtonCard2.addEventListener("click", function () {
  inputValidation2();
});
donateButtonCard3.addEventListener("click", function () {
  inputValidation3();
});

//Tab Switching

// History Tab Section
historyTab.addEventListener("click", function () {
  historyTab.classList.add(
    "bg-[#B4F461]",
    "text-[#111111]",
    "hover:bg-[#B4F461]"
  );
  historyTab.classList.remove(
    "bg-white",
    "border-[#1111114D]",
    "text-[#4B4B4B]",
    "hover:bg-white"
  );
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
  getCard("card").classList.add("hidden");
  getCard("card2").classList.add("hidden");
  getCard("card3").classList.add("hidden");
  historyContainerElement.classList.remove("hidden");
});
//Donation Tab Section
donateTab.addEventListener("click", function () {
  donateTab.classList.add(
    "bg-[#B4F461]",
    "text-[#111111]",
    "hover:bg-[#B4F461]"
  );
  donateTab.classList.remove(
    "bg-white",
    "hover:bg-white",
    "text-[#4B4B4B]",
    "border-[#1111114D]"
  );
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
  getCard("card").classList.remove("hidden");
  getCard("card2").classList.remove("hidden");
  getCard("card3").classList.remove("hidden");
  historyContainerElement.classList.add("hidden");
});
