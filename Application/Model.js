class Model {

    constructor() {
        this.player = new Player();
        this.situation = new Situation(1);
        this.moralTeamName;
        this.equilibreTeamName;
        this.difficulty;
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
     * Choisi aléatoirement un argument parmi ceux sélectionnés.
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
        let argument;
        let scoredArgumentsList = this.calculateScoredArgumentList(argumentsList);
        switch (this.difficulty) {
            case "hard" :
                argumentsList =[];
                let min = this.getMinScoreFromScoredList(scoredArgumentsList);
                scoredArgumentsList.forEach(scoredArgument => {
                        if (min === scoredArgument[1])
                            argumentsList.push(scoredArgument[0]);
                    }
                );
                console.log(argumentsList)
                argument = this.chooseRandomArgumentFromList(argumentsList);
                break;
            case "easy" :
                argumentsList =[];
                let max = this.getMaxScoreFromScoredList(scoredArgumentsList);
                scoredArgumentsList.forEach(scoredArgument => {
                        if (max === scoredArgument[1])
                            argumentsList.push(scoredArgument[0]);
                    }
                );
                console.log(argumentsList)
                argument = this.chooseRandomArgumentFromList(argumentsList);
                break;
            default :
                argument = this.chooseRandomArgumentFromList(argumentsList);
                break;
        }
        return argument;
    }

    /**
     * get the smallest score from the list
     */
    getMinScoreFromScoredList(scoredArgumentsList) {
        let min = 99999;
        scoredArgumentsList.forEach(scoredArgument => {
                if (min > scoredArgument[1])
                    min = scoredArgument[1];
            }
        );
        return min;
    }

    /**
     * get the biggest score from the list
     */
    getMaxScoreFromScoredList(scoredArgumentsList) {
        let max = -99999;
        scoredArgumentsList.forEach(scoredArgument => {
                if (max < scoredArgument[1])
                    max = scoredArgument[1];
            }
        );
        return max;
    }

    /**
     * Generate a list with a score for each impact possible for each argument. The score is high if the impact is positive.
     */
    calculateScoredArgumentList(argumentsList) {
        let scoredArgumentsList = [];
        argumentsList.forEach(argument => scoredArgumentsList.push(
            [
                argument,
                (new Impact(this.situation.id, argument, true).quotidien
                    + new Impact(this.situation.id, argument, true).telephone
                    + new Impact(this.situation.id, argument, true).internet)
            ]
        ));
        return scoredArgumentsList;
    }

    /**
     * Get a random argument from the list of argument
     */
    chooseRandomArgumentFromList(argumentsList) {
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

}