
var visibleTab = "bio";

function changeViewType() {
    var ww = document.body.clientWidth;
    var conts = document.getElementsByClassName("content");

    if (ww < 1000) {

        for (var i = 0; i < conts.length; i++) {
            var el = conts[i];
            if (el.id != visibleTab) {
                el.classList.remove("hidden");
                el.classList.remove("invisible");
                el.classList.remove("moved-down");
            } 
        }

    } else if (ww >= 1001) {
        
        for (var i = 0; i < conts.length; i++) {
            var el = conts[i];
            if (el.id != visibleTab) {
                el.classList.add("hidden");
                el.classList.add("invisible");
                el.classList.add("moved-down");
            } 
        }

    };
};

document.addEventListener('DOMContentLoaded', changeViewType, false);

window.addEventListener('resize', function(event){
    changeViewType();
});


function showContent(sheet) {

    if (sheet == visibleTab) {
        return;
    }

    var toHide = document.getElementById(visibleTab);
    var toShow = document.getElementById(sheet);

    hide(toHide);
    show(toShow);

    visibleTab = sheet;

}

function hide(el, callback) {
    
    el.classList.add("invisible");
    setTimeout(function () {    
        el.classList.add("hidden");
        el.classList.add("moved-down");
        
        if (callback != undefined) {
            callback(show);
        }
    }, 200);

}

function show(el) {

    el.classList.remove("hidden");
    setTimeout(function () {
        el.classList.remove("invisible");
        el.classList.remove("moved-down");
    }, 250);

} 

var ita = 0;

function changeLang() {

    var ww = document.body.clientWidth;

    if (ww > 1000) {
        var visible = document.getElementById(visibleTab);
        hide(visible, translate);
    } else { //mobile
        var conts = document.getElementsByClassName("content");
        for (var i = 0; i < conts.length; i++) {
            var el = conts[i];
            hide(el, translate);
        }
    }

}

function translate(callback) {
    
    if (ita == 0) {
        
        //Bio section
        document.getElementById("bio-tit").innerHTML = "A dumbass, but a professional one";
        document.getElementById("bio-p-1").innerHTML = "By day<br/>I manage corporate software<br/>for multinationals,<br/>by night I cuddle the software and the websites<br/>for your hustles / startup / projects.";
        document.getElementById("bio-p-2").innerHTML = "I got a degree in Philosophy of Artificial Intelligence,<br/>I am about to get another in Digital Ethics.<br/>I earn a living building actual products,<br/>I offer my humanistic preparation and my technical competencies.";

        //Git section
        document.getElementById("git-p-1").innerHTML = "Here you can find (just a few of) my little personal projects.";
        document.getElementById("git-p-2").innerHTML = "99% of what I do, for the Italian region Emilia Romagna<br/> and for a Dutch multinational, are not public.";
        
        //Contacts section
        document.getElementById("cont-tit").innerHTML = "Contacts";
        document.getElementById("cont-p-1").innerHTML = "If you happen to be in need of a personal website,<br/>or a corporate software of maximum safety,<br/>or even if you just want to say hi to me:<br/>";
        document.getElementById("cont-p-2").innerHTML = "Actually mostly available just for go grabbin drinks.";
        
        changeFlag("assets/IT.png")
    } else {

        //Bio section
        document.getElementById("bio-tit").innerHTML = "Un pirla, ma dalla massima professionalità";
        document.getElementById("bio-p-1").innerHTML = "Di giorno<br/>gestiscogestionali<br/>per multinazionali,<br/>di notte faccio le coccole al software e ai siti<br/>per le tua attività / startup / progetti.";
        document.getElementById("bio-p-2").innerHTML = "Ho una laurea in filosofia dell'intelligenza artificiale,<br/>sto prendendo una magistrale in etica del digitale.<br/>Mi guadagno la pagnotta creando prodotti concreti,<br/>ti offro preparazione umanistica e competenze tecniche.";

        //Git section
        document.getElementById("git-p-1").innerHTML = "Qui trovi (solo alcuni de)i miei ludici progettini personali";
        document.getElementById("git-p-2").innerHTML = "Il 99% dei miei lavori, per la regione Emilia Romagna<br/> e per una multinazionale Olandese, non sono pubblici.";
        
        //Contacts section
        document.getElementById("cont-tit").innerHTML = "Contatti";
        document.getElementById("cont-p-1").innerHTML = "Nel caso tu abbia bisogno di un sito personale,<br/>di un software gestionale della massima sicurezza,<br/>o anche solo tu voglia farmi un saluto:<br/>";
        document.getElementById("cont-p-2").innerHTML = "Disponibile principalmente per aperitivi.";

        changeFlag("assets/USA.png")
    }
    
    ita = !ita;
    
    var ww = document.body.clientWidth;

    if (ww > 1000) {
        if (callback != undefined) {
            var vis = document.getElementById(visibleTab);
            callback(vis);
        }
    } else { //mobile
        if (callback != undefined) {
            var conts = document.getElementsByClassName("content");
            for (var i = 0; i < conts.length; i++) {
                var el = conts[i];
                callback(el);
            }
        }
        
    }

}

function changeFlag(path) {

    var flag = document.getElementById("flag");

    flag.classList.add("invisible");
    setTimeout(function () {
        flag.setAttribute("src", path);
        flag.classList.remove("invisible");
    }, 400);

}
