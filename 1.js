

var preloader = document.getElementById('icon');

//скрываю иконку вначале
preloader.classList.add("hide");

//обработчик клика по кнопке
$("#buttonStart").click(function (event) {
    preloader.classList.remove("hide");
    setTimeout(function() {
        preloader.classList.add("hide");
        window.open('secondpage.html');
    }, 5000);
    });