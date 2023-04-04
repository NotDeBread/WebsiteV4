const video = document.getElementById("video");
const bg = document.getElementById("bg");
const loader = document.getElementById("loader");

var loadingDone = false;

var loadingFail = 0;

const tip = document.getElementById("tip");

tipSet();

function tipSet() {
    var tips = [
        'Type "fun()" in the console for hidden settings!',
        "DeBread was here...",
        "Wowie!",
        ":)",
        "nuh uh",
        "lets hop on bedwars",
        "h",
        "Get Real",
        "Get Fake",
        "THE T!!!!",
        "BRUH!!! 🗿🗿🗿🗿",
        "cope",
        "Eddie was here...",
        '<img src="media/eddiebeeg.png" width="25">',
        "SHUT UP!!!!!",
        "You should definitely type hi() in the console!",
        "the wiggily woogly",
        "I live in your walls",
        "لماذا قضيت الوقت في ترجمة هذا",
        "bruh nawhhhh nah bruhhh nah no way bruhhh fr? Bruhhh",
        "We do a little trolling",
        "Yippe!",
    ];

    var tipRandom = tips[Math.round(Math.random() * (tips.length - 1))];

    tip.innerHTML = '"' + tipRandom + '"';

    console.log(
        `Your tip was "${tipRandom}" with a chance of ${
            Math.round((100 / tips.length) * 10) / 10
        }% (1 in ${tips.length})`
    );
}

setInterval(() => {
    if (video.readyState === 4) {
        setTimeout(() => {
            document.getElementById("loader_txt").innerText = "Done!";
            loadingDone = true;
            setTimeout(() => {
                loader.style.setProperty("opacity", "0");
                setTimeout(() => {
                    loader.style.setProperty("display", "none");
                }, 500);
            }, 500);
        }, 1000);
        loadingFail = 0;
    } else {
        loadingFail++;

        if (loadingFail === 10) {
            video.style.setProperty("display", "none");
            bg.style.setProperty("display", "unset");
            loadingDone = true;
            setTimeout(() => {
                document.getElementById("loader_txt").innerText =
                    "Backround loaing timed out...";
                tip.innerText = '"' + "Imagine having bad internet 💀💀" + '"';
                loadingDone = true;
                setTimeout(() => {
                    loader.style.setProperty("opacity", "0");
                    setTimeout(() => {
                        loader.style.setProperty("display", "none");
                    }, 500);
                }, 1000);
            }, 1000);
        }
    }
}, 500);

var loadingDots = "";

setInterval(() => {
    loader_txt();
}, 500);

function loader_txt() {
    if (loadingDone === true) {
        return;
    }

    if (loadingDots.length === 3) {
        loadingDots = "";
    } else {
        loadingDots += ".";
    }

    document.getElementById("loader_txt").innerText = `Loading${loadingDots}`;
}

document.body.addEventListener("wheel", checkScrollDirection);

function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
        return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
}

function checkScrollDirection(event) {
    if (checkScrollDirectionIsUp(event)) {
        close_();
    } else {
        open_();
    }
}

const main = document.getElementById("main");
const tabs = document.getElementById("tabs");

const show = "translateX(0) skewX(0)";
const hide = "translateX(-100vw) skewX(-25deg)";

function open_() {
    main.style.setProperty("height", "calc(100vh - 250px)");
    tabs.style.setProperty("bottom", "0");
    document.getElementById("arrow").style.setProperty("bottom", "250px");
    document.getElementById("arrow").style.setProperty("opacity", "0");

    document
        .getElementById("footer")
        .style.setProperty("border-top", "5px white solid");

    video.style.setProperty("transform", "scale(150%)");

    tabupdate();

    document.getElementById("projects").style.setProperty("transform", show);
}

function close_() {
    main.style.setProperty("height", "100vh");
    tabs.style.setProperty("bottom", "-26px");
    document.getElementById("arrow").style.setProperty("bottom", "25px");
    document.getElementById("arrow").style.setProperty("opacity", "1");

    document
        .getElementById("footer")
        .style.setProperty("border-top", "0 white solid");

    document.getElementById("projects").style.setProperty("transform", hide);

    video.style.setProperty("transform", "scale(100%)");

    setTimeout(() => {
        tab_selected = 0;
    }, 250);
}

var tab_selected = 0;

function tab(num) {
    tab_selected = num;
    tabupdate();
}

