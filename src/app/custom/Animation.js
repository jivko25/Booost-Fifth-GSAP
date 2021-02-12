import gsap from 'gsap/all';
import selectors from './selectors';

export default class Animation{
    constructor(){
        this._tl = gsap.timeline();
        this._tl.pause();
    }

    animation(){
        // this._tl.seek(0);
        //list
        this._tl.to(selectors.list, {y:-100, duration:0.5, id:'listUp'});
        this._tl.to(selectors.list, {y:0, duration:0.3, id:'listDown'});

        //listItems
        this._tl.to(selectors.listItems[0], {y:100, opacity:0, duration: 0.3, delay: -0.1, id:'listItem0'});
        this._tl.to(selectors.listItems[1], {y:150, opacity:0, duration: 0.3, delay: -0.3, id:'listItem1'});
        this._tl.to(selectors.listItems[2], {y:200, opacity:0, duration: 0.3, delay: -0.3, id:'listItem2'});

        //trackButton
        this._tl.set(selectors.truckBtnBg, {transformOrigin:'50% 50%',});
        this._tl.to(selectors.truckBtnBg, {scale:1.1, id:'truckBtnScaleUp'});
        this._tl.to(selectors.truckBtnBg, {scale:1, id:'truckBtnScaleDown'});

        //containerParts
        this._tl.to(selectors.containerParts, { opacity: 1, duration: 0, id: 'containerParts' });
        this._tl.to(selectors.container, { opacity: 1, id: 'container' });

        //backWheels
        this._tl.to(selectors.backWheel1, { opacity: 1, id: 'backWheel1', duration:0.5 });
        this._tl.to(selectors.backWheel2, { opacity: 1, id: 'backWheel2', duration:0.5, delay:-0.5 });
        this._tl.to(selectors.backWheelBack1, { opacity: 1, id: 'backWheelBack1', duration:0.5, delay:-0.5 });
        this._tl.to(selectors.backWheelBack2, { opacity: 1, id: 'backWheelBack2', duration:0.5, delay:-0.5 });

        //frontWheels
        this._tl.to(selectors.frontGroup, { opacity: 1, id: 'frontGroup', duration:0.5 });
        this._tl.to(selectors.frontWheel1, { opacity: 1, id: 'frontWheel1', duration:0.5, delay:-0.5 });
        this._tl.to(selectors.frontWheel2, { opacity: 1, id: 'frontWheel2', duration:0.5, delay:-0.5 });
        this._tl.to(selectors.frontWheelsBack, { opacity: 1, id: 'frontWheelsBack', duration:0.5, delay:-0.5 });

        //trackMovement
        this._tl.to(selectors.truck, { x: -200, duration: 1.5, id: 'truckMovement' })
        .to(selectors.truck, { x: 500, opacity: 0, duration: 1,ease: 'power.in' ,id: 'truckMovement' });

        //afterTrackMovementButton
        this._tl.to(selectors.shippedLabel, { opacity: 1, duration: 1, id: 'shippedLabel' });
    }

    stop(){
        this._tl.pause();
    }

    play(){
        if(this._tl.paused == true){
            this._tl.resume();
        }
        else{
            this._tl.restart();
        }
    }

    reverse(){
        this._tl.reverse();
    }
    animationHandler(){
        this.animation();
        selectors.playBtn.addEventListener('click', () => {this.play()});
        selectors.truckBtn.addEventListener('click', () => {this.play()});
        selectors.pauseBtn.addEventListener('click', () => {this.stop()});
        selectors.reverseBtn.addEventListener('click', () => {this.reverse()});
    }
}