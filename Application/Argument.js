class Argument {

    constructor(idSituation, id) {
        this.motherSituation = idSituation;
        this.enonce = situations[idSituation].arguments[id].enonce;
        this.success = new Impact(idSituation, id, true);
        this.failure = new Impact(idSituation, id, false);
    }

}