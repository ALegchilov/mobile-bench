const mobileObjectsFactory = require('../../support/mobileObjectsFactory');

class DashboardPageAndroid {
    constructor() {
        this.rankProgressCard = mobileObjectsFactory.initObject('rankProgressCard');
        this.frontLineQualifyingVolumeCard = mobileObjectsFactory.initObject('slidingCard', 'Frontline Qualifying Volume', 'FQV-card');
        this.generationOVolumeCard = mobileObjectsFactory.initObject('slidingCard', 'Generation 0 Volume', 'G0V-card');
        this.totalGenerationVolumeCard = mobileObjectsFactory.initObject('slidingCard', 'Total Generation Volume', 'TGV-card');
        this.teamsOverviewSection = mobileObjectsFactory.initObject('teamsOverviewSection', 'metric-section-teams-overview');
        this.coachesSection = mobileObjectsFactory.initObject('coachesSection', 'metric-section-coaches');
    }

    get greeting() {
        return $('~dashboard-greeting-hello');
    };

    get optaViaLogo() {
        return $('~shared-optavia-logo');
    };
}

module.exports = DashboardPageAndroid;
