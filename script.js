function homeAni(){
    gsap.set(".slidesm",{scale:9})

    var tl= gsap.timeline({
        scrollTrigger:{
            trigger:".home",
            start:'top top',
            end:'bottom bottom',
            scrub:3,
        }
    })

    tl
    .to('.vdodiv',{
        '--clip':'0%',
        ease:Power2
    },'a')
    .to('.slidesm',{
        scale:1,
        ease:Power2
    },'a')
    .to('.lft',{
        xPercent:-10,
        stagger:.03,
        ease:Power4
    },'b')
    .to('.rgt',{
        xPercent:10,
        stagger:.03,
        ease:Power4
    },'b')
};

function realAni(){
    gsap.to('.slide',{
        scrollTrigger:{
            trigger:".real",
            start:"top top ",
            end: "bottom bottom",
            scrub:1
        },
        xPercent:-310,
        ease: Power4
    })
};

function teamAni(){
    document.querySelectorAll(".listelem")
    .forEach(function(el){
        el.addEventListener('mousemove',function(dets){
            
            gsap.to(this.querySelector(".picture"),{
                opacity:1,
                x:gsap.utils.mapRange(0,window.innerWidth,-200,200,dets.clientX),
                ease:Power4,
                duration:.3
            });
            
        });
        el.addEventListener('mouseleave',function(dets){
            gsap.to(this.querySelector(".picture"),{
                opacity:0,
                ease:Power4,
                duration:.3
            });
        });
    });
}

function paraAni(){ 
    var clutter="";
    var textpara=document.querySelector(".textpara");
    textpara.
    textContent.split("")
    .forEach(function(e){
        if(e === " ") clutter +=`<span>&nbsp;</span>` //non breaking space
        clutter += `<span>${e}</span>`
    })
    textpara.innerHTML=clutter;

    gsap.set(".textpara span",{opacity:.1})
    gsap.to(".textpara span",{
        scrollTrigger:{
            trigger:".paragraphs",
            start:'20% 60%', 
            end:"90% 90%",
            scrub:1
        },
        opacity: 1,
        stagger: .03,
        ease: Power4
})
}

function loco(){
    (function(){
        const locomotiveScroll = new LocomotiveScroll();
    })();
}

function capsulesAni(){
    gsap.to(".capsule:nth-child(2)",{
        scrollTrigger:{
            trigger:".capsules",
            start:"top 70%",
            end: "bottom bottom",
            scrub:1
        },
        y:0,
        ease:Power4
    })
}

function bodyColorChange(){
    document.querySelectorAll('.section').
    forEach(function(e){
        ScrollTrigger.create({
            trigger:e,
            start: "top 50%",
            end: "bottom 50%",
            onEnter:function(){
                document.body.setAttribute("theme",e.dataset.color);
            },
            onEnterBack:function(){
                document.body.setAttribute("theme",e.dataset.color);
            }
        })
    })
}


loco();
bodyColorChange();
homeAni();
realAni();
teamAni();
paraAni();
capsulesAni();