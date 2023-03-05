const uploadBtn = document.querySelector(".upload-owner-btn");
uploadBtn.value = "Upload";

uploadBtn.addEventListener("submit", (event) => {
    event.preventDefault();
    uploadBtn.value = "Upload !"
})