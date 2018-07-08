class ViceCityMenuPainter {
    static get inputProperties() {
        return [
            '--vice-city-menu-direction',
            '--vice-city-menu-offset',
            '--vice-city-menu-color',
        ];
    }

    paint(context, geometry, parameters) {
        const offset = parseInt(parameters.get('--vice-city-menu-offset').toString());
        const direction = parameters.get('--vice-city-menu-direction').toString().trim();
        const color = parameters.get('--vice-city-menu-color').toString();

        context.beginPath();

        // lewy górny
        if(direction === 'up') {
            context.moveTo(offset, 0);
        } else if(direction === 'left') {
            context.moveTo(0, offset);
        } else {
            context.moveTo(0, 0);
        }

        // prawy górny
        if(direction === 'up') {
            context.lineTo(geometry.width - offset, 0);
        } else if(direction === 'right') {
            context.lineTo(geometry.width, offset);
        } else {
            context.lineTo(geometry.width, 0);
        }

        // prawy dolny
        if(direction === 'right') {
            context.lineTo(geometry.width, geometry.height - offset);
        } else if(direction === 'down') {
            context.lineTo(geometry.width - offset, geometry.height);
        } else {
            context.lineTo(geometry.width, geometry.height);
        }

        // lewy dolny
        if(direction === 'down') {
            context.lineTo(offset, geometry.height);
        } else if(direction === 'left') {
            context.lineTo(0, geometry.height - offset);
        } else {
            context.lineTo(0, geometry.height);
        }

        context.fillStyle = color;
        context.fill();
    }
}

registerPaint('vice-city-menu', ViceCityMenuPainter);