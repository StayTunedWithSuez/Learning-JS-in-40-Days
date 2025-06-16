//Shadow DOM

const shadowHost = document.querySelector("#box"); //Shadow host
const shadow = shadowHost.attachShadow({mode: "open"});
shadow.innerHTML = `<style> p {color: red;} </style> <p> Hello Shadow!`;


// Handling Large-Scale DOM Updates

function addItems(count) {
    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i++) {
      const div = document.createElement('div');
      div.textContent = `Item ${i}`;
      frag.appendChild(div);
    }
    document.body.appendChild(frag);
  }

  addItems(10);

  