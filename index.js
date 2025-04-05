const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
"M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b",
"c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r",
"s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7",
"8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-",
"+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

let password1El = document.getElementById("password1-el");
let password2El = document.getElementById("password2-el");
let password1 = [];
let password2 = [];
let lengthEl = document.getElementById("length-el");
let copyBtn1 = document.getElementById("copy-password1");
let copyBtn2 = document.getElementById("copy-password2");

function generatePassword() {
    password1=[];
    password2=[];
    for(let i=0; i<lengthEl.value;i++) {
        password1.push(characters[Math.floor(Math.random() * characters.length)]);
        password2.push(characters[Math.floor(Math.random() * characters.length)]);
    }
    password1El.textContent = password1.join("");
    password2El.textContent = password2.join("");
    copyBtn1.textContent="Copy";
    copyBtn1.style.background="#10b981";
    copyBtn2.textContent="Copy";
    copyBtn2.style.background="#10b981"
}

function copyPassword1() {
    if(password1El.textContent !== "") {
        navigator.clipboard.writeText(password1El.textContent);
        copyBtn1.textContent="Copied";
        copyBtn1.style.background="#E11D48";
        copyBtn2.textContent="Copy";
        copyBtn2.style.background="#10b981"
    }
  }

  function copyPassword2() {
    if (password2El.textContent !== "") {
        navigator.clipboard.writeText(password2El.textContent);
        copyBtn2.textContent="Copied";
        copyBtn2.style.background="#E11D48";
        copyBtn1.textContent="Copy";
        copyBtn1.style.background="#10b981"

    }
  }