

var PlusIcon = document.querySelector(".plusIcon");
var mainContainer = document.querySelector(".main-container");
var addlist = document.querySelector(".addListPopUp");
var cardsbox = document.querySelector(".cardsContainer");
const triptoparis = document.getElementById("texttriptoparis");
const singlecardcontainer = document.querySelector(".singlecardcontainer");
const singleCardHeading = document.querySelector(".singleCardHeading");
PlusIcon.addEventListener("click", popup);
function popup() {
    mainContainer.style.filter = "blur(8px)";
    addlist.style.display = "block";
    cardsbox.style.filter = "blur(8px)";
    document.querySelector(".noItem").style.display = "none";
}

var close = document.querySelector(".close");
close.addEventListener("click", () => {
    mainContainer.style.filter = "blur(0px)";
    addlist.style.display = "none";
    ifBlockEmpty(cardsbox);
    cardsbox.style.filter = "none";
})

let ifBlockEmpty = (ac) => {
    if (ac.innerHTML == "") {
        document.querySelector(".noItem").style.display = "block";
    }
}


// creating array of objects 
var arrayOfObjectsOfCards = [];

function addCard() {
    event.preventDefault();
    const cardName = document.getElementById("in1").value;
    const cardObjet = { id: Date.now(), name: cardName };
    // const tryarr = cardObjet.taskList;
    // tryarr.push("paritosh");
    // console.log(tryarr);
    arrayOfObjectsOfCards.push(cardObjet);
    document.getElementById("in1").value = "";
    console.log('here', arrayOfObjectsOfCards);
    cardsbox.style.filter = "none";
}
// let counter = 1;

// console.log(card.id);
// console

let selectedCardId;
function createCard() {
    let card = document.createElement("div");
    card.className = "cards card1";
    for (let index = 0; index < arrayOfObjectsOfCards.length; index++) {
        const element = arrayOfObjectsOfCards[index];
        card.id = element.id;
        console.log(card.id);
        card.innerHTML = `<i class="fas fa-trash-alt removeIcon"></i> <i class="fas fa-plus-circle plusbtn" data-card-id = "${card.id}"></i>`

        cardsbox.appendChild(card);
        const HeadingOfCard = document.createElement("p");
        HeadingOfCard.className = "headings";

        let cardsHeading = document.createTextNode(element.name);
        HeadingOfCard.appendChild(cardsHeading);
        console.log(HeadingOfCard);
        card.appendChild(HeadingOfCard);

        const horizontalLine = document.createElement("hr");
        horizontalLine.style.width = "80%";
        horizontalLine.style.marginLeft = "44px";
        card.appendChild(horizontalLine);
    }
    const headingOpen = document.querySelectorAll(".headings")
    headingOpen.forEach(e => {
        e.addEventListener("click", (e) => {
            let selDiv = e.target.parentNode;  
            let currentDiv = e.target;  
            console.log(currentDiv.innerText) 
            
            triptoparis.innerText = currentDiv.innerText;

            let singleCard = document.createElement('div');
            singleCard.className = "single-card";
            singleCard.className = "single-style";
            singleCard.appendChild(selDiv);            
           arrayOfObjectsSingle.unshift(singleCard);            
            console.log(arrayOfObjectsSingle)           

        
            cardsbox.style.display = "none";
            mainContainer.style.display = "none";
            singleCardHeading.style.display = "block";    
            singlecardcontainer.appendChild(arrayOfObjectsSingle[0]);
        })
    })
     
    cardsbox.style.display = "flex";
    cardsbox.style.flexWrap = "wrap";
    cardsbox.style.rowGap = "2.5rem";
    const removeitem = document.querySelectorAll(".removeIcon");
    removeitem.forEach(e => {
        e.addEventListener("click", (e) => {
            // e.target.closest(".par_box").remove();

            let selDiv = e.target.parentNode;
            // console.log(event.target.id);
            selDiv.remove();
            ifBlockEmpty(cardsbox);
        })
    })
    const plusBtnInCard = document.querySelectorAll(".plusbtn");
    console.log()
    plusBtnInCard.forEach(e => {
        e.addEventListener("click", (e) => {
            console.log(e.target.dataset);
            mainContainer.style.filter = "blur(8px)";
            addCardDataPopup.style.display = "block";
            cardsbox.style.filter = "blur(8px)";
            selectedCardId = e.target.dataset.cardId
        })
    })
}
let arrayOfObjectsSingle = [];
// if( arrayOfObjectsOfCards.length == 0 ){
//     document.querySelector(".noItem").style.display = "block";
// }

const addCardDataPopup = document.querySelector(".addCardDataPopup")
// const popupAddBtn = document.querySelector(".add");
// popupAddBtn.addEventListener("click", ()=>{
//     mainContainer.style.filter = "blur(0px)";
//     addCardDataPopup.style.display = "none";
//     cardsbox.style.filter = "blur(0px)";
//     addingDataIntoCard();
// })


