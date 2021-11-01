gsap.from(".nama-hero", {
  duration: 1,
  opacity: 0,
  ease: "rough",
});

const typed = new Typed(".type-role", {
  strings: [
    "Front End Developer",
    "Back End Developer",
    "Javascript Developer",
  ],
  typeSpeed: 100,
  smartBackspace: true,
  loop: true,
});

const template = (img, title, desc, link, preview, time) => {
  return `<div data-aos="fade-up" class="card mb-3 text-decoration-none text-light">
          ${
            img
              ? `<img
            src="${img}"
            class="card-img-top"
            alt="Thumbnail"
          />`
              : ""
          }
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">
            ${desc}
            </p>
            <p class="card-text">
              <a class="text-decoration-none mx-2" href="${link}">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="25" height="25"><path fill-rule="evenodd" fill="#fff" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
              </a>
              ${
                preview
                  ? `<a class="text-decoration-none mx-2" href="${preview}">
                <img height="25" src="./assets/IMG/preview.png" alt="">
              </a>
`
                  : ""
              }
            </p>
          </div>
        </div>`;
};

const getData = async () => {
  try {
    const projek = await axios.get("/assets/JS/projek.json");
    const elemen = document.querySelector(".projects");
    let elga = "";
    const dp = projek.data;
    dp.forEach((d) => {
      elga += template(
        d.img,
        d.title,
        d.description,
        d.link,
        d.preview,
        "Last day"
      );
    });
    elemen.innerHTML = elga;
  } catch (e) {
    /* handle error */
    alert(e);
  }
};

const cvDown = (cv) => {
  cv.addEventListener("click", function () {
    alert("Mohon maaf untuk saat ini cv belum tersedia");
  });
};

const cv = document.querySelector(".cv");
cvDown(cv);
AOS.init();
getData();
