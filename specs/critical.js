const proxifyElement = require('../support/proxy');
const RankProgressCard = require('../pageobjects/elements/RankProgressCard');
const SlidingCard = require('../pageobjects/elements/SlidingCard');
const CoachesSection = require('../pageobjects/elements/CoachesSection');
const TeamsOverview = require('../pageobjects/elements/TeamsOverview');
const LoginPage = require('../pageobjects/LoginPage');
const loginPage = proxifyElement(new LoginPage());
const {swipeElement, swipeToElement} = require('../helpers/swipe.helpers');
const rankProgressCard = proxifyElement(new RankProgressCard());
const coachesSection = proxifyElement(new CoachesSection());
const teamsOverview = proxifyElement(new TeamsOverview());
const frontLineQualifyingVolumeCard = proxifyElement(new SlidingCard('Frontline Qualifying Volume','FQV-card'));
const generationOVolumeCard = proxifyElement(new SlidingCard('Generation 0 Volume','G0V-card'));
const totalGenerationVolumeCard = proxifyElement(new SlidingCard('Total Generation Volume','TGV-card'));
const naturalNumberPattern = /\d+/;
const commaSeparatedNumberPattern = /\d+,\d+/;

before('Sign in', async () => {
    await loginPage.login();
});

describe('Verify elements structure', () => {

    it('should display Rank progress card elements', async () => {
        await (await rankProgressCard.baseElement).waitForExist();
        expect(await rankProgressCard.rankTitle).toBeVisible();
        expect(await rankProgressCard.rankProgressDescription).toBeVisible();
        expect(await rankProgressCard.rankIcon).toBeVisible();
        expect(await rankProgressCard.rankSeeProgress).toBeVisible();
        expect(await rankProgressCard.rankProgressBar).toBeVisible();
    });

    [frontLineQualifyingVolumeCard, generationOVolumeCard, totalGenerationVolumeCard].forEach(card =>
        it(`should display ${card.accessabilityId} card elements`, async () => {
            const actualCardTitle = await (await card.cardTitle).getText();
            const cardMainValue = await (await card.mainValue).getText();
            const projectedThisMonthTitle = await (await card.projectedThisMonthTitle).getText();
            const projectedThisMonthValue = await (await card.projectedThisMonthValue).getText();
            const lastMonthTotalTitle = await (await card.lastMonthTotalTitle).getText();
            const lastMonthTotalValue = await (await card.lastMonthTotalValue).getText();
            const sameTimeLastMonthTitle = await (await card.sameTimeLastMonthTitle).getText();
            const sameTimeLastMonthValue = await (await card.sameTimeLastMonthValue).getText();
            expect(actualCardTitle).toEqual(card.expectedTitle);
            expect(await card.infoIcon).toBeVisible();
            expect(cardMainValue).toMatch(commaSeparatedNumberPattern);
            expect(projectedThisMonthTitle).toEqual('Projected This Month');
            expect(projectedThisMonthValue).toMatch(naturalNumberPattern);
            expect(lastMonthTotalTitle).toMatch(/Last Month \(\w+\) Total/);
            expect(lastMonthTotalValue).toMatch(commaSeparatedNumberPattern);
            expect(sameTimeLastMonthTitle).toMatch('Same Time Last Month');
            expect(sameTimeLastMonthValue).toEqual('Coming soon')
            await swipeElement(await card.cardTitle, 'right');
        }));


    it('should display Coaches section elements', async () => {
        await swipeToElement((await coachesSection.newOrganizationCoachesTitle), 'down');
        const actualCoachesSectionTitle = await (await coachesSection.coachesTitle).getText();
        const actualNewFrontlineCoachesTitle = await (await coachesSection.newFrontlineCoachesTitle).getText();
        const actualNewFrontlineCoachesValue = await (await coachesSection.newFrontlineCoachesValue).getText();
        const actualAllFrontlineCoachesTitle = await (await coachesSection.allFrontlineCoachesTitle).getText();
        const actualAllFrontlineCoachesValue = await (await coachesSection.allFrontlineCoachesValue).getText();
        const actualNewGenerationOCoachesTitle = await (await coachesSection.newGenerationOCoachesTitle).getText();
        const actualNewGenerationOCoachesValue = await (await coachesSection.newGenerationOCoachesValue).getText();
        const actualNewOrganizationCoachesTitle = await (await coachesSection.newOrganizationCoachesTitle).getText();
        const actualNewOrganizationCoachesValue = await (await coachesSection.newOrganizationCoachesValue).getText();
        const actualAllOrganizationCoachesTitle = await (await coachesSection.allOrganizationCoachesTitle).getText();
        const actualAllOrganizationCoachesValue = await (await coachesSection.allOrganizationCoachesValue).getText();
        expect(actualCoachesSectionTitle).toEqual('Coaches');
        expect(await coachesSection.coachesInfoIcon).toBeVisible();
        expect(actualNewFrontlineCoachesTitle).toEqual('New Frontline Coaches');
        expect(actualNewFrontlineCoachesValue).toMatch(naturalNumberPattern);
        expect(actualAllFrontlineCoachesTitle).toEqual('All Frontline Coaches');
        expect(actualAllFrontlineCoachesValue).toMatch(naturalNumberPattern);
        expect(actualNewGenerationOCoachesTitle).toEqual('New Generation 0 Coaches');
        expect(actualNewGenerationOCoachesValue).toMatch(naturalNumberPattern);
        expect(actualNewOrganizationCoachesTitle).toEqual('New Organization Coaches');
        expect(actualNewOrganizationCoachesValue).toMatch(naturalNumberPattern);
        expect(actualAllOrganizationCoachesTitle).toEqual('All Organization Coaches');
        expect(actualAllOrganizationCoachesValue).toMatch(naturalNumberPattern);
    });

    it('should display Teams Overview section elements', async () => {
        await swipeToElement((await teamsOverview.fiblTeamsTitle), 'down');
        const actualTeamsOverviewTitle = await (await teamsOverview.teamsOverviewTitle).getText();
        await (await teamsOverview.seniorCoachTeamsTitle).waitForDisplayed();
        const actualSeniorCoachTeamsTitle = await (await teamsOverview.seniorCoachTeamsTitle).getText();
        const actualSeniorCoachTeamsValue = await (await teamsOverview.seniorCoachTeamsValue).getText();
        const actualExecutiveDirectorTeamsTitle = await (await teamsOverview.executiveDirectorTeamsTitle).getText();
        const actualExecutiveDirectorTeamsValue = await (await teamsOverview.executiveDirectorTeamsValue).getText();
        const actualFibcTeamsTitle = await (await teamsOverview.fibcTeamsTitle).getText();
        const actualFibcTeamsValue = await (await teamsOverview.fibcTeamsValue).getText();
        const actualFiblTeamsTitle = await (await teamsOverview.fiblTeamsTitle).getText();
        const actualFiblTeamsValue = await (await teamsOverview.fiblTeamsValue).getText();
        expect(actualTeamsOverviewTitle).toEqual('Teams Overview');
        expect(await teamsOverview.teamsOverviewInfoIcon).toBeVisible();
        expect(actualSeniorCoachTeamsTitle).toEqual('Senior Coach Teams');
        expect(actualSeniorCoachTeamsValue).toMatch(naturalNumberPattern);
        expect(actualExecutiveDirectorTeamsTitle).toEqual('Executive Director Teams');
        expect(actualExecutiveDirectorTeamsValue).toMatch(naturalNumberPattern);
        expect(actualFibcTeamsTitle).toEqual('FIBC Teams');
        expect(actualFibcTeamsValue).toMatch(naturalNumberPattern);
        expect(actualFiblTeamsTitle).toEqual('FIBL Teams');
        expect(actualFiblTeamsValue).toMatch(naturalNumberPattern);
    });
});