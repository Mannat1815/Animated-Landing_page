const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function videoconAnimation(){
    let videocon =document.querySelector("#video-container")
let playbtn =document.querySelector("#play")
videocon.addEventListener("mouseenter",function(){
    gsap.to(playbtn,{
        scale:1,
        opacity:1
    })
})
videocon.addEventListener("mouseleave", function(){
    gsap.to(playbtn,{
        scale:0,
        opacity:0
    })
})
videocon.addEventListener("mousemove", function(dets){
    gsap.to(playbtn,{
        left:dets.x-50,
        top:dets.y-80,
         
    })
})
}
videoconAnimation()
function LoadingAnimation(){
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay: .4,
        duration:0.8,
        stagger:0.3
    })

gsap.from("#page1 #video-container",{
   scale:0.9,
    opacity:0,
    delay: 1.3,
    duration: 0.4,

})
}
LoadingAnimation()

document.addEventListener("mousemove" , function(dets){
    gsap.to(".cursor",{
        left:dets.x,
        top:dets.y

    })
})
document.querySelector("#child1").addEventListener("mouseenter",function(){
    gsap.to(".cursor",{
        transform:'translate(-50%,-50%) scale(1)',
    })
}
)
function cursorAnimation(){
    document.querySelector("#child1").addEventListener("mouseleave",function(){
        gsap.to(".cursor",{
            transform:'translate(-50%,-50%) scale(0)',
            backgroundColor:"rgba(211, 164, 224, 0.545)"
        })
    }
    )
    document.querySelector("#child2").addEventListener("mouseenter",function(){
        gsap.to(".cursor",{
            transform:'translate(-50%,-50%) scale(1)',
            backgroundColor:"#e99c7274"
        })
    }
    )
    document.querySelector("#child2").addEventListener("mouseleave",function(){
        gsap.to(".cursor",{
            transform:'translate(-50%,-50%) scale(0)',
        })
    }
    )
    document.querySelector("#child3").addEventListener("mouseenter",function(){
        gsap.to(".cursor",{
            transform:'translate(-50%,-50%) scale(1)',
            backgroundColor:"#48434374"
        })
    }
    )
    document.querySelector("#child3").addEventListener("mouseleave",function(){
        gsap.to(".cursor",{
            transform:'translate(-50%,-50%) scale(0)',
        })
    }
    )
    document.querySelector("#child4").addEventListener("mouseenter",function(){
        gsap.to(".cursor",{
            transform:'translate(-50%,-50%) scale(1)',
            backgroundColor:"rgba(106, 192, 241, 0.545)"
        })
    }
    )
    document.querySelector("#child4").addEventListener("mouseleave",function(){
        gsap.to(".cursor",{
            transform:'translate(-50%,-50%) scale(0)',
        })
    })

}
cursorAnimation()
