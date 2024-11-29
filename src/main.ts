import './style.css'

const textInput = document.querySelector('#text-input') as HTMLInputElement;
const encryptBtn = document.querySelector('button') as HTMLButtonElement;
const morseOutput = document.querySelector('#morse-output') as HTMLDivElement;

console.log(textInput,encryptBtn,morseOutput);


let morseAlphabet = [
  { letter: "1", morseCode: ".----" },
  { letter: "2", morseCode: "..---" },
  { letter: "3", morseCode: "...--" },
  { letter: "4", morseCode: "....-" },
  { letter: "5", morseCode: "....." },
  { letter: "6", morseCode: "-...." },
  { letter: "7", morseCode: "--..." },
  { letter: "8", morseCode: "---.." },
  { letter: "9", morseCode: "----." },
  { letter: "0", morseCode: "-----" },
  { letter: " ", morseCode: "    " },
  { letter: "A", morseCode: ".-" },
  { letter: "B", morseCode: "-..." },
  { letter: "C", morseCode: "-.-." },
  { letter: "D", morseCode: "-.." },
  { letter: "E", morseCode: "." },
  { letter: "F", morseCode: "..-." },
  { letter: "G", morseCode: "--." },
  { letter: "H", morseCode: "...." },
  { letter: "I", morseCode: ".." },
  { letter: "J", morseCode: ".---" },
  { letter: "K", morseCode: "-.-" },
  { letter: "L", morseCode: ".-.." },
  { letter: "M", morseCode: "--" },
  { letter: "N", morseCode: "-." },
  { letter: "O", morseCode: "---" },
  { letter: "P", morseCode: ".--." },
  { letter: "Q", morseCode: "--.-" },
  { letter: "R", morseCode: ".-." },
  { letter: "S", morseCode: "..." },
  { letter: "T", morseCode: "-" },
  { letter: "U", morseCode: "..-" },
  { letter: "V", morseCode: "...-" },
  { letter: "W", morseCode: ".--" },
  { letter: "X", morseCode: "-..-" },
  { letter: "Y", morseCode: "-.--" },
  { letter: "Z", morseCode: "--.." }

];

encryptBtn?.addEventListener('click', () => {
  morseOutput.innerHTML = "";
  let text2encrypt:string = textInput.value.toUpperCase();
  console.log(text2encrypt);
  let inputLettersArray:string [] = text2encrypt.split(""); // split text into single letters, save in array

  let morseMatchArray:string [] = inputLettersArray.map((singleLetter:string):string => { //for conversion
    let morseEncryption = morseAlphabet.find((morseLetter) => morseLetter.letter === singleLetter);

    return morseEncryption ? morseEncryption.morseCode : ''; // check if morseEncryption exists, else return empty string
  })
    morseOutput.innerHTML = morseMatchArray.join(''); //connecting each letter of this array into a string & showing in html
});


