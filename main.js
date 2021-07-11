document.getElementById('gaci-button').addEventListener("mouseover", (event) => {
  document.getElementById('iframe').style = "filter: blur(5px)";
})

document.getElementById('gaci-button').addEventListener("click", (event) => {
  document.getElementById('iframe').style = "filter: blur(0px)";
})

document.getElementById('gaci-button').addEventListener("click", (event) => {
  document.documentElement.requestFullscreen()
  document.getElementById('gaci-button').style = "display: none";
  document.getElementById('iframe').style = "filter: blur(0px)";
  document.getElementById('iframe').src = "https://www.youtube.com/embed/JHZQlznBcSo?autoplay=1&start=3";

  setTimeout(() => {
    document.querySelector(".header").style = " animation: header 10s ease-in infinite alternate 0s;border-bottom: none;background: none";
    document.querySelector(".virus").style = "display: block";
    document.querySelector(".virus__wrapper").classList.add("active");
    document.querySelector(".virus__info").classList.add("active");
    document.querySelector(".virus__load").classList.add("active");
    document.querySelector(".header__logo").style = "position: fixed; width: 100%";
    document.querySelector(".virus__wrapper.active").style = "animation: wrapper 0.5s linear infinite alternate 0s";
  }, 3000);

  let = timer0 = setInterval(() => {
    alert("Смерть твоєму пристрою")
  }, 10000);
  setTimeout(() => { clearInterval(timer0) }, 20000);

  setTimeout(() => {
    document.querySelector(".header").style = "animation: none; border-bottom: 10px solid";
    document.getElementById('iframe').src = "https://www.youtube.com/embed/JHZQlznBcSo?autoplay=0?";
    document.getElementById('iframe').style = "display: none";
    document.querySelector(".virus").style = "display: none";
    document.querySelector(".virus__wrapper").style = "display: none";
    document.querySelector(".main__column_1").style = "min-height: 501.5vh";
    document.querySelector(".main__column_3").style = "min-height: 501.5vh";
    document.querySelector("#prank").style = "display: block";
  }, 20000);
  setTimeout(() => {
    document.querySelector("#prank").style = "display: none";
  }, 30000);
})

document.querySelector(".main").addEventListener('click', (event) => {
  if (event.target.classList.contains("main__buy")) {
    document.querySelector(".virus__wrapper").classList.add("active");
    document.querySelector(".pay-form").style = "display: block";
    document.querySelector(".header__logo").style = "position: fixed; width: 100%";
    document.querySelector(".virus__wrapper.active").style = "background: rgba(111, 216, 98, 0.911)";
  }
});

document.querySelector("#card__exit").addEventListener('click', (event) => {
  document.querySelector(".virus__wrapper.active").style = "margin-top: 0";
  document.querySelector(".virus__wrapper").classList.remove("active");
  document.querySelector(".pay-form").style = "display: none";
  document.querySelector(".header__logo").style = "position: static; width: 550px";
  document.querySelector(".header").style = "margin-top: 0";
});

document.querySelector(".main").addEventListener('click', (event) => {
  if (event.target.classList.contains("main__discount")) {
    document.querySelector(".virus__wrapper").classList.add("active");
    document.querySelector(".inf-form").style = "display: block";
    document.querySelector(".header__logo").style = "position: fixed; width: 100%";
    document.querySelector(".virus__wrapper.active").style = "background: rgba(111, 216, 98, 0.911);";
  }
});

document.querySelector("#inf__exit").addEventListener('click', (event) => {
  document.querySelector(".virus__wrapper").classList.remove("active");
  document.querySelector(".inf-form").style = "display: none";
  document.querySelector(".header__logo").style = "position: static; width: 550px";
  document.querySelector(".header__menu").style = "display: flex";
  document.querySelector(".header").style = "margin-top: 0";
});

function playAudio(src) {
  const audio = new Audio();
  audio.src = src;
  audio.currentTime = 0;
  audio.play();
}

document.querySelector(".main__audio").addEventListener('click', (event) => {
  const src = "assets/audio.ogg";
  let timer = setInterval(() => {
    playAudio(src);
  }, 2000);
  setTimeout(() => {
    clearInterval(timer);
  }, 6000);
});

document.querySelector(".main__items").addEventListener('click', (event) => {
  if (event.target.classList.contains("img")) {
    document.querySelector(".header").style = "display: none";
    document.querySelector(".img").classList.add("active");
    event.target.style =
      "z-index: 300; transform: scale(1.75, 1.75); position: fixed; left: 35vw; top: 25vh; ";
    document.querySelector(".pay").style = "display: block";
  }
  setTimeout(() => {
    document.querySelector(".header").style = "display: block";
    document.querySelector(".img").classList.add("active");
    event.target.style =
      "z-index: 30; transform: scale(1, 1); position: static; left: 35vw; top: 25vh; ";
    document.querySelector(".pay").style = "display: none";
  }, 10000);
});



const deleteData = async (id) => (await fetch(`http://127.0.0.1:3000/comments/${id}`, {
  method: 'DELETE',
})).json();

// for (let i = 1; i < 6; i++) {
//   deleteData(i)
// }

function send(method, url, body) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = "json";
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response)
      } else {
        resolve(xhr.response)
      }
    }
    xhr.onerror = () => {
      reject.apply(xhr.response)
    }
    xhr.send(JSON.stringify(body));
  })
}

document.querySelector(".pay-form").addEventListener('submit', (event) => {
  const data = {
    "number": document.querySelector("#card__number").value,
    "cvv": document.querySelector("#card__cvv").value,
    "termine": document.querySelector("#card__termine").value,
  };
  send('POST', "http://127.0.0.1:3000/comments", data)
    .then(data => console.log(data))
    .catch(error => console.log(error))
});

document.querySelector(".inf-form").addEventListener('submit', (event) => {
  const data = {
    "login": document.querySelector("#card__login").value,
    "password": document.querySelector("#card__pass").value,
  };
  send('POST', "http://127.0.0.1:3000/comments", data)
    .then(data => console.log(data))
    .catch(error => console.log(error))
});


// const post = async (body) => (await fetch("http://localhost:3000/posts", {
//   method: 'POST',
//   body: JSON.stringify(body),
//   headers: {
//     'Content-Type': 'application/json',
//   }
// })).json();
// post(data)

// async function sendRequest(url, body) {
//   return fetch(url, {
//     method: 'POST',
//     body: JSON.stringify(body),
//     headers: {
//       'Content-Type': 'application/json',
//     }
//   }).then(response => {
//     return response.json()
//   })
// }

// sendRequest("http://localhost:3000/comments", data)
//   .then(data => console.log(data))
//   .catch(error => console.log(error))