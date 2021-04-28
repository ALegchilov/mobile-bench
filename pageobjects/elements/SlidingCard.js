class SlidingCard {
    constructor(cardTitle, cardAccessabilityId) {
        this.expectedTitle = cardTitle
        this.accessabilityId = cardAccessabilityId
        this.cardXpath = `//android.view.ViewGroup[@content-desc="${cardAccessabilityId}"]`
    }
    get cardTitle() {
        return {android: `${this.cardXpath}//android.widget.TextView[@content-desc="card-title"]`, ios: 'dummy'}
    }

    get infoIcon(){
        return {android: `${this.cardXpath}/android.view.ViewGroup[1]/android.view.ViewGroup`, ios: 'dummy'}
    }
    get mainValue(){
        return {android: `${this.cardXpath}//android.widget.TextView[@content-desc="card-main-value"]`, ios: 'dummy'}
    }

    get projectedThisMonthTitle(){
        return {android: `${this.cardXpath}//android.widget.TextView[@content-desc="card-projected-this-month-title"]`, ios: 'dummy'}
    }

    get projectedThisMonthValue(){
        return {android: `${this.cardXpath}//android.widget.TextView[@content-desc="card-projected-this-month-value"]`, ios: 'dummy'}
    }
    get sameTimeLastMonthTitle(){
        return {android: `${this.cardXpath}//android.widget.TextView[@content-desc="card-same-last-month-title"]`, ios: 'dummy'}
    }

    get sameTimeLastMonthValue(){
        return {android: `${this.cardXpath}//android.widget.TextView[@content-desc="card-same-last-month-value"]`, ios: 'dummy'}
    }

    get lastMonthTotalTitle(){
        return {android: `${this.cardXpath}//android.widget.TextView[@content-desc="card-last-month-total-title"]`, ios: 'dummy'}
    }

    get lastMonthTotalValue(){
        return {android: `${this.cardXpath}//android.widget.TextView[@content-desc="card-last-month-total-value"]`, ios: 'dummy'}
    }
}

module.exports = SlidingCard;