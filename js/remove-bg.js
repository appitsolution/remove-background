const apiKey = "ihXw8pVhYVvaY2DFyNUAEgum";
const fileInput1 = document.querySelector("#upload-file-1");
const fileInput2 = document.querySelector("#upload-file-2");
const fileInput3 = document.querySelector("#upload-file-3");
const uploadAccept = document.querySelector("#upload-file-accept");

const fileInput4 = document.querySelector("#upload-file-4");
const fileInput5 = document.querySelector("#upload-file-5");
const uploadAccept2 = document.querySelector("#upload-file-accept2");

const loader = document.querySelector(".hero__content-upload-loader");
const acceptUpload = document.querySelector(".hero__content-upload-accept");
const uploadBlock = document.querySelector(".hero__content-upload-block");

const downloadLink = document.querySelector(".hero__content-upload-download");
const errorMessage = document.querySelector(".hero__content-upload-error");

const loader2 = document.querySelector("#hero__content-upload-loader");
const acceptUpload2 = document.querySelector("#hero__content-upload-accept");
const uploadBlock2 = document.querySelector("#hero__content-upload-block");

const downloadLink2 = document.querySelector("#hero__content-upload-download");
const errorMessage2 = document.querySelector("#hero__content-upload-error");

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
        ).textContent = `${file.name.slice(0, -4)}_no_BG.png`;
        acceptUpload.classList.add("active");

        const url = URL.createObjectURL(result);

        downloadLink.href = url;
        downloadLink.download = `${file.name.slice(0, -4)}_no_BG.png`;
      })
      .catch((error) => console.error(error));
  });

  reader.readAsDataURL(file);
};

const removeBackground2 = (event) => {
  event.preventDefault();

  if (uploadBlock2.classList.contains("active")) {
    uploadBlock2.classList.remove("active");
  }
  if (acceptUpload2.classList.contains("active")) {
    acceptUpload2.classList.remove("active");
  }

  if (event.target.files.length === 0) return;

  const file = event.target.files[0];
  if (file.hasOwnProperty("name")) return;
  if (file.name.slice(-4, file.name.length) !== ".jpg") {
    errorMessage2.classList.add("active");
    setTimeout(() => {
      errorMessage2.classList.remove("active");
    }, 10000);
    return;
  }

  const reader = new FileReader();
  uploadBlock2.classList.add("active");
  loader2.classList.add("active");

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
        loader2.classList.remove("active");
        document.querySelector(
          "#hero__content-upload-accept-second"
        ).textContent = `${file.name.slice(0, -4)}_no_BG.png`;
        acceptUpload2.classList.add("active");

        const url = URL.createObjectURL(result);

        downloadLink2.href = url;
        downloadLink2.download = `${file.name.slice(0, -4)}_no_BG.png`;
      })
      .catch((error) => console.error(error));
  });

  reader.readAsDataURL(file);
};

fileInput1.addEventListener("change", removeBackground);
fileInput2.addEventListener("change", removeBackground);
fileInput3.addEventListener("change", removeBackground);
uploadAccept.addEventListener("change", removeBackground);

fileInput4.addEventListener("change", removeBackground2);
fileInput5.addEventListener("change", removeBackground2);
uploadAccept2.addEventListener("change", removeBackground2);
