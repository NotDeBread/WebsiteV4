const video = document.getElementById('bgVideo')
const tip = document.getElementById('splashText')
const loader = document.getElementById('loader-container')
const logo = document.getElementById('logo')

var loadingDone = false

setInterval(() => {
    if (video.readyState === 4) {
        setTimeout(() => {
            document.getElementById("loaderText").innerText = "Done!";
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