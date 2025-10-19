document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("subscriptionForm");
  const emailInput = document.getElementById("email");
  const errorMessage = document.getElementById("error-message");
  const dialog = document.getElementById("successDialog");
  const userEmail = document.getElementById("userEmail");
  const closeDialog = document.getElementById("closeDialog");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (regex.test(email)) {
      // Валідація успішна
      errorMessage.textContent = "";
      form.style.display = "none";
      userEmail.textContent = email;
      dialog.showModal();
    } else {
      errorMessage.textContent = "❌ Введіть коректну email-адресу!";
    }
  });

  closeDialog.addEventListener("click", () => {
    dialog.close();
  });
});
