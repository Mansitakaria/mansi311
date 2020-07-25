
var firebaseConfig = {
    apiKey: "AIzaSyCy79_7MHnpoBDTBHqPQBN2RCblP_e29rM",
    authDomain: "contactform-5133d.firebaseapp.com",
    databaseURL: "https://contactform-5133d.firebaseio.com",
    projectId: "contactform-5133d",
    storageBucket: "contactform-5133d.appspot.com",
    messagingSenderId: "499402819774",
    appId: "1:499402819774:web:b9d16b8e677ed4e984f6ef",
    measurementId: "G-EP61D52NH5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  var messageRef=firebase.database().ref('messages');

document.getElementById('contactform').addEventListener('submit',submitform);


function submitform(e){
    e.preventDefault();



    var firstname=getInputVal('firstname');
     var lastname =getInputVal('lastname');
     var email=getInputVal('email');
     var phone=getInputVal('phone');
     var message=getInputVal('message');

     saveMessage(firstname,lastname,email,phone,message);

     

    
}
function getInputVal(id){
    return document.getElementById(id).Value;

    
}
function saveMessage(firstname,lastname,email,phone,message){
    var newMessageRef= messagesRef.push();
    newMessageRef.set({
        firstname:firstname,
        lastname:lastname,
        email:email,
        phone:phone,
        message:message
    });
}