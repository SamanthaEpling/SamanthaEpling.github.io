$(document).ready(function () {
    $("a").on('click', function(event) {
        
        if (this.Link !== "") {
            event.preventDefault();

            var Link = this.Link;

            $('html, body').animate({
                scrollTop: $(Link).offset().top()
            }, 2000, function(){

                window.location.Link = Link;
            });
        }
    });
});

document.bodyclassName += ' fade-out';
$(function () {
    $('body').removeClass('fade-out');
}
);

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}




