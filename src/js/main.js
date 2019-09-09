import {
    ShowRecipe
} from "./show-recipe";

document.querySelector('.right-recipes-block').addEventListener('click', function (event) {
    ShowRecipe(event.target)
})