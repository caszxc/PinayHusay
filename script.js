const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

  document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.getElementById('searchIcon');
    const searchInput = document.getElementById('searchInput');

    if (!searchIcon || !searchInput) {
      console.error('Search elements not found.');
      return;
    }
    

    searchIcon.addEventListener('click', function() {
      searchInput.focus(); 
    });

    searchInput.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        const searchText = searchInput.value.trim().toLowerCase();
        alert('Hello: ' + searchText);
      }
    });
  });

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});


window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});






/*PINAYHUSAY CATEGORY*/



const wrapper = document.querySelector(".wrapper"),
  selectBtn = wrapper.querySelector(".select-btn"),
  searchInp = wrapper.querySelector("input"),
  options = wrapper.querySelector(".options");

let sports = [

  "<a href='Athletics.html'><span style='color: Black'>Athletics</span></a>",
  "<a href='Boxing.html'><span style='color:Black'>Boxing</span></a>",
  "<a href='Chess.html'><span style='color:Black'>Chess</span></a>",
  "<a href='Golf.html'><span style='color:Black'>Golf</span></a>",
  "<a href='Martial_arts.html'><span style='color: Black'>Martial Arts</span></a>",
  "<a href='Skateboarding.html'><span style='color:Black'>Skateboard</span></a>",
  "<a href='Swimming.html'><span style='color:Black'>Swimming</span></a>",
  "<a href='Weightlifting.html'><span style='color:Black'>Weightlifting</span></a>"
];

function addSports(selectedSports) {
  options.innerHTML = "";
  sports.forEach(sports => {
    let isSelected = sports == selectedSports ? "selected" : "";
    let li = `<li onclick="updateName(this)" class="${isSelected}">${sports}</li>`;
    options.insertAdjacentHTML("beforeend", li);
  });
}
addSports();

function updateName(selectedLi) {
  searchInp.value = "";
  addSports(selectedLi.innerText);
  wrapper.classList.remove("active");
  selectBtn.firstElementChild.innerText = selectedLi.innerText;
}

searchInp.addEventListener("keyup", () => {
  let arr = [];
  let searchWord = searchInp.value.toLowerCase();
  arr = sports.filter(data => {
    return data.toLowerCase().includes(searchWord);
  }).map(data => {
    let isSelected = data == selectBtn.firstElementChild.innerText ? "selected" : "";
    return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
  }).slice(0, 5);
  options.innerHTML = arr.length > 0 ? arr.join("") : `<p style="margin-top: 10px; color:Black; " >Oops! No suggestions found</p>`;
});

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));      
