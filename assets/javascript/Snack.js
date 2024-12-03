class Snack {
    constructor(canvasWidth) {
        const snackImage = new Image();
        snackImage.src = 'assets/images/shield.png';
        this.image = snackImage;
        this.xPosition = Math.floor(Math.random() * (canvasWidth - 100));
        this.yPosition = 0;
        this.width = 150;
        this.height = 150;
        this.refill = 50;
    }

    
}