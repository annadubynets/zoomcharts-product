//= ../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js
//= ../../node_modules/jquery/dist/jquery.min.js
//= ../../node_modules/slick-carousel/slick/slick.js

$('.objects-carousel').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.bundle-carousel').slick({
    dots: false,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 9,
    slidesToScroll: 9,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        }
    ]
});

function setupGetItNowBanner() {
    const banner = document.querySelector('.get-it-now-banner');
    const targetSection = document.querySelector('.get-it-now-section');
    if (!banner || !targetSection) return;

    const targetSectionPosOnScreen = targetSection.getBoundingClientRect();

    /**
     * Shows the banner when a page scrolled to the target section
     */
    const updateBannerState = function() {
        const bottomOfTargetSection = $(targetSection).offset().top + targetSectionPosOnScreen.height;
        banner.classList.toggle("d-none", $(window).scrollTop() < bottomOfTargetSection);
    }

    $(window).on("scroll", function() {
        updateBannerState();
    });

    updateBannerState();

    // we also need to hide a banner when navbar menu gets opened on mobile
    $('#navbarCollapse').on('hidden.bs.collapse', function () {
        $('.top-navbar').removeClass('menu-opened');
    })

    $('#navbarCollapse').on('shown.bs.collapse', function () {
        $('.top-navbar').addClass('menu-opened');
    })
}

$(function() {
    setupGetItNowBanner();
});