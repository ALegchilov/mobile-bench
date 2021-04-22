const PRESS_TIME = 500;

//todo write JSdoc
async function swipeElement(element, direction) {
    const location = await element.getLocation();
    const size = await element.getSize();
    const centerPoint = {x: location.x + (size.width / 2), y: location.y + (size.height / 2)};
    switch (direction) {
        case 'right':
            await browser.touchAction([
                {action: 'press', x: centerPoint.x, y: centerPoint.y},
                {action: 'wait', ms: PRESS_TIME},
                {action: 'moveTo', x: 0, y: centerPoint.y},
                'release']);
            break;
        case 'left':
            throw new Error("Not yet implemented");
            break;
        case 'up':
            throw new Error("Not yet implemented");
            break;
        case 'down':
            throw new Error("Not yet implemented");
            break;
        default:
            throw new Error("Illegal direction passed");
    }
}

async function swipeToElement(element, direction, limit = 3) {
    const screenResolution = await browser.getWindowSize();
    const centerPoint = {x: screenResolution.width / 2, y: screenResolution.height / 2};
    let swipeCount = 0;
    let status;
    switch (direction) {
        case 'left':
            throw new Error("Not yet implemented");
            break;
        case 'right':
            throw new Error("Not yet implemented");
            break;
        case 'down':
            while (!await element.isDisplayed() && swipeCount < limit) {
                await browser.touchAction([
                    {action: 'press', x: centerPoint.x, y: centerPoint.y},
                    {action: 'wait', ms: PRESS_TIME},
                    {action: 'moveTo', x: centerPoint.x, y: centerPoint.y - 500},
                    'release']);
            }
            break;
        case 'up':
            throw new Error("Not yet implemented");
        default:
            throw new Error("Illegal direction passed");
    }
}

module.exports = {swipeElement, swipeToElement}