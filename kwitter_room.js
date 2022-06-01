var firebaseConfig = {
      apiKey: "AIzaSyDOf7yVRBxSv3wJqzDsdVI13uSHM49as3A",
      authDomain: "kwitter-259fb.firebaseapp.com",
      databaseURL: "https://kwitter-259fb-default-rtdb.firebaseio.com",
      projectId: "kwitter-259fb",
      storageBucket: "kwitter-259fb.appspot.com",
      messagingSenderId: "513229498660",
      appId: "1:513229498660:web:ea520249161e8e6bafabb1"
    };
    
     firebase.initializeApp(firebaseConfig);
 user_name=localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";

function add_room() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";

}
