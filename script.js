const video = document.getElementById('video')
const bg = document.getElementById('bg')
const loader = document.getElementById('loader')

var loadingDone = false

var loadingFail = 0

setInterval(() => {
    if(video.readyState === 4) {
        bg.style.setProperty('display','none')
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
    } else {
        loadingFail++

        if(loadingFail === 10) {
            video.style.setProperty('display','none')
            loadingDone = true
            setTimeout(() => {
                document.getElementById('loader_txt').innerText = 'Backround failed loading...'
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

function open_() {
    main.style.setProperty('height','calc(100vh - 250px)')
    tabs.style.setProperty('bottom','0')
    document.getElementById('arrow').style.setProperty('bottom','250px')
    document.getElementById('arrow').style.setProperty('opacity','0')
}

function close_() {
    main.style.setProperty('height','100vh')
    tabs.style.setProperty('bottom','-26px')
    document.getElementById('arrow').style.setProperty('bottom','25px')
    document.getElementById('arrow').style.setProperty('opacity','1')
}

var tab_selected = 0

function tab(num) {
    tab_selected = num
    tabupdate()
}

tabupdate()

function tabupdate() {
    if(tab_selected === 0) {
        document.getElementById('projects').style.setProperty('display','flex')
        document.getElementById('socials').style.setProperty('display','none')

        document.getElementById('tab0').style.setProperty('font-weight','900')
        document.getElementById('tab1').style.setProperty('font-weight','unset')

        document.getElementById('footer-header').innerText = '// Projects'
    }

    if(tab_selected === 1) {
        document.getElementById('projects').style.setProperty('display','none')
        document.getElementById('socials').style.setProperty('display','flex')

        document.getElementById('tab0').style.setProperty('font-weight','unset')
        document.getElementById('tab1').style.setProperty('font-weight','900')

        document.getElementById('footer-header').innerText = '// Socials'
    }
}

function fun() {
    console.log('Hi - Sends hi in the console up to 30,000 times!')
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
}

var hicount = 0

function hi() {
    for(let i = 1; i > 0;) {
      console.log('hi :)', hicount)
      hicount++
    }
}

function big(scale) {
    document.getElementById('all').style.setProperty('scale',scale + '%')
}
  
function rotate(degrees) {
    document.getElementById('all').style.setProperty('rotate', degrees + 'deg')
}
  
var spinactive = false
var spindeg = 0
  
function spin(speed) {    
    setInterval(() => {
        spindeg += speed
        document.getElementById('all').style.setProperty('rotate', spindeg + 'deg')
    },1)
}
  
function bright(brightness) {
    document.getElementById('all').style.setProperty('filter','brightness(' + brightness + '%)')
}

function smooth(input) {
    if(input === 'y') {
      document.getElementById('all').style.setProperty('transition','all ease-in-out 0.25s')
      console.log('Smoothing ON')
      
    } else if(input === 'n') {
      document.getElementById('all').style.setProperty('transition','none')
      console.log('Smoothing OFF')
      
    } else {
      console.log("Please put 'y' or 'n'")
    }
}