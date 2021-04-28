const LoginPage = require('../pageobjects/LoginPage');
const DashboardPage = require('../pageobjects/DashboardPage');
const RankProgressCard = require('../pageobjects/elements/RankProgressCard')
const proxifyElement = require('../support/proxy');
const {swipeElement, swipeToElement} = require('../helpers/swipe.helpers')
const CoachesSection = require('../pageobjects/elements/CoachesSection');
const TeamsOverview = require('../pageobjects/elements/TeamsOverview');
const SlidingCard = require('../pageobjects/elements/SlidingCard');
const loginPage = proxifyElement(new LoginPage());
const dashboardPage = proxifyElement(new DashboardPage());
const rankProgressCard = proxifyElement(new RankProgressCard());
const coachesSection = proxifyElement(new CoachesSection());
const teamsOverview = proxifyElement(new TeamsOverview());
const frontLineQualifyingVolumeCard = proxifyElement(new SlidingCard('Frontline Qualifying Volume','FQV-card'));
const generationOVolumeCard = proxifyElement(new SlidingCard('Generation 0 Volume','G0V-card'));
const totalGenerationVolumeCard = proxifyElement(new SlidingCard('Total Generation Volume','TGV-card'));

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
        const rankProgressCardElement = await rankProgressCard.baseElement;
        await rankProgressCardElement.waitForExist();
        expect(rankProgressCard).toBeVisible();
    });

    it('should display horizontal scroll with 3 cards: Frontline Qualifying Volume, Generation 0 Volume, Total Generation Volume', async () => {
        const frontlineQualifyingVolumeCard = await frontLineQualifyingVolumeCard.cardTitle
        await frontlineQualifyingVolumeCard.waitForExist();
        const generationOVolumeCardTitle = await generationOVolumeCard.cardTitle;
        const totalGenerationVolumeCardTitle = await totalGenerationVolumeCard.cardTitle;
        expect(frontlineQualifyingVolumeCard).toBeVisible();
        await swipeElement(frontlineQualifyingVolumeCard, 'right');
        expect(generationOVolumeCardTitle).toBeVisible();
        await swipeElement(generationOVolumeCardTitle, 'right');
        expect().toBeVisible(totalGenerationVolumeCardTitle);
    });

    it('should display Coaches section', async () => {
        const coachesSectionElement = await coachesSection.baseElement;
        await swipeToElement(coachesSectionElement, 'down');
        expect(coachesSectionElement).toBeVisible();
    });

    it('should display Teams Overview section', async () => {
        const teamsOverviewSection = await teamsOverview.baseElement;
        await swipeToElement(teamsOverviewSection, 'down');
        expect(teamsOverviewSection).toBeVisible();
    });

    it('should display Optavia logo', async () => {
        const optaviaLogo = await dashboardPage.optaViaLogo;
        await swipeToElement(optaviaLogo, 'down');
        expect(optaviaLogo).toBeVisible();
    });
});
