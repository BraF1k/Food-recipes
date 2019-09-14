function getInformationsOfRecipe () {

}




export function ShowRecipe (link) {
    let blockOfRecipe = document.querySelector('.full-recipe-block');
    let overlay = document.querySelector('.overlay');
    console.log(link.parentNode.previousElementSibling.previousElementSibling);
    if (link.tagName == 'BUTTON' && link.className.split(' ')[1] == 'right-recipes-block__btn') {
        blockOfRecipe.classList.remove("hidden");
        overlay.classList.add('overlay-show');
    }

}

export function HideRecipe () {
    document.querySelector('.full-recipe-block').classList.add("hidden");
    document.querySelector('.overlay').classList.remove('overlay-show');
}