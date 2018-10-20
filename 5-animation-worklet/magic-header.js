class MagicHeaderAnimator
{
    constructor(options) {
        this.options = options;
    }

    animate(currentTime, effect) {
        effect.localTime = currentTime * 3;
    }
}

registerAnimator('magic-header', MagicHeaderAnimator);