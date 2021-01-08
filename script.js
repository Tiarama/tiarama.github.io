
// Icon click / Content reveal animations

function applyIconClickAnimation(sectionID) {
    const outerSection = document.querySelector(`${sectionID} .bubbleOuter`)
    const innerSection = document.querySelector(`${sectionID} .bubbleInner`)
    const gradientSection = document.querySelector(`${sectionID} .bubbleGradient`)
    const icon = document.querySelector(`${sectionID} .icon`)
    const text = document.querySelector(`${sectionID} .textContent`)
    gradientSection.style['z-index'] = '-4'
    outerSection.style.display = 'block'
    innerSection.style.display = 'block'
    text.style.display = 'block'
    text.style.animation = `iconClickText 3s forwards`
    icon.style.animation = 'iconClick 0.4s forwards'
    outerSection.style.animation = 'bubbleOuterAnimation 2s forwards'
    innerSection.style.animation = 'bubbleInnerAnimation 2.5s forwards'
    setTimeout(() => {
        gradientSection.style['z-index'] = '-6'
        outerSection.style.display = 'none'
        innerSection.style.display = 'none'
        icon.style.display = 'none'
    },2000)
    return
}

// Floating orb inderterminate movements

function orbPath() {
    const containerHeight = document.getElementsByClassName('orbParent')[0].offsetHeight-(document.getElementsByClassName('orbBG')[0].offsetHeight/2)
    const containerWidth = document.getElementsByClassName('orbParent')[0].offsetWidth-document.getElementsByClassName('orbBG')[0].offsetWidth
    let moveHeight = Math.floor(Math.random() * containerHeight);
    let moveWidth = Math.floor(Math.random() * containerWidth)
    return {moveHeight, moveWidth}
  }

const orbLeft = document.getElementById('orbBGLeft')
orbLeft.style.left = `${document.getElementsByClassName('orbParent')[0].offsetWidth/2}px`;
orbLeft.style.top = `${document.getElementsByClassName('orbParent')[0].offsetHeight/1.8}px`;

function moveLeftOrb() {
      const {moveHeight, moveWidth} = orbPath()
      orbLeft.style.left = `${moveWidth}px`
      orbLeft.style.top = `${moveHeight}px`
    }
  
    const orbMiddle = document.getElementById('orbBGMiddle')
    orbMiddle.style.left = `${document.getElementsByClassName('orbParent')[0].offsetWidth/0.8}px`;
    orbMiddle.style.top = `${document.getElementsByClassName('orbParent')[0].offsetHeight/6}px`;

  function moveMiddleOrb() {
    const shapeTwo = document.getElementById('orbBGMiddle')
      const {moveHeight, moveWidth} = orbPath()
      shapeTwo.style.left = `${moveWidth+document.getElementsByClassName('orbParent')[0].offsetWidth}px`
      shapeTwo.style.top = `${moveHeight}px`
    }
  
    const orbRight = document.getElementById('orbBGRight')
    orbRight.style.left = `${document.getElementsByClassName('orbParent')[0].offsetWidth/0.5}px`;
    orbRight.style.top = `${document.getElementsByClassName('orbParent')[0].offsetHeight/1.8}px`;

  function moveRightOrb() {
    const shapeThree = document.getElementById('orbBGRight')
      const {moveHeight, moveWidth} = orbPath()
      shapeThree.style.left = `${moveWidth+(document.getElementsByClassName('orbParent')[0].offsetWidth*2)}px`
      shapeThree.style.top = `${moveHeight}px`
    }
  
  let timer = 400
  function timerIncrease() {
    timer += 1200
    return timer
  }
  setInterval(moveLeftOrb, timerIncrease())
  setInterval(moveMiddleOrb, timerIncrease())
  setInterval(moveRightOrb, timerIncrease())

  // Floating orb interactions

  document.getElementsByClassName('orb')[0].addEventListener('mouseenter', function( event ) {
      if (window.innerWidth < 1024) {
          return
      }
      event.target.style.backgroundColor = '#C6FFDD';
      document.getElementById('orbBGLeft').style.height = '35vh'
      document.getElementById('orbBGLeft').style.width = '35vh'
      setTimeout(function() {
          event.target.style.backgroundColor = 'white'
          document.getElementById('orbBGLeft').style.height = '25vh'
          document.getElementById('orbBGLeft').style.width = '25vh'
      }, 500)
  })

  document.getElementsByClassName('orb')[1].addEventListener('mouseenter', function( event ) {
    if (window.innerWidth < 1024) {
        return
    }
    event.target.style.backgroundColor = '#FBD786';
    document.getElementById('orbBGMiddle').style.height = '35vh'
    document.getElementById('orbBGMiddle').style.width = '35vh'
    setTimeout(function() {
        event.target.style.backgroundColor = 'white'
        document.getElementById('orbBGMiddle').style.height = '25vh'
        document.getElementById('orbBGMiddle').style.width = '25vh'
    }, 500)
})

document.getElementsByClassName('orb')[2].addEventListener('mouseenter', function( event ) {
    if (window.innerWidth < 1024) {
        return
    }
    event.target.style.backgroundColor = '#f7797d';
    document.getElementById('orbBGRight').style.height = '35vh'
    document.getElementById('orbBGRight').style.width = '35vh'
    setTimeout(function() {
        event.target.style.backgroundColor = 'white'
        document.getElementById('orbBGRight').style.height = '25vh'
        document.getElementById('orbBGRight').style.width = '25vh'
    }, 500)
})