fetch('https://api.adviceslip.com/advice').then(function (response) {
	return response.json();
}).then(function (data) {
	var advice = data.slip.advice;

    const content = document.querySelector(".advice");
    content.innerText = advice;

    var count = String(Math.floor(Math.random() * 10001));
    const number = document.querySelector(".count");
    number.innerText = count
});
