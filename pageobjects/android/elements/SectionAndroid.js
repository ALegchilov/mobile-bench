class SectionAndroid {
    constructor(acessabilityId) {
        this.acessabilityId = acessabilityId;
    }
    get baseElement() {
        return $(`~${this.acessabilityId}`);
    }

    get cardTitle() {
        return $('~metric-section-title');
    }

    get infoIcon() {
        return $("~info");

    }
}
module.exports = SectionAndroid;