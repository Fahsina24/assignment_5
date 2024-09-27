const historyTab = document.getElementById("historyBtn");
const donateTab = document.getElementById("donationBtn");
const cardElement = getCard("card");
const historyContainerElement = document.getElementById("historyList");

const donateButton = document.getElementById("donateNowBtn");
donateButton.addEventListener("click", function () {
  inputValidation();
});

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
  cardElement.classList.add("hidden");
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
  cardElement.classList.remove("hidden");
  historyContainerElement.classList.add("hidden");
});
