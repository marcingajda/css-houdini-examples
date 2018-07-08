class ViceCityMenuPainter {
    static get inputProperties() {
        return [
            '--vice-city-menu-direction',
            '--vice-city-menu-offset',
            '--vice-city-menu-color',
            '--vice-city-menu-percent'
        ];
    }

    paint(context, geometry, parameters) {
        const percent = parseInt(parameters.get('--vice-city-menu-percent').toString());

        const offset = parseInt(parameters.get('--vice-city-menu-offset').toString());
        const calculatedOffset = offset * percent / 100;

        const direction = parameters.get('--vice-city-menu-direction').toString().trim();
        const color = parameters.get('--vice-city-menu-color').toString();

        context.beginPath();

        // lewy górny
        if(direction === 'up') {
            context.moveTo(calculatedOffset, 0);
        } else if(direction === 'left') {
            context.moveTo(0, calculatedOffset);
        } else {
            context.moveTo(0, 0);
        }

        // prawy górny
        if(direction === 'up') {
            context.lineTo(geometry.width - calculatedOffset, 0);
        } else if(direction === 'right') {
            context.lineTo(geometry.width, calculatedOffset);
        } else {
            context.lineTo(geometry.width, 0);
        }

        // prawy dolny
        if(direction === 'right') {
            context.lineTo(geometry.width, geometry.height - calculatedOffset);
        } else if(direction === 'down') {
            context.lineTo(geometry.width - calculatedOffset, geometry.height);
        } else {
            context.lineTo(geometry.width, geometry.height);
        }

        // lewy dolny
        if(direction === 'down') {
            context.lineTo(calculatedOffset, geometry.height);
        } else if(direction === 'left') {
            context.lineTo(0, geometry.height - calculatedOffset);
        } else {
            context.lineTo(0, geometry.height);
        }

        context.fillStyle = color;
        context.fill();
    }
}

registerPaint('vice-city-menu', ViceCityMenuPainter);