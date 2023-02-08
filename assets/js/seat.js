const confirmation = document.getElementById("confirm");

const goBack = () => {
  confirmation.classList.remove("seat-confirmation-in");
  confirmation.classList.add("seat-confirmation-out");
  setTimeout(() => confirmation.classList.add("hidden"), 300);
};

const goConfirm = () => {
  confirmation.classList.remove("seat-confirmation-out");
  confirmation.classList.remove("hidden");
  confirmation.classList.add("seat-confirmation-in");
};
