class Impact {

    constructor(idSituation, idArgument, isSuccess) {
        if (isSuccess) {
            this.text = situations[idSituation].arguments[idArgument].success.text
            this.imageUrl = situations[idSituation].arguments[idArgument].success.imageLink

            this.quotidien = situations[idSituation].arguments[idArgument].success.quotidien;
            this.telephone = situations[idSituation].arguments[idArgument].success.telephone;
            this.internet = situations[idSituation].arguments[idArgument].success.internet;
        } else {
            this.text = situations[idSituation].arguments[idArgument].failure.text
            this.imageUrl = situations[idSituation].arguments[idArgument].failure.imageLink

            this.quotidien = situations[idSituation].arguments[idArgument].failure.quotidien;
            this.telephone = situations[idSituation].arguments[idArgument].failure.telephone;
            this.internet = situations[idSituation].arguments[idArgument].failure.internet;
        }
    }
}