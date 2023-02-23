const video = document.getElementById('video')
const bg = document.getElementById('bg')
const loader = document.getElementById('loader')

var loadingDone = false

var loadingFail = 0

const tip = document.getElementById('tip')

tipSet()

function tipSet() {
    var tips = [
        'These tip things are new!',
        'Type "fun()" in the console for hidden settings!',
        'DeBread was here...',
        'Wowie!',
        ':)',
        'nuh uh',
        'lets hop on bedwars',
        'h',
        'Get Real',
        'Get Fake',
        'THE T!!!!',
        'BRUH!!! 🗿🗿🗿🗿',
        'cope',
        'Eddie was here...',
        '<img src="media/eddiebeeg.png" width="25px">',
        'SHUT UP!!!!!',
        'You should definitely type hi() in the console!'
    ]
     
    var tipRandom = tips[Math.round(Math.random() * (tips.length - 1))]
    
    tip.innerHTML = '"' + tipRandom + '"'

    console.log(`Your tip was "${tipRandom}" with a chance of ${Math.round((100 / tips.length) * 10) / 10}% (1 in ${tips.length})`)
}

setInterval(() => {
    if(video.readyState === 4) {
       setTimeout(() => {
            document.getElementById('loader_txt').innerText = 'Done!'
            loadingDone = true
            setTimeout(() => {
                loader.style.setProperty('opacity','0')
                setTimeout(() => {
                    loader.style.setProperty('display','none')
                }, 500);
            }, 500);
        }, 1000);
        loadingFail = 0
    } else {
        loadingFail++
    
        if(loadingFail === 10) {
            video.style.setProperty('display','none')
            bg.style.setProperty('display','unset')
            loadingDone = true
            setTimeout(() => {
                document.getElementById('loader_txt').innerText = 'Backround loaing timed out...'
                loadingDone = true
                setTimeout(() => {
                    loader.style.setProperty('opacity','0')
                    setTimeout(() => {
                        loader.style.setProperty('display','none')
                    }, 500);
                }, 1000);
            }, 1000);
        }
    }
}, 500);

loader_txt()

function loader_txt() {
    if(loadingDone === false) {
        document.getElementById('loader_txt').innerText = 'Loading'
    }
    setTimeout(() => {
        if(loadingDone === false) {
        document.getElementById('loader_txt').innerText = 'Loading.'
        }
        setTimeout(() => {
            if(loadingDone === false) {
                document.getElementById('loader_txt').innerText = 'Loading..'
            }
            setTimeout(() => {
                if(loadingDone === false) {
                    document.getElementById('loader_txt').innerText = 'Loading...'
                }
                setTimeout(() => {
                    loader_txt()
                }, 500);
            }, 500);
        }, 500);
    }, 500);
}

document.body.addEventListener('wheel', checkScrollDirection);

function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
      return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
  }
  
  function checkScrollDirection(event) {
    if (checkScrollDirectionIsUp(event)) {
      close_()
    } else {
      open_()
    }
}

const main = document.getElementById('main')
const tabs = document.getElementById('tabs')

const show = 'translateX(0) skewX(0)'
const hide = 'translateX(-100vw) skewX(-25deg)'

function open_() {
    main.style.setProperty('height','calc(100vh - 250px)')
    tabs.style.setProperty('bottom','0')
    document.getElementById('arrow').style.setProperty('bottom','250px')
    document.getElementById('arrow').style.setProperty('opacity','0')

    document.getElementById('footer').style.setProperty('border-top', '5px white solid')

    if(tab_selected === 0) {
        tabupdate()
    }
    document.getElementById('projects').style.setProperty('transform', show)
}

function close_() {
    main.style.setProperty('height','100vh')
    tabs.style.setProperty('bottom','-26px')
    document.getElementById('arrow').style.setProperty('bottom','25px')
    document.getElementById('arrow').style.setProperty('opacity','1')

    document.getElementById('footer').style.setProperty('border-top', '0 white solid')

    document.getElementById('projects').style.setProperty('transform', hide)
}

var tab_selected = 0

function tab(num) {
    tab_selected = num
    tabupdate()
}

