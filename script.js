function Refl() {
    var syoku = document.getElementById("syoku").value;
    var niku = document.getElementById("niku").value;
    var kekku = document.getElementById("kekku").value;
    var name = document.getElementById("name").value;
    name = "｜｜" + name;
    var maxlength = Math.max(Math.max(syoku.length, niku.length), Math.max(kekku.length, name.length));
    var result = "";
    var spaces = "";
    for (var i = 0; i < maxlength; i++) {
        spaces = "";
        if (i < name.length) {
            result = result + spaces + name.charAt(i);
            spaces = "";
        } else {
            spaces += "　";
        }
        result += "　";
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
    result_text += "\n";
    result_text = result_text.replace(/\n/g, "%0A");
    window.open("https://twitter.com/share?text=" + result_text + "&url=https://apteno-dytes.github.io/HaikuTweeter/", "_blank");
}