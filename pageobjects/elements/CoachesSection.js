class CoachesSection {

    get baseElement() {
        return {android: '~metric-section-coaches', ios: 'dummie'};
    }

    get coachesTitle() {
        return {android: '(//android.widget.TextView[@content-desc="metric-section-title"])[1]', ios: 'dummie'};
    }

    get coachesInfoIcon() {
        return {android: '//android.widget.TextView[@content-desc="info"]', ios: 'dummie'};
    }

    get newFrontlineCoachesTitle() {
        return {android: '//android.view.ViewGroup[@content-desc="metric-new-frontline-coaches"]/android.widget.TextView[@content-desc="metric-title"]', ios: 'dummie'};
    }

    get newFrontlineCoachesValue() {
        return {android: '//android.view.ViewGroup[@content-desc="metric-new-frontline-coaches"]/android.widget.TextView[@content-desc="metric-value"]', ios: 'dummie'};
    }

    get allFrontlineCoachesTitle() {
        return {android: '//android.view.ViewGroup[@content-desc="metric-all-frontline-coaches"]/android.widget.TextView[@content-desc="metric-title"]', ios: 'dummie'};
    }

    get allFrontlineCoachesValue() {
        return {android: '//android.view.ViewGroup[@content-desc="metric-all-frontline-coaches"]/android.widget.TextView[@content-desc="metric-value"]', ios: 'dummie'};
    }

    get newGenerationOCoachesTitle() {
        return {android: '//android.view.ViewGroup[@content-desc="metric-new-generation-0-coaches"]/android.widget.TextView[@content-desc="metric-title"]', ios: 'dummie'};
    }

    get newGenerationOCoachesValue() {
        return {android: '//android.view.ViewGroup[@content-desc="metric-new-generation-0-coaches"]/android.widget.TextView[@content-desc="metric-value"]', ios: 'dummie'};
    }

    get allGenerationOCoachesTitle() {
        return {android: '//android.view.ViewGroup[@content-desc="metric-all-generation-0-coaches"]/android.widget.TextView[@content-desc="metric-title"]', ios: 'dummie'};
    }

    get allGenerationOCoachesValue() {
        return {android: '//android.view.ViewGroup[@content-desc="metric-all-generation-0-coaches"]/android.widget.TextView[@content-desc="metric-value"]', ios: 'dummie'};
    }

    get newOrganizationCoachesTitle() {
        return {android: '//android.view.ViewGroup[@content-desc="metric-new-organization-coaches"]/android.widget.TextView[@content-desc="metric-title"]', ios: 'dummie'};
    }

    get newOrganizationCoachesValue() {
        return {android: '//android.view.ViewGroup[@content-desc="metric-new-organization-coaches"]/android.widget.TextView[@content-desc="metric-value"]', ios: 'dummie'};
    }

    get allOrganizationCoachesTitle() {
        return {android: '//android.view.ViewGroup[@content-desc="metric-all-organization-coaches"]/android.widget.TextView[@content-desc="metric-title"]', ios: 'dummie'};
    }

    get allOrganizationCoachesValue() {
        return {android: '//android.view.ViewGroup[@content-desc="metric-all-organization-coaches"]/android.widget.TextView[@content-desc="metric-value"]', ios: 'dummie'};
    }
}

module.exports = CoachesSection;