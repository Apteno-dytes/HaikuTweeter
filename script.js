function Refl() {
    var syoku = document.getElementById("syoku").value;
    var niku = document.getElementById("niku").value;
    var kekku = document.getElementById("kekku").value;
    var name = document.getElementById("name").value;
    var is_noname = (name.length == 0);
    var atama = document.getElementById("atama");
    if (atama.checked) {
        niku = "　" + niku;
        if (is_noname) {
            kekku = "．　" + kekku;
        }else{
            kekku = "　　" + kekku;
            name = "｜｜｜｜" + name;
        }
    } else {
        if (!is_noname) name = "｜｜" + name;
    }
    var maxlength = Math.max(Math.max(syoku.length, niku.length), Math.max(kekku.length, name.length));
    var result = "";
    var spaces = "";
    for (var i = 0; i < maxlength; i++) {
        spaces = "";
        if (!is_noname){
            if (i < name.length) {
                result = result + spaces + name.charAt(i);
                spaces = "";
            } else {
                spaces += "　";
            }
            result += "　";
        }
        if (i < kekku.length) {
            result = result + spaces + kekku.charAt(i);
            spaces = "";
        } else {
            spaces += "　";
        }
        if (i < niku.length) {
            result = result + spaces + niku.charAt(i);
            spaces = "";
        } else {
            spaces += "　";
        }
        if (i < syoku.length) {
            result = result + spaces + syoku.charAt(i);
            spaces = "";
        } else {
            spaces += "　";
        }
        if (i + 1 < maxlength) result += "\n";
    }
    document.getElementById("result").value = result;
}
function Tweet() {
    var result_text = document.getElementById("result").value;
    result_text = result_text.replace(/\n/g, "%0A");
    window.open("https://twitter.com/intent/tweet?text=" + result_text, "_blank");
}