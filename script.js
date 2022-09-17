gsap.to("#bottle",{
    // x:700,
    rotation:0,
    duration:3,
    scrollTrigger:{
        trigger:".first",
        start:"top 10%",  
        start:"20%",
        end:"60%",
        // markers:true,
        scrub:1.5
    },
    // backgroundColor:"pink",
})

gsap.to("#bottle",{
    // x:700,
    scale:.7,
    duration:3,
    scrollTrigger:{
        trigger:".third",
        start:"top 10%",  
        start:"20%",
        end:"100%",
        // markers:true,
        scrub:1.5
    },
    // backgroundColor:"pink",
})

gsap.to("#bottle",{
    // x:700,
    scale:.6,
    duration:3,
    scrollTrigger:{
        trigger:".four",
        start:"top 10%",  
        start:"20%",
        end:"110%",
        // markers:true,
        scrub:1.5
    },
    // backgroundColor:"pink",
})

gsap.from(".bottles img",{
    y:80,
    duration:3,
    stagger:1.6,
    scrollTrigger:{
        trigger:".fifth",
        start:"top 10%",  
        start:"0%",
        end:"1%",
        // markers:true,
        scrub:1.5
    }, 
})
gsap.to("#bottle",{
    // position: sticky,
    scale:1,
    duration:3,
    stagger:1.6,
    scrollTrigger:{
        trigger:".fifth",
        start:"top 10%",  
        start:"20%",
        end:"70%",
        // markers:true,
        scrub:2
    },
})

gsap.to("#bottle",{
    duration:3, 
    display:"none",
    scrollTrigger:{
        trigger:".four",
        start:"top 0%",  
        start:"30%",
        end:"35%",
        // markers:true,
        scrub:1
    },
    // backgroundColor:"pink",
})