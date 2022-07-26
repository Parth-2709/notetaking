// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";
// import { getFirestore, collection, getDocs} from 'firebase/firestore/lite';
// import {collectoin, addDoc} from 'firebase/firestore';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAjyfKFbbf8zZZJDWfrDTZybj0OeIb8kCU",
//   authDomain: "note-taker-523bf.firebaseapp.com",
//   projectId: "note-taker-523bf",
//   storageBucket: "note-taker-523bf.appspot.com",
//   messagingSenderId: "359450171182",
//   appId: "1:359450171182:web:42d375a49ef02c8fd58cbf",
//   measurementId: "G-0FC9SYDV3N"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const db = getFirestore(app);

// const firebase = require("firebase");
// // Required for side-effects
// require("firebase/firestore");

var sub=document.querySelector("#submit");
var text=document.querySelector("#note");
var c2=document.querySelector(".c2");
sub.addEventListener('click',function(){
    var str=text.value;
    var str2=str;
    if(str.length==0){
        alert("Please enter a Note");
    }
    else{
        if(str.length>40){
            var str=str.slice(0,40);
            str=str.concat("....");
        }
        var box=document.createElement('li');
        var heading=document.createElement('h2');
        var content=document.createElement('div');
        content.innerText=str;
        box.appendChild(heading);
        var button2=document.createElement('button');
        button2.innerText="Delete Note";
        var button1=document.createElement('button');
        button1.innerText="view";
        var buttons=document.createElement('div');
        buttons.setAttribute("class","buttons");
        button1.setAttribute("class","view");
        button2.setAttribute("class","del");
        buttons.appendChild(button1);
        buttons.appendChild(button2);
        box.appendChild(content);
        box.appendChild(buttons);
        c2.appendChild(box);
        var popup=document.createElement('div');
        popup.setAttribute("class","invisible");
        var popuptext=document.createElement('div');
        var popupbtn=document.createElement('button');
        popuptext.innerText=str2;
        popupbtn.innerText="X";
        popup.appendChild(popuptext);
        popup.appendChild(popupbtn);
        c2.appendChild(popup);
    }
})
c2.addEventListener("click",function(e){
    if(e.target.innerText=="view"){
        e.target.parentNode.parentNode.nextElementSibling.setAttribute("class","visible");
    }
    else if(e.target.innerText=="Delete Note"){
    var toberemoved=e.target.parentNode.parentNode;
    c2.removeChild(toberemoved);
    }
    else{
        e.target.parentNode.setAttribute('class','invisible');
    }
})