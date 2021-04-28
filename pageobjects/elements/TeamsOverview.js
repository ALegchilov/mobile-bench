class TeamsOverview {

    get baseElement() {
        return {android: '~metric-section-teams-overview', ios: 'dummie'};
    }

    get teamsOverviewTitle() {
        return {android: '~metric-section-title', ios: 'dummie'};
    }

    get teamsOverviewInfoIcon() {
        return {
            android: '//android.view.ViewGroup[@content-desc="metric-section-teams-overview"]//android.widget.TextView[@content-desc="info"]',
            ios: 'dummie'
        };
    }

    get seniorCoachTeamsTitle() {
        return {
            android: '//android.view.ViewGroup[@content-desc="metric-senior-coach-teams"]/android.widget.TextView[@content-desc="metric-title"]',
            ios: 'dummie'
        };
    }

    get seniorCoachTeamsValue() {
        return {
            android: '//android.view.ViewGroup[@content-desc="metric-senior-coach-teams"]/android.widget.TextView[@content-desc="metric-value"]',
            ios: 'dummie'
        };
    }

    get executiveDirectorTeamsTitle() {
        return {
            android: '//android.view.ViewGroup[@content-desc="metric-executive-director-teams"]/android.widget.TextView[@content-desc="metric-title"]',
            ios: 'dummie'
        };
    }

    get executiveDirectorTeamsValue() {
        return {
            android: '//android.view.ViewGroup[@content-desc="metric-executive-director-teams"]/android.widget.TextView[@content-desc="metric-value"]',
            ios: 'dummie'
        };
    }

    get fibcTeamsTitle() {
        return {
            android: '//android.view.ViewGroup[@content-desc="metric-FIBC-teams"]/android.widget.TextView[@content-desc="metric-title"]',
            ios: 'dummie'
        };
    }

    get fibcTeamsValue() {
        return {
            android: '//android.view.ViewGroup[@content-desc="metric-FIBC-teams"]/android.widget.TextView[@content-desc="metric-value"]',
            ios: 'dummie'
        };
    }

    get fiblTeamsTitle() {
        return {
            android: '//android.view.ViewGroup[@content-desc="metric-FIBL-teams"]/android.widget.TextView[@content-desc="metric-title"]',
            ios: 'dummie'
        };
    }

    get fiblTeamsValue() {
        return {
            android: '//android.view.ViewGroup[@content-desc="metric-FIBL-teams"]/android.widget.TextView[@content-desc="metric-value"]',
            ios: 'dummie'
        };
    }
}

module.exports = TeamsOverview;