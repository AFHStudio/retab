function setnewname() {
    const newname = document.getElementById('nameinput').value;
    window.localStorage.setItem('user', newname);
    window.location.reload();
}
document.getElementById('resetyoutubebutton').addEventListener('click', resetyoutube, false);
function resetyoutube(){
  localStorage.removeItem('youtubeurl');
  localStorage.removeItem('youtubeicon');
  window.location.reload();
}
document.getElementById('resetgmailbutton').addEventListener('click', resetgmail, false);
function resetgmail(){
  localStorage.removeItem('gmailurl');
  localStorage.removeItem('gmailicon');
  window.location.reload();
}
document.getElementById('resetspotifybutton').addEventListener('click', resetspotify, false);
function resetspotify(){
  localStorage.removeItem('spotifyurl');
  localStorage.removeItem('spotifyicon');
  window.location.reload();
}
document.getElementById('resettwitterbutton').addEventListener('click', resettwitter, false);
function resettwitter(){
  localStorage.removeItem('twitterurl');
  localStorage.removeItem('twittericon');
  window.location.reload();
}
document.getElementById('resetdiscordbutton').addEventListener('click', resetdiscord, false);
function resetdiscord(){
  localStorage.removeItem('discordurl');
  localStorage.removeItem('discordicon');
  window.location.reload();
}
document.getElementById('resettextcolorbutton').addEventListener('click', resettextcolor, false);
function resettextcolor(){
  localStorage.removeItem('textcolor');
  window.location.reload();
}
document.getElementById('resettimesizebutton').addEventListener('click', resettimesize, false);
function resettimesize(){
  localStorage.removeItem('timesize');
  window.location.reload();
}
document.addEventListener('DOMContentLoaded', function() {
if (localStorage.getItem("user") === null) {
    document.getElementById('namedialog').style.display = "block";
    main.style.display = "none";
}
if (localStorage.getItem('city') === null) {
  fetch('https://ipinfo.io/json?token=1208eaaf99db4d')
  .then(res => res.json())
  .then(data => {
      localStorage.setItem('city', data.city)
})
}
setTimeout(function() {
      fetch('https://ipinfo.io/json?token=1208eaaf99db4d')
  .then(res => res.json())
  .then(data => {
      localStorage.setItem('city', data.city)
  })
  }, 5184000000);
const key = '719d1c97dd98f1a4f06d87a13956cb2a';
const city = localStorage.getItem('city');
const units = localStorage.getItem('units');
const metrictext = localStorage.getItem('unittext');

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=${units}`)
.then(response => response.json())
.then(data => {
  const temp = data.main.temp;
  document.getElementById('city').innerHTML = city;
  document.getElementById('weather').innerHTML = `${temp}${metrictext}`;
  var weathericon = data.weather[0].icon;
  const weathericonid = document.getElementById('weathericon')
  weathericonid.src = `https://openweathermap.org/img/wn/${weathericon}@2x.png`;
})
if (localStorage.getItem("units") === "imperial") {
  localStorage.setItem("unittext", "°F");
}
if (localStorage.getItem("units") === "metric") {
  localStorage.setItem("unittext", "°C");
}
function firsttimename() {
  const name = document.getElementById('nameinputfirst').value;
  localStorage.setItem("user", name);
  document.getElementById('namedialog').style.display = "none";
  window.location.reload();
  main.style.display = "block";
}
document.getElementById('firstnamebutton').addEventListener('click', firsttimename, false);
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

