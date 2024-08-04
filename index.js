// 块对块匹配
let fm = document.querySelectorAll('.functionmodule li')
let cm = document.querySelectorAll('.contentmodule .diyiceng')
for (let i = 0; i < fm.length; i++) {
    fm[i].addEventListener('click', function () {
        if (this.style.opacity == 0.5) {
            this.style.opacity = 1
            cm[i].style.height = '0vw'
            cm[i].style.paddingBottom = '0vw'
        } else {
            for (let j = 0; j < fm.length; j++) {
                fm[j].style.opacity = 1
                cm[j].style.height = '0vw'
                cm[j].style.paddingBottom = '0vw'
            }
            this.style.opacity = 0.5
            cm[i].style.height = '177.86666666vw'
            cm[i].style.paddingBottom = '22vw'
        }
    })
}
// 走势图
let gujia = document.querySelector('.gujia')
let showtops = document.querySelectorAll('.showtop')
let hiddendowns = document.querySelectorAll('.hiddendown')
const zhangfu = [-1, 1]
let shi = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let zhi = 0
let round = setInterval(() => {
    zhi = parseInt(gujia.innerText) + zhangfu[Math.floor(Math.random() * 2)]
    shi.unshift(zhi > 0 ? zhi : 0)
    shi.pop()
    if (shi[0] > gujia.innerText) {
        gujia.style.backgroundColor = `rgb(251, 47, 59)`
    } else {
        gujia.style.backgroundColor = `rgb(27, 192, 124)`
    }
    gujia.innerText = shi[0]
    for (let i = 0; i < shi.length; i++) {
        if (shi[i] > hiddendowns[shi.length - i - 1].offsetHeight) {
            showtops[shi.length - i - 1].style.backgroundColor = `rgb(251, 47, 59)`
        } else {
            showtops[shi.length - i - 1].style.backgroundColor = `rgb(27, 192, 124)`
        }
        hiddendowns[shi.length - i - 1].style.height = shi[i] + 'px'
    }
}, 1000);

let imgs = document.querySelectorAll('.housebuy')
let outer = document.querySelector('.outer')
for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click',function() {
        let zhi = this.src
        outer.style.backgroundImage = `url(${zhi})`
    })
}