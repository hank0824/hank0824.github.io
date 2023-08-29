const showPopupBtn = document.getElementById("showPopupBtn");
const overlay = document.getElementById("overlay");
const loginPopup = document.getElementById("loginPopup");
const closePopupBtn = document.getElementById("closePopupBtn");

showPopupBtn.addEventListener("click", () => {
    // overlay.style.display = "block";
    loginPopup.style.display = "block";
});

closePopupBtn.addEventListener("click", () => {
    // overlay.style.display = "none";
    loginPopup.style.display = "none";
});

jQuery(document).ready(function ($) {
    tab = $('.tabs h3 a');

    tab.on('click', function (event) {
        event.preventDefault();
        tab.removeClass('active');
        $(this).addClass('active');

        tab_content = $(this).attr('href');
        $('div[id$="tab-content"]').removeClass('active');
        $(tab_content).addClass('active');
    });
});