function checkcustomicons(){
  if (localStorage.getItem('youtubeurl') && localStorage.getItem('youtubeicon') !== null){
    const youtubelink = document.getElementById('youtube');
    const youtubeicon = document.getElementById('youtubeicon');
    youtubelink.href = localStorage.getItem('youtubeurl');
    youtubeicon.className = localStorage.getItem('youtubeicon');
  }
  if (localStorage.getItem('gmailurl') && localStorage.getItem('gmailicon') !== null){
    const gmaillink = document.getElementById('gmail');
    const gmailicon = document.getElementById('gmailicon');
    gmaillink.href = localStorage.getItem('gmailurl');
    gmailicon.className = localStorage.getItem('gmailicon');
  }
  if (localStorage.getItem('spotifyurl') && localStorage.getItem('spotifyicon') !== null){
    const spotifylink = document.getElementById('spotify');
    const spotifyicon = document.getElementById('spotifyicon');
    spotifylink.href = localStorage.getItem('spotifyurl');
    spotifyicon.className = localStorage.getItem('spotifyicon');
  }
  if (localStorage.getItem('twitterurl') && localStorage.getItem('twittericon') !== null){
    const twitterlink = document.getElementById('twitter');
    const twittericon = document.getElementById('twittericon');
    twitterlink.href = localStorage.getItem('twitterurl');
    twittericon.className = localStorage.getItem('twittericon');
  }
  if (localStorage.getItem('discordurl') && localStorage.getItem('discordicon') !== null){
    const discordlink = document.getElementById('discord');
    const discordicon = document.getElementById('discordicon');
    discordlink.href = localStorage.getItem('discordurl');
    discordicon.className = localStorage.getItem('discordicon');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('settingsbutton1').addEventListener('click', showsettings, false);
 }, false)
 document.addEventListener('DOMContentLoaded', checkcustomicons, false)
 document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('settingsbutton2').addEventListener('click', showsettings, false);
 }, false)
 document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('resetbackgroundbutton').addEventListener('click', resetbg, false);
 }, false)   
  document.getElementById('about').addEventListener('click', () => {
    document.getElementById('generalsection').style.visibility = 'hidden';
    document.getElementById('generalsection').style.display = 'none';
    document.getElementById('appearancesection').style.visibility = 'hidden';
    document.getElementById('appearancesection').style.display = 'none';
    document.getElementById('aboutsection').style.visibility = 'visible';
    document.getElementById('aboutsection').style.display = 'block';
    document.getElementById('customiconssection').style.visibility = 'hidden';
    document.getElementById('customiconssection').style.display = 'none';
    document.getElementById('togglefeaturessection').style.visibility = 'hidden';
    document.getElementById('togglefeaturessection').style.display = 'none';
  })
  document.getElementById('general').addEventListener('click', () => {
    document.getElementById('generalsection').style.visibility = 'visible';
    document.getElementById('generalsection').style.display = 'block';
    document.getElementById('appearancesection').style.visibility = 'hidden';
    document.getElementById('appearancesection').style.display = 'none';
    document.getElementById('aboutsection').style.visibility = 'hidden';
    document.getElementById('aboutsection').style.display = 'none';
    document.getElementById('customiconssection').style.visibility = 'hidden';
    document.getElementById('customiconssection').style.display = 'none';
    document.getElementById('togglefeaturessection').style.visibility = 'hidden';
    document.getElementById('togglefeaturessection').style.display = 'none';
  })
  document.getElementById('icons').addEventListener('click', () => {
    document.getElementById('generalsection').style.visibility = 'hidden';
    document.getElementById('generalsection').style.display = 'none';
    document.getElementById('appearancesection').style.visibility = 'hidden';
    document.getElementById('appearancesection').style.display = 'none';
    document.getElementById('aboutsection').style.visibility = 'hidden';
    document.getElementById('aboutsection').style.display = 'none';
    document.getElementById('customiconssection').style.visibility = 'visible';
    document.getElementById('customiconssection').style.display = 'block';
    document.getElementById('togglefeaturessection').style.visibility = 'hidden';
    document.getElementById('togglefeaturessection').style.display = 'none';
  })
  document.getElementById('kofi').addEventListener('click', () => {
    window.open('https://ko-fi.com/afhstudio')
  })
  document.getElementById('afhstudio').addEventListener('click', () => {
    window.open('https://afhstudio.link')
  })
  document.getElementById('appearance').addEventListener('click', () => {
    document.getElementById('generalsection').style.visibility = 'hidden';
    document.getElementById('generalsection').style.display = 'none';
    document.getElementById('appearancesection').style.visibility = 'visible';
    document.getElementById('appearancesection').style.display = 'block';
    document.getElementById('aboutsection').style.visibility = 'hidden';
    document.getElementById('aboutsection').style.display = 'none';
    document.getElementById('customiconssection').style.visibility = 'hidden';
    document.getElementById('customiconssection').style.display = 'none';
    document.getElementById('togglefeaturessection').style.visibility = 'hidden';
    document.getElementById('togglefeaturessection').style.display = 'none';
})
document.getElementById('togglefeatures').addEventListener('click', () => {
  document.getElementById('generalsection').style.visibility = 'hidden';
  document.getElementById('generalsection').style.display = 'none';
  document.getElementById('appearancesection').style.visibility = 'hidden';
  document.getElementById('appearancesection').style.display = 'none';
  document.getElementById('aboutsection').style.visibility = 'hidden';
  document.getElementById('aboutsection').style.display = 'none';
  document.getElementById('customiconssection').style.visibility = 'hidden';
  document.getElementById('customiconssection').style.display = 'none';
  document.getElementById('togglefeaturessection').style.visibility = 'visible';
  document.getElementById('togglefeaturessection').style.display = 'block';
})
  

