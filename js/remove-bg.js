const apiKey = "ihXw8pVhYVvaY2DFyNUAEgum";
const fileInput1 = document.querySelector("#upload-file-1");
const fileInput2 = document.querySelector("#upload-file-2");
const downloadLink = document.querySelector(".hero__content-upload-download");
const errorMessage = document.querySelector(".hero__content-upload-error");
const loaderCurrent = document.querySelector('.loader-current')
const loaderWrap = document.querySelector('.loader-wrap')

let scoreCurrent = 0
const score = document.querySelector("#loader-score")


const startUpload = () => {

  const timerScore = setInterval(() => {
  
      scoreCurrent += 1
      score.textContent = `${scoreCurrent}%`
  
      if (scoreCurrent >= 100) {
          clearInterval(timerScore)
  
          loaderCurrent.classList.add('active')
          loaderWrap.classList.add('active')
          return
      }
  }, 100)
}



const removeBackground = (event) => {
  event.preventDefault();
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
  startUpload()
  scoreCurrent = 0;
  if(document.querySelector('.loader-current').classList.contains('active')){
    console.log(loaderCurrent.classList)
    loaderCurrent.classList.remove('active')
    loaderWrap.classList.remove('active')
  }


  const reader = new FileReader();
document.querySelector('.loader-body').classList.add('active')
  reader.addEventListener("load", () => {
    const formData = new FormData();
    formData.append("image_file", file);
    formData.append("size", "auto");

    const xhr = new XMLHttpRequest();
    
    xhr.upload.addEventListener("progress", function (event) {
      if (event.lengthComputable) {
        const percentComplete = (event.loaded / event.total) * 100;
        scoreCurrent = percentComplete
        console.log(`Загрузка... ${percentComplete.toFixed(2)}%`);
      }
    });

    xhr.addEventListener("load", function () {
      if (xhr.status === 200) {
        const url = URL.createObjectURL(xhr.response);

        downloadLink.href = url;
        downloadLink.download = "result.png";
        downloadLink.style.display = "block";
        downloadLink.click();
      } else {
        console.error(xhr.statusText);
      }
    });

    xhr.addEventListener("error", function () {
      console.error("Network Error");
    });

    xhr.open("POST", "https://api.remove.bg/v1.0/removebg");
    xhr.setRequestHeader("X-Api-Key", apiKey);
    xhr.responseType = "blob";
    xhr.send(formData);
  });

  reader.readAsDataURL(file);
};






fileInput1.addEventListener("change", removeBackground);
fileInput2.addEventListener("change", removeBackground);


