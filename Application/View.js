class View {
    constructor() {
    }

    /**
     * Permet d'afficher une situation
     */
    displaySituation(situation) {
        const progress = (situation.id) * (100 / 12);
        console.log("progress is :" + progress)
        $("#mainBar").css({width: progress + '%'});
        $(".border-primary").removeClass("border");
        $("#enonce").html(situation.enonce);
        $(".situationIllu").attr("src", "img/situations/" + situation.id + ".png");
        $("input").prop("checked", false);
        for (const argumentId in situation.arguments) {
            $(".argumentList" + argumentId).empty();
            $('<h5/>', {
                'class': 'argumentText text-gray-900 m-0',
                'text': situation.arguments[argumentId].enonce,
            }).appendTo('.argumentList' + argumentId);
        }
    }

    /**
     * Permet d'afficher l'écran de fin
     */
    displayEndGame() {
        $("#profilModal").show();
        $("#backButton").addClass("disabled");
        $("#backButton").html("Félicitation, vous avez terminé le jeu !");
    }

    /**
     * Permet d'afficher un argument entre 2 situations
     */
    displaySelectedArgument(argument, impact) {

        
        //display raw values
        $("#argEnonce").html(argument.enonce);
        $("#impactText").html(impact.text);

        $("#quotidienValue").html(impact.quotidien);
        $("#telephoneValue").html(impact.telephone);
        $("#internetValue").html(impact.internet);
        

        //reset colors
        let classes = ["border-left-danger", "border-left-success", "border-left-info", "text-danger", "text-success", "text-info"];
        $("#quotidienCard").removeClass(classes);
        $("#quotidienText").removeClass(classes);

        $("#telephoneCard").removeClass(classes);
        $("#telephoneText").removeClass(classes);

        $("#internetCard").removeClass(classes);
        $("#internetText").removeClass(classes);

        let bad = 0;
        //display color
        if (impact.quotidien < 0) {
            bad++;
            $("#quotidienCard").addClass("border-left-danger");
            $("#quotidienText").addClass("text-danger");
        }
        if (impact.quotidien > 0) {
            $("#quotidienCard").addClass("border-left-success");
            $("#quoidienText").addClass("text-success");
        }
        if (impact.quotidien === 0) {
            $("#quotidienCard").addClass("border-left-info");
            $("#quotidienText").addClass("text-info");
        }
        if (impact.telephone < 0) {
            bad++;
            $("#telephoneCard").addClass("border-left-danger");
            $("#telephoneText").addClass("text-danger");
        }
        if (impact.telephone > 0) {
            $("#telephoneCard").addClass("border-left-success");
            $("#telephoneText").addClass("text-success");
        }
        if (impact.telephone === 0) {
            $("#telephoneCard").addClass("border-left-info");
            $("#telephoneText").addClass("text-info");
        }
        if (impact.internet < 0) {
            bad++;
            $("#internetCard").addClass("border-left-danger");
            $("#internetText").addClass("text-danger");
        }
        if (impact.internet > 0) {
            $("#internetCard").addClass("border-left-success");
            $("#internetText").addClass("text-success");
        }
        if (impact.internet === 0) {
            $("#internetCard").addClass("border-left-info");
            $("#internetText").addClass("text-info");
        }

        //basic arthur success/failure
        if (bad >= 2) {
            $("#impactIllu").attr('src', 'img/impacts/échouer.png');
        } else {
            $("#impactIllu").attr('src', 'img/impacts/ArthurCostard.png');
        }
        if (bad === 0) {
            $("#impactIllu").attr('src', 'img/impacts/success.png');
        }

        //impact specific illustration
        if (argument.motherSituation === 10) {
            $("#impactIllu").attr('src', 'img/impacts/miam.png');
        }
        if (argument.motherSituation === 11 && bad <= 1) {
            $("#impactIllu").attr('src', 'img/impacts/muscu.png');
        }
        if (argument.motherSituation === 11 && bad > 1) {
            $("#impactIllu").attr('src', 'img/impacts/faceslip.png');
        }
        if (argument.enonce.includes("surfait")) {
            $("#impactIllu").attr('src', 'img/impacts/voiture.png');
        }


    }

    /**
     * Display information about the player
     */
    updatePlayerInfo(player) {
        let classes = ["bg-success", "bg-warning", "bg-danger", "text-success", "text-warning", "text-danger"];
        $("#note").removeClass(classes);

        $("#quotidienBar").removeClass(classes);
        $("#telephoneBar").removeClass(classes);
        $("#internetBar").removeClass(classes);

        if ($("#quotidienValue").text() < 0) {
            $("#quotidienSpan").html(`<i class="fas fa-chevron-down"></i> En diminution.`);
        }
        if ($("#quotidienValue").text() === 0) {
            $("#quotidienSpan").html(`<i class="fas fa-grip-lines"></i> Stable.`);
        }
        if ($("#quotidienValue").text() > 0) {
            $("#quotidienSpan").html(`<i class="fas fa-chevron-up"></i> En augmentation.`);
        }
        if ($("#telephoneValue").text() < 0) {
            $("#telephoneSpan").html(`<i class="fas fa-chevron-down"></i> En diminution.`);
        }
        if ($("#telephoneValue").text() === 0) {
            $("#telephoneSpan").html(`<i class="fas fa-grip-lines"></i> Stable.`);
        }
        if ($("#telephoneValue").text() > 0) {
            $("#telephoneSpan").html(`<i class="fas fa-chevron-up"></i> En augmentation.`);
        }
        if ($("#internetValue").text() < 0) {
            $("#internetSpan").html(`<i class="fas fa-chevron-down"></i> En diminution.`);
        }
        if ($("#internetValue").text() === 0) {
            $("#internetSpan").html(`<i class="fas fa-grip-lines"></i> Stable.`);
        }
        if ($("#internetValue").text() > 0) {
            $("#internetSpan").html(`<i class="fas fa-chevron-up"></i> En augmentation.`);
        }

        let bad = 0;
        let good = 0;
        if (player.quotidien < 40) {
            bad++;
            $("#quotidienBar").addClass("bg-danger").css({width: player.quotidien + '%'});
        }
        if (player.quotidien >= 40 && player.quotidien <= 60) {
            $("#quotidienBar").addClass("bg-warning").css({width: player.quotidien + '%'});
        }
        if (player.quotidien > 60) {
            good++;
            $("#quotidienBar").addClass("bg-success").css({width: player.quotidien + '%'});
        }
        if (player.physique < 40) {
            bad++;
            $("#telephoneBar").addClass("bg-danger").css({width: player.telephone + '%'});
        }
        if (player.telephone >= 40 && player.telephone <= 60) {
            $("#telephoneBar").addClass("bg-warning").css({width: player.telephone + '%'});
        }
        if (player.telephone > 60) {
            good++;
            $("#telephoneBar").addClass("bg-success").css({width: player.telephone + '%'});
        }
        if (player.internet < 40) {
            bad++;
            $("#internetBar").addClass("bg-danger").css({width: player.internet + '%'});
        }
        if (player.internet >= 40 && player.internet <= 60) {
            $("#internetBar").addClass("bg-warning").css({width: player.internet + '%'});
        }
        if (player.internet > 60) {
            good++;
            $("#internetBar").addClass("bg-success").css({width: player.internet + '%'});
        }
        if (bad > 0) {
            $("#profilIllu").attr("src", "img/faces/Triste.png");
            $("#note").addClass("text-danger");
            $("#note").text("D");
        } else {
            if (good >= 1) {
                $("#note").text("B");
            } else {
                $("#note").addClass("text-warning");
                $("#note").text("C");
            }
            if (good >= 2) {
                if (good === 4) {
                    $("#note").addClass("text-success");
                    $("#note").text("A");
                }
                $("#profilIllu").attr("src", "img/faces/Heureux.png");
            } else {
                $("#profilIllu").attr("src", "img/faces/Normal.png");
            }
        }

    }
}