function resetbg(){
  localStorage.removeItem("background")
}

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
        window.location.reload();
    });


    themeselect.value = currenttheme;
    activateTheme(currenttheme);
}
initThemeSelector();

const theme = localStorage.getItem("theme");
if (theme === "classroom") {
  const gmail = document.getElementById("gmailicon")
  gmail.setAttribute("class", "fa-solid fa-chalkboard")
  const gmaillink = document.getElementById("gmail")
  gmaillink.setAttribute("href", "https://classroom.google.com")
  const discord = document.getElementById("discordicon")
  discord.setAttribute("class", "fa-brands fa-google-drive")
  const discordlink = document.getElementById("discord")
  discordlink.setAttribute("href", "https://drive.google.com")
  const twitter = document.getElementById("twittericon")
  twitter.setAttribute("class", "fa-solid fa-video")
  const twitterlink = document.getElementById("twitter")
  twitterlink.setAttribute("href", "https://meet.google.com")
}
const iconpack = localStorage.getItem("iconpack")
if (iconpack === "gaming") {
  const gmail = document.getElementById("gmailicon")
  gmail.setAttribute("class", "fa-brands fa-steam")
  const gmaillink = document.getElementById("gmail")
  gmaillink.setAttribute("href", "https://store.steampowered.com")
  const discord = document.getElementById("discordicon")
  discord.setAttribute("class", "fa-brands fa-twitch")
  const discordlink = document.getElementById("discord")
  discordlink.setAttribute("href", "https://twitch.tv")
  const twitter = document.getElementById("twittericon")
  twitter.setAttribute("class", "fa-brands fa-discord")
  const twitterlink = document.getElementById("twitter")
  twitterlink.setAttribute("href", "https://discord.com/channels/@me")
}
if (iconpack === "developer") {
  const gmail = document.getElementById("gmailicon")
  gmail.setAttribute("class", "fa-brands fa-stack-overflow")
  const gmaillink = document.getElementById("gmail")
  gmaillink.setAttribute("href", "https://stackoverflow.com")
  const discord = document.getElementById("discordicon")
  discord.setAttribute("class", "fa-brands fa-discord")
  const discordlink = document.getElementById("discord")
  discordlink.setAttribute("href", "https://discord.com/channels/@me")
  const twitter = document.getElementById("twittericon")
  twitter.setAttribute("class", "fa-brands fa-cloudflare")
  const twitterlink = document.getElementById("twitter")
  twitterlink.setAttribute("href", "https://dash.cloudflare.com")
}
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
if (hrs < 12)
  greet = 'Good morning';
else if (hrs >= 12 && hrs <= 17)
  greet = 'Good afternoon';
