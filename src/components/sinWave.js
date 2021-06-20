import * as dat from "dat.gui";

const gui = new dat.GUI();

export default class sinWave {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext("2d");
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
        this.wave = {
            y: this.canvas.height / 2,
            waveLength: 0.01,
            amplitude: 100,
            frequency: 0.01,
        };
        this.strokeColor = {
            h: 200,
            s: 50,
            l: 50,
        };
        this.bgColor = {
            r: 0,
            g: 0,
            b: 0,
            alpha: 0.03,
        };
        this.increment = this.wave.frequency;

        // this.setupGUI();
        this.resizeWindow();
        this.animate();
    }

    resizeWindow(){
        window.addEventListener('resize', () => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        })
    }

    //  show control bar on the screen
    setupGUI() {
        const waveFolder = gui.addFolder("wave");
        waveFolder.add(this.wave, "y", 0, this.canvas.height);
        waveFolder.add(this.wave, "waveLength", -0.01, 0.01);
        waveFolder.add(this.wave, "amplitude", -300, 300);
        waveFolder.add(this.wave, "frequency", -0.01, 1);
        waveFolder.open(); // open the folder by default

        const strokeColorFolder = gui.addFolder("strokeColor");
        strokeColorFolder.add(this.strokeColor, "h", 0, 255);
        strokeColorFolder.add(this.strokeColor, "s", 0, 100);
        strokeColorFolder.add(this.strokeColor, "l", 0, 100);

        const backgroundColorFolder = gui.addFolder("bgColor");
        backgroundColorFolder.add(this.bgColor, "r", 0, 255);
        backgroundColorFolder.add(this.bgColor, "g", 0, 255);
        backgroundColorFolder.add(this.bgColor, "b", 0, 255);
        backgroundColorFolder.add(this.bgColor, "alpha", 0, 1);
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        this.context.fillStyle = `rgba(${this.bgColor.r}, ${this.bgColor.g}, ${this.bgColor.b}, ${this.bgColor.alpha})`;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.context.beginPath();

        this.context.moveTo(0, this.canvas.height / 2);
        for (let i = 0; i < this.canvas.width; i++) {
            this.context.lineTo(i, this.sinWaveFun(i, this.increment));
        }
        const strokeColorNew = this.changingStrokeColor();
        this.context.strokeStyle = `hsl(${strokeColorNew}, ${this.strokeColor.s}%, ${this.strokeColor.l}%)`;
        this.context.stroke();
        this.increment += this.wave.frequency;
    }

    changingStrokeColor() {
        return Math.abs(Math.sin(this.increment) * this.strokeColor.h);
    }

    // sin function with changing amplitude
    sinWaveFun(x, increment) {
        return (
            Math.sin(x * this.wave.waveLength + increment) *
                this.wave.amplitude *
                Math.sin(increment) +
            this.wave.y
        );
    }
}

// const canvas = document.getElementById("sinWaveCanvas");
// const context = canvas.getContext("2d");

// canvas.height = window.innerHeight;
// canvas.width = window.innerWidth;

// const wave = {
//     y: canvas.height / 2,
//     waveLength: 0.01,
//     amplitude: 100,
//     frequency: 0.01,
// };

// const strokeColor = {
//     h: 200,
//     s: 50,
//     l: 50,
// };

// const bgColor = {
//     r: 0,
//     g: 0,
//     b: 0,
//     alpha: 0.03,
// };

// const waveFolder = gui.addFolder("wave");
// waveFolder.add(wave, "y", 0, canvas.height);
// waveFolder.add(wave, "waveLength", -0.01, 0.01);
// waveFolder.add(wave, "amplitude", -300, 300);
// waveFolder.add(wave, "frequency", -0.01, 1);
// waveFolder.open(); // open the folder by default

// const strokeColorFolder = gui.addFolder("strokeColor");
// strokeColorFolder.add(strokeColor, "h", 0, 255);
// strokeColorFolder.add(strokeColor, "s", 0, 100);
// strokeColorFolder.add(strokeColor, "l", 0, 100);

// const backgroundColorFolder = gui.addFolder("bgColor");
// backgroundColorFolder.add(bgColor, "r", 0, 255);
// backgroundColorFolder.add(bgColor, "g", 0, 255);
// backgroundColorFolder.add(bgColor, "b", 0, 255);
// backgroundColorFolder.add(bgColor, "alpha", 0, 1);

// let increment = wave.frequency;

// animate();

// function animate() {
//     requestAnimationFrame(animate);
//     context.fillStyle = `rgba(${bgColor.r}, ${bgColor.g}, ${bgColor.b}, ${bgColor.alpha})`;
//     context.fillRect(0, 0, canvas.width, canvas.height);
//     context.beginPath();

//     context.moveTo(0, canvas.height / 2);
//     for (let i = 0; i < canvas.width; i++) {
//         context.lineTo(i, sinWave(i, increment));
//     }
//     const strokeColorNew = changingStrokeColor(increment);
//     context.strokeStyle = `hsl(${strokeColorNew}, ${strokeColor.s}%, ${strokeColor.l}%)`;
//     context.stroke();
//     increment += wave.frequency;
// }

// function changingStrokeColor(increment) {
//     return Math.abs(Math.sin(increment) * strokeColor.h);
// }

// // sin function with changing amplitude
// function sinWave(x, increment) {
//     return (
//         Math.sin(x * wave.waveLength + increment) *
//             wave.amplitude *
//             Math.sin(increment) +
//         wave.y
//     );
// }

// animate();

// export default sinWaveAnimation;
