document.addEventListener("DOMContentLoaded", function(){


    //бургер меню
    const burger__js = document.querySelector('.burger__js')
    const burger__jsBody = document.querySelector('.burger__jsBody')
    burger__js.addEventListener('click', function(){
        burger__jsBody.classList.toggle('active')
    })
    const burger__svg = document.querySelector('.burger__svg')
    burger__svg.addEventListener('click', function(){
        burger__jsBody.classList.toggle('active')
    })

    document.addEventListener('click', (e) => {
        const click = e.composedPath().includes(burger__jsBody)
        const clicksvg = e.composedPath().includes(burger__js)
    
        if (( !click ) && ( !clicksvg )) {
            burger__jsBody.classList.remove('active')
        }
    })


    //меню футера
    const footer__js = document.querySelector('.footer__js')
    const footer__jsBody = document.querySelector('.footer__jsBody')
    footer__js.addEventListener('click', ()=> {
        footer__jsBody.classList.toggle('active')
    })

    document.addEventListener('click', (e) => {
        const click = e.composedPath().includes(footer__jsBody)
        const clicksvg = e.composedPath().includes(footer__js)
    
        if (( !click ) && ( !clicksvg )) {
            footer__jsBody.classList.remove('active')
        }
    })

})