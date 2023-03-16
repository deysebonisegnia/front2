const form = document.querySelector("form");
const title = document.querySelector("#title");
const subtitle = document.querySelector("#subtitle");
//const email = document.querySelector('#email');
const url = document.querySelector("#Url");
const button = document.querySelector('#button')

const notesContainer = document.querySelector(".notes-container");
const card= document.querySelector("#card");

form.addEventListener('submit',(event) => {
    event.preventDefault();

    //verifica se o titulo esta vazio
    if(title.value === "" ){
        alert("Por favor, preencha o titulo" );
        return;
    }

         if(title.value.length < 6 ) {
           alert("Por favor,preencha o titulo corretamente" );
           return ;
         }

    //verifica se o subtitulo esta vazio
    if(subtitle.value === ""){
        alert("Por favor, preencha o subtitulo" );
        return;
    }
    if(url.value === "" || !ValidURL(url.value)){
        alert("Por favor, preencha o endereço do site" );
        return;
    }
    //verifica se o email esta vazio
    // if(email.value === ""  || !isEmailValid(email.value)){
    //     alert("Por favor, preencha seu email" );
    //     return;
    // }

    // se tiver preenchido enviar
  
    addNote();
    form.reset();
    cleanNotes();

});

// function isEmailValid(email){
//     const emailRegex = new RegExp(
//         // usuario@host.com
//         /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._%+-]+\.[a-zA-Z]{2,}$/

//     );

//     if(emailRegex.test(email)){
//         return true;
// }
//         return false;
//}

function ValidURL(str) {
    var regex = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    if(!regex .test(str)) {
      alert("Please enter valid URL.");
      return false;
    } else {
      return true;
    }
  }

function showNotes(){
    // cleanNotes();
    getNotes().forEach((note) => {
        const noteElement = createNote(note.title,note.subtitle,note.url);
        notesContainer.appendChild(noteElement);
        addNote()
    });
   
}
 function cleanNotes(){
     notesContainer.replaceChildren([]);
 }
function addNote(){
    const notes = getNotes();

    const noteObject = {
     id: generateId(),
    title: title.value,
    subtitle: subtitle.value,
    url: url.value
    };
    const noteElement = createNote(noteObject);
    notesContainer.appendChild(noteElement);
    notes.push(noteObject);
    saveNotes(notes);
    noteObject.value = "";
}
function generateId(){
    return Math.floor(Math.random() * 5000);
}
function createNote( ){
 const element = document.createElement("div")
    element.classList.add("note");
    element.classList.add("cards");

    const img = document.createElement("img")
    img.src = url.value
    element.appendChild(img)
    card.appendChild(element)

    const h2 = document.createElement("h2")
    h2.innerText = title.value
    element.appendChild(h2)
    card.appendChild(element)

    const p = document.createElement("p")
    p.innerText = subtitle.value
    element.appendChild(p)
    card.appendChild(element)

    
}
function getNotes(){
    const notes = JSON.parse(localStorage.getItem("notes")|| "[]");
    const orderedNotes = notes.sort((a ,b) => (a.fixed > b.fixed ? -1 : 1));
    return orderedNotes;
}

function saveNotes(notes){
    localStorage.setItem("notes",JSON.stringify(notes));

}
showNotes(); 




