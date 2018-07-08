class ViceCityMenuPainter {

    paint(context, geometry, parameters) {
        context.beginPath();

        context.moveTo(0,               0);                         //lewy górny
        context.lineTo(geometry.width,  10);                        //prawy górny
        context.lineTo(geometry.width,  geometry.height - 10);      //prawy dolny
        context.lineTo(0,               geometry.height);           //lewy dolny

        context.fillStyle = "#1F4882";
        context.fill();
    }
}

registerPaint('vice-city-menu', ViceCityMenuPainter);