export function getInformationsOfRecipe(link) {
    let nameOfRecipe = link.previousElementSibling.previousElementSibling.previousElementSibling;
    let recipeIngradients = link.previousElementSibling;
    let recipeMethod = link.previousElementSibling.previousElementSibling;
    let recipeImg = link.parentNode.parentNode.previousElementSibling.innerHTML.trim();

    console.log(link.previousElementSibling)

    document.querySelector('.full-recipe-block__btn').insertAdjacentHTML('afterend', `
        
        <div class="recipe-block recipe-block_m-t">
        <div class="container">
            <header class="section-header section-header_m-b">
                <h2 class="section-header__title">${nameOfRecipe.firstElementChild.innerHTML}</h2>
            </header>

            <!-- Begin Method -->
            <div class="method-block method-block_m-b">
                <div class="row">
                    <div class="col-md-4">
                        ${recipeImg}
                    </div>
                    <div class="col-md-8">
                        ${recipeMethod.innerHTML}
                    </div>
                </div>
            </div>
            <!-- End Method -->

            <!-- Begin Ingredients -->

            <div class="recipe-block__ingredients">
                <header class="section-header section-header_m-b">
                    <h3 class="section-header__title">Ингредиенты</h3>
                </header>

                <ol class="ingredients-all-block-list">
                    ${recipeIngradients.innerHTML}
                </ol>
            </div>

            <!-- End Ingredients -->
        </div>

    </div>

    
    `)



}


function ClearRecipeBlock () {
    let recipeBlock = document.querySelector('.full-recipe-block');

    while (recipeBlock.lastElementChild.tagName != 'BUTTON') {
        recipeBlock.lastElementChild.remove();
    }
}





export function ShowRecipe(link) {
    let blockOfRecipe = document.querySelector('.full-recipe-block');
    let overlay = document.querySelector('.overlay');
    // console.log(link.parentNode.previousElementSibling.previousElementSibling.previousElementSibling);
    if (link.tagName == 'BUTTON' && link.className.split(' ')[1] == 'right-recipes-block__btn') {
        blockOfRecipe.classList.remove("hidden");
        overlay.classList.add('overlay-show');
    }

}

export function HideRecipe() {
    document.querySelector('.full-recipe-block').classList.add("hidden");
    document.querySelector('.overlay').classList.remove('overlay-show');
    ClearRecipeBlock()
    // setTimeout(ClearRecipeBlock, 300);//На всякий случай запускать можно немного позже
}

//link.parentNode.parentNode.parentNode.previousElementSibling.innerHTML.trim() - Путь к картинке
//link.parentNode.previousElementSibling - Путь к инградиентам
//link.parentNode.previousElementSibling.previousElementSibling - Путь к методу приготовления
//link.parentNode.previousElementSibling.previousElementSibling.previousElementSibling - Путь к названию блюда