else if (hrs >= 17 && hrs <= 24)
  greet = 'Good evening';
          document.getElementById("welcome").innerText =
          greet + "," + " " + localStorage.getItem("user") + ".";

          function displayquote() {
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
              '"It is often the small steps, not the giant leaps, that bring about the most lasting change."',
              '"Education is the most powerful weapon which you can use to change the world."',
              `"There is always light. If only we're brave enough to see it. If only we're brave enough to be it."`,
              '"All our dreams can come true — if we have the courage to pursue them."',
              '"Learn as if you will live forever, live like you will die tomorrow."',
              '"When you change your thoughts, remember to also change your world."',
              `"If you are working on something that you really care about, you don't have to be pushed. The vision pulls you."`,
              `"Believe you can and you're halfway there."`,
              '"The only way to do great work is to love what you do."',
              `"The harder you work for something, the greater you'll feel when you achieve it."`
            ];
            var pick = Math.floor(Math.random() * (quotes.length));
          document.getElementById("quote").innerText = (quotes[pick]);
          }
          function setquote() {
            const quote = document.getElementById('quoteinput').value;
            localStorage.setItem('customquote', quote)
            window.location.reload();
          }
          function resetquote() {
            localStorage.removeItem('customquote');
            window.location.reload();
          }
          document.addEventListener('DOMContentLoaded', function() {
            document.getElementById('setquotebutton').addEventListener('click', setquote, false);
            quote = localStorage.getItem('customquote');
            if (quote = 'null') {
              displayquote();
            }
            if (localStorage.getItem('customquote') !== null) {
              document.getElementById("quote").innerText = `"` + localStorage.getItem('customquote') + `"`;
            }
            document.getElementById('resetquotebutton').addEventListener('click', resetquote, false);
           })

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

      document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('imagechooser').addEventListener('change', function() {

        var backgroundimage = document.querySelector("#main"),
        file = document.querySelector("#imagechooser").files[0],
        filereader = new FileReader();
    
      filereader.onloadend = function () {
        backgroundimage.style.backgroundImage = 'linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7))'+",url(" + filereader.result + ")";
        document.body.style.backgroundImage = 'linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7))'+",url(" + filereader.result + ")";
        const bgbase64 = filereader.result.replace('data:', '').replace(/^.+,/, '');
        localStorage.setItem('background', bgbase64);
      };
    
      if (file) filereader.readAsDataURL(file);
      else backgroundimage.style.backgroundImage = "";
      })
      var backgroundimage = document.querySelector("#main");
      const bg = localStorage.getItem('background');
      if (bg !== null) {
        backgroundimage.style.backgroundImage = 'linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7))'+ `,url(data:image/png;base64,${bg})`;
        document.body.style.backgroundImage = 'linear-gradient(rgba(4,9,30,0.7),rgba(4,9,30,0.7))'+ `,url(data:image/png;base64,${bg})`;
        document.body.style.backgroundSize = '100%';
        backgroundimage.style.backgroundSize = '100%';
      }
const youtubeurlinput = document.getElementById('youtubeurlinput');
const youtubeiconinput = document.getElementById('youtubeiconinput');
const youtubelink = document.getElementById('youtube');
const youtubeicon = document.getElementById('youtubeicon');

document.getElementById('setyoutubebutton').addEventListener('click', () => {
if (youtubeurlinput.value.trim() !== '' && youtubeiconinput.value.trim() !== '') {
localStorage.setItem('youtubeurl', youtubeurlinput.value.trim());
localStorage.setItem('youtubeicon', youtubeiconinput.value.trim());

youtubelink.href = localStorage.getItem('youtubeurl');

youtubeicon.className = localStorage.getItem('youtubeicon');
} else {
alert('Please fill in both fields before setting the icon and link.');
}
});
const gmailurlinput = document.getElementById('gmailurlinput');
const gmailiconinput = document.getElementById('gmailiconinput');
const gmaillink = document.getElementById('gmail');
const gmailicon = document.getElementById('gmailicon');

document.getElementById('setgmailbutton').addEventListener('click', () => {
if (gmailurlinput.value.trim() !== '' && gmailiconinput.value.trim() !== '') {
localStorage.setItem('gmailurl', gmailurlinput.value.trim());
localStorage.setItem('gmailicon', gmailiconinput.value.trim());

gmaillink.href = localStorage.getItem('gmailurl');

gmailicon.className = localStorage.getItem('gmailicon');
} else {
alert('Please fill in both fields before setting the icon and link.');
}
});

const spotifyurlinput = document.getElementById('spotifyurlinput');
const spotifyiconinput = document.getElementById('spotifyiconinput');
const spotifylink = document.getElementById('spotify');
const spotifyicon = document.getElementById('spotifyicon');

