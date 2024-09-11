document.addEventListener('DOMContentLoaded', function () {

    new WOW({animateClass: 'animate__animated',}).init();

    let menu = document.getElementById('menu');
    let about = document.getElementById('about');
    let collection = document.getElementById('collection');

    let btn1 = document.getElementById('m-1');
    let btn2 = document.getElementById('m-2');
    let btn3 = document.getElementById('m-3');
    let btn4 = document.getElementById('m-4');
    let btnHero = document.getElementById('btn-hero');
    let btnFooter = document.getElementById('btn-footer');

    let btnOrder = document.getElementById('btn-order');
    let reservedHookah = document.getElementById('reserved-hookah');
    let ph1 = document.getElementById('ph1');

    function handleButtonClickOne() {
        menu.scrollIntoView({block: 'center', behavior: 'smooth'});
    }

    function handleButtonClickTwo() {
        about.scrollIntoView({block: 'center', behavior: 'smooth'});
    }

    function handleButtonClickThree() {
        collection.scrollIntoView({block: 'center', behavior: 'smooth'});
    }

    function handleButtonClickBtnOrder() {
        reservedHookah.scrollIntoView({block: 'center', behavior: 'smooth'});
    }

    function handleButtonClickBtnFour() {
        ph1.scrollIntoView({block: 'center', behavior: 'smooth'});
    }

    let itemMenuButtons = document.querySelectorAll('.item-menu');
    let ourMenu = document.getElementById('our-menu');

    itemMenuButtons.forEach(button => {
        button.addEventListener('click', () => {
            ourMenu.scrollIntoView({behavior: 'smooth', block: 'start'});
        });
    });

    btn1.addEventListener("click", handleButtonClickTwo);
    btn2.addEventListener("click", handleButtonClickOne);
    btn3.addEventListener("click", handleButtonClickThree);
    btnHero.addEventListener("click", handleButtonClickBtnOrder);
    btnOrder.addEventListener("click", handleButtonClickBtnOrder);
    btnFooter.addEventListener("click", handleButtonClickBtnOrder);
    btn4.addEventListener("click", handleButtonClickBtnFour);

    let slider = document.querySelector('.slider');
    let prevButton = document.querySelector('.prev-button');
    let nextButton = document.querySelector('.next-button');
    let slides = Array.from(slider.querySelectorAll('img'));
    let slideCount = slides.length;
    let slideIndex = 0;

    function slide() {
        let slideOffset;

        if (window.innerWidth >= 1201) {
            slideOffset = -slideIndex * 410;
        } else if (window.innerWidth >= 768 && window.innerWidth <= 1200) {
            slideOffset = -slideIndex * 346.5;
        } else {
            slideOffset = -slideIndex * 320;
        }

        slider.style.transform = `translateX(${slideOffset}px)`;
    }

    prevButton.addEventListener('click', () => {
        if (window.innerWidth >= 1201) {
            slideIndex = (slideIndex - 3 + slideCount) % slideCount;
        } else if (window.innerWidth >= 768 && window.innerWidth <= 1200) {
            slideIndex = (slideIndex - 2 + slideCount) % slideCount;
        } else {
            slideIndex = (slideIndex - 1 + slideCount) % slideCount;
        }

        slide();
    });

    nextButton.addEventListener('click', () => {
        if (window.innerWidth >= 1201) {
            slideIndex = (slideIndex + 3) % slideCount;
        } else if (window.innerWidth >= 768 && window.innerWidth <= 1200) {
            slideIndex = (slideIndex + 2) % slideCount;
        } else {
            slideIndex = (slideIndex + 1) % slideCount;
        }

        slide();
    });
    slide();

    let menuItems = document.querySelectorAll('li');
    menuItems[4].classList.add('active');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            menuItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });

    let dots = document.querySelectorAll('.dd');
    let dot = document.querySelectorAll('.dot');
    let dotGallery = document.querySelectorAll('.dot-gallery');

    dots[0].classList.add('activeDots');

    dots.forEach(item => {
        item.addEventListener('click', () => {
            dots.forEach(i => i.classList.remove('activeDots'));
            item.classList.add('activeDots');
        });
    });

    dot.forEach(item => {
        item.addEventListener('click', () => {
            dot.forEach(i => i.classList.remove('activeDots'));
            item.classList.add('activeDots');
        });
    });

    dotGallery.forEach(item => {
        item.addEventListener('click', () => {
            dotGallery.forEach(i => i.classList.remove('activeDots'));
            item.classList.add('activeDots');
        });
    });

    let dotsSlide = [];
    let sliders = [];

    for (let i = 1; i <= 6; i++) {
        dotsSlide.push(document.getElementById(`slide-dots${i}`));
        sliders.push(document.getElementById(`slider${i}`));
    }

    if (window.innerWidth <= 1024) {
        dotsSlide.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                sliders.forEach((slider, sliderIndex) => {
                    slider.style.display = (index === sliderIndex) ? 'block' : 'none';
                });
            });
        });
    }

    let promotionsDotsBlocks = [];
    let promotionsImageBlocks = [];

    document.querySelectorAll('.promotions-item').forEach((item) => {
        promotionsImageBlocks.push(item);
    });

    for (let i = 1; i <= 3; i++) {
        promotionsDotsBlocks.push(document.getElementById(`promotions-dots${i}`));
    }

    promotionsDotsBlocks[0].classList.add('activeDots');

    if (window.innerWidth <= 1024) {
        promotionsDotsBlocks.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                promotionsImageBlocks.forEach((imageBlock, imageIndex) => {
                    imageBlock.style.display = (index === imageIndex) ? 'block' : 'none';
                });
            });
        });
    }

    let galleyDotsBlocks = [];
    let galleyImageBlocks = [];

    dotGallery.forEach((item) => {
        galleyDotsBlocks.push(item);
    });

    document.querySelectorAll('.gallery-image').forEach((item) => {
        galleyImageBlocks.push(item);
    });

    galleyDotsBlocks[0].classList.add('activeDots');

    if (window.innerWidth <= 1024) {
        galleyDotsBlocks.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                galleyImageBlocks.forEach((imageBlock, imageIndex) => {
                    imageBlock.style.display = (index === imageIndex) ? 'block' : 'none';
                });
            });
        });
    }


    baguetteBox.run('.gallery', {
        animation: 'fadeIn',
        noScrollbars: true,
        fullScreen: true
    });

    let items = [
        {button: 'hookah', block: 'hookah-block'},
        {button: 'snacks', block: 'snacks-hookah'},
        {button: 'tea', block: 'tea-hookah'},
        {button: 'bar', block: 'bar-hookah'},
    ];

    function hideAllBlocks() {
        items.forEach(item => {
            let block = document.getElementById(item.block);
            if (block) {
                block.style.display = 'none';
            }
        });
    }

    items.forEach(item => {
        let button = document.getElementById(item.button);
        let block = document.getElementById(item.block);

        if (button && block) {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                hideAllBlocks(); // Скрытие всех блоков
                block.style.display = 'grid'; // Показать текущий блок
            });
        }
    });


    $('#btn-order').click(function () {
        let name = $('#input-name');
        let phone = $('#input-phone');
        let hasError = false;
        let loader = $('.loader-block');

        $('.error-input').hide();

        if (!name.val()) {
            name.next().show();
            name.css('border-color', 'red');
            hasError = true;
        } else if (name.val()) {
            name.css('border-color', 'rgb(98, 36, 223)');
        }

        if (!phone.val()) {
            phone.next().show();
            phone.css('border-color', 'red');
            hasError = true;
        } else if (phone.val()) {
            phone.css('border-color', 'rgb(98, 36, 223)');
        }

        if (!hasError) {
            loader.css('display', 'flex');

            $.ajax({
                method: "POST",
                url: "https://testologia.ru/checkout",
                data: {name: name.val(), phone: phone.val()}
            })
                .done(function (msg) {
                    loader.hide();
                    if (msg.success) {
                        console.log(`Всё прошло успешно:`);
                        console.log(msg);

                        orderBlock.css('display', 'none');
                        orderH2.css('display', 'none');
                        hideOrderBlock.css('text-align', 'center');
                        hideOrderBlock.css('display', 'block');
                        orderP.css('paddingLeft', '62px');
                    } else {
                        console.log(`Не получены данные:`);
                        console.log(msg);

                        alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ');
                        document.getElementById('input-name').value = '';
                        document.getElementById('input-phone').value = '';

                    }
                });
        }

        let hideOrderBlock = $('.orders__hide-block');
        let orderBlock = $('#order-block');
        let orderH2 = $('#h2-order');
        let orderP = $('#reserved-hookah-block__p');
    })

    if (window.innerWidth <= 576) {
        let headerMenu = document.getElementById('header__menu');
        let burger = document.getElementById('burger-menu');
        let close = document.getElementById('close');

        burger.onclick = function () {
            headerMenu.style.display = 'flex';
            close.style.display = 'flex';
        }

        headerMenu.onclick = function (event) {
            if (event.target !== burger) {
                headerMenu.style.display = 'none';
                close.style.display = 'none';
            }
        }

        close.onclick = function () {
            close.style.display = 'none';
            headerMenu.style.display = 'none';
        }
    }

    $(function(){
        $("#input-phone").mask("+7(999) 999-9999");
    });

    function init(){
        const myMap = new ymaps.Map("map", {
            center: [53.420683, 49.535395],
            zoom: 16
        });

        const myPlacemark = new ymaps.Placemark([53.420683, 49.535395], {
            balloonContent: 'Иван может кальянчика?',
            iconContent: '<span style="color:#6224df; font-weight:bold">LOUNGE BAR</span>' + ' кальяная'
        }, {
            balloonPane: 'outerBalloon',
            preset: 'islands#blueStretchyIcon'
        });
        myMap.geoObjects.add(myPlacemark);

    }
    ymaps.ready(init);
});