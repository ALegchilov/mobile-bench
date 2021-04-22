const LoginPage = require('../pageobjects/login.page');
const DashboardPage = require('../pageobjects/dashboard.page')
const proxifyPage = require('../support/proxy');
const {swipeElement, swipeToElement} = require('../helpers/swipe.helpers')
const loginPage = proxifyPage(new LoginPage());
const dashboardPage = proxifyPage(new DashboardPage());
const greetingPattern = /Good (morning|afternoon|evening),/;

before('Sign in', async () => {
    await loginPage.login();
})

describe('Verify presence of elements', () => {
    it('should display greeting', async () => {
        await (await dashboardPage.greeting).waitForExist();
        const greetingText = await (await dashboardPage.greeting).getText();
        expect(greetingText).toMatch(greetingPattern);
    });

    it('should display rank progress card', async () => {
        const rankProgressCard = await dashboardPage.rankProgressCard;
        await rankProgressCard.waitForExist();
        expect(rankProgressCard).toBeVisible();
    });

    it('should display horizontal scroll with 3 cards: Frontline Qualifying Volume, Generation 0 Volume, Total Generation Volume', async () => {
        const frontlineQualifyingVolumeCard = await dashboardPage.frontlineQualifyingVolumeCard
        await frontlineQualifyingVolumeCard.waitForExist();
        expect(frontlineQualifyingVolumeCard).toBeVisible();
        await swipeElement(frontlineQualifyingVolumeCard, 'right');
        expect(await dashboardPage.generation0VolumeCard).toBeVisible();
        await swipeElement(frontlineQualifyingVolumeCard, 'right');
        expect(await dashboardPage.totalGenerationVolumeCard).toBeVisible();
    });

    it('should display Coaches section', async () => {
        const coachesSection = await dashboardPage.coachesSection;
        await swipeToElement(coachesSection, 'down');
        expect(coachesSection).toBeVisible();
    });

    it('should display Coaches section', async () => {
        const coachesSection = await dashboardPage.coachesSection;
        await swipeToElement(coachesSection, 'down');
        expect(coachesSection).toBeVisible();
    });

    it('should display Teams Overview section', async () => {
        const teamsOverviewSection = await dashboardPage.teamsOverview;
        await swipeToElement(teamsOverviewSection, 'down');
        expect(teamsOverviewSection).toBeVisible();
    });

    it('should display Optavia logo', async () => {
        const optaviaLogo = await dashboardPage.optaViaLogo;
        await swipeToElement(optaviaLogo, 'down');
        expect(optaviaLogo).toBeVisible();
    });
});




