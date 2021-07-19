class Player {

    constructor() {
        this.energie = 50;
        this.quotidien = 50;
        this.telephone = 50;
        this.internet = 50;
    }

    addQuotidien(value){
        this.quotidien = Math.max(Math.min(this.quotidien + value, 100), 0);
    }

    addInternet(value){
        this.internet = Math.max(Math.min(this.internet + value, 100), 0);
    }

    addTelephone(value){
        this.telephone = Math.max(Math.min(this.telephone + value, 100), 0);
    }

    addEnergie(value){
        this.energie = Math.max(Math.min(this.energie + value, 100), 0);
    }

    /**
     * Allow to apply the effects of an impact on the player
     */
    applyStats(impact) {
        this.addTelephone(impact.telephone);
        this.addInternet(impact.Internet)
        if (this.internet < 40 || this.telephone < 40) {
            //malus si en mauvaise santé
            this.addEnergie(impact.energiePenality); //energie is given as raw
            if (impact.quotidien < 0) { //moral can only lower until health is good
               this.addQuotidien(impact.quotidien);
            }
        } else {
            if (impact.quotidien === 0)
                this.addEnergie(5)
            if (impact.quotidien > 0)
                this.addEnergie(10)
            this.addQuotidien(impact.quotidien);
            this.addEnergie(impact.energiePenality);
        }
    }

    /**
     * get the points of a player if close to 0 , the player is balanced
     */
    getPoints() {
        let points = 0;
        if (this.energie >= 40)
            points++;
        if (this.energie > 60)
            points++;
        if (this.quotidien >= 40)
            points++;
        if (this.quotidien > 60)
            points++;
        if (this.telephone >= 40)
            points--;
        if (this.telephone > 60)
            points--;
        if (this.internet >= 40)
            points--;
        if (this.internet > 60)
            points--;
        console.log(this, points)
        return points;
    }
}