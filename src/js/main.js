/*FIXME Нужно очищать блок при закрытии рецепта;
При клике кнопки Enter должно появлятся новое окошко для вписывания нового инградиента.
Если окошко с инградиентом пустое это не должно отображатся на всём рицепте при его публикации.
Так же создать подсказки или сделать все поля с обязательным вводом данных


FIXMEhard 

Сделать так чтобы появились этапы приготовления в виде цифр, тоесть как на сайте с едой "ЕДА"

 */

import {
    ShowRecipe,
    HideRecipe,
    getInformationsOfRecipe
} from "./show-recipe";
import {
    PostRecipe
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