const OUTER_ANIMATION_DEFITION = 'bubbleOuterAnimation 2s forwards'
const INNER_ANIMATION_DEFINITION = 'bubbleInnerAnimation 2.5s forwards'
const ICON_ANIMATION_DEFINITION = 'iconClick 0.4s forwards'
const ICON_TEXT_ANIMATION_DEFINITION = `iconClickText 4s forwards`

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
    text.style.animation = ICON_TEXT_ANIMATION_DEFINITION
    icon.style.animation = ICON_ANIMATION_DEFINITION
    outerSection.style.animation = OUTER_ANIMATION_DEFITION
    innerSection.style.animation = INNER_ANIMATION_DEFINITION
    setTimeout(() => {
        gradientSection.style['z-index'] = '-6'
        outerSection.style.display = 'none'
        innerSection.style.display = 'none'
    },2000)
    return
}