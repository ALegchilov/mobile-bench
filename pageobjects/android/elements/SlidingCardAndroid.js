class SlidingCardAndroid {
    constructor(cardTitle, cardAccessabilityId) {
        this.expectedTitle = cardTitle
        this.accessabilityId = cardAccessabilityId
    }

     get baseElement(){
        return $(`~${this.accessabilityId}`);
    }

    get cardTitle() {
        return $('~card-title');
    }

    get infoIcon(){
        return $('~info');
    }

    get mainValue(){
        return $('~card-main-value');
    }

    get projectedThisMonthTitle(){
        return $('~card-projected-this-month-title');
    }

    get projectedThisMonthValue(){
        return $('~card-projected-this-month-value');
    }
    get sameTimeLastMonthTitle(){
        return $('~card-same-last-month-title');
    }

    get sameTimeLastMonthValue(){
        return $('~card-same-last-month-value');
    }

    get lastMonthTotalTitle(){
        return $('~card-last-month-total-title');
    }

    get lastMonthTotalValue(){
        return $('~card-last-month-total-value');
    }
}

module.exports = SlidingCardAndroid;