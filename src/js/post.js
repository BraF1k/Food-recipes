//FIXME Вынести в функцию последние измекнения

let linksOfRecipe = document.getElementsByClassName('right-recipes-block__btn');

console.log(linksOfRecipe);
console.log(linksOfRecipe.length);


for (let link of linksOfRecipe) {
    link.addEventListener('click', function (event) {
        console.log(event.target)
    })
}

function madeIngredientsList() {
    let resultList = '';
    const ingredients = document.getElementsByClassName('ingredients-block');


    for (let ingredient of ingredients) {
        resultList += `<li class="ingredients-all-block-list__item">${ingredient.querySelector('.ingradient').value} - ${ingredient.querySelector('.ingradient-count').value} ${ingredient.querySelector('.ingredients-block__measure').value}</li> \n`;
    }


    return resultList;

}



export function PostRecipe() {
    const postButton = document.querySelector('.blog-form_post');
    const nameOfDish = document.querySelector('.blog-form__food-name');
    const preparationMethod = document.querySelector('.blog-form__food-method');
    let cuttedMethod = '';






    postButton.addEventListener('click', function () {


        preparationMethod.value.length > 122 ? cuttedMethod = preparationMethod.value.slice(0, 122) : cuttedMethod = preparationMethod.value;

        document.querySelector('.right-recipes-block').insertAdjacentHTML('beforebegin', `
        
        
        <div class="right-recipes-block right-recipes-block_m-b">

                            <div class="row">
                                <div class="col-md-6">
                                    <img src="src/img/blinchiki.jpg" alt="" class="right-recipes-block__img">

                                </div>
                                <div class="col-md-6">

                                    <div class="right-recipes-block__text">
                                        <header class="section-header section-header_m-b">
                                            <h3 class="section-header__title">${nameOfDish.value}</h3>
                                        </header>
                                        <p class="right-recipes-block__discribe">
                                            ${cuttedMethod} <button type="button"
                                                class="btn right-recipes-block__btn">Читать рецепт...</button></p>



                                        <div class="right-recipes-block__method right-recipes-block_display-n">
                                            <p class="right-recipes-block__discribe">
                                                ${preparationMethod.value}
                                            </p>
                                        </div>

                                        <div class="right-recipes-block__ingredients right-recipes-block_display-n">
                                            <ol class="ingredients-all-block-list">
                                                ${madeIngredientsList()}
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        
        `)

        linksOfRecipe = document.getElementsByClassName('right-recipes-block__btn');

        for (let link of linksOfRecipe) {
            link.addEventListener('click', function (event) {
                console.log(event.target)
            })
        }

        console.log(linksOfRecipe);
        console.log(linksOfRecipe.length);
    });
}