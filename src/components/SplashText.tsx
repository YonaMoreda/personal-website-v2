import '../stylesheets/SplashText.css'
import lookAround from '../../public/drag-around.svg'
import {useState, useEffect} from 'react';

function dateDiff(date1: Date, date2: Date) {
    const diff = new Date(date2.getTime() - date1.getTime())
    return diff.getFullYear() - 1970 + ' years' + (diff.getMonth() ? ', ' + diff.getMonth() + ' months' : '') + (diff.getDate() ? ', ' + diff.getDate() + ' days' : '') + (diff.getHours() ? ', ' + diff.getHours() + ' hours' : '') + (diff.getMinutes() ? ', ' + diff.getMinutes() + ' minutes' : '') + (diff.getSeconds() ? ' and ' + diff.getSeconds() + ' seconds' : '') + ' ago.'
}

function SplashText() {
    const [introIndex, setIntroIndex] = useState(0);
    const [workingSince, setWorkingSince] = useState(dateDiff(new Date('2020-12-15'), new Date()));
    const HEADER_INTRO_TEXT = 'Hi, this is { Yona Moreda }.'
    const FULL_HEADER_TEXT = HEADER_INTRO_TEXT + 'Thanks for your interest in visiting my personal website.'

    useEffect(() => {
        const timer = setTimeout(() => {
            setIntroIndex((introIndex) => {
                if (introIndex == FULL_HEADER_TEXT.length) {
                    return introIndex;
                }
                return (introIndex + 1);
            });
        }, 50);
        return () => clearTimeout(timer)
    }, [FULL_HEADER_TEXT.length, introIndex]);

    useEffect(() => {
        const timer = setTimeout(() => {
            const workingSince = dateDiff(new Date('2020-12-15'), new Date());
            setWorkingSince(() => workingSince);
        }, 1000);
        return () => clearTimeout(timer);
    }, [workingSince]);

    return (
        <>
            <div className="splash-text">
                <h1 id="header-intro">{HEADER_INTRO_TEXT.slice(0, introIndex)}</h1>
                <p id="header-subtitle"
                   style={{textAlign: "right"}}>{FULL_HEADER_TEXT.slice(HEADER_INTRO_TEXT.length, introIndex)}</p>
                <p id="subintro"/>
                <p id="underscore">________</p>
                <p id="description">I am backend Software Engineer currently working in Rabobank since</p>
                <p id="working-since">{workingSince}</p>
                <br/>
                <p id="passion-description">I have passion for creating software and solving difficult challenges.</p>
                <p>Feel free to reach out in case you have questions or feedback.</p>
            </div>
            <button id='reach-out-btn-id' className="reach-out-btn" hidden disabled>Reach out</button>
            <button id='explore-btn-id' className="explore-btn" hidden disabled>Explore</button>
            <img alt={"drag-around-image"} className="drag-around-img" src={lookAround}/>
        </>
    )
}

export default SplashText;

// let i = 0
//
// const headerSubTitle = '(floating above the AWS clouds)'
// const subIntro = 'Thanks for your interest in visiting my personal website.'
// const underscore = '________'
// const description = 'I am backend Software Engineer currently working in Rabobank since'
// let workingSince = dateDiff(new Date('2020-12-15'), new Date())
// const passionDescription = 'I have passion for creating software such as the one you are seeing right now. Feel free to reach out in case you have questions or feedback.'
//
// let speed = 100
//
// window.onload = function typeWriter () {
//   if (i < headerIntro.length + headerSubTitle.length + subIntro.length + underscore.length + description.length + workingSince.length + passionDescription.length) {
//     if (i === 78 + headerIntro.length + headerSubTitle.length + subIntro.length + underscore.length + description.length + workingSince.length) {
//       document.getElementById('passion-description').innerHTML += '<br/>'
//     }
//     if (i === headerIntro.length + headerSubTitle.length) {
//       document.getElementById('header-subtitle').innerHTML += '<br/><br/>'
//     }
//     if (i === headerIntro.length + headerSubTitle.length + subIntro.length + underscore.length + description.length + workingSince.length + passionDescription.length - 1) {
//       document.getElementById('reach-out-btn-id').hidden = false
//       document.getElementById('explore-btn-id').hidden = false
//     }
//     if (i < headerIntro.length) {
//       document.getElementById('header-intro').innerHTML += headerIntro.charAt(i)
//     } else if (i < headerIntro.length + headerSubTitle.length) {
//       document.getElementById('header-subtitle').innerHTML += headerSubTitle.charAt(i - headerIntro.length)
//     } else if (i < headerIntro.length + headerSubTitle.length + subIntro.length) {
//       speed = 50
//       document.getElementById('subintro').innerHTML += subIntro.charAt(i - headerIntro.length - headerSubTitle.length)
//     } else if (i < headerIntro.length + headerSubTitle.length + subIntro.length + underscore.length) {
//       document.getElementById('underscore').innerHTML += underscore.charAt(i - headerIntro.length - headerSubTitle.length - subIntro.length)
//     } else if (i < headerIntro.length + headerSubTitle.length + subIntro.length + underscore.length + description.length) {
//       speed = 30
//       document.getElementById('description').innerHTML += description.charAt(i - headerIntro.length - headerSubTitle.length - subIntro.length - underscore.length)
//     } else if (i < headerIntro.length + headerSubTitle.length + subIntro.length + underscore.length + description.length + workingSince.length) {
//       document.getElementById('working-since').innerHTML += workingSince.charAt(i - headerIntro.length - headerSubTitle.length - subIntro.length - underscore.length - description.length)
//     } else {
//       document.getElementById('passion-description').innerHTML += passionDescription.charAt(i - headerIntro.length - headerSubTitle.length - subIntro.length - underscore.length - description.length - workingSince.length)
//     }
//     i++
//     setTimeout(typeWriter, speed)
//   }


// var canvas = document.getElementById('webgl');
// var canvasJourney = document.getElementById('webgl-journey');
// var gl = canvas.getContext('webgl');
// var glJourney = canvasJourney.getContext('webgl');
// if (!gl) {
//   console.log('Failed to get the rendering context for WebGL');
//   return;
// }
// if (!glJourney) {
//   console.log('Failed to get the rendering context for WebGL');
//   return;
// }
// gl.clearColor(0.0, 0.0, 0.0, 1.0);
// gl.clear(gl.COLOR_BUFFER_BIT);
// glJourney.clearColor(0.0, 0.0, 0.0, 1.0);
// glJourney.clear(gl.COLOR_BUFFER_BIT);
// }
