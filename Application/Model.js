class Model {

    constructor() {
        this.player = new Player();
        this.situation = new Situation(1);

        this.moralTeamName;
        this.equilibreTeamName;
    }

    /**
     * Return the argument that has been selected by the teams
     */
    getSelectedArgument() {
        const argumentToLoad = this.choseFinalArgumentId();
        console.log("The chosen argument is " + argumentToLoad)
        return new Argument(this.situation.id, argumentToLoad);
    }

    /**
     * Charge la situation suivante
     */
    loadNextSituation() {
        const idSituationToLoad = this.situation.id + 1;
        this.situation = new Situation(idSituationToLoad);
    }

    updateChart() {
        const months = ['Janvier',
            'Février',
            'Mars',
            'Avril',
            'Mai',
            'Juin',
            'Juillet',
            'Août',
            'Septembre',
            'Octobre',
            'Novembre',
            'Décembre'];

    }

    /**
     * Choisi aléatoirement un argument parmis ceux selectionnés.
     */
    choseFinalArgumentId() {
        const inputList = $("input")
        let argumentsList = [];
        for (const key in inputList) {
            if (inputList.hasOwnProperty(key)) {
                const element = inputList[key];
                if ($(element).is(":checked")) {
                    let argumentId = parseInt(element.id.substr(element.id.length - 1));
                    argumentsList.push(argumentId);
                }
            }
        }
        return argumentsList[Math.floor(Math.random() * argumentsList.length)];
    }

    /**
     * apply the effects of an argument over the player.
     */
    applyArgument(argument) {
        let impact;
        impact = argument.success;
        this.player.applyStats(impact);
        console.log(impact)
        this.updateChart();
        return impact;
    }

    /**
     * Read and apply difficulty
     */
    setDifficulty(difficulty) {
        if (difficulty === 'hard') {
            this.player.quotidien = 30;
            this.player.telephone = 40;
            this.player.internet = 30;
        }
        if (difficulty === 'easy') {
            this.player.quotidien = 70;
            this.player.telephone = 75;
            this.player.internet = 70;
        }
    }

}