function tabupdate() {
    if(tab_selected === 0) {

        document.getElementById('projects').style.setProperty('transform', hide)
        document.getElementById('socials').style.setProperty('transform', hide)

        document.getElementById('tab0').style.setProperty('font-weight','900')
        document.getElementById('tab1').style.setProperty('font-weight','unset')

        setTimeout(() => {            
            document.getElementById('projects').style.setProperty('display','flex')
            document.getElementById('socials').style.setProperty('display','none')
    
            document.getElementById('footer-header').innerText = '// Projects'

            setTimeout(() => {
                document.getElementById('projects').style.setProperty('transform', show)
            }, 1);
        }, 250);
    }

    if(tab_selected === 1) {

        document.getElementById('projects').style.setProperty('transform', hide)
        document.getElementById('socials').style.setProperty('transform', hide)
        
        document.getElementById('tab0').style.setProperty('font-weight','unset')
        document.getElementById('tab1').style.setProperty('font-weight','900')
    
        setTimeout(() => {            
            document.getElementById('projects').style.setProperty('display','none')
            document.getElementById('socials').style.setProperty('display','flex')
    
            document.getElementById('footer-header').innerText = '// Socials'

            setTimeout(() => {
                document.getElementById('socials').style.setProperty('transform', show)
            }, 1);
        }, 250);
    }
}

function fun() {
    console.log('Hi - Sends hi in the console. WARNING: this may crash your browser')
    console.log('     hi()')
  
    console.log('Smooth - Decides whether or not to smooth the transition between effects')
    console.log("     smooth(<'y' OR 'n'>, <time>)")
  
    console.log('Big - Scales the page')
    console.log('     big(<percent>)')
  
    console.log('Rotate - Rotates the page')
    console.log('     rotate(<degrees>)')
  
    console.log('Spin - Spins the page')
    console.log('     spin(<speed>)')

    console.log('Bright - Changes page brightness')
    console.log('     bright(<percent>)')

    console.log('Video Blur - Changes how blurry the background video is')
    console.log('     vblur(<int>)')

    console.log('Video Info - Shows information on the background video')
    console.log('     vInfo()')
}

function hi() {
    for(let i = 0; i >= 0; i++) {
      console.log('hi :)', i)
    }
}

const all = document.getElementById('all')

function big(scale) {
    all.style.setProperty('scale',scale + '%')
}
  
function rotate(degrees) {
    all.style.setProperty('rotate', degrees + 'deg')
}

var spinspeed = 0
  
function spin(speed) {    

    
    setInterval(() => {
        spinspeed += speed
        all.style.setProperty('rotate', spinspeed + 'deg')
    },1)
}

  
function bright(brightness) {
    all.style.setProperty('filter','brightness(' + brightness + '%)')
}

var flipX = 0
var flipY = 0
var flipZ = 0

function flip(axis) {
    if(axis === 'x') {
        flipX += 180
        all.style.setProperty('transform','rotateX(' + flipX +'deg)')
    } else if(axis === 'y') {
        flipY += 180
        all.style.setProperty('transform','rotateY(' + flipY +'deg)')
    } else if(axis === 'z') {
        flipZ += 180
        all.style.setProperty('transform','rotateZ(' + flipZ +'deg)')
    } else {
        errorlog("flip(<'x' OR 'y' OR 'z'>)")
    }
}

function vblur(blur) {
    document.getElementById("videoContainer").style.setProperty('filter',`blur(${blur}px) brightness(50%)`)
}

function smooth(input) {
    if(input === 'y') {
      all.style.setProperty('transition','all ease-in-out 0.25s')
      console.log('Smoothing ON')
      
    } else if(input === 'n') {
      all.style.setProperty('transition','none')
      console.log('Smoothing OFF')
    } else {
        errorlog("smooth(<'y' OR 'n'>)")
    }
}

function errorlog(syntax) {
    console.log("Invalid syntax! Please use the following syntax: \n" + syntax)
}

function vInfo() {
    console.log('Game 1: Geometry Dash - "Crystal Corridor" by Knots')
    console.log('Game 2: TUNIC')
    console.log('Game 3: Celeste - Chapter 9: Final Room')
}

