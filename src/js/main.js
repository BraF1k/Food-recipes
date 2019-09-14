import {
    ShowRecipe,
    HideRecipe
} from "./show-recipe";
import {
    PostRecipe, linksOfRecipe
} from "./post";
import {
    CloseIngradientBlock
} from "./close-ingradient";



document.querySelector('.wraper-right').addEventListener('click', function (event) {
    ShowRecipe(event.target);
})

document.querySelector('.full-recipe-block_close-btn').addEventListener('click', function () {
    HideRecipe();
});

document.querySelector('.overlay').addEventListener('click', function () {
    HideRecipe();
});

// Пост рицепта
PostRecipe();
// Скрытие одного из инградиентов
CloseIngradientBlock();
