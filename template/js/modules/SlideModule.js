export default function SlideModule() {
    function slide() {
        let width = $(window).width();
        //console.log(width);
        if (width <= 1200 && document.querySelector('#slide-home')) {
            const swiper = document.querySelector('#slide-home');
            const sliderContainer = swiper.querySelector('.swiper-container');
            const SliderPagination = swiper.querySelector('.swiper-pagination-orange');
            const sliderPrevBtn = swiper.querySelector('.swiper-prev');
            const sliderNextBtn = swiper.querySelector('.swiper-next');
            try {
                const swiper = new Swiper(sliderContainer, {
                    speed: 1000,
                    loop: true,
                    // autoHeight: true,
                    //spaceBetween: 20,
                    autoplay: {
                        delay: 4000,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },

                    // navigation: {
                    //     nextEl: '.swiper-button-next',
                    //     prevEl: '.swiper-button-prev',
                    // },

                    breakpoints: {
                        // 320: {
                        //     spaceBetween: 50
                        // },
                        // 480: {
                        //     spaceBetween: 30
                        // },
                        // 576: {
                        //     spaceBetween: 0,

                        // }
                    }
                    // observeParents:true,
                    // observeSlideChildren: true,
                    // observer: true,
                })
            }
            catch (err) {
                console.log(err)
            }

        }
    }

    $(window).on("resize", function () {
        slide;
    });


    if (document.querySelector('#banner-slide')) {
        const swiper = document.querySelector('#banner-slide');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                spaceBetween: 20,
                slidesPerView: 1,
                // autoplay: {
                //     delay: 4000,
                // },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                breakpoints: {
                    // 320: {
                    //     spaceBetween: 50
                    // },
                    // 480: {
                    //     spaceBetween: 30
                    // },
                    // 576: {
                    //     spaceBetween: 0,

                    // }
                }
                // observeParents:true,
                // observeSlideChildren: true,
                // observer: true,
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    if (document.querySelector('#slide-three')) {
        const swiper = document.querySelector('#slide-three');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                spaceBetween: 30,
                slidesPerView: 3,
                // autoplay: {
                //     delay: 4000,
                // },
                // pagination: {
                //     el: '.swiper-pagination',
                //     clickable: true,
                // },

                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                breakpoints: {
                    320: {
                        spaceBetween: 10,
                        slidesPerView: 1,
                    },
                    576: {
                        spaceBetween: 20,
                        slidesPerView: 2,
                    },
                    1024: {
                        spaceBetween: 30,
                        slidesPerView: 3,
                    },
                }
                // observeParents:true,
                // observeSlideChildren: true,
                // observer: true,
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    if (document.querySelector('#slide-duan')) {
        const swiper = document.querySelector('#slide-duan');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                spaceBetween: 15,
                slidesPerView: 1,
                // autoplay: {
                //     delay: 4000,
                // },
                // pagination: {
                //     el: '.swiper-pagination',
                //     clickable: true,
                // },

                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                breakpoints: {
                    576: {
                        spaceBetween: 10,
                        slidesPerView: 2,
                    },
                    1024: {
                        spaceBetween: 30,
                        slidesPerView: 2,
                    },
                }
                // observeParents:true,
                // observeSlideChildren: true,
                // observer: true,
            })
        }
        catch (err) {
            console.log(err)
        }
    }
    if (document.querySelector('#slide-thuongmai')) {
        const swiper = document.querySelector('#slide-thuongmai');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                spaceBetween: 15,
                slidesPerView: 1,
                // autoplay: {
                //     delay: 4000,
                // },
                // pagination: {
                //     el: '.swiper-pagination',
                //     clickable: true,
                // },

                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                breakpoints: {
                    576: {
                        spaceBetween: 10,
                        slidesPerView: 2,
                    },
                    1024: {
                        spaceBetween: 30,
                        slidesPerView: 3,
                    },
                }
                // observeParents:true,
                // observeSlideChildren: true,
                // observer: true,
            })
        }
        catch (err) {
            console.log(err)
        }
    }
    if (document.querySelector('#slide-partner')) {
        const swiper = document.querySelector('#slide-partner');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                spaceBetween: 15,
                slidesPerView: 5,
                // autoplay: {
                //     delay: 4000,
                // },
                // pagination: {
                //     el: '.swiper-pagination',
                //     clickable: true,
                // },

                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                breakpoints: {
                    320: {
                        spaceBetween: 10,
                        slidesPerView: 2,
                    },
                    576: {
                        spaceBetween: 10,
                        slidesPerView: 3,
                    },
                    768: {
                        spaceBetween: 20,
                        slidesPerView: 4,
                    },
                    1024: {
                        spaceBetween: 30,
                        slidesPerView: 5,
                    },
                    1200:{
                        slidesPerView:5,
                        spaceBetween:30,
                    }
                }
                // observeParents:true,
                // observeSlideChildren: true,
                // observer: true,
            })
        }
        catch (err) {
            console.log(err)
        }
    }
    if (document.querySelector('#slide-product-noibat')) {
        const swiper = document.querySelector('#slide-product-noibat');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                spaceBetween: 15,
                slidesPerView: 1,
                // autoplay: {
                //     delay: 4000,
                // },
                // pagination: {
                //     el: '.swiper-pagination',
                //     clickable: true,
                // },

                navigation: {
                    nextEl: sliderNextBtn,
                    prevEl: sliderPrevBtn,
                },

                breakpoints: {
                    576: {
                        spaceBetween: 10,
                        slidesPerView: 2,
                    },
                    1024: {
                        spaceBetween: 30,
                        slidesPerView: 3,
                    },
                }
                // observeParents:true,
                // observeSlideChildren: true,
                // observer: true,
            })
        }
        catch (err) {
            console.log(err)
        }
    }
    if (document.querySelector('#slide-duan-noibat')) {
        const swiper = document.querySelector('#slide-duan-noibat');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                spaceBetween: 15,
                slidesPerView: 1,
                // autoplay: {
                //     delay: 4000,
                // },
                // pagination: {
                //     el: '.swiper-pagination',
                //     clickable: true,
                // },

                navigation: {
                    nextEl: sliderNextBtn,
                    prevEl: sliderPrevBtn,
                },

                breakpoints: {
                    576: {
                        spaceBetween: 10,
                        slidesPerView: 2,
                    },
                    1024: {
                        spaceBetween: 30,
                        slidesPerView: 3,
                    },
                }
                // observeParents:true,
                // observeSlideChildren: true,
                // observer: true,
            })
        }
        catch (err) {
            console.log(err)
        }
    }
    if (document.querySelector('#slide-customer')) {
        const swiper = document.querySelector('#slide-customer');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                spaceBetween: 15,
                slidesPerView: 2,
                // autoplay: {
                //     delay: 4000,
                // },
                // pagination: {
                //     el: '.swiper-pagination',
                //     clickable: true,
                // },

                navigation: {
                    nextEl: sliderNextBtn,
                    prevEl: sliderPrevBtn,
                },

                breakpoints: {
                    400: {
                        spaceBetween: 10,
                        slidesPerView: 3,
                    },
                    670: {
                        spaceBetween: 10,
                        slidesPerView: 4,
                    },
                    1024: {
                        spaceBetween: 30,
                        slidesPerView: 5,
                    },
                }
                // observeParents:true,
                // observeSlideChildren: true,
                // observer: true,
            })
        }
        catch (err) {
            console.log(err)
        }
    }
    if (document.querySelector('#slide-tailieu')) {
        const swiper = document.querySelector('#slide-tailieu');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                spaceBetween: 15,
                slidesPerView: 1,
                // autoplay: {
                //     delay: 4000,
                // },
                // pagination: {
                //     el: '.swiper-pagination',
                //     clickable: true,
                // },

                navigation: {
                    nextEl: sliderNextBtn,
                    prevEl: sliderPrevBtn,
                },

                breakpoints: {
                    576: {
                        spaceBetween: 30,
                        slidesPerView: 2,
                    },
                }
                // observeParents:true,
                // observeSlideChildren: true,
                // observer: true,
            })
        }
        catch (err) {
            console.log(err)
        }
    }
    if (document.querySelector('#slide-list-job')) {
        const swiper = document.querySelector('#slide-list-job');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                spaceBetween: 20,
                slidesPerView: 1,
                // autoplay: {
                //     delay: 4000,
                // },
                // pagination: {
                //     el: '.swiper-pagination',
                //     clickable: true,
                // },

                // navigation: {
                //     nextEl: '.swiper-button-next',
                //     prevEl: '.swiper-button-prev',
                // },

                breakpoints: {
                    320: {
                        spaceBetween: 10,
                        slidesPerView: 1,
                        allowTouchMove: true,
                    },
                    400: {
                        spaceBetween: 10,
                        slidesPerView: 2,
                        allowTouchMove: true,
                    },
                   
                    768: {
                        spaceBetween: 30,
                        slidesPerView: 3,
                        allowTouchMove: true,
                        
                    },
                    992: {
                        spaceBetween: 30,
                        slidesPerView: 4,
                        allowTouchMove: false,
                    },
                },
                // observeParents:true,
                // observeSlideChildren: true,
                // observer: true,
            })
        }
        catch (err) {
            console.log(err)
        }
    }
    if (document.querySelector('#slide-work')) {
        const swiper = document.querySelector('#slide-work');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                spaceBetween: 10,
                slidesPerView: 1,
                // autoplay: {
                //     delay: 4000,
                // },
                // pagination: {
                //     el: '.swiper-pagination',
                //     clickable: true,
                // },

                navigation: {
                    nextEl: sliderNextBtn,
                    prevEl: sliderPrevBtn,
                },

                // breakpoints: {
                //     320: {
                //         spaceBetween: 10,
                //         slidesPerView: 1,
                //     },
                //     400: {
                //         spaceBetween: 10,
                //         slidesPerView: 2,
                //     },
                   
                //     768: {
                //         spaceBetween: 30,
                //         slidesPerView: 3,
                        
                //     },
                //     992: {
                //         spaceBetween: 30,
                //         slidesPerView: 4,
                //         allowTouchMove: false,
                //     },
                // },
               
                // observeParents:true,
                // observeSlideChildren: true,
                // observer: true,
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}