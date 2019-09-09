export function ShowRecipe (link) {
    let blockOfRecipe = document.querySelector('.full-recipe-block');
    if (link.tagName == 'A' && link.className.split(' ')[1] == 'right-recipes-block__link') {
        blockOfRecipe.classList.remove("hidden");
    }

}

