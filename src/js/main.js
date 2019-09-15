//FIXME Баг когда добавляешь новый рицепт, он не появляется при клике на его ссылку в сплывающем окне 
//FIXME Нужно очищать блок при закрытии рецепта
import {
    ShowRecipe,
    HideRecipe,
    getInformationsOfRecipe
} from "./show-recipe";
import {
    PostRecipe, linksOfRecipe
} from "./post";
import {
    CloseIngradientBlock
} from "./close-ingradient";



document.querySelector('.wraper-right').addEventListener('click', function (event) {
    ShowRecipe(event.target);
    getInformationsOfRecipe(event.target.parentNode);
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