function tabupdate() {
    if (tab_selected === 0) {
        document.getElementById("projects").style.setProperty("transform", hide);
        document.getElementById("socials").style.setProperty("transform", hide);

        document.getElementById("tab0").style.setProperty("font-weight", "900");
        document.getElementById("tab1").style.setProperty("font-weight", "unset");

        setTimeout(() => {
            document.getElementById("projects").style.setProperty("display", "flex");
            document.getElementById("socials").style.setProperty("display", "none");

            document.getElementById("footer-header").innerText = "// Projects";

            setTimeout(() => {
                document.getElementById("projects").style.setProperty("transform", show);
            }, 100);
        }, 250);
    }

    if (tab_selected === 1) {
        document.getElementById("projects").style.setProperty("transform", hide);
        document.getElementById("socials").style.setProperty("transform", hide);

        document.getElementById("tab0").style.setProperty("font-weight", "unset");
        document.getElementById("tab1").style.setProperty("font-weight", "900");

        setTimeout(() => {
            document.getElementById("projects").style.setProperty("display", "none");
            document.getElementById("socials").style.setProperty("display", "flex");

            document.getElementById("footer-header").innerText = "// Socials";

            setTimeout(() => {
                document.getElementById("socials").style.setProperty("transform", show);
            }, 100);
        }, 250);
    }
}

var vidCreditActive = false;

setInterval(() => {
    if (
        video.currentTime >= 3 &&
        video.currentTime <= 4 &&
        vidCreditActive === false
    ) {
        videoCredit('Geometry Dash - "Crystal Corridor" by Knots');
    }
    if (
        video.currentTime >= 97 &&
        video.currentTime <= 98 &&
        vidCreditActive === false
    ) {
        videoCredit("TUNIC");
    }
    if (
        video.currentTime >= 132 &&
        video.currentTime <= 133 &&
        vidCreditActive === false
    ) {
        videoCredit("Celeste - Chapter 9: Final Room");
    }
}, 1);

function setVideo(part) {
    if (part === 1) {
        video.currentTime = 0;
    } else if (part === 2) {
        video.currentTime = 95;
    } else {
        video.currentTime = 130;
    }
}

function videoCredit(credit) {
    if (vidCreditActive === false) {
        console.log("Video Credit: ", credit);
        vidCreditActive = true;
        document.getElementById("vidCredit").innerText = credit;
        document.getElementById("vidCredit").style.setProperty("opacity", "1");
        setTimeout(() => {
            document
                .getElementById("vidCredit")
                .style.setProperty("opacity", "0");
            vidCreditActive = false;
        }, 5000);
    }
}

function fun() {
    console.log(
        "Hi - Sends hi in the console. WARNING: this may crash your browser"
    );
    console.log("     hi()");

    console.log("Crash - Literally just crashes your browser");
    console.log("     crash()");

    console.log(
        "Smooth - Changes the how long the animations between settings are"
    );
    console.log("     smooth(<seconds>)");

    console.log("Big - Scales the page");
    console.log("     big(<percent>)");

    console.log("Rotate - Rotates the page");
    console.log("     rotate(<degrees>)");

    console.log("Spin - Spins the page");
    console.log("     spin(<speed>)");

    console.log("Bright - Changes page brightness");
    console.log("     bright(<percent>)");

    console.log("Video Blur - Changes how blurry the background video is");
    console.log("     vblur(<int>)");

    console.log("Video Info - Shows information on the background video");
    console.log("     vInfo()");
}

function hi() {
    for (let i = 0; i >= 0; i++) {
        console.log("hi :)", i);
    }
}

function crash() {
    while (true) {}
}

const all = document.getElementById("all");

function big(scale) {
    all.style.setProperty("scale", scale + "%");
}

function rotate(degrees) {
    all.style.setProperty("rotate", degrees + "deg");
}

var spinspeed = 0;

function spin(speed) {
    setInterval(() => {
        spinspeed += speed;
        all.style.setProperty("rotate", spinspeed + "deg");
    }, 1);
}

function bright(brightness) {
    all.style.setProperty("filter", "brightness(" + brightness + "%)");
}

const flipAngles = {
    x: 0,
    y: 0,
    z: 0,
};

function flip(axis) {
    if (!["x", "y", "z"].includes(axis)) {
        errorlog("flip(<'x' OR 'y' OR 'z'>)");
        return;
    }
    flipAngles[axis] += 180;
    all.style.transform = `rotate${axis.toUpperCase()}(${flipAngles[axis]}deg)`;
}

function vblur(blur) {
    document
        .getElementById("videoContainer")
        .style.setProperty("filter", `blur(${blur}px) brightness(50%)`);
}

function smooth(time) {
    if (time !== undefined) {
        all.style.setProperty("transition", `all ease-in-out ${time}s`);
        console.log(`Smoothing set to ${time} seconds`);
    } else {
        errorlog("smooth(<seconds>)");
    }
}

function errorlog(syntax) {
    console.log("Invalid syntax! Please use the following syntax: \n" + syntax);
}

function vInfo() {
    console.log('Game 1: Geometry Dash - "Crystal Corridor" by Knots');
    console.log("Game 2: TUNIC");
    console.log("Game 3: Celeste - Chapter 9: Final Room");
}