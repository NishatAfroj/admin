

  
  const firebaseConfig = {
    apiKey: "AIzaSyAuWgrW33JFMv7oMt49_uYksoxHEzc8tmQ",
    authDomain: "babyblossom-68ad9.firebaseapp.com",
    databaseURL: "https://babyblossom-68ad9-default-rtdb.firebaseio.com",
    projectId: "babyblossom-68ad9",
    storageBucket: "babyblossom-68ad9.appspot.com",
    messagingSenderId: "747889170833",
    appId: "1:747889170833:web:825000a5091552ddf8a230",
    measurementId: "G-NJBEZVPLRD"
  };


  firebase.initializeApp(firebaseConfig);

  var contactFormDB = firebase.database().ref('contactform');

  document.getElementById('contactform').addEventListener("submit", submitForm);





  function submitForm(e){

    e.preventDefault();

    var name= getElementVal('name');
    
    var email=getElementVal('email');
    var subject= getElementVal('subject');
    var message=getElementVal("message");


    console.log(name, email, subject, message);

saveMessages(name, email, subject, message);



  }



const saveMessages=(firstname, lastname, emailid, password)=>{
  var newContactForm=contactFormDB.push();
  newContactForm.set({
    firstname:firstname,
    lastname:lastname,
    emailid:emailid,
    password:password
  })
}

  const getElementVal=(id)=>{
    return document.getElementById(id).value;
  };
