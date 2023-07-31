(function($) {
    const Deadlift = {
        mockData: {},

        init: function(){
            // $(document).on("click", ".referrals-table table tbody tr", Referrals.selectReferral);
            Deadlift.intializeSwiper();
        },

        intializeSwiper: function(e) {
          const sampleWorkoutSwiper = new Swiper(".sample-workout-swiper", {
            slidesPerView: "auto",
            slidesPerView: 1,
            spaceBetween: 10,
            // Responsive breakpoints
            breakpoints: {
              // when window width is >= 576px
              576: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              // when window width is >= 1400px
              1400: {
                slidesPerView: 3,
                spaceBetween: 35
              }
            }
          });

          const programsSwiper = new Swiper(".programs-swiper", {
            slidesPerView: 1,
            spaceBetween: 20,
            // Responsive breakpoints
            breakpoints: {
              // when window width is >= 320px
              768: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 20
              },
              1400: {
                slidesPerView: 4,
                spaceBetween: 20
              }
            },
            navigation: {
              nextEl: ".programs-swiper-next",
              prevEl: ".programs-swiper-prev",
            },
          });

          const relatedExercisesSwiper = new Swiper(".related-exercises-swiper", {
            slidesPerView: "auto",
            slidesPerView: 1,
            spaceBetween: 10,
            // Responsive breakpoints
            breakpoints: {
              // when window width is >= 576px
              576: {
                slidesPerView: 2,
                spaceBetween: 20
              },
              // when window width is >= 1400px
              1400: {
                slidesPerView: 4,
                spaceBetween: 30
              }
            },
            navigation: {
              nextEl: ".related-exercises-swiper-next",
              prevEl: ".related-exercises-swiper-prev",
            },
          });
        }
    };
	Deadlift.init();
})(jQuery);