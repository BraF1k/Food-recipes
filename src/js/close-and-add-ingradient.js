export function CloseIngradientBlock() {

    let blockOfIngradient;

    document.querySelector('.blog-form__form').addEventListener('click', function (e) {
        if (e.target.tagName == 'SPAN' && e.target.className.split(' ')[0] == 'ingredients-block__sandwich-btn') {
            blockOfIngradient = document.querySelectorAll('.ingredients-block');
            if (blockOfIngradient.length > 1) {
                e.target.parentNode.parentNode.remove();
            }
        }
    })
}

export function AddNewIngradientfield() {
    document.querySelector('.blog-form__form').addEventListener('keydown', function (e) {
        if (e.which == 13 && e.target.tagName == 'INPUT' && e.target.className.split(' ')[0] == 'ingredients-block__input') {

            e.target.parentNode.insertAdjacentHTML('afterend', `<!-- Bedin ingredients-block -->
                        <div class="ingredients-block ingredients-block_m-b">
                            <input type="text" placeholder="Укажите ингадиент"
                                class="ingredients-block__input ingradient">
                            <input type="number" value="0" min="0"
                                class="ingredients-block__input arrows_d-n ingredients-block_w-20-tac ingradient-count">
                            <select name="measure" class="ingredients-block__measure">
                                <option value="Грамм" selected>Грамм(-а)</option>
                                <option value="Головка">Головка(-ки/-ок)</option>
                                <option value="Кусок">Кусок(-а/-ов)</option>
                                <option value="Литр">Литр(-а/-ов)</option>
                                <option value="Миллилитр">Миллилитр(-а/-ов)</option>
                            </select>
    
                            <button type="button"
                                class="ingredients-block__btn ingredients-block_hidde-btn">
                                <span class="ingredients-block__sandwich-btn"></span>
                            </button>
                        </div>
                        <!-- End ingredients-block -->`);
        } else {
            console.log(e.target)
        }
    })
}