const MobileObjectsFactory = require('../support/MobileObjectsFactory');
const loginPage = MobileObjectsFactory.initObject('loginPage');
const dashboardPage = MobileObjectsFactory.initObject('dashboardPage');
const {swipeElement, swipeToElement} = require('../helpers/swipe.helpers');

const naturalNumberPattern = /\d+/;
const commaSeparatedNumberPattern = /\d+,\d+/;

before('Sign in', async () => {
    await loginPage.login();
});

describe('Verify elements structure', () => {

    it('should display Rank progress card elements', async () => {
        const rankProgressCard = dashboardPage.rankProgressCard;
        await (await rankProgressCard.baseElement).waitForExist();
        expect(await rankProgressCard.cardTitle).toBeVisible();
        expect(await rankProgressCard.rankProgressDescription).toBeVisible();
        expect(await rankProgressCard.infoIcon).toBeVisible();
        expect(await rankProgressCard.rankSeeProgress).toBeVisible();
        expect(await rankProgressCard.rankProgressBar).toBeVisible();
    });

    [dashboardPage.frontLineQualifyingVolumeCard, dashboardPage.generationOVolumeCard, dashboardPage.totalGenerationVolumeCard].forEach(card =>
        it(`should display ${card.accessabilityId} card elements`, async () => {
            expect(await (await card.cardTitle).getText()).toEqual(card.expectedTitle);
            expect(await card.infoIcon).toBeVisible();
            expect(await (await card.mainValue).getText()).toMatch(commaSeparatedNumberPattern);
            expect(await (await card.projectedThisMonthTitle).getText()).toEqual('Projected This Month');
            expect(await (await card.projectedThisMonthValue).getText()).toMatch(naturalNumberPattern);
            expect(await (await card.lastMonthTotalTitle).getText()).toMatch(/Last Month \(\w+\) Total/);
            expect(await (await card.lastMonthTotalValue).getText()).toMatch(naturalNumberPattern);
            expect(await (await card.sameTimeLastMonthTitle).getText()).toMatch('Same Time Last Month');
            expect(await (await card.sameTimeLastMonthValue).getText()).toEqual('Coming soon')
            await swipeElement(await card.cardTitle, 'right');
        }));

    it('should display Coaches section elements', async () => {
        const coachesSection = dashboardPage.coachesSection;
        const coachesSectionTitle = await coachesSection.cardTitle;
        await swipeToElement(await coachesSection.allOrganizationCoachesTitle.title, 'down');
        expect(await coachesSectionTitle.getText()).toEqual('Coaches');
        expect(await coachesSection.infoIcon).toBeVisible();
        expect(await (await coachesSection.newFrontlineCoaches.title).getText()).toEqual('New Frontline Coaches');
        expect(await (await coachesSection.newFrontlineCoaches.value).getText()).toMatch(naturalNumberPattern);
        expect(await (await coachesSection.allFrontlineCoaches.title).getText()).toEqual('All Frontline Coaches');
        expect(await (await coachesSection.allFrontlineCoaches.value).getText()).toMatch(naturalNumberPattern);
        expect(await (await coachesSection.newGenerationOCoachesTitle.title).getText()).toEqual('New Generation 0 Coaches');
        expect(await (await coachesSection.newGenerationOCoachesTitle.value).getText()).toMatch(naturalNumberPattern);
        expect(await (await coachesSection.allGenerationOCoachesValue.title).getText()).toEqual('All Generation 0 Coaches');
        expect(await (await coachesSection.allGenerationOCoachesValue.value).getText()).toMatch(naturalNumberPattern);
        expect(await (await coachesSection.newOrganizationCoaches.title).getText()).toEqual('New Organization Coaches');
        expect(await (await coachesSection.newOrganizationCoaches.value).getText()).toMatch(naturalNumberPattern);
        expect(await (await coachesSection.allOrganizationCoachesTitle.title).getText()).toEqual('All Organization Coaches');
        expect(await (await coachesSection.allOrganizationCoachesTitle.value).getText()).toMatch(naturalNumberPattern);
    });

    it('should display Teams Overview section elements', async () => {
        const teamsOverviewSection = dashboardPage.teamsOverviewSection;
        await swipeToElement((await teamsOverviewSection.fiblTeams.title), 'down');
        await (await teamsOverviewSection.seniorCoachTeams.title).waitForDisplayed();
        expect(await (await teamsOverviewSection.cardTitle).getText()).toEqual('Teams Overview');
        expect(await teamsOverviewSection.infoIcon).toBeVisible();
        expect(await (await teamsOverviewSection.seniorCoachTeams.title).getText()).toEqual('Senior Coach Teams');
        expect(await (await teamsOverviewSection.seniorCoachTeams.value).getText()).toMatch(naturalNumberPattern);
        expect(await (await teamsOverviewSection.executiveDirectorTeams.title).getText()).toEqual('Executive Director Teams');
        expect(await (await teamsOverviewSection.executiveDirectorTeams.value).getText()).toMatch(naturalNumberPattern);
        expect(await (await teamsOverviewSection.fibcTeams.title).getText()).toEqual('FIBC Teams');
        expect(await (await teamsOverviewSection.fibcTeams.value).getText()).toMatch(naturalNumberPattern);
        expect(await (await teamsOverviewSection.fiblTeams.title).getText()).toEqual('FIBL Teams');
        expect(await (await teamsOverviewSection.fiblTeams.value).getText()).toMatch(naturalNumberPattern);
    });
});