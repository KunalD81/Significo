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
                x:gsap.utils.mapRange(0,window.innerWidth,-200,200,dets.clientX),ease:Power4,
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
homeAni();
realAni();
teamAni();