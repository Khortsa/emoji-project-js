const smileFace = document.querySelector('.smile')
const angryFace = document.querySelector('.angry')

//add event listerner

smileFace.addEventListener('click', () => {
    if(angryFace.classList.contains('angry')){
        angryFace.classList.add('active')
        smileFace.classList.remove('active')
    }
})
angryFace.addEventListener('click', () => {
    if(smileFace.classList.contains('smile')){
        smileFace.classList.add('active')
        angryFace.classList.remove('active')
    }
})