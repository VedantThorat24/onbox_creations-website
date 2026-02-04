var swiper = new Swiper(".mySwiper", {
      effect: "cards",
      grabCursor: true,
    });

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
    document.querySelectorAll(".swiper ")
        .forEach(function (e) {
            tl.from(e, {
                x: 700,
                duration: 2,
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
    const svg = document.querySelector(".line");
    const svg1 = document.querySelector(".line1");
    const pathEl = svg.querySelector("path");
    const pathEl1 = svg1.querySelector("path");

    const finalPath = "M 90 100 Q 90 300 90 400";

    svg.addEventListener("mousemove", (e) => {
        const bounds = svg.getBoundingClientRect();

        // mouse position relative to SVG
        const x = e.clientX - bounds.left;
        const y = e.clientY - bounds.top;

        // vertical line bending sideways
        const path = `M 90 100 Q ${x} 300 90 400`;

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

    //line 2 
    svg1.addEventListener("mousemove", (e) => {
        const bounds1 = svg1.getBoundingClientRect();

        // mouse position relative to SVG
        const x1 = e.clientX - bounds1.left;
        const y = e.clientY - bounds1.top;

        // vertical line bending sideways
        const path1 = `M 90 100 Q ${x1} 300 90 400`;

        gsap.to(pathEl1, {
            attr: { d: path1 },
            duration: 0.2,
            ease: "power3.out"
        });
    });

    svg1.addEventListener("mouseleave", () => {
        gsap.to(pathEl1, {
            attr: { d: finalPath },
            duration: 1,
            ease: "elastic.out(1, 0.3)"
        });
    });


    gsap.from(".title h5", {
        scrollTrigger: {
            trigger: "#about",
            // markers: true,
            start: "top 30%",
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
            start: "top 50%",
            end: "bottom bottom",
            // scrub: 1
        },
        opacity: 0,
        duration: .7,
        y: 200,
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
function cursor() {
    window.addEventListener("mousemove", function (details) {
        gsap.to("#cursor", {
            x: details.x,
            y: details.y,
            duration: .7,
            ease: "back.out(3)",
        })
    })
}
function work() {
    const svg = document.querySelector("footer svg");
    const pathEl = document.querySelector(".foot path");

    const finalPath = "M 100 100 Q 800 100 1600 100";

    svg.addEventListener("mousemove", (e) => {
        const bounds = svg.getBoundingClientRect();

        // mouse position relative to SVG
        const x = e.clientX - bounds.left;
        const y = e.clientY - bounds.top;

        const path = `M 100 100 Q ${x} ${y} 1600 100`;

        gsap.to(pathEl, {
            attr: { d: path },
            duration: 0.3,
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
function material() {
    document.querySelectorAll(".element")
        .forEach(function (e) {
            e.addEventListener("mousemove", function (details) {
                gsap.to(this.querySelector(".layer"), {
                    height: "100%",
                    duration: .4
                })
                gsap.to(this, {
                    color: " #E9E9E9",
                    delay: .1
                })
                gsap.to(this.querySelector(".picture"), {
                    opacity: 1,
                    x: gsap.utils.mapRange(0, window.innerWidth, -200, 200, details.x)

                })
            })
            e.addEventListener("mouseleave", function (dets) {
                gsap.to(this.querySelector(".layer"), {
                    height: "0%",

                })
                gsap.to(this, {
                    color: " #004743",
                    delay: .2
                })
                gsap.to(this.querySelector(".picture"), {
                    opacity: 0,
                })


            })
        })


    gsap.from(".material_title h4", {
        scrollTrigger: {
            trigger: "#material",
            start: "top 50%",
            end: "bottom bottom",

        },
        opacity: 0,
        scale: 1.5
    })

    gsap.from(".element h3", {
        scrollTrigger: {
            trigger: "#material",
            start: "top 55%",
            end: "bottom bottom",

        },
        opacity: 0,
        x: -200,
        ease: "back.out(1.7)",
    })
    gsap.from(".element h4", {
        scrollTrigger: {
            trigger: "#material",
            start: "top 55%",
            end: "bottom bottom",

        },
        opacity: 0,
        x: 200,
        ease: "back.out(1.7)",
    })



}

work();
hero();
cursor();
about();
material();
workElement();
function workElement() {

    gsap.from(".work_title h3", {
        scrollTrigger: {
            trigger: "#work",
            start: "top 50%",
            end: "bottom bottom",

        },
        opacity: 0,
        scale: 1.5
    })


    document.querySelectorAll(".images img")
        .forEach(function (el) {

            el.addEventListener("mouseenter", function () {
                gsap.to(this, {
                    opacity: 1,
                    duration: .3
                })
                gsap.to("#cursor", {
                    scale: 5,
                    backgroundColor:"#00474394",
                    duration: 0.3,
                    ease: "power3.out"
                });

            })
            el.addEventListener("mouseleave", function () {
                gsap.to(this, {
                    opacity: .2,
                })
                gsap.to("#cursor", {
                    scale: 1,
                    backgroundColor:"#004743",
                    duration: 0.3,
                    ease: "power3.out"
                });
            })
        })
}


function magnet() {
    const cursor = document.querySelector("#cursor");

    document.querySelectorAll(".magnetic").forEach((el) => {

        // MAGNET MOVE
        el.addEventListener("mousemove", (e) => {
            const bounds = el.getBoundingClientRect();

            const x = e.clientX - bounds.left - bounds.width / 2;
            const y = e.clientY - bounds.top - bounds.height / 2;

            gsap.to(el, {
                x: x * 0.4,
                y: y * 0.4,
                duration: 0.3,
                ease: "power3.out"
            });
        });

        // ENTER
        el.addEventListener("mouseenter", () => {
            // cursor scale
            gsap.to(cursor, {
                scale: 5,
                duration: 0.3,
                ease: "power3.out",
                backgroundColor:"rgba(0, 116, 85, 0.39)",
            });

        });

        // LEAVE
        el.addEventListener("mouseleave", () => {
            // reset magnet
            gsap.to(el, {
                x: 0,
                y: 0,
                duration: 0.6,
                ease: "elastic.out(1, 0.4)"
            });

            // cursor back
            gsap.to(cursor, {
                scale: 1,
                duration: 0.3,
                 backgroundColor:"#004743",
                ease: "power3.out"
            });

        });

    });

}
magnet()