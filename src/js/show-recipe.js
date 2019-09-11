export function ShowRecipe (link) {
    let blockOfRecipe = document.querySelector('.full-recipe-block');
    let overlay = document.querySelector('.overlay');
    if (link.tagName == 'A' && link.className.split(' ')[1] == 'right-recipes-block__link') {
        blockOfRecipe.classList.remove("hidden");
        overlay.classList.add('overlay-show');
    }

}

export function HideRecipe () {
    document.querySelector('.full-recipe-block').classList.add("hidden");
    document.querySelector('.overlay').classList.remove('overlay-show');
}