document.getElementById('setspotifybutton').addEventListener('click', () => {
if (spotifyurlinput.value.trim() !== '' && spotifyiconinput.value.trim() !== '') {
localStorage.setItem('spotifyurl', spotifyurlinput.value.trim());
localStorage.setItem('spotifyicon', spotifyiconinput.value.trim());

spotifylink.href = localStorage.getItem('spotifyurl');

spotifyicon.className = localStorage.getItem('spotifyicon');
} else {
alert('Please fill in both fields before setting the icon and link.');
}
});
const twitterurlinput = document.getElementById('twitterurlinput');
const twittericoninput = document.getElementById('twittericoninput');
const twitterlink = document.getElementById('twitter');
const twittericon = document.getElementById('twittericon');

document.getElementById('settwitterbutton').addEventListener('click', () => {
if (twitterurlinput.value.trim() !== '' && twittericoninput.value.trim() !== '') {
localStorage.setItem('twitterurl', twitterurlinput.value.trim());
localStorage.setItem('twittericon', twittericoninput.value.trim());

twitterlink.href = localStorage.getItem('twitterurl');

twittericon.className = localStorage.getItem('twittericon');
} else {
alert('Please fill in both fields before setting the icon and link.');
}
});
const discordurlinput = document.getElementById('discordurlinput');
const discordiconinput = document.getElementById('discordiconinput');
const discordlink = document.getElementById('discord');
const discordicon = document.getElementById('discordicon');

document.getElementById('setdiscordbutton').addEventListener('click', () => {
if (discordurlinput.value.trim() !== '' && discordiconinput.value.trim() !== '') {
localStorage.setItem('discordurl', discordurlinput.value.trim());
localStorage.setItem('discordicon', discordiconinput.value.trim());

discordlink.href = localStorage.getItem('discordurl');

discordicon.className = localStorage.getItem('discordicon');
} else {
alert('Please fill in both fields before setting the icon and link.');
}
});
       
      })

