function setnewname() {
    const newname = document.getElementById('nameinput').value;
    window.localStorage.setItem('user', newname);
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('setnamebutton').addEventListener('click', setnewname, false);
   }, false)
   function showsettings() {
    var settings = document.getElementById('settingscontainer');   
    var main = document.getElementById('main');  
    if(settings.style.display == "block") {
      settings.style.display = "none";
      main.style.display = "block";
    }
    else {
      settings.style.display = "block";
      main.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('settingsbutton1').addEventListener('click', showsettings, false);
 }, false)
 document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('settingsbutton2').addEventListener('click', showsettings, false);
 }, false)


function initThemeSelector() {
    const themeselect = document.getElementById("themeselector");
    const themestylesheetlink = document.getElementById("themestylesheet");
    const currenttheme = localStorage.getItem("theme") || "default";

    function activateTheme(themename) {
        themestylesheetlink.setAttribute("href", `themes/${themename}.css`);
    }

    themeselect.addEventListener("change", () => {
        activateTheme(themeselect.value);
        localStorage.setItem("theme", themeselect.value);
    });


    themeselect.value = currenttheme;
    activateTheme(currenttheme);
}
initThemeSelector();


const timeElement = document.querySelector(".time");
const dateElement = document.querySelector(".date");

/**
 * @param {Date} date
 */
function formatTime(date) {
  const hours12 = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();
  const isAm = date.getHours() < 12;

  return `${hours12.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")} ${isAm ? "AM" : "PM"}`;
}

/**
 * @param {Date} date
 */
function formatDate(date) {
  const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  return `${DAYS[date.getDay()]} ${
    MONTHS[date.getMonth()]
  } ${date.getDate()}, ${date.getFullYear()}`;
}

setInterval(() => {
  const now = new Date();

  timeElement.textContent = formatTime(now);
  dateElement.textContent = formatDate(now);
}, 200);

var myDate = new Date();
var hrs = myDate.getHours();



var greet;
if (localStorage.getItem("user") === null) {
let username = prompt("Please enter your name.");
localStorage.setItem("user", username);
}
if (hrs < 12)
  greet = 'Good morning';
else if (hrs >= 12 && hrs <= 17)
  greet = 'Good afternoon';
else if (hrs >= 17 && hrs <= 24)
  greet = 'Good evening';
          document.getElementById("welcome").innerText =
          greet + "," + " " + localStorage.getItem("user") + ".";

          function displayquote()
          {
            var quotes = [
              '"Success is not final; failure is not fatal: It is the courage to continue that counts."',
              '"Develop success from failures. Discouragement and failure are two of the surest stepping stones to success."',
              '"Success is getting what you want, happiness is wanting what you get."',
              '"Success usually comes to those who are too busy looking for it."',
              '"When we strive to become better than we are, everything around us becomes better too."',
              '"Setting goals is the first step in turning the invisible into the visible."',
              '"Opportunity is missed by most people because it is dressed in overalls and looks like work."',
              '"Just one small positive thought in the morning can change your whole day."',
              '"Love your family, work super hard, live your passion."',
              '"It is never too late to be what you might have been."',
              '"If you can dream it, you can do it."',
              '"Do what you can, with what you have, where you are."',
              '"Do the best you can. No one can do more than that."',
              '"If you change the way you look at things, the things you look at change."',
            ];
            var pick = Math.floor(Math.random() * (quotes.length));
          document.getElementById("quote").innerText = (quotes[pick]);
          }
          
          document.addEventListener("load", displayquote());


      const searchenginechooser = document.getElementById('searchenginechooser')
      searchenginechooser.addEventListener('change', () => {
        localStorage.setItem('searchengine', searchenginechooser.value); 
      })
      const searchengine = localStorage.getItem('searchengine');
      if(searchengine){
      searchenginechooser.value = searchengine; 
      }
      if (searchenginechooser.value == 'google'){
        document.getElementById('searchbar').action = "https://google.com/search";
      }
      if (searchenginechooser.value == 'duckduckgo'){
        document.getElementById('searchbar').action = "https://duckduckgo.com/";
      }
      if (searchenginechooser.value == 'bravesearch'){
        document.getElementById('searchbar').action = "https://search.brave.com/search";
      }
      if (searchenginechooser.value == 'ecosia'){
        document.getElementById('searchbar').action = "https://ecosia.org/search";
      }
      if (searchenginechooser.value == 'bing'){
        document.getElementById('searchbar').action = "https://bing.com/search";
      }