"use strict";

window.onload = function () {
    const parallax = document.querySelector('.parallax');

    if(parallax){
        const content = document.querySelector('.parallax__container');
        const clouds = document.querySelector('.images-parallax__clouds');
        const mountains = document.querySelector('.images-parallax__mountains');
        const human = document.querySelector('.images-parallax__human');

        const forClouds = 40;
        const forMountains = 20;
        const forHuman = 10;

        const speed = 0.05;

        let positionX=0, positionY =0;
        let coordXprocent = 0, coordYprocent=0;
        
        function setMouseParallax() {
            const distX = coordXprocent - coordYprocent;
            const distY = coordYprocent - coordXprocent;

            positionX = positionX + (distX*speed);
            positionY = positionY + (distY*speed);

            clouds.style.cssText = `transform: translate(${positionX/forClouds}%,${positionY/forClouds}%);`;
            mountains.style.cssText = `transform: translate(${positionX/forMountains}%,${positionY/forMountains}%);`;
            human.style.cssText = `transform: translate(${positionX/forHuman}%,${positionY/forHuman}%);`;

            requestAnimationFrame(setMouseParallax)
        }
        setMouseParallax();

        parallax.addEventListener("mousemove",function (e) {
            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight;

            const coordX = e.pageX - parallaxWidth/2;
            const coordY = e.pageY - parallaxHeight/2;

            coordXprocent = coordX/parallaxWidth*100;
            coordYprocent = coordY/parallaxHeight*100;
        })
    }
};