function initFontSelector() {
        const fontselect = document.getElementById("fontselector");
        const fontstylesheetlink = document.getElementById("fontstylesheet");
        const currentfont = localStorage.getItem("font") || "inter";
    
        function activateFont(fontname) {
            fontstylesheetlink.setAttribute("href", `fonts/${fontname}.css`);
        }
    
        fontselect.addEventListener("change", () => {
            activateFont(fontselect.value);
            localStorage.setItem("font", fontselect.value);
            window.location.reload();
        });
    
    
        fontselect.value = currentfont;
        activateFont(currentfont);
    }
    initFontSelector();

    function initBGThemeSelector() {
      const bgselect = document.getElementById("bgthemeselector");
      const bgstylesheetlink = document.getElementById("bgstylesheet");
      const currentbgtheme = localStorage.getItem("backgroundtheme") || "default";
  
      function activateBGTheme(bgthemename) {
          bgstylesheetlink.setAttribute("href", `themes/background/${bgthemename}.css`);
      }
  
      bgselect.addEventListener("change", () => {
          activateBGTheme(bgselect.value);
          localStorage.setItem("backgroundtheme", bgselect.value);
          window.location.reload();
      });
  
  
      bgselect.value = currentbgtheme;
      activateBGTheme(currentbgtheme);
  }
  initBGThemeSelector();

  function initOldSearchSelector() {
    const searchselect = document.getElementById("oldsearchselector");
    const searchstylesheetlink = document.getElementById("oldsearchstylesheet");
    const currentsearchtheme = localStorage.getItem("oldsearch") || "off";

    function activateSearchTheme(searchthemename) {
        searchstylesheetlink.setAttribute("href", `themes/searchbar/${searchthemename}.css`);
    }

    searchselect.addEventListener("change", () => {
        activateSearchTheme(searchselect.value);
        localStorage.setItem("oldsearch", searchselect.value);
        window.location.reload();
    });


    searchselect.value = currentsearchtheme;
    activateSearchTheme(currentsearchtheme);
}
initOldSearchSelector();
function initIconsSwitcher() {
  const iconsselect = document.getElementById("iconsselector");
  const iconsstylesheetlink = document.getElementById("iconsstylesheet");
  const currenticonsoption = localStorage.getItem("icons") || "on";

  function activateIconsOption(iconsoption) {
      iconsstylesheetlink.setAttribute("href", `themes/icons/${iconsoption}.css`);
  }

  iconsselect.addEventListener("change", () => {
      activateIconsOption(iconsselect.value);
      localStorage.setItem("icons", iconsselect.value);
      window.location.reload();
  });


  iconsselect.value = currenticonsoption;
  activateIconsOption(currenticonsoption);
}
initIconsSwitcher();
function initWeatherSwitcher() {
  const weatherselect = document.getElementById("weatherselector");
  const weatherstylesheetlink = document.getElementById("weatherstylesheet");
  const currentweatheroption = localStorage.getItem("weather") || "on";

  function activateWeatherOption(weatheroption) {
      weatherstylesheetlink.setAttribute("href", `themes/weather/${weatheroption}.css`);
  }

  weatherselect.addEventListener("change", () => {
      activateWeatherOption(weatherselect.value);
      localStorage.setItem("weather", weatherselect.value);
      window.location.reload();
  });


  weatherselect.value = currentweatheroption;
  activateWeatherOption(currentweatheroption);
}
initWeatherSwitcher();
function initQuoteSwitcher() {
  const quoteselect = document.getElementById("quoteselector");
  const quotestylesheetlink = document.getElementById("quotestylesheet");
  const currentquoteoption = localStorage.getItem("quote") || "on";

  function activateQuoteOption(quoteoption) {
      quotestylesheetlink.setAttribute("href", `themes/quote/${quoteoption}.css`);
  }

  quoteselect.addEventListener("change", () => {
      activateQuoteOption(quoteselect.value);
      localStorage.setItem("quote", quoteselect.value);
      window.location.reload();
  });


  quoteselect.value = currentquoteoption;
  activateQuoteOption(currentquoteoption);
}
initQuoteSwitcher();
function settextcolor() {
  const newcolor = document.getElementById('textcolorinput').value;
  window.localStorage.setItem('textcolor', newcolor);
  window.location.reload();
}
document.getElementById('setcolorbutton').addEventListener('click', settextcolor, false);
const currentcolor = localStorage.getItem("textcolor") || "#FFF";
var alltext = document.getElementsByTagName("*");
for (var i=0, max=alltext.length; i < max; i++) {
  alltext[i].style.color = currentcolor;
}
function settimesize() {
  const newtimesize = document.getElementById('timesizeinput').value;
  window.localStorage.setItem('timesize', newtimesize);
  window.location.reload();
}
document.getElementById('settimesizebutton').addEventListener('click', settimesize, false);
const currenttimesize = localStorage.getItem("timesize") || "60px";
var timetext = document.querySelector(".time")
timetext.style.fontSize = currenttimesize;

function initSnow() {
  const snowselect = document.getElementById("snowselector");
  const snowonoff = localStorage.getItem("snow") || "off";
  snowselect.addEventListener("change", () => {
      localStorage.setItem("snow", snowselect.value);
      window.location.reload();
  });
snowselect.value = snowonoff;
}
initSnow();
function checkSnow() {
  if (localStorage.getItem("snow") === "on") {
    let snowscript = document.getElementById("snowscript")
    snowscript.setAttribute('src','snowstorm.js');
  }
}
checkSnow();
function setnewcity() {
  const newcity = document.getElementById('cityinput').value;
  window.localStorage.setItem('city', newcity);
  window.location.reload();
}
document.getElementById('setcitybutton').addEventListener('click', setnewcity, false);
function weatherMetricpicker() {
  const weathertypeselect = document.getElementById("weathertypeselector");
  const weatherpicker = localStorage.getItem("units") || "metric";
  weathertypeselect.addEventListener("change", () => {
      localStorage.setItem("units", weathertypeselect.value);
      window.location.reload();
  });
weathertypeselect.value = weatherpicker;
}
weatherMetricpicker();
function iconpackswitcher() {
  const iconpackselect = document.getElementById("iconpackselector");
  const iconpackpicker = localStorage.getItem("iconpack") || "default";
  iconpackselect.addEventListener("change", () => {
      localStorage.setItem("iconpack", iconpackselect.value);
      window.location.reload();
  });
iconpackselect.value = iconpackpicker;
}
iconpackswitcher();
