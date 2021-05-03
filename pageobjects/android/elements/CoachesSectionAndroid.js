const MetricWidget = require('./MetricWidget');
const SelectionAndroid = require('./SectionAndroid');

class CoachesSectionAndroid extends SelectionAndroid{
    constructor(acessabilityId) {
        super(acessabilityId);
    }

    newFrontlineCoaches = new MetricWidget('metric-new-frontline-coaches');
    allFrontlineCoaches = new MetricWidget('metric-all-frontline-coaches');
    newGenerationOCoachesTitle = new MetricWidget('metric-new-generation-0-coaches');
    allGenerationOCoachesValue = new MetricWidget('metric-all-generation-0-coaches');
    newOrganizationCoaches = new MetricWidget('metric-new-organization-coaches');
    allOrganizationCoachesTitle = new MetricWidget('metric-all-organization-coaches');
}

module.exports = CoachesSectionAndroid;