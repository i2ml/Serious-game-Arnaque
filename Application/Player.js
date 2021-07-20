class Player {

    constructor() {
        this.quotidien = 50;
        this.telephone = 50;
        this.internet = 50;
    }

    addQuotidien(value) {
        this.quotidien = Math.max(Math.min(this.quotidien + value, 100), 0);
    }

    addInternet(value) {
        this.internet = Math.max(Math.min(this.internet + value, 100), 0);
    }

    addTelephone(value) {
        this.telephone = Math.max(Math.min(this.telephone + value, 100), 0);
    }


    /**
     * Allow to apply the effects of an impact on the player
     */
    applyStats(impact) {
        this.addTelephone(impact.telephone);
        this.addInternet(impact.internet)
        this.addQuotidien(impact.quotidien);
    }


    /**
     * get the points of a player if close to 0 , the player is balanced
     */
    getPoints() {
        let points = 0;
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