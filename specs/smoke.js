const {swipeElement, swipeToElement} = require('../helpers/swipe.helpers')
const mobileObjectsFactory = require('../support/MobileObjectsFactory');

const loginPage = mobileObjectsFactory.initObject('loginPage');
const dashboardPage = mobileObjectsFactory.initObject('dashboardPage');

const greetingPattern = /Good (morning|afternoon|evening),/;

before('Sign in', async () => {
    await loginPage.login();
});

describe('Verify presence of elements', () => {
    it('should display greeting', async () => {
        const greeting = await dashboardPage.greeting;
        await greeting.waitForExist();
        const greetingText = await greeting.getText();
        expect(greetingText).toMatch(greetingPattern);
    });

    it('should display rank progress card', async () => {
        const rankProgressCardElement = await dashboardPage.rankProgressCard.baseElement;
        await rankProgressCardElement.waitForExist();
        expect(rankProgressCardElement).toBeVisible();
    });

    it('should display horizontal scroll with 3 cards: Frontline Qualifying Volume, Generation 0 Volume, Total Generation Volume', async () => {
        const frontlineQualifyingVolumeCard = await dashboardPage.frontLineQualifyingVolumeCard.baseElement;
        await frontlineQualifyingVolumeCard.waitForExist();
        const generationOVolumeCardTitle = await dashboardPage.generationOVolumeCard.cardTitle;
        const generationOVolumeCard = await dashboardPage.generationOVolumeCard.baseElement;
        const totalGenerationVolumeCardTitle = await dashboardPage.totalGenerationVolumeCard.cardTitle;
        expect(frontlineQualifyingVolumeCard).toBeVisible();
        await swipeElement(frontlineQualifyingVolumeCard, 'right');
        expect(generationOVolumeCardTitle).toBeVisible();
        await swipeElement(generationOVolumeCard, 'right');
        expect(totalGenerationVolumeCardTitle).toBeVisible();
    });

    it('should display Coaches section', async () => {
        const coachesSectionElement = await dashboardPage.coachesSection.baseElement;
        await swipeToElement(coachesSectionElement, 'down');
        expect(coachesSectionElement).toBeVisible();
    });

    it('should display Teams Overview section', async () => {
        const teamsOverviewSection = await dashboardPage.teamsOverviewSection.baseElement;
        await swipeToElement(teamsOverviewSection, 'down');
        expect(teamsOverviewSection).toBeVisible();
    });

    it('should display Optavia logo', async () => {
        const optaviaLogo = await dashboardPage.optaViaLogo;
        await swipeToElement(optaviaLogo, 'down');
        expect(optaviaLogo).toBeVisible();
    });
});
