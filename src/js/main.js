/*FIXME

Если поля пустые сделать подсказку которая просит заполнить поле перед постом
Сделать так что бы при удалении инпутов с инградиентами страница не "схлопывалась"



FIXMEhard 

Сделать так чтобы появились этапы приготовления в виде цифр, тоесть как на сайте с едой "ЕДА"
Добавить загрузку картинок. (Node.js);
Сделать так что когда рицептов много, что бы они перелистывались на другую страницу > 3-рицептов на странице
 


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
    CloseIngradientBlock, AddNewIngradientfield
} from "./close-and-add-ingradient";



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

//Добавление поля для нового инградиента
AddNewIngradientfield();