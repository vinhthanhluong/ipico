export default function FileActiveModule() {
    if ($('.header-subjects')) {

        const $subjects = $('.header-subjects');
        $(document).mouseup(function (e) {
            if (!$subjects.is(e.target) && $subjects.has(e.target).length === 0) {
                $('.header-subjects').removeClass('active');
            }
        });

        $('.subject-title').on('click', function () {
            $subjects.toggleClass('active');
        });

    }

    if ($('.box-lang')) {
        function test() {
      
            var width = $(window).width();
            if (width < 768) {
                $('.box-lang').prependTo('.header-lang-mobi');
            }else{
                $('.box-lang').prependTo('.header-lang-desktop');
            }
          
        }
       
        $(window).on('resize', function () {
            test();
        });
    }

    if ($('.box-fx')) {
        $('.box-fx .box-fx-title').on('click', function () {
            $('.box-fx').toggleClass('active');
        });
       
    }
    

    
    
    
}