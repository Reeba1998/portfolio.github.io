


// $(document).ready(function() {
//     var url = $("#Geeks3").attr('src');
//     $("#exampleModal").on('hide.bs.modal', function() {
//         $("#Geeks3").attr('src', '');
//     });
//     $("exampleModal").on('show.bs.modal', function() {
//         $("#Geeks3").attr('src', url);
//     });
// });




$('.counters').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});


const btnlist=document.querySelectorAll('.b');

btnlist.forEach(btnl=>{
    btnl.addEventListener('click',()=>{
       document.querySelector('.special')?.classList.remove('special');
       $("a.active").removeClass('active');
        btnl.classList.add('special');
    });
});






