var x = "";

function refresh() {
    document.getElementById("scr").innerHTML = `<p>${x}</p>`;
}

function AC() {
    x = "";
    refresh();
}

function DC() {
    x = x.substring(0, x.length - 1);
    refresh();
}

function Dot() {
    if (!x.includes('.')) {
        x += '.';
        refresh();
    }
}

function op(s) {
    if (x !== "" && !isNaN(x[x.length - 1])) {
        x += s;
        refresh();
    }
}

function add_num(a) {
    x += a;
    refresh();
}

function res() {
    try {
        x = eval(x).toString(); 
        refresh();
    } catch {
        x = "Error";
        refresh();
    }
}
