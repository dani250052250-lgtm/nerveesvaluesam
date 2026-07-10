// Nervees Values
// Main Script


console.log("Nervees Values loaded 🌙");


// Поиск (пока тестовый)

const search = document.querySelector(".search-box input");


search.addEventListener("input", function () {

    let text = search.value.toLowerCase();


    if (text.length > 0) {

        console.log("Searching:", text);

    }

});



// Кнопка калькулятора


const calculatorButton = document.querySelector(".calculator");


calculatorButton.addEventListener("click", function(){

    alert(
        "⚖️ Trade Calculator\n\nComing soon!"
    );

});
