


// $(document).ready(function() {
//     var url = $("#Geeks3").attr('src');
//     $("#exampleModal").on('hide.bs.modal', function() {
//         $("#Geeks3").attr('src', '');
//     });
//     $("exampleModal").on('show.bs.modal', function() {
//         $("#Geeks3").attr('src', url);
//     });
// });


// const btn = document.getElementsById('icon-2');

// btn.addEventListener('click', function onClick() {
  
// btn.style.position="absolute";
// btn.style.width='4px';
// btn.style.background='#407BFF';

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

