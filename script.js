const GRAY_ANIMATION_DEFITION = 'iconClickGrey 2s forwards'
const WHITE_ANIMATION_DEFINITION = 'iconClickWhite 2.5s forwards'
const ICON_ANIMATION_DEFINITION = 'iconClick 0.4s forwards'
const ICON_TEXT_ANIMATION_DEFINITION = `iconClickText 4s forwards`

function applyIconClickAnimation(sectionID) {
    const graySection = document.querySelector(`${sectionID} .sectionGray`)
    const whiteSection = document.querySelector(`${sectionID} .sectionWhite`)
    const gradientSection = document.querySelector(`${sectionID} .sectionGradient`)
    const icon = document.querySelector(`${sectionID} .icon`)
    const p = document.querySelector(`${sectionID} p`)

    gradientSection.style['z-index'] = '-4'
    graySection.style.display = 'block'
    whiteSection.style.display = 'block'
    p.style.display = 'block'
    p.style.animation = ICON_TEXT_ANIMATION_DEFINITION
    icon.style.animation = ICON_ANIMATION_DEFINITION
    graySection.style.animation = GRAY_ANIMATION_DEFITION
    whiteSection.style.animation = WHITE_ANIMATION_DEFINITION
    setTimeout(() => {
        gradientSection.style['z-index'] = '-6'
        graySection.style.display = 'none'
        whiteSection.style.display = 'none'
    },2000)
    return
}