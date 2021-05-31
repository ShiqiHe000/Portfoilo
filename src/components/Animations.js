import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const titleFadeIn = {
    opacity: 0,
    duration: 1,
    stagger: 0.3,
};

// landing page animation
export const landingPage = () => {
    const tl = gsap.timeline();

    tl.from(".bounceIn", {
        y: -200,
        opacity: 0,
        duration: 1.5,
        ease: "bounce.out",
    });
    tl.from(
        ".fadeIn",
        {
            opacity: 0,
            duration: 1,
            stagger: 0.5,
            ease: "none",
        },
        "+=.5"
    );

    tl.from(".scaleIn", {
        opacity: 0,
        duration: 1,
        stagger: 0.4,
        ease: "none",
    });

    tl.to("[data-amplify-btn]", {
        scale: 1.1,
        duration: 1,
    });
};

// eduation
export const eduFadeIn = (titles, items) => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.timeline({
        scrollTrigger: {
            trigger: titles,
            start: "bottom center",
        },
    })
        .from(titles, titleFadeIn)
        .from(items, {
            opacity: 0,
            duration: 1.5,
            stagger: 0.5,
        });
};

export const techSkillAnimation = (titles, card1, card2) => {
    gsap.registerPlugin(ScrollTrigger);

    const cardFlyTime = 1;
    const cardFlyIn = {
        opacity: 0,
        y: 200,
        duration: cardFlyTime,
    };
    const cardMoveTime = 0.5;
    const cardMove = {
        y: -15,
        duration: cardMoveTime,
        ease: "power4.out",
        delay: .5
    };

    gsap.timeline({
        scrollTrigger: {
            trigger: titles,
            start: "bottom center",
        },
    })
        .from(titles, titleFadeIn)
        .from(card1, cardFlyIn)
        .from(card2, { ...cardFlyIn, y: -200 }, `-=${cardFlyTime}`)
        .add("start")
        .to(card1, cardMove, "start")
        .to(card2, { ...cardMove, y: 15 }, "start");
};


export const softSkillAnimation  = (title, cards) => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: title, 
            start: "top center"
        }
    })

    tl.from(title, {
        duration: 1, 
        opacity: 0
    })

    tl.from(cards, {
        duration: 1, 
        ease: "power3.out", 
        opacity: 0, 
        stagger: .2, 
        scale: .5
    })
}

export const projectsAnimation = (titles, cards) => {

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
        scrollTrigger: {
            start: "bottom center", 
            trigger: titles
        }
    })

    tl.from(titles, {
        duration: 1, 
        opacity: 0
    })

    tl.from(cards, {
        duration: 1.5, 
        xPercent: 100, 
        ease: "bounce.out", 
        stagger: .5
    })
}

export const contactAnimation = (titles, card) => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
        scrollTrigger: {
            start: "bottom center", 
            trigger: titles
        }
    })

    tl.from(titles, {
        opacity: 0, 
        duration: 1, 
        stagger: .2
    })

    tl.from(card, {
        opacity: 0, 
        duration: 1.5, 
        ease: "back.out(1.7)", 
        scale: .5
    })
}