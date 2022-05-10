gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(MotionPathPlugin);

// plug-ins added ^



// display time pages

let date =  new Date()
let ora  = date.getHours()

let moonPage = document.querySelector('.third-page')
let sunPage = document.querySelector('.sun-page')

if(ora < 18 && ora > 5){
    moonPage.style.display = "none"
} else {
    sunPage.style.display = "none"
}


gsap.from('.hi', {duration: 1, x: '330', ease: "power2.out"}); // hi message appear from right
gsap.from('.welcome-message', { duration: 1, scale: 0.9, opacity: 0, delay: 1, ease: "power1.out"});  // "welcome" message appear




// first page timeline
let tl = gsap.timeline({
    y: 600,
    scrollTrigger: {
        trigger: ".first-page",  
        start: "30% 30%",     
        scrub: true,
        pin: true,
        // markers: true,
        pinSpacing: false,               
    },
})


tl.to(".square", {scale: 1, x: 130, y: 1, rotate: 90}) // green square rotate on scroll  





// gsap.set(".moon", {scale: 1.5, autoAlpha: 1}); => //scalling up moon
// moon page
let tl3 = gsap.to(".moon",{
    scrollTrigger: {
        trigger: ".third-page",
        start: "0 0",
        end: "bottom 100",
        // markers: true,
        pin: true,
        scrub: 1        
    },
     motionPath: {
            path: [{x: "50vw", y: "-30vh"}, {x: "105vw", y: "-30vh"}],
            autoRotate: 3,
            curvines: 1
        }
})



// sun page
let tlSun = gsap.to(".sun", {
    scrollTrigger: {
        trigger: ".sun-page",
        start: "0 0",
        end: "bottom 100",
        pin: true,
        // markers: true,   
        scrub: 1
    },
    motionPath: {
        path: [{x: "50vw", y: "-30vh"}, {x: "115vw", y: "0vh"}],
    }
})

let lorem1 = gsap.to(".graphics", {
    scrollTrigger: {
        trigger: ".sun-page",
        start: "0 0",
        end: "bottom 100",
        pin: true,
        // markers: true,
        scrub: 1,
       
    },
    "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
   
})

let lorem2 = gsap.to(".web-design", {
    scrollTrigger: {
        trigger: ".sun-page",
        start: "0 0",
        end: "bottom 100",
        pin: true,
        // markers: true,
        scrub: 1,
       
    },
    "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
   
})

let lorem3 = gsap.to(".frontend", {
    scrollTrigger: {
        trigger: ".sun-page",
        start: "0 0",
        end: "bottom 100",
        pin: true,
        // markers: true,
        scrub: 1,
       
    },
    "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
   
})

let moon_text1 = gsap.to(".lorem-moon1", {
    scrollTrigger: {
        trigger: ".third-page",
        start: "0 0",
        end: "bottom 100",
        pin: true,
        markers: true,
        scrub: 1
    },
    "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
})



gsap.to(".cloud3", {x: "2100em", duration: 4, repeat: -1})
gsap.to(".cloud", {x: "2100em", repeat: -1, duration: 5})