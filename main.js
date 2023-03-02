////////////////////////// Start  sidebar//////////////////////////////
let notficationcount = document.querySelector("notifications-count");
let menuItems = document.querySelectorAll(".menu-item");
let acitveitemschange = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    acitveitemschange();
    item.classList.add("active");
    //Show the notification count
    if (item.id != "notifications") {
      document.querySelector(".notifications-popup").style.display = "none";
    } else {
      document.querySelector(".notifications-popup").style.display = "block";
      document.querySelector(
        "#notifications .notifications-count"
      ).style.display = "none";
    }
  });
});
////////////////////////// end  sidebar//////////////////////////////

////////////////////////// Start  Messages//////////////////////////////
let messagesNotfication = document.querySelector("#messages-notifications");
let messages = document.querySelector(".messages");
let message = messages.querySelectorAll(".message");
let messageSearch = messages.querySelector("#message-search");
// console.log(message, messageShearch);

//####### start search in message about any thing you want ###############
let searchMessage = () => {
  let val = messageSearch.value.toLowerCase();
  //   console.log(val);
  message.forEach((item) => {
    let name = item.querySelector("h5").innerHTML.toLowerCase();
    if (name.includes(val)) {
      // if (name.indexOf(val)!=-1) {od the the block of if}another way to search about string
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
};
messageSearch.addEventListener("keyup", searchMessage);
//############## End search in message about any thing you want #############

//######lighthieght about the message
messagesNotfication.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 2rem var(--color-primary) ";
  document.querySelector(
    "#messages-notifications .notifications-count"
  ).style.display = "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 3000);
});
////////////////////////// end  Messages//////////////////////////////
////////////////////////// end  Theme//////////////////////////////
let theme = document.querySelector("#theme");
let themeCustModel = document.querySelector(".customize-theme");
// console.log(theme, themeCustModel);
//#### show and hiddin theme #####
let opentheme = () => {
  themeCustModel.style.display = "grid";
};
let closetheme = (event) => {
  if (event.target.classList.contains("customize-theme")) {
    themeCustModel.style.display = "none";
  }
};
themeCustModel.addEventListener("click", closetheme);
theme.addEventListener("click", opentheme);
////////////////////////// end  Theme//////////////////////////////

////////////////////////// Start FontSize in the theme //////////////////////////////
let fontSizes = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");
// console.log(fontSizes, root);
//remove the class "active" from the spans
let removeSizeSelec = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};

fontSizes.forEach((size) => {
  let fontSize;
  size.addEventListener("click", () => {
    removeSizeSelec();
    size.classList.toggle("active");
    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("--stick-top-left", "5.4rem");
      root.style.setProperty("--stick-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("--stick-top-left", "5.4rem");
      root.style.setProperty("--stick-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("--stick-top-left", "-2rem");
      root.style.setProperty("--stick-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty("--stick-top-left", "-5rem");
      root.style.setProperty("--stick-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "22px";
      root.style.setProperty("--stick-top-left", "-12rem");
      root.style.setProperty("--stick-top-right", "-35rem");
    }
    //For Change all elements of the HTML Page
    document.querySelector("html").style.fontSize = fontSize;
  });
});
////////////////////////// end  FontSize in the theme //////////////////////////////

////////////////////////// start  color of all elements in the html page //////////////////////////////
let colorPallet = document.querySelectorAll(".choose-color span");
// console.log(colorPallet);

//remove the class "active" from the spans to change the color
let removecolorSelec = () => {
  colorPallet.forEach((color) => {
    color.classList.remove("active");
  });
};
colorPallet.forEach((color) => {
  color.addEventListener("click", () => {
    //remove the class "active" from the spans to change the color
    removecolorSelec();
    color.classList.add("active");
    let primaryhue;
    if (color.classList.contains("color-1")) {
      primaryhue = 252;
    } else if (color.classList.contains("color-2")) {
      primaryhue = 452;
    } else if (color.classList.contains("color-3")) {
      primaryhue = 352;
    } else if (color.classList.contains("color-4")) {
      primaryhue = 152;
    } else if (color.classList.contains("color-5")) {
      primaryhue = 202;
    }
    root.style.setProperty("--color-primary-hue", primaryhue);
  });
});
////////////////////////// end  color of all elements  in the html page //////////////////////////////

////////////////////////// end  color of BackGround //////////////////////////////
let background1 = document.querySelector(".bg-1");
let background2 = document.querySelector(".bg-2");
let background3 = document.querySelector(".bg-3");
// console.log(background1, background2, background3);
let lightColorLightness;
let darkColorLightness;
let whiteColorLightness;
function changeBackGround() {
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty("--dark-color-lightness", darkColorLightness);
  root.style.setProperty("--white-color-lightness", whiteColorLightness);
}
background1.addEventListener("click", () => {
  darkColorLightness = "17%";
  whiteColorLightness = "100%";
  lightColorLightness = "95%";
  background1.classList.add("active");
  //remove the active class from others
  background2.classList.remove("active");
  background3.classList.remove("active");
  changeBackGround();
  //   window.location.reload();
});
background2.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "20%";
  lightColorLightness = "15%";
  background2.classList.add("active");
  //remove the active class from others
  background1.classList.remove("active");
  background3.classList.remove("active");
  changeBackGround();
});
background3.addEventListener("click", () => {
  darkColorLightness = "95%";
  whiteColorLightness = "10%";
  lightColorLightness = "0%";
  background3.classList.add("active");
  //remove the active class from others
  background1.classList.remove("active");
  background2.classList.remove("active");
  changeBackGround();
});

////////////////////////// end  color of BackGround //////////////////////////////
