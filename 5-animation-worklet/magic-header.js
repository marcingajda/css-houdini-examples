class MagicHeaderAnimator
{
    constructor(options) {
        this.options = options;
    }

    animate(currentTime, effect) {
        effect.localTime = currentTime * 5;
    }
}

registerAnimator('magic-header', MagicHeaderAnimator);