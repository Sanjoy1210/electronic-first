import "./styles/main.scss";
import "./styles/media.scss";

const searchBtn1 = document.querySelector("#search-icon-1");
const cancelBtn1 = document.querySelector("#cancel-icon-1");
const searchBox1 = document.querySelector("#search-box-1");
const searchInput1 = document.querySelector("#input-1");
const searchData1 = document.querySelector("#search-data-1");
const searchBtn2 = document.querySelector("#search-icon-2");
const cancelBtn2 = document.querySelector("#cancel-icon-2");
const searchBox2 = document.querySelector("#search-box-2");
const searchInput2 = document.querySelector("#input-2");
const searchData2 = document.querySelector("#search-data-2");

function toggleSearchBox({
  action, 
  searchBtn, 
  cancelBtn, 
  searchBox, 
  searchInput, 
  searchData,
  inputValue
}) {
  if (action === "open") {
      searchBox.classList.add("active");
      searchBtn.classList.add("active");
      searchInput.classList.add("active");
      cancelBtn.classList.add("active");
      searchInput.focus();

      if (inputValue !== "") {
          searchData.classList.remove("active");
          searchData.innerHTML = "You just typed " + "<span style='font-weight: 500;'>" + inputValue + "</span>";
      } else {
          searchData.textContent = "";
      }
  } else if (action === "close") {
      searchBox.classList.remove("active");
      searchBtn.classList.remove("active");
      searchInput.classList.remove("active");
      cancelBtn.classList.remove("active");
      searchData.classList.toggle("active");
      searchInput.value = "";
  }
}

searchBtn1.onclick = () => {
  toggleSearchBox({
    action: "open",
    searchBtn: searchBtn1, 
    cancelBtn: cancelBtn1, 
    searchBox: searchBox1, 
    searchInput: searchInput1, 
    searchData: searchData1,
    inputValue: searchInput1.value
  });
}

cancelBtn1.onclick = () => {
  toggleSearchBox({
    action: "close",
    searchBtn: searchBtn1, 
    cancelBtn: cancelBtn1, 
    searchBox: searchBox1, 
    searchInput: searchInput1, 
    searchData: searchData1,
    inputValue: searchInput1.value
  });
}

searchBtn2.onclick = () => {
  toggleSearchBox({
    action: "open",
    searchBtn: searchBtn2, 
    cancelBtn: cancelBtn2, 
    searchBox: searchBox2, 
    searchInput: searchInput2, 
    searchData: searchData2,
    inputValue: searchInput2.value
  });
}

cancelBtn2.onclick = () => {
  toggleSearchBox({
    action: "close",
    searchBtn: searchBtn2, 
    cancelBtn: cancelBtn2, 
    searchBox: searchBox2, 
    searchInput: searchInput2, 
    searchData: searchData2,
    inputValue: searchInput2.value
  });
}

// dropdown
function manageDrop(){
  const navPanel = document.getElementById("nav-panel");
  const pc = document.getElementById("pc");
  const playstation = document.getElementById("playstation");
  const xbox = document.getElementById("xbox");
  const nintendo = document.getElementById("nintendo");
  const panelContainer = document.querySelectorAll('.panel-container'),
    // out = document.querySelector('#drop_output'),
  body = document.body;
  

  pc.addEventListener('click', function(e){ 
    e.stopPropagation();
    navPanel.classList.toggle('active');
  });
  playstation.addEventListener('click', function(e){ 
    e.stopPropagation();
    navPanel.classList.toggle('active');
  });
  xbox.addEventListener('click', function(e){ 
    e.stopPropagation();
    navPanel.classList.toggle('active');
  });
  nintendo.addEventListener('click', function(e){ 
    e.stopPropagation();
    navPanel.classList.toggle('active');
  });
    
  for(let i = 0; i < panelContainer.length; i++){
    panelContainer[i].addEventListener('click', function(e){
      e.stopPropagation();
      navPanel.classList.remove('active');
    });
  } 
   
  body.addEventListener('click', function(){
    if(navPanel.classList.contains('active')){
      navPanel.classList.remove('active');
    } 
  });
}

manageDrop();