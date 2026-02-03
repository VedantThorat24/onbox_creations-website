function hero() {
    var tl = gsap.timeline()
    document.querySelectorAll(".nav_elem a")
        .forEach(function (e) {
            tl.from(e, {
                y: -100,
                stagger: .009,
                duration: .3,
                ease: "power3.out",
            })
        })
    document.querySelectorAll(".hero_images img")
        .forEach(function (e) {
            tl.from(e, {
                x: 700,
                stagger: .009,
                duration: 1,
                ease: "power3.out",
            }, "-=.9")
        })
    tl.from(".hero_right h3", {
        opacity: 0,
        duration: .1
    })
    tl.from(".hero_left", {
        x: -700,
        duration: 2,
        ease: "back.out(1.7)",
    }, "-=2")

}
function about() {

    var path = `M 90 100 Q 90 300 90 400`
    var finalPath = `M 90 100 Q 90 300 90 400`

    var line = document.querySelector(".line")
    var line1 = document.querySelector(".line1")

    line.addEventListener("mousemove", details => {
        path = `M 90 100 Q ${(details.x) / 4} ${(details.y) / 4} 90 400`,
            gsap.to(".line path", {
                attr: { d: path }
            })
    }
    )
    line1.addEventListener("mousemove", details => {
        path = `M 90 100 Q ${(details.x) / 7} ${(details.y) / 7} 90 400`,
            gsap.to(".line1 path", {
                attr: { d: path }
            })
    }
    )
    line.addEventListener("mouseleave", function () {
        gsap.to(".line path", {
            attr: { d: finalPath },
            duration: 1,
            ease: "elastic.out(1,0.3)",
        })
    })
    line1.addEventListener("mouseleave", function () {
        gsap.to(".line1 path", {
            attr: { d: finalPath },
            duration: 1,
            ease: "elastic.out(1,0.3)",
        })
    })

    gsap.from(".title h5", {
        scrollTrigger: {
            trigger: "#about",
            // markers: true,
            start: "top 70%",
            end: "bottom bottom",
            // scrub: 1
        },
        opacity: 0,
        duration: .4,
        scale: 2
    })
    gsap.from(".about_section h3", {
        scrollTrigger: {
            trigger: "#about",
            // markers: true,
            start: "top 40%",
            end: "bottom bottom",
            // scrub: 1
        },
        opacity: 0,
        duration: .7,
        y:200,
        ease: "back.out(2.7)",
    })






}
// function horizontalPage() {
//     ScrollTrigger.defaults({
//         anticipatePin: 2
//     });

//     gsap.to("#map", {
//         xPercent: -50, // move one screen left (200vw → -50%)
//         ease: "none",
//         scrollTrigger: {
//             trigger: "#map",
//             pin: true,
//             scrub: 1,
//             start: "top top",
//             end: "+=2000", // control scroll length here
//         }
//     });

// }


// horizontalPage()

window.addEventListener("mousemove",function(details){
    gsap.to("#cursor",{
        x:details.x,
        y:details.y,
        duration:.7,
        ease: "back.out(3)",
    })
})
hero()
about();

function work() {
  const svg = document.querySelector("footer svg");
  const pathEl = svg.querySelector("path");

  const finalPath = "M 100 100 Q 800 100 1600 100";

  svg.addEventListener("mousemove", (e) => {
    const bounds = svg.getBoundingClientRect();

    // mouse position relative to SVG
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;

    const path = `M 100 100 Q ${x} ${y} 1600 100`;

    gsap.to(pathEl, {
      attr: { d: path },
      duration: 0.2,
      ease: "power3.out"
    });
  });

  svg.addEventListener("mouseleave", () => {
    gsap.to(pathEl, {
      attr: { d: finalPath },
      duration: 1,
      ease: "elastic.out(1, 0.3)"
    });
  });
}

// 🚨 CALL IT
work();
