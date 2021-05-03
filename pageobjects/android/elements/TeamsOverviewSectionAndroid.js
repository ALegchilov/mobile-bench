const MetricWidget = require('./MetricWidget');
const SectionAndroid = require('./SectionAndroid');

class TeamsOverviewSectionAndroid extends SectionAndroid {

    constructor(acessabilityId) {
        super(acessabilityId);
    }

    seniorCoachTeams = new MetricWidget('metric-senior-coach-teams');
    executiveDirectorTeams = new MetricWidget('metric-executive-director-teams');
    fibcTeams = new MetricWidget('metric-FIBC-teams');
    fiblTeams = new MetricWidget('metric-FIBL-teams');
}

module.exports = TeamsOverviewSectionAndroid;