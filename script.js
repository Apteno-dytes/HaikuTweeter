function Refl() {
    var syoku = document.getElementById("syoku").value;
    var niku = document.getElementById("niku").value;
    var kekku = document.getElementById("kekku").value;
    var name = document.getElementById("name").value;
    name = "｜｜" + name;
    var maxlength = Math.max(Math.max(syoku.length, niku.length), Math.max(kekku.length, name.length));
    var result = "";
    for (var i = 0; i < maxlength; i++) {
        if (i < name.length) {
            result += name.charAt(i);
        } else {
            result += "　";
        }
        result += "　";
        if (i < kekku.length) {
            result += kekku.charAt(i);
        } else {
            result += "　";
        }
        if (i < niku.length) {
            result += niku.charAt(i);
        } else {
            result += "　";
        }
        if (i < syoku.length) {
            result += syoku.charAt(i);
        } else {
            result += "　";
        }
        if (i + 1 < maxlength) result += "\n";
    }
    document.getElementById("result").value = result;
}
function Tweet() {
    var result_text = document.getElementById("result").value;
    result_text = result_text.replace(/\n/g, "%0A");
    window.open("https://twitter.com/share?text=" + result_text, "_blank");
}