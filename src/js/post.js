export function PostRecipe () {
    const postButton = document.querySelector('.blog-form_post');
    const nameOfDish = document.querySelector('.blog-form__food-name');
    const preparationMethod = document.querySelector('.blog-form__food-method');
    const foodIngredients = document.querySelector('.blog-form__food-ingredients');
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
                                    ${cuttedMethod}
                                    <a href="#" class="link right-recipes-block__link">Читать рецепт...</a></p>



                                    <div class="right-recipes-block__method right-recipes-block_display-n">
                                        <p class="right-recipes-block__discribe">
                                            ${foodIngredients.value}
                                        </p>
                                    </div>

                                    <div class="right-recipes-block__ingredients right-recipes-block_display-n"></div>
                                </div>
                            </div>
                        </div>
                    </div>
        `)
    });
}