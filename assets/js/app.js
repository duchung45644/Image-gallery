var btns = document.querySelectorAll('.nav-item');

var col_1 = document.querySelector('.col-1');
var col_2 = document.querySelector('.col-2');
var col_3 = document.querySelector('.col-3');
var col_4 = document.querySelector('.col-4');

var imgPath = './assets/img/boy/';

var imgShow = document.querySelector('.gallery-inner img')
var show = document.querySelector('.gallery')
var close = document.querySelector('.close')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')

function renderImg(target, i) {
    return `<div class="img-item">
                <img src="./assets/img/${target}/${i}.jpg" alt="">
            </div>`
}

function loadImg(target, numberImg) {
    let htmls_1 = ''
    let htmls_2 = ''
    let htmls_3 = ''
    let htmls_4 = ''

    for (let i = 1; i <= numberImg; i++) {
        switch (i % 4) {
            case 0:
                htmls_4 += renderImg(target, i)
                break
            case 1:
                htmls_1 += renderImg(target, i)
                break
            case 2:
                htmls_2 += renderImg(target, i)
                break
            case 3:
                htmls_3 += renderImg(target, i)
                break
            default:
                break;
        }
    }

    col_1.innerHTML = htmls_1 + htmls_3
    col_2.innerHTML = htmls_2 + htmls_1
    col_3.innerHTML = htmls_3 + htmls_4
    col_4.innerHTML = htmls_4 + htmls_2
}

var currentIndex = 0

function showImg(images, index){
    currentIndex = index

      // hide prev button in first image
    if(currentIndex == 0){
        prev.classList.add('hide')
    }
    else{
        prev.classList.remove('hide')
    }

    // Hide next button in the last image
    if(currentIndex == images.length){
        next.classList.add('hide')
    }
    else{
        next.classList.remove('hide')
    }
    console.log(currentIndex);
    imgShow.src = images[currentIndex].src
}

// Get all image choose image and show
function showImage(){
    var images = document.querySelectorAll('.row img')
    images.forEach((item, index)=>{
        item.addEventListener('click', function(){
            show.classList.add('show')
            showImg(images, index)
        })
    })

    
    // Button previous
    prev.onclick = function(){
        if(currentIndex > 0){
            currentIndex--
            showImg(images, currentIndex)
        }
    }

    // Button next
    next.onclick = function(){
        if(currentIndex < images.length){
            currentIndex++
            showImg(images, currentIndex)
        }
    }

}

var numberImg = 60

// Load image for the first time
loadImg('boy', numberImg)
showImage()

// Target btns
btns.forEach(element => {
    element.addEventListener('click', function () {
        currentIndex = 0
        let target = this.id
        loadImg(target, numberImg)
        showImage()
    })
});


// Close show image
// When click btn close
close.addEventListener('click', function(){
    show.classList.remove('show')
})

// When press ESC
document.addEventListener('keydown', function(e){
    if(e.keyCode == 27){
        show.classList.remove('show')
    }
})

