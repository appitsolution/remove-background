const apiKey = "ihXw8pVhYVvaY2DFyNUAEgum";
const fileInput1 = document.querySelector("#upload-file-1");
const fileInput2 = document.querySelector("#upload-file-2");
const fileInput3 = document.querySelector("#upload-file-3");
const fileInput4 = document.querySelector("#upload-file-4");
const fileInput5 = document.querySelector("#upload-file-5");
const fileInput6 = document.querySelector("#upload-file-accept");
const downloadLink = document.querySelector(".hero__content-upload-download");
const errorMessage = document.querySelector(".hero__content-upload-error");

const loader = document.querySelector(".hero__content-upload-loader");

const acceptUpload = document.querySelector(".hero__content-upload-accept");

const uploadBlock = document.querySelector(".hero__content-upload-block");

const removeBackground = (event) => {
  event.preventDefault();

  if (uploadBlock.classList.contains("active")) {
    uploadBlock.classList.remove("active");
  }
  if (acceptUpload.classList.contains("active")) {
    acceptUpload.classList.remove("active");
  }

  if (event.target.files.length === 0) return;

  const file = event.target.files[0];
  if (file.hasOwnProperty("name")) return;
  if (file.name.slice(-4, file.name.length) !== ".jpg") {
    errorMessage.classList.add("active");
    setTimeout(() => {
      errorMessage.classList.remove("active");
    }, 10000);
    return;
  }

  const reader = new FileReader();
  uploadBlock.classList.add("active");
  loader.classList.add("active");

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
        loader.classList.remove("active");
        document.querySelector(
          ".hero__content-upload-accept-second"
        ).textContent = `${file.name}`;
        acceptUpload.classList.add("active");

        const url = URL.createObjectURL(result);

        downloadLink.href = url;
        downloadLink.download = `${file.name.slice(0, -4)}_no_BG.png`;
      })
      .catch((error) => console.error(error));
  });

  reader.readAsDataURL(file);
};

fileInput1.addEventListener("change", removeBackground);
fileInput2.addEventListener("change", removeBackground);
fileInput3.addEventListener("change", removeBackground);
fileInput4.addEventListener("change", removeBackground);
fileInput5.addEventListener("change", removeBackground);
fileInput6.addEventListener("change", removeBackground);
