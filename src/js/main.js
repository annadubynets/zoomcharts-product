//= ../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js
//= ../../node_modules/jquery/dist/jquery.min.js
//= ../../node_modules/slick-carousel/slick/slick.js
//= ../../node_modules/bootstrap-select/dist/js/bootstrap-select.min.js

$(function() {
    setupGetItNowBanner();
    setupNavSearchForm();
    setupTimelineInteractionsSwitcher();
    setupFeedbackSection();
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
    $('#navbarCollapse').on('hidden.bs.collapse', function() {
        $('body').removeClass('menu-opened');
    })

    $('#navbarCollapse').on('shown.bs.collapse', function() {
        $('body').addClass('menu-opened');
    })
}

function setupNavSearchForm() {
    const navMenuWrapper = document.querySelector(".nav-menu-wrapper");
    if (!navMenuWrapper) return;

    const togglerButton = navMenuWrapper.querySelector('.search-form-toggler');
    if (!togglerButton) return;

    const btnSearchCancel = navMenuWrapper.querySelector('.btn-search-cancel');
    if (!btnSearchCancel) return;

    const searchInput = navMenuWrapper.querySelector('input[type="search"]');
    if (!searchInput) return;

    togglerButton.addEventListener('click', function(e) {
        e.preventDefault();
        navMenuWrapper.classList.toggle('search-active');
    });

    btnSearchCancel.addEventListener('click', function(e) {
        e.preventDefault();
        searchInput.value = "";
        navMenuWrapper.classList.toggle('search-active');
    })
}

function setupTimelineInteractionsSwitcher() {
    $('.timeline-interactions-switcher').on('changed.bs.select', function(e, clickedIndex, isSelected) {
        const selectorInput = document.querySelector('select.timeline-interactions-switcher');
        if (!isSelected) return;

        const option = selectorInput.options[clickedIndex];
        if (option) {
            const targetTabSelector = option.dataset.bsTarget;
            if (!targetTabSelector) return;
            const targetTabEl = document.querySelector('button[data-bs-target="' + targetTabSelector + '"]');
            (new bootstrap.Tab(targetTabEl)).show();
        }
    })
}

function setupFeedbackSection() {
    const sections = document.querySelectorAll('.feedback-section');
    sections.forEach(function(section) {
        const yesBtn = section.querySelector('.btn-yes');
        const noBtn = section.querySelector('.btn-no');
        const buttonsBlock = section.querySelector('.feedback-buttons');
        const yesFeedback = section.querySelector('.yes-feedback');
        const noFeedback = section.querySelector('.no-feedback');

        function processFeedbackBtnClick(wasFeedbackPositive) {
            // TODO: do ajax request here and submit the value to the server

            buttonsBlock.classList.add('d-none');
            if (wasFeedbackPositive) {
                yesFeedback.classList.remove('d-none');
            } else {
                noFeedback.classList.remove('d-none');
            }
        }

        yesBtn.addEventListener('click', function(e) {
            e.preventDefault();
            processFeedbackBtnClick(true);
        });

        noBtn.addEventListener('click', function(e) {
            e.preventDefault();
            processFeedbackBtnClick(false);
        })
    })
}


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
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 767,
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
    infinite: true,
    speed: 300,
    slidesToShow: 9,
    slidesToScroll: 1,
    focusOnSelect: true,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        }
    ]
});

setupCarouselWithDetails('.bundle-carousel', '.visual-details', '.visual-detail');

function setupCarouselWithDetails(carouselSelector, detailsSelector, detailSelector) {

    function showSlideDetails(type) {
        $(detailsSelector + ' ' + detailSelector).addClass('d-none').removeClass('fade-in-animation');

        $(detailsSelector + ' ' + detailSelector + '[data-type="' + type + '"]').removeClass('d-none').addClass('fade-in-animation');
    }

    $(carouselSelector).on('afterChange', function(e, slider, currentSlide) {
        const type = $(slider.$slides.get(currentSlide)).find('.data-slide').data('type');
        showSlideDetails(type);
    })

    $(carouselSelector).on('init,reInit,breakpoint', function(e, slick) {
        const slideIndex = $(carouselSelector).slick('slickCurrentSlide');
        const type = $(slider.$slides.get(slideIndex)).find('.data-slide').data('type');
        showSlideDetails(type);
    });
}

$('.customer-carousel').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 9,
    slidesToScroll: 9,
    variableWidth: true,
    focusOnSelect: true,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        }
    ]
});

<<
<< << < HEAD
setupCarouselWithDetails('.customer-carousel', '.customer-story-details', '.story-detail');