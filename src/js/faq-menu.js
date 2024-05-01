//Функции для простоты на скорую руку, выдвижная панель с текстом в разделе FAQ
//Реализовал по идентификаторам
$(document).ready(function () {

    for (let i = 1; i < 8; i++) {
        $(`#faq-slide-${i}`).click(function(event){
            $(`#faq-slide-swipe-${i}`).slideToggle("slow");
            event.preventDefault();
        });
    }

    // enable links inside toggle area
    $(".content_faq-title-slide * a").click(function(event){
        event.stopPropagation();
    });
});