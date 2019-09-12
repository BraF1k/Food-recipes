
export function CloseIngradientBlock() {

    let blockOfIngradient;    
    let closeBtn = document.querySelectorAll('.ingredients-block__sandwich-btn');
    // let parentNodeOfBtn = closeBtn.parentNode;


    for (let btn of closeBtn) {
        btn.addEventListener('click', function () {
            blockOfIngradient = document.querySelectorAll('.ingredients-block');  
            if (blockOfIngradient.length > 1) {
                btn.parentNode.parentNode.remove();
            }
        })
    }
}

