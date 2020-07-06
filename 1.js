

var preloader = document.getElementById('icon');

//скрываю иконку вначале
preloader.classList.add("hide");

//обработчик клика по кнопке
/*$("#buttonStart").click(function (event) {
    preloader.classList.remove("hide");
    setTimeout(function() {
        preloader.classList.add("hide");
        window.open('secondpage.html');
    }, 5000);
    });*/

	var preloader = document.getElementById('icon');

	// нет необходимости если ты скроешь ее прямо в html'е
	// скрываю иконку вначале
	// preloader.classList.add("hide");
	
	//обработчик клика по кнопке
	$("#buttonStart").click(function (event) {
		preloader.classList.remove("hide");
	
		new Promise(function(resolve, reject)
		{
			setTimeout(() => {
				console.log("async request")
				for (var i = 0; i < 100000; i++) {
					// логирую в консоль для прерывания
					console.log(i);
				}
				resolve(1);
			})
		}).then(function() {
			window.open('secondpage.html');
		  	console.log("Going to the next page"); 
		});
		
		console.log("Button click is finished");
	});