var superheroes = {
  "Mortal Kombat": {
    "Sub-Zero": {},
    Scorpion: {},
    "Noob Sybot": {}
  },
  "Marvel Universe": {
    "Fantastic Four": {
      "Mr. Fantastic": {},
      "Invisible Woman": {},
      "Human Torch": {},
      "The Thing": {}
    },
    "Spider-Man": {},
    Avengers: {
      "Captain America": {},
      Thor: {},
      "Iron-Man": {}
    },
    "X-Men": {
      POCOMAXA: {},
      "mujik v kolyaske": {},
      Magneto: {},
      "other guys": {}
    }
  },
  "DC Universe": {
    "Justice League": {
      SuperMan: {},
      Batman: {},
      "Wonder Woman": {}
    },
    Supervillain: {
      "Lex Luthor": {},
      "The Joker": {},
      "Ra's al Ghul": {}
    }
  }
};

const dataSet = {
  dawa: {
    molo4ko: {},
    hleb: {}
  },
  vova: {
    omletik: {
      yaichki: {},
      tomato: {}
    },
    kolbaska: {}
  }
};
var container = document.querySelector("#container");

createTree(container, superheroes);

function createTree(element, treesData) {
  //do stuff here

  let list1 = document.createElement("ul"); //list
  for (let key1 in treesData) {
    let listItem1 = document.createElement("li"); //item
    listItem1.textContent = key1; // dawa or vova

    let list2 = document.createElement("ul");
    for (let key2 in treesData[key1]) {
      let listItem2 = document.createElement("li");
      listItem2.textContent = key2; // molochko i hleb or omletik i kolbaska

      let list3 = document.createElement("ul");
      for (let key3 in treesData[key1][key2]) {
        let listItem3 = document.createElement("li");
        listItem3.textContent = key3; //yaichki or tomato

        list3.appendChild(listItem3);
      }
      listItem2.appendChild(list3);
      list2.appendChild(listItem2);
    }

    listItem1.appendChild(list2);
    list1.appendChild(listItem1);
  }
  element.appendChild(list1);
}

function switchBranch(event) {
  event.target.classList.toggle("hidden");
}

document.body.addEventListener("click", switchBranch);
