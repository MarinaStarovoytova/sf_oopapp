// import "";
import { appState, clickOut} from "../app";
import taskFieldTemplate from "../templates/taskField.html";
import { addListenerOnce, showAll } from "./task";

// export const addNameUserInHtml = function (document) {
//     document.querySelector(".name-user").innerHTML = appState.currentUser.login;
//   };
  
// export const addPasswordHtml = function (document) {
//     document.querySelector(".name-user").innerHTML = appState.currentUser.password;
//   };

  export const setTaskFieldTemplate = function (document) {
    

    document.querySelector("#content").innerHTML = taskFieldTemplate;
    document.querySelector(".name-user").innerHTML = 'Здравствуйте, ' + appState.currentUser.login;
    addListenerOnce(document);
  showAll(document);
  const formControl = document.querySelectorAll('.form-control');
  const btnIn = document.querySelector('#app-login-btn');
  const btnOut = document.querySelector('#app-out-btn');
  for (let i = 0; i < 2; i++) {
    formControl[i].style.display = "none";
  }
  btnIn.style.display = "none";
  btnOut.style.display = "block";
  btnOut.addEventListener ("click", (e) => clickOut());
  }; 


