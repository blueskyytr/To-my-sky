const PASSWORD = "Thaddeus";

let attempt = 0;
const correctPassword = "Rhodes Thaddeus Gregory";

function loginAdmin() {
  const input = document.getElementById("adminPassword").value;
  const notif = document.getElementById("notif");

  if (input === correctPassword) {
    document.getElementById("login").style.display = "none";
    document.getElementById("main").style.display = "block";
  } else {
    attempt++;

    if (attempt === 1) {
      notif.innerText = "eaakkk salah eakk";
    } 
    else if (attempt === 2) {
      notif.innerText = "sumpah kamu ga tau siapa fav aku??...";
    } 
    else if (attempt >= 3) {
      notif.innerText = "ah bukan deus ini ya?? masa ga tau??";
      document.getElementById("adminPassword").disabled = true;
    }
  }
}

function loadMedia() {
  const gallery = document.getElementById("gallery");

  const mediaList = [
    {
      type: "image",
      file: "foto1.jpg",
      caption: "Hari pertama kita jalan 💙"
    },
    {
      type: "image",
      file: "foto2.jpg",
      caption: "Moment paling random tapi bahagia"
    },
    {
      type: "video",
      file: "video1.mp4",
      caption: "Video paling favorit aku"
    }
  ];

  mediaList.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";

    if (item.type === "image") {
      const img = document.createElement("img");
      img.src = "media/" + item.file;
      card.appendChild(img);
    }

    if (item.type === "video") {
      const video = document.createElement("video");
      video.src = "media/" + item.file;
      video.controls = true;
      card.appendChild(video);
    }

    const caption = document.createElement("div");
    caption.className = "caption";
    caption.textContent = item.caption;

    card.appendChild(caption);
    gallery.appendChild(card);
  });
}function enterSite() {
  document.getElementById("introOverlay").style.display = "none";
}