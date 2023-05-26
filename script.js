const video = document.getElementById('bgVideo')
const tip = document.getElementById('splashText')
const loader = document.getElementById('loader-container')
const logo = document.getElementById('logo')

var loadingDone = false
var loadingFail = 0

setInterval(() => {
    if (video.readyState === 4 || window.innerWidth > 767) {
        setTimeout(() => {
            document.getElementById("loaderText").innerText = "Done!";
            loadingDone = true;
            setTimeout(() => {
                loader.style.setProperty("opacity", "0");
                setTimeout(() => {
                    loader.style.setProperty("display", "none");
                }, 500);
                // document.getElementById('box1').style.setProperty('padding','10px')
                // document.getElementById('box2').style.setProperty('padding','10px')
                // document.getElementById('box3').style.setProperty('padding','10px')
                if(window.innerWidth > 767) {
                    setTimeout(() => {
                        // document.getElementById('box1').style.setProperty('height','300px')
                        setTimeout(() => {
                            // document.getElementById('box2').style.setProperty('height','300px')
                            setTimeout(() => {
                                // document.getElementById('box3').style.setProperty('height','300px')
                            }, 50);
                        }, 50);
                    }, 200);
                }
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
                document.getElementById("loader_txt").innerText = "Backround loading timed out...";
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

tip.innerHTML = `"${tips[Math.round(Math.random() * tips.length - 1)]}"`

var loadingDots = "";

setInterval(() => {
    if (loadingDone === true) {
        return;
    }
    
    if (loadingDots.length === 3) {
        loadingDots = "";
    } else {
        loadingDots += ".";
    }
    document.getElementById("loaderText").innerText = `Loading${loadingDots}`;
}, 500);

var vidCreditActive = false;

setInterval(() => {
    if (video.currentTime >= 3 && video.currentTime <= 4 && vidCreditActive === false) {
        videoCredit('Geometry Dash - "Crystal Corridor" by Knots');
    }
    if (video.currentTime >= 97 && video.currentTime <= 98 && vidCreditActive === false) {
        videoCredit("TUNIC");
    }
    if (video.currentTime >= 132 && video.currentTime <= 133 && vidCreditActive === false) {
        videoCredit("Celeste - Chapter 9: Final Room");
    }
}, 1000);

const vidProgress = document.getElementById('vidProgress')

setInterval(() => {
    vidProgress.style.width = video.currentTime / 272 * 100 + '%'
}, 1000);

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

let dropDownOpen = false

function openDropdown() {
    if(dropDownOpen === false) {
        document.getElementById('youtubeDropdown').style.height = '160px'
        document.getElementById('dropDownButton').innerText = '▼'
        dropDownOpen = true
    } else {
        document.getElementById('youtubeDropdown').style.height = '0'
        document.getElementById('dropDownButton').innerText = '▶'
        dropDownOpen = false
    }
}

//Hidden Settings

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
        errorlog("flip(<'x' OR 'y' OR 'z'>)")
        return
    }
    flipAngles[axis] += 180
    all.style.transform = `rotate${axis.toUpperCase()}(${flipAngles[axis]}deg)`
}

function vblur(blur) {
    document.getElementById("bgVideoContainer").style.setProperty("filter", `blur(${blur}px) brightness(50%)`);
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