function addingDataIntoCard(temp) {
    console.log(temp);
    // console.log(temp.closest(".cards"));
    const data = document.getElementById("cardValue").value;
    // console.log(data);
    const dynamicAge = document.createElement('p');
    const ele = arrayOfObjectsOfCards.find(card=>card.id == selectedCardId);
    console.log(ele);
    dynamicAge.innerHTML = data;
    document.getElementById(`${ele.id}`).appendChild(dynamicAge);
    // checklist
    dynamicAge.classList.add('tasklistitem');
    const checkBox = document.querySelectorAll(".tasklistitem")
    checkBox.forEach(e => {
        e.addEventListener("click", (e) => {
            let selDiv = e.target;
            selDiv.style.textDecoration = "line-through";
            selDiv.style.color = "red"
        })
    })
    
    mainContainer.style.filter = "none";
    // let ppp = document.querySelector(".addCardDataPopup");
    addCardDataPopup.style.display = "none";
    cardsbox.style.filter = "none";
    selectedCardId = null;
}

function closeAddDataPopup() {
    mainContainer.style.filter = "none";
    // let ppp = document.querySelector(".addCardDataPopup");
    addCardDataPopup.style.display = "none";
    cardsbox.style.filter = "none";
}
var noItem = document.querySelector(".noItem");
var addbtn = document.querySelector(".add");



addbtn.addEventListener("click", () => {
    addCard();
    cardsbox.style.display = "block";
    addlist.style.display = "none";
    mainContainer.style.filter = "blur(0px)";
    noItem.style.display = "none";
    document.querySelector(".noItem").style.display = "none";
    createCard();
})

function backToMainList(e) {
    cardsbox.style.display = "flex"; 
    arrayOfObjectsSingle[0].classList.remove("single-style");
    cardsbox.appendChild(arrayOfObjectsSingle[0]);
    arrayOfObjectsSingle = [] ;
    mainContainer.style.display = "block";

    singleCardHeading.style.display = "none";
}



    // let li = document.getElementsByTagName("li");
    // let buttons = document.getElementsByTagName("span");

    // Array.from(buttons).forEach(b => {
    //   b.addEventListener("click", function() {
    //     console.log("clicked");
    //   });
    // });

// counter++;




// 
//     paris.innerHTML = '<i class="fas fa-plus-circle" id = "plusIcon"></i> <i class="fas fa-trash-alt" id ="removeIcon"></i>' 






// old approach******

// var PlusIcon = document.querySelector(".plusIcon");
// var mainContainer = document.querySelector(".main-container");
// var addlist = document.querySelector(".addListPopUp");
// var cardsbox = document.querySelector(".cardsContainer");
// PlusIcon.addEventListener("click", popup);
// function popup() {
//     mainContainer.style.filter = "blur(8px)";
//     addlist.style.display = "block";
//     cardsbox.style.display = "none";
// }

// var close = document.querySelector(".close");
// close.addEventListener("click", ()=> {
//     mainContainer.style.filter = "blur(0px)";
//     addlist.style.display = "none";
// })

// var noItem = document.querySelector(".noItem");
// var addbtn = document.querySelector(".add");

// let counter = 1;

// addbtn.addEventListener("click", ()=> {
//     cardsbox.style.display = "block";
//     addlist.style.display = "none";
//     mainContainer.style.filter = "blur(0px)";
//     noItem.style.display = "none";

//     let card = document.createElement("div");
//     card.id = "card" + counter;
//     card.className = "cards card1"; 
//     card.innerHTML = '<i class="fas fa-trash-alt removeIcon"></i>'

//     cardsbox.appendChild(card);
//     const HeadingOfCard = document.createElement("p");
//     HeadingOfCard.className = "headings";
//     HeadingOfCard.innerHTML = document.getElementById("in1").value;
//     card.appendChild(HeadingOfCard);

//     const horizontalLine = document.createElement("hr");
//     horizontalLine.style.width = "80%";
//     horizontalLine.style.marginLeft = "44px";
//     card.appendChild(horizontalLine);

//     cardsbox.style.display = "flex";
//     cardsbox.style.flexWrap = "wrap";
//     cardsbox.style.rowGap = "2.5rem";

//     counter++;

//     document.querySelector(".noItem").style.display = "none";
// })












// kachra

// for(let index = 0; index < arrayOfObjectsOfCards.length; index++){
    //     const element = arrayOfObjectsOfCards[index];
    //     // console.log(data);
        
    //     // let acess = document.querySelector(".plusbtn");
    //     // console.log(temp, temp.dataset);
    //     // console.log(element.id ,  temp.dataset["card-id"] );
    //     if( element.id == selectedCardId ){
    //         console.log(data);
    //         // dynamicAge.innerHTML = data;
    //         // document.getElementById(`${element.id}`).appendChild(dynamicAge);
    //     }
    // }







// 
//     paris.innerHTML = '<i class="fas fa-plus-circle" id = "plusIcon"></i> <i class="fas fa-trash-alt" id ="removeIcon"></i>' 



