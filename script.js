const manu = document.querySelector(".manu-list");
const manuBtn = document.querySelector(".manu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const body = document.querySelector("body");
// const footer = document.querySelector('footer');

manuBtn.onclick = () => {
  manu.classList.add("active");
  manuBtn.classList.add("hide");
  body.classList.add("disabledScroll");
};
cancelBtn.onclick = () => {
  manu.classList.remove("active");
  manuBtn.classList.remove("hide");
  body.classList.remove("disabledScroll");
};
// drop down manu
function toggleHide() {
  let up = document.getElementById('up');
  let para = document.getElementById('para');
  if (para.style.display != 'block') {
    para.style.display = 'block';
  }
  else {
    para.style.display = 'none';
  }
}

// preloader

let preloader = document.getElementById('loading')
function myFunction() {
  preloader.style.display = 'none'
}

// filter video
let Filter = document.querySelector('#filter');
Filter.addEventListener('keyup', filter);
function filter(e) {
  const text = e.target.value.toLowerCase();

  // embed-text
  document.querySelectorAll('.embed-text').forEach(title => {
    const item = title.textContent;
    console.log(item);
    if (item.toLocaleLowerCase().indexOf(text) !== -1) {
      title.parentElement.style.display = 'block';
      footer.style.display = 'block';
  } else {

      title.parentElement.style.display = 'none';
      footer.style.display = 'none';
  }
  });
  
}