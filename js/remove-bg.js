const apiKey = "ihXw8pVhYVvaY2DFyNUAEgum";
const fileInput = document.querySelector(".hero__content-upload-input");
const downloadLink = document.querySelector(".hero__content-upload-download");
const errorMessage = document.querySelector(".hero__content-upload-error");

fileInput.addEventListener("input", (event) => {
  event.preventDefault();

  const file = event.target.files[0];
  if (file.name.slice(-4,file.name.length) !== ".jpg") {
    console.dir(file.name)
    errorMessage.classList.add("active");
    setTimeout(() => {
        errorMessage.classList.remove('active')
    }, 5000);
    return;
  }

  const reader = new FileReader();

  reader.addEventListener("load", () => {
    const formData = new FormData();
    formData.append("image_file", file);
    formData.append("size", "auto");

    fetch("https://api.remove.bg/v1.0/removebg", {
      method: "POST",
      headers: {
        "X-Api-Key": apiKey,
      },
      body: formData,
    })
      .then((response) => response.blob())
      .then((result) => {
        const url = URL.createObjectURL(result);

        downloadLink.href = url;
        downloadLink.download = "result.png";
        downloadLink.style.display = "block";
        downloadLink.click();
      })
      .catch((error) => console.error(error));
  });

  reader.readAsDataURL(file);
});
