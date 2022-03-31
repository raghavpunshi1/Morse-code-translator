
const objetom = {
    "A": ".- ",
    "B": "-... ",
    "C": "-.-. ",
    "D": "-.. ",
    "E": ". ",
    "F": "..-. ",
    "G": "--. ",
    "H": ".... ",
    "I": ".. ",
    "J": ".--- ",
    "K": "-.- ",
    "L": ".-.. ",
    "M": "-- ",
    "N": "-. ",
    "O": "--- ",
    "P": ".--. ",
    "Q": "--.- ",
    "R": ".-. ",
    "S": "... ",
    "T": "- ",
    "U": "..- ",
    "V": "...- ",
    "W": ".-- ",
    "X": "-..- ",
    "Y": "-.-- ",
    "Z": "--.. ",
    " ": "/ ",
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "'": ".----.",
    "?": "..--..",
    ".": ".-.-.-",
    ",": "--..--",
    "\"": ".-..-.",
    "(": "-.--.",
    ")": "-.--.-",
    "-": "-....-",
    "\n": "\n",
}
const objmtoe = {
    ".- ": "A",
    "-... ": "B",
    "-.-. ": "C",
    "-.. ": "D",
    ". ": "E",
    "..-. ": "F",
    "--. ": "G",
    ".... ": "H",
    ".. ": "I",
    ".--- ": "J",
    "-.- ": "K",
    ".-.. ": "L",
    "-- ": "M",
    "-. ": "N",
    "--- ": "O",
    ".--. ": "P",
    "--.- ": "Q",
    ".-. ": "R",
    "... ": "S",
    "- ": "T",
    "..- ": "U",
    "...- ": "V",
    ".-- ": "W",
    "-..- ": "X",
    "-.-- ": "Y",
    "--.. ": "Z",
    "/ ": " ",
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    ".----.": "'",
    "..--..": "?",
    ".-.-.-": ".",
    "--..--": ",",
    ".-..-.": "\"",
    "-.--.": "(",
    "-.--.-": ")",
    "-....-": "-",
    "\n": "\n"
}

document.getElementById("etombutton").addEventListener('click', (e) => {
    e.preventDefault();
    var str = document.getElementById("engtext").value.toUpperCase();
    let text = "";
    for (let i of str) {
        text += objetom[i];
    }
    console.log(text);
    document.getElementById("tanslatedetom").innerHTML = text;
})

document.getElementById("mtoebutton").addEventListener('click', (e) => {
    e.preventDefault();
    var str = document.getElementById("morsetext").value.toUpperCase();
    let text = "";
    let teststr = "";
    console.log(str);
    console.log(str.length);

    const myarr=str.split(" / ");
    console.log(myarr);
    for(let i=0;i<myarr.length;i++)
    {
        var myarrtrimmed=myarr[i].trim();
        var testarr=myarrtrimmed.split(" ");
        for(let j=0;j<testarr.length;j++)
        {
            console.log(testarr[j]+" ");
            text+=objmtoe[testarr[j]+" "];
        }
        text+=" ";
        console.log(text);
    }
    document.getElementById("translatedmtoe").value=text.toLowerCase();

})

