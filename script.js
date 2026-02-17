const firstStart = [
  "Ka", "Zo", "Va", "Lu", "Re", "Ta", "Ni", "Xe", "Da", "Or", "Glu", "Du", "Lee", "Ben", "Bu", "Dra", "Ja", "Que", "Ula", "Tra", "Thi", "De", "Ele", "Ona", "Ooa", "Iqua", "Hal", "Sa", "Sula", "Thro"
];
const firstMid = [
  "le", "za", "re", "ta", "p", "glo", "k", "r", "t", "na", "g", "j", "cha", "dee", "wo"
];
const firstLast = [
  "zoo", "prem", "trop", "nu", "kin", "wan", "gon", "was", "oo", "gu", "inch", "tra", "pho", "gre"
];
const lastStart = [
  " Ju", " Shi", " Ken", " Da", " An", " Lu", " Ra", " Tri", " Gri", " Et", " Ug", " Qua"
];
const lastMid = [
  "to", "lu", "yo", "trea", "da", "th", "ca", "za", "pal", "hi", "ta", "wu", "dra", "din"
];
const lastLast = [
  "bi", "er", "en", "l", "chi", "dra", "we", "lan", "ghan", "brun", "zork", "ul", "min", "ren", "ards", "aros", "ram", "pla"
];
const title = [
    "Captain", "Darth", "Senator", "Admiral", "Grand Admiral", "Colonel", "Jedi", "Master", "Prince", "Princess", "Jedi Master"
];

function getPart(type) {
    return type[Math.floor(Math.random() * type.length)]
}

function generateName() {
    const hasFirstMid = Math.random() < 0.9;
    const hasFirstLast = Math.random() < 0.5;

    const hasHyphenFirst = Math.random() < 0.02;
    const hasHyphenLast = Math.random() < 0.03;

    const isTitle = Math.random() < 0.06;

    const hasLastName = Math.random() < 0.8;
    const hasLastMid = Math.random() < 0.8;
    const hasLastLast = Math.random() < 0.8;
    let name = getPart(firstStart);
    if(hasFirstMid){
        name+=getPart(firstMid);
    }
    if(hasFirstLast){
        if(hasHyphenFirst){
            name+="-";
        }
        name+=getPart(firstLast);
    }
    if(isTitle && hasLastName){
        name=getPart(title);
    }
    if(hasLastName){
        name+=getPart(lastStart);
        if(hasLastMid){
            name+=getPart(lastMid);
        }
        if(hasLastLast){
            if(hasHyphenLast){
            name+="-";
        }
            name+=getPart(lastLast);
        }
    }
    return name;
}

document.getElementById("generateBtn").addEventListener("click", () => {
    const list = document.getElementById("nameList");
    list.innerHTML = "";

    for (let i = 0; i < 5; i++) {
        const li = document.createElement("li");
        li.textContent = generateName();
        list.appendChild(li);
    }
});