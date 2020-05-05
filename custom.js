//Display the Total Support first and opened in PDP
function displayServiceTopPDP() {
    // var tsheight = 0;
    // $('.acc-blockServices .acc-content .checkbox label').each(function(index) {
    // if ($(this).text().indexOf('ετούς τεχνικής υποστήριξης') > -1 || $(this).text().indexOf('ετούς προνομιακής τεχνικής υποστήριξης') > -1) {
    // $('head').append('<style>.acc-content .service-price{display:block;}del{color:rgba(255, 0, 0, 0.5);text-decoration: none;position: relative;} del::before {content: " ";display: block;width: 100%;border-top: 2px solid rgba(255, 0, 0, 0.8);height: 12px;position: absolute;bottom: 0;left: 0;transform: rotate(-7deg); </style>');
    // $(this).parent().insertBefore('.acc-blockServices .acc-content .checkbox:first-child');
    // $('.acc-blockServices .acc-content .checkbox:first-child').addClass('ts-' + index);
    // var tsprice = $('.ts-' + index + ' .service-price').html().replace('<sub>€ </sub>', '');
    // $('.ts-' + index + ' .service-price').html('<del><sub>€ </sub>' + parseFloat(tsprice / 0.7).toFixed(2) + '</del><sub> - € </sub>' + tsprice);
    // $('.acc-blockServices:not(.open) .acc-content.lightTxt').css('overflow', 'hidden').css('display', 'block');
    // tsheight += $('.ts-' + index).height();
    // }

    // });


    // $('.acc-blockServices .acc-content.lightTxt').css('height', tsheight);

    //var ts = ['990817', '990816', '990815', '990814', '990813', '990812', '990811', '990810', '990809', '990808', '990807', '990805', '990804', '990803', '990802', '990801', '990806', '990818'];
    //var ts = ['990848', '990849', '990850', '990851', '990852', '990853', '990854', '990855', '990856', '990857', '990858', '990859', '990860', '990861', '990862', '990863', '990864'];
    var ts = ['990807', '990808', '990809', '990810', '990811', '990812', '990813', '990814', '990815', '990816', '990817', '990818'];

    $('.acc-blockServices > .checkbox .serviceSKU').each(function(index) {
        var currentSKU = $(this).text();
        currentSKU = currentSKU.replace(' ', '');
        if (ts.indexOf(currentSKU) > -1) {
            $('head').append('<style>.acc-content .service-price{display:block;}del{color:rgba(255, 0, 0, 0.5);text-decoration: none;position: relative;} del::before {content: " ";display: block;width: 100%;border-top: 2px solid rgba(255, 0, 0, 0.8);height: 12px;position: absolute;bottom: 0;left: 0;transform: rotate(-7deg); </style>');
            $(this).parent().addClass('current');
            var tsprice = $(this).parent().find('.service-price').html().replace('<sub>€ </sub>', '');
            $('.current .service-price').html('<del><sub>€ </sub>' + parseFloat(tsprice / 0.75).toFixed(2) + '</del><sub> - € </sub>' + tsprice);
        }

    });


}
//Display the Total Support promo in basket page
function displayServiceBasketMsg() {
    $('<div id="totalsupport-bf"></div>').insertBefore('.headerBlock');
    $('head').append('<style>#totalsupport-bf{	background:url(https://kotsovolos.blob.core.windows.net/promos/black-friday/2019/creator/assets/img/fasa-preh-basket-desk.png); background-repeat:no-repeat;background-size:contain;background-position:center; display:block; max-width:100%;	width:100%;	height:140px;	margin-top: 20px; margin-bottom: 30px;}@media (max-width: 768px) {#totalsupport-bf{background:url(https://kotsovolos.blob.core.windows.net/promos/black-friday/2019/creator/assets/img/fasa-preh-basket-mob.png) no-repeat center center; background-repeat:no-repeat;background-size:contain;background-position:center;display:block;max-width:100%;width:100%;height:200px;margin-top: 20px;  margin-bottom: 30px;}}</style>');
}

$(window).on("load", function() {

    const url = window.location.href;

    if (url.indexOf('https://www.kotsovolos.gr/') > -1) {

        /* Remove C@S from Product list and Product Page */
        /* $('.nosto_element .availability').each(function() {
            let cas = $(this).find(".icon");
            cas.each(function() {
                if ($(this).hasClass('icon-store_display')) {
                    $(this).closest('.availability__row').remove();
                }
            });
        });*/
    }

    checkOtherFilters(url);
    checkPrice(url);
    /*------ HOTFIX FOR ACCORDIONS------*/
    /* $('.open-acc').off('click');

     let accOpening = false;
     $('.open-acc').on('click', function() {

         let _this = $(this);
         let _block = _this.parents('.acc-block').first();


         //if filter on mobile
         if (_this.parents('.filters.open').length > 0) {
             _block.addClass("mobOpen");
             _this.parents('.filters').animate({ scrollTop: 0 }, 300);
             _this.parents('.filters').addClass("level2_open");
             return;
         } else {
             _this.parents('.filters').removeClass("level2_open");
         }

         if (accOpening == true) {
             return false;
         }
         accActions(_block);
     });

     $('.open-acc').on('click', ".tooltipBtn", function(e) {
         e.preventDefault();
     });

     $('.mobOnly .open-acc').on('click', function() {
         let _this = $(this);
         let _block = _this.parents('.acc-block').first();

         _block.find(".more").show();
         _block.find('.showMore .moreText').hide();
         _block.find('.showMore .lessText').show();


     });

     function accActions(actAcc) {
         accOpening = true;




         if (actAcc.hasClass('open')) {
             actAcc.find('.checkbox.open-acc input').prop('checked', false);
             actAcc.find('.acc-content').slideUp(200, function() {
                 actAcc.removeClass('open');
                 $(this).removeAttr('style');
                 accOpening = false;
             });
         } else {
             $(".storeDetails .acc-block li").removeAttr('style');
             $(".storeDetails .acc-content").removeAttr('style');
             actAcc.find('.checkbox.open-acc input').prop('checked', true);
             actAcc.addClass('open');
             actAcc.find('.acc-content').slideDown(200, function() {

                 accOpening = false;
             });
         }
     }
     /*------------*/

    //404 RELOAD FIX
    /* var title = document.getElementsByTagName("title")[0].innerHTML;
    if ( title == '404 - Η Σελίδα δεν βρέθηκε - Kotsovolos.gr'){
     if(document.URL.indexOf("#reload")==-1){
     	 	document.getElementById('custom404').style.visibility = 'hidden';
     		url = document.URL+"#reload";
    	    location = "#reload";
    	    location.reload(true);
    	    
    	}
    } */
    //404 RELOAD FIX

    //Check if nosto element is vissibile in PDP
    if ($('.productPage').length) {
        //Remove Nosto and keep only swogo
        NostoElementReorder('#swogo-bundle-0 .swogo-bundle.swogo-template-noCheckbox', function(el) {
            // Element is ready to use.
            $('#productpage-nosto-1').remove();
            console.log("Swogo loaded");
        });


        //displayServiceTopPDP
        displayServiceTopPDP();
    }


    // Remove a SubCategory from a Parent Category from the Menu
    $("#computing .megamenuWrap > ul > li > div > a").each(function(index) { if ($(this).text().trim() == "Digital Signage") { $(this).closest("li").remove(); } }); //Digital Signage

    var isMobile = false; //initiate as false
    // device detection
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        isMobile = true;
    }

    $(window).resize(function() {

        if ($(window).width() < 1024) {
            $(".headerBtm .moreLinks .fav a").empty();
        } else {
            $(".headerBtm .moreLinks .fav a").replaceWith('<a class="telLink" href="tel: 00302102899999"><span>210 28 99 999<span></span></span></a>');
        }
    });
    /* Product Page Fixes Ends - End */
});

function GAPushTriggerResultCount() {
    const searchedTerms = JSON.parse(window.sessionStorage.getItem('searchedTerms')) || [];
    const searchTerm = getUrlParameter('searchTerm').toLowerCase();

    // if( !searchedTerms.includes(searchTerm)){

    dataLayer.push({
        'event': 'searchResults',
        'numSearchResults': $('.total').text().trim().split(' ')[0].replace('.', '') || 0
    });

    //     searchedTerms.push(searchTerm);
    //     window.sessionStorage.setItem('searchedTerms', JSON.stringify(searchedTerms));
    // }
}


var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

function parsePrice(element) {
    const price = parseFloat($(element).clone().find('sub').remove().end().text() || 0)
    return price;
}

$(function() {

    const locationHref = window.location.href;

    if (locationHref == "https://www.kotsovolos.gr/contact") {
        window.location = "https://www.kotsovolos.gr/Contact";
    }

    if (locationHref == "https://www.kotsovolos.gr/Contact") {
        // Options for the observer (which mutations to observe)
        const config = { attributes: true, childList: true, subtree: true };

        // Callback function to execute when mutations are observed
        const callback = function(mutationsList, observer) {
            // Use traditional 'for loops' for IE 11
            for (let mutation of mutationsList) {
                if (mutation.type === 'childList') {
                    //console.log('A child node has been added or removed.');
                } else if (mutation.type === 'attributes') {
                    //console.log('The ' + mutation.attributeName + ' attribute was modified.');
                    if (mutation.attributeName == 'style') {
                        $("#contactForm")[0].reset();
                        $("#contactForm .contactFormFields").addClass('disabled');
                        $(".contact_form").hide();
                        $('.notification.alert.success').css({ "margin-bottom": "60px" });
                    }
                }
            }
        };

        // Select the node that will be observed for mutations
        const targetNode = document.querySelector('.notification.alert.success');

        // Create an observer instance linked to the callback function
        const AjaxContactForm = new MutationObserver(callback);

        // Start observing the target node for configured mutations
        AjaxContactForm.observe(targetNode, config);
    }


    const hostName = 'https://' + location.host;
    const storeId = '10151';
    const catalogId = '10551';
    const langId = '-24';
    const calculationUsage = '-1,-2,-3,-4,-5,-6,-7&check: *n';
    const basketUrl = hostName + '/BasketDisplay?catalogId=' + catalogId + '&langId=' + langId + '&storeId=' + storeId + '';
    const orderId = $('input[name=orderId]').val();
    const authToken = encodeURIComponent($('#csrf_authToken').attr('value'));
    const recalculateBasket = hostName + '/wcs/shop/RESTOrderCalculate?catalogId=' + catalogId + '&langId=' + langId + '&storeId=' + storeId + '&calculationUsageId=-1&calculationUsageId=-2&calculationUsageId=-3&calculationUsageId=-4&calculationUsageId=-5&calculationUsageId=-6&calculationUsageId=-7';

    let url = hostName + '/wcs/shop/AjaxRESTOrderItemUpdate?catalogId=' + catalogId + '&langId=' + langId + '&storeId=' + storeId + '&orderId=' + orderId + '&authToken=' + authToken + '';
    let giftCards = [];

    /* Check for e-GiftCards */
    if (hostName == "https://www.kotsovolos.gr") {
        giftCards = ['211397', '211489', '211398', '211399', '211490', '211400', '211401', '211402', '211403', '211404', '211405', '211406', '211407', '211408', '211409'];
    } else if (hostName == "https://store.kotstagelive.stage.kot.synaigy-cloud.net" || hostName == "https://stage.kotsovolos.gr") {
        giftCards = ['169707', '169706', '211397', '211489', '211398', '211399', '211490', '211400', '211401', '211402', '211403', '211404', '211405', '211406', '211407', '211408', '211409'];

    } else if (hostName == "https://store.kottestlive.test.kot.synaigy-cloud.net") {
        giftCards = ['169707', '169706'];
    }

    /* Read Session Storage */
    const sessionStorageValue = function sessionStorageValue(key) {
        return {
            get: function get() {
                return JSON.parse(sessionStorage.getItem(key));
            },
            set: function set(value) {
                return sessionStorage.setItem(key, JSON.stringify(value));
            },
            remove: function remove() {
                return sessionStorage.removeItem(key);
            }
        };
    };

    /*if ($('.productPage').length > 0) {
        let productSKU = $('.prMainInner .prP_title .prCode').text();
        if (giftCards.includes(productSKU)) {
            window.location = hostName + '/pages/e-giftcard';
        }
    }*/

    if ($("main").data("pagetype") == "search") {
        $(".mainContent .product").each(function() {
            let productSKU = $(this).find('.prCode').text();
            if (giftCards.includes(productSKU)) {
                $(this).find(".availability").remove();
                $(this).find(".addItemToCartBtn").remove();
                $(this).find(".top").css({ "min-height": "170px" });
            }
        });
    }

    /* Check for e-GiftCards */
    if (location.href.indexOf('BasketDisplay') > 0) {

        let orderItemCardIds = [];
        let orderItemOtherProductIds = [];

        $('.basketCnt.basketRow.item').each(function() {
            let productSKU = $(this).find('.prodCell .product .desc .code').text();
            if (giftCards.includes(productSKU)) {
                orderItemCardIds.push($(this).find('.orderItemIds').val());
            } else {
                orderItemOtherProductIds.push($(this).find('.orderItemIds').val());
            }
        });

        //console.log(orderItemCardIds);
        //console.log(orderItemOtherProductIds);

        let j = 1;
        for (var i = 0; i < orderItemCardIds.length; i++) {
            url = url.concat('&quantity_' + j + '=0&orderItemId_' + j + '=' + orderItemCardIds[i]);
            j++;
        }

        if (orderItemCardIds.length > 0 && orderItemOtherProductIds.length != 0) {
            /* Remove Gift Cards Basket */
            $.ajax({
                url: url,
                type: 'get',
                success: function(data) {
                    $.ajax({
                        url: recalculateBasket,
                        type: 'get',
                        success: function(data) {

                        },
                        error: function(xhr) {
                            sessionStorageValue('giftcardData').remove()
                            location.reload();
                        }
                    });
                }
            });
        }
    }

    if (!!sessionStorageValue('giftcardData').get() && document.referrer.indexOf('LoginRegister') > 0 && location.href.indexOf('MyDashboard') > 0) {
        $.ajax({
            url: recalculateBasket,
            type: 'get',
            success: function(data) {

            },
            error: function(xhr) {
                window.location = hostName + '/CheckoutDisplay?catalogId=10551&deliveryMethod=delivery&langId=-24&storeId=10151';
            }
        });
    }

    // Bring Availability under Product CTA
    if ($(".productPage").length > 0) {
       // let availability = $('.availability--productListing').detach();
       // $('.prInfoBlock').prepend(availability);


        //Change brand text in prInfo 
       // $('.prInfo .topSec h3').text('Μάρκα');
    }

    // Bring itemAddedModalCTA under Product
    var itemAddedModalCTA = $(".js-itemAddedModal .buttonsWrap").detach();
    $(".js-itemAddedModal .product").after(itemAddedModalCTA);
    $(".js-itemAddedModal .popUpContinue").remove();

    //DRagk: on PDP always display the total support service outside the dropdown
    const $servicesWrapper = $('.prInfoBlock .acc-blockServices') || $();


    if ($servicesWrapper.find('.checkbox').length === 1)
        $servicesWrapper.find('.checkbox').insertAfter($servicesWrapper.find('.accHeader'));
    else {


        // $servicesWrapper.find('.checkbox').filter(function(elem) {
        // return $(this).text().indexOf('ετούς προνομιακής τεχνικής υποστήριξης') > -1
        // }).insertAfter($servicesWrapper.find('.accHeader'));

        if ($('.acc-blockServices > .checkbox').length === 0)
            $servicesWrapper.find('.checkbox').filter(function(elem) {
                return $(this).text().indexOf('ετούς τεχνικής υποστήριξης') > -1
            }).insertAfter($servicesWrapper.find('.accHeader'));
    }


    if ($servicesWrapper.find('.acc-content .checkbox ').length === 0) {
        $servicesWrapper.find('.accHeader ').addClass('empty')
    }

    $('.basketTable .basketCnt.basketRow ').each(function() {


        const prices = $(this).find('.price');


        if (prices.length < 3)
            return;

        const initialPrice = parsePrice(prices[1]);
        const price = parsePrice(prices[2])

        const percentageDiff = (initialPrice - price) / initialPrice;

        if (percentageDiff < 0.03) {
            $(this).find('.init, .details ').detach();
        }

    });

    if (window.location.href.indexOf('https://www.kotsovolos.gr/') > -1) {

        /* Remove C@S from uspBar */
        /*$("#uspBar").remove();
        $('<section id="uspBar"><div class="wrapper"><div class="inner spaceRow middle"><div class="usp flex-item"><span class="icon"><img src="https://kotsovolos.blob.core.windows.net/site/include/img/contactless-icon.png"></span><span class="text"><b>ΠΑΡΑΔΟΣΗ ΧΩΡΙΣ ΕΠΑΦΗ</b><span class="msg">Όλες οι παραδόσεις χωρίς άμεση επαφή με τον διανομέα</span></span></div><a href="/tropoi-pliromis" class="flex-item"><div class="usp"><span class="icon icon-card"></span><span class="text"><b>ΤΡΟΠΟΙ ΠΛΗΡΩΜΗΣ</b><span class="msg">Όλες οι επιλογές για να διαλέξεις αυτήν που επιθυμείς</span></span></div></a><div class="usp flex-item"><span class="icon icon-van"></span><span class="text"><b>ΔΩΡΕΑΝ ΜΕΤΑΦΟΡΙΚΑ</b><span class="msg">Σε όλη την Ελλάδα με αγορές άνω των 85€, το προϊόν σου άμεσα και δωρεάν</span></span></div></div></div></section>').insertAfter("header");
        $("#uspBar").show(); */


        /* Add Fasa Above Shipping Method in Cart Page */
        //$('<div class="banner"><img src="https://kotsovolos.blob.core.windows.net/promos/2020/covid-19/img/animation.gif"</div>').insertBefore("#updateShipping");
        /* Remove updateShipping Bar from Cart */
		
		/* if($('.basketTable').text().indexOf('202185') > -1 || $('.basketTable').text().indexOf('178422') > -1 ){$("#updateShipping .contentBar").show(); $("#updateShipping .contentBar .PickupInStore").show();}
		else{$("#updateShipping .contentBar").hide(); 
		$(".basketPage .radiobutton.PickupInStore").hide();
			$(".deliveryMethod, #updateShipping .contentBar").hide();
		
		} */
			
		/*if(window.location.href.indexOf('https://www.kotsovolos.gr/sound-vision/car-audio/radio-cd-autokinhtou') == -1 && window.location.href.indexOf('https://www.kotsovolos.gr/sound-vision/car-audio/radio-cd-autokinhtou/202185-osio-aco-4515ubt')  == -1 && window.location.href.indexOf('https://www.kotsovolos.gr/sound-vision/car-audio/radio-cd-autokinhtou/173140-f-u-ca2790bt')  == -1 && window.location.href.indexOf('https://www.kotsovolos.gr/sound-vision/car-audio/radio-cd-autokinhtou/192241-pioneer-mvh-s110ub')  == -1 && window.location.href.indexOf('https://www.kotsovolos.gr/mobile-phones-gps/mobile-phones/kinita-tilefona/178422-estar-a28-dual-sim-silver') == -1){
		   

			// Remove C@S from Product list and Product Page
			$('.availability').each(function() {
				let cas = $(this).find(".icon");
				cas.each(function() {
					if ($(this).hasClass('icon-store_display')) {
						$(this).closest('.availability__row').remove();
					}
				});
			});

			
			
		}
		else {console.log('show');}*/
		
		/*if ( $('.basketPage').length > 0 ) {
			$('.basketTable .basketRow.item').each(function() {
				const storeDate = " από Δευτέρα 04/05";
				let availabilityText = $(this).find('.store.availability_status').text().trim();
				
				let newAvailabilityText = availabilityText.concat(storeDate);
				if ( availabilityText == "Διαθέσιμο για παραλαβή") {
					$(this).find('.store.availability_status').text(newAvailabilityText);
				}
			});
		}*/

    }//if

    /* Hot fix for menu, in order to hide menuOverlay when hover on Stores Menu */
    if ($(window).width() > 1024 && $(".headerBtm").length > 0) {
        $(".level1 > li:last-child").mouseenter(function() {
            $("[menuoverlay]").hide();
        });
    }

    /* Close popup of minibasket when the mouse move out of the hit area */
    let interval;
    const $body = $('body');
    const $headerTopArea = $('#headerTopArea');
    const timer = function() {
        interval = setTimeout(function() {
            $body.removeClass('miniBasketOpen');
        }, 500);
    };


    $headerTopArea.on('mouseenter', '.headerLink.basketLink', function() {
        clearTimeout(interval);
        $body.addClass('miniBasketOpen');

    })

    $headerTopArea.on('mouseleave', '.headerLink.basketLink', function() {
        clearTimeout(interval);
        timer();

    })

    $headerTopArea.on('mouseenter', '.miniBasket', function() {
        clearTimeout(interval);


    })

    $headerTopArea.on('mouseleave', '.miniBasket', function() {
            clearTimeout(interval);
            timer();

        })
        /* if (window.location.href.indexOf("ecommerce.cardlink.gr") > -1) {
        	$("#paymentCompletionBlock iframe").on("load", function() {
        		let frameElement = $("#paymentCompletionBlock iframe");
        		let doc = frameElement.contentDocument;
        		doc.body.innerHTML = doc.body.innerHTML + '<style>main > .inner { overflow-x: auto;}.ddlMonth select, .ddlYear select {background: none !important;}</style>';
        	});

        } */

    // if ($(".productPage").length > 0) {
    //     if ($(".multimedia .fancybox").length > 0) {
    /* var script = document.createElement('script');
    script.src = 'https://kotsovolos.blob.core.windows.net/site/include/lib/fancybox/jquery.fancybox.pack.js';
    document.write(script.outerHTML); */
    //     }
    // }


    // if (getUrlParameter('searchTerm')) {
    //     GAPushTriggerResultCount();
    // }

    //IF PDP exxpand the service
    // if ($('.productPage').length && $('.acc-blockServices').length) {
    // displayServiceTopPDP();
    // }

    //IF Basket Show the Promo Message
    // if ($('.basketTable').length) {
    // displayServiceBasketMsg();
    // }

    //Add sticky pdp header fix CSS

    /* Preheader New Year */
    /* if (window.location.hash.indexOf("#homepage") > -1) {
        $("#preHeaderPlacement .banner .banner.row img.desktop").attr("src", "https://kotsovolos.blob.core.windows.net/promos/newyear/2020/assets/img/fasa-preh-desk-back.png");
        $("#preHeaderPlacement .banner .banner.row img.mobile").attr("src", "https://kotsovolos.blob.core.windows.net/promos/newyear/2020/assets/img/fasa-preh-mob-back.png");

        $( "#preHeaderPlacement .banner" ).click(function( event ) {
		  event.preventDefault();
		  window.history.back();
		});
    } */

    if ($(".prPageHeader .price").clone().children().remove().end().text().trim() == "0.01") {
        $(".prPageHeader").remove();
    }

    if ($('.prMainInner .priceBlock').length == 0) {
        $('.prPageHeader .price').remove();
        $('.prPageHeader .button').remove();
    }

    $('.tools_mob').click(function(e) { //hide preheader on click on filters - mobile
        $('#preHeaderPlacement').hide();
    });

    $('.closeBtn').click(function(e) { //hide preheader on click on filters - mobile
        $('#preHeaderPlacement').show();
    });

    $('.disableOverlay').click(function(e) { //hide preheader on click on filters - mobile
        $('#preHeaderPlacement').show();
    });

    //$(".newsletterBar").after('<div class="uspBarFooter"></div>');
    //$("#uspBar .wrapper").clone().appendTo(".uspBarFooter");
    $("#uspBar a.telLink").remove();

    if ($(window).width() > 1024) {
        $(".headerBtm .moreLinks .fav a").replaceWith('<a class="telLink" href="tel: 00302102899999"><span>210 28 99 999<span></span></span></a>');
        $(".headerBtm .moreLinks .fav").css({ "display": "inline-block" });
    }

    if (window.location.href.indexOf("ProductBazaar") > -1) {
        if ($(".pageContent .product .productWrap").length > 0) {
            let image = $(".pageContent .product .productWrap .top .img").html();
            let sku = $(".pageContent .product .productWrap .top .prInner .prCode").text();
            let prdTitle = $(".pageContent .product .productWrap .top .prInner .title").html();
            let price = $(".pageContent .product .productWrap .top .prInner .simplePrice").html();

            $(".pageContent .product > div").remove();

            $(".pageContent .product").replaceWith('<div class="bazaar centered"><div class="progBlock noBorder"><div class="wrapper"><div class="colsWrap middle"><div class="col logo"><h1><img src="https://assets.kotsovolos.gr/assets/pazari_logo.png" alt="Σηκώνει παζάρι"></h1></div><div class="col img">' + image + '</div><div class="col prDesc"><div class="product title">' + prdTitle + '<div class="prReview"><span class="prCode">' + sku + '</span></div></div></div><div class="col"><div class="price"><div class="price simplePrice" id="price_35324">' + price + '</div></div></div></div></div></div></div>');

            $(".tagsListWrapper").remove();

        }


        //console.log("Bazaar") 

    }

    // Run only in Homepage
    if ($('.hp-top-recommendation .nosto_element').length > 0) {
        NostoRecommendations();
    }

    function NostoRecommendations() {
        if ($('.hp-top-recommendation .nosto_element').is(':visible')) { //if the container is visible on the page

            $('span.popular-recos').click(function() {
                $('span.popular-recos').addClass('active');
                $('span.personal-recos').removeClass('active');
                $('#frontpage-nosto-1').show();
                $('#frontpage-nosto-2').hide().removeClass('active');
            });
            $('span.personal-recos').click(function() {
                $('span.popular-recos').removeClass('active');
                $('span.personal-recos').addClass('active');
                $('#frontpage-nosto-1').hide();
                $('#frontpage-nosto-2').show().addClass('active');
            });
        } else {
            setTimeout(NostoRecommendations, 50); //wait 50 ms, then try again
            //  $('#frontpage-nosto-1').addClass('active');
        }
    }


    if ($(".pageContent.topPage").length > 0) {
        var selectWidth;
        $('.selectBox.inline').each(function() {
            $(this).css({
                width: getMaxChildWidth($(this).find('.options'))
            }).find('.options').css({
                opacity: 1,
                display: 'none'
            });
        });
        var selectBox;
        $('body').on('click', '.selectBox .selected, .selectBox label', function(event) {
            selectBox = $(this).parents('.selectBox');
            if (selectBox.hasClass('open')) {
                selectBox.find('.options').slideUp(200, function() {
                    selectBox.removeClass('open top active');
                });
            } else {
                $('.selectBox.open').not(selectBox).find('.options').slideUp(200, function() {
                    $(this).parents('.selectBox').removeClass('open active');
                });

                if ($(this).offset().top + 210 > $(window).scrollTop() + window.innerHeight) {
                    selectBox.addClass('top');
                }
                selectBox.addClass('active');
                selectBox.find('.options').slideDown(200, function() {
                    selectBox.addClass('open');
                });
            }
        });
        var promoSelectBox;
        $('body').on('click', '.promoSelectBox .selected', function(event) {
            promoSelectBox = $(this).parents('.promoSelectBox');
            if (promoSelectBox.hasClass('open')) {
                $(this).siblings('.options').slideUp(200, function() {
                    promoSelectBox.removeClass('open top');
                });
            } else {
                promoSelectBox.addClass('open');
                $(this).siblings('.options').slideDown(200);
            }
        });
        $('body').on('click', '.selectBox li:not(.unselectable)', function(e) {
            var $this = $(this);
            var selectBox = $this.parents('.selectBox');
            $this.siblings('li').removeClass("active");
            $this.addClass("active");
            var txt = $this.html();
            var value = $this.data('value');
            selectBox.find('input').val(value);
            selectBox.addClass('completed').find('.selected').removeClass('default').html(txt);
            if (selectBox.hasClass("open")) selectBox.find('.selected').trigger('click');
            if (selectBox.hasClass('inline')) {
                $(this).prependTo(selectBox.find('ul'));
            }
        });
        $(".selectBox li.active").trigger('click');
        $('input[type="file"]').on('change', function() {
            var file_name = this.value.replace(/\\/g, '/').replace(/.*\//, '');
            $(this).siblings('.attached').removeClass('default').text(file_name);
        });
        $('body').on('click', function(e) {
            if ($('.selectBox').has(e.target).length === 0) {
                $('.selectBox.open .selected').trigger('click');
            }
            if ($('header .wrapper').has(e.target).length === 0 && $('body').hasClass('openSub')) {
                $('body').removeClass('openSub');
                $('.mainNav .active').removeClass('active');
                $('.burgerMenu').removeClass('open');
                $('.headerBtm.level2Act').removeClass('level2Act');
            }
        });
        $('body').on('click', '.servicesTool .button_stroked', function(event) {
            var url = $(this).parent().find('.options li.active').attr('data-url');
            window.location.href = url;
        }); /* COPY BTN*/
        $('.js-copybtn').on('click', function(event) {
            var copyTextarea = document.querySelector('.js-copyarea');
            copyTextarea.select();
            try {
                var successful = document.execCommand('copy');
            } catch (err) {
                console.log('unable to copy');
            }
        });
        checkForPromoSelectBox(); /*radiobuttonWrap*/
        $('.radiobuttonWrap').each(function() {
            var _this = $(this);
            _this.find('input[type="radio"]').prop("checked") ? _this.removeClass('inactive') : _this.addClass('inactive');
        });

        $('.radiobuttonWrap').parents('.radiogroup').find('input[type="radio"]').change(function() {
            var _this = $(this);
            var wrap = _this.parents('.radiogroup').find('.radiobuttonWrap');
            if (!wrap.find('input[type="radio"]').prop('checked')) {
                wrap.addClass('inactive');
            } else {
                wrap.removeClass('inactive');
            }
        });
        $('body').on('focus', '.inputField input', function() {
            var _this = $(this);
            var val = _this.val();
            _this.parent('.inputField').addClass('focus');
        }).on('blur', '.inputField input', function() {
            var _this = $(this);
            var val = _this.val();
            _this.parent('.inputField').removeClass('focus');
            if (val.length > 0) {
                _this.parent('.inputField').addClass('completed');
            } else {
                _this.parent('.inputField').removeClass('completed');
            }
        });
        $('.inputField input').each(function() {
            if ($(this).val().length > 0) {
                $(this).parent('.inputField').addClass('completed');
            }
        });
        $('body').on('mousedown touchstart', '.togglePassword .toggle', function(e) {
            var input = $($(this).siblings("input"));
            input.attr("type", "text");
        });
        $('body').on('mouseup touchend', '.togglePassword .toggle', function(e) {
            var input = $($(this).siblings("input"));
            input.attr("type", "password");
        }); /*datePicker generic*/
        if ($('.datePickerField').length) {
            $('.datePickerField .date').datepicker({
                firstDay: 1,
                regional: "el",
                maxDate: 0,
                nextText: "",
                prevText: "",
                changeYear: true,
                changeMonth: true,
                yearRange: "-100:+0",
                onSelect: function() {
                    $(this).parents('.inputField').addClass('completed');
                }
            });
        }

        function getMaxChildWidth(sel) {
            max = 0;
            $(sel).children().each(function() {
                c_width = parseInt($(this).outerWidth());
                if (c_width > max) {
                    max = c_width;
                }
            });
            return max;
        }

        function formResize() {
            checkForPromoSelectBox();
        }

        function formScroll() {}

        function checkForPromoSelectBox() {
            var box = $(".promoSelectBox");
            var options = box.find(".options");
            if ($(window).outerWidth() < 768) {
                options.addClass("vScroll");
                if (!options.hasClass('mCustomScrollbar') && $('html').hasClass('desktop')) {
                    options.mCustomScrollbar();
                }
            } else {
                box.removeClass("open");
                options.removeClass("vScroll").removeAttr("style");
                if (options.hasClass('mCustomScrollbar')) {
                    options.mCustomScrollbar('destroy');
                }
            }
        }
    }

});


$(function() {
    $('#contactForm #message').attr('data-parsley-required', '')

    var url = window.location.href;

    var datenow = new Date();
    var datenowmilliseconds = datenow.getTime();

    function print_nav_timing_data() {
        // Use getEntriesByType() to just get the "navigation" events
        var perfEntries = performance.getEntriesByType("navigation");

        for (var i = 0; i < perfEntries.length; i++) {
            console.log("= Navigation entry[" + i + "]");
            var p = perfEntries[i];
            // dom Properties
            console.log("DOM content loaded = " + (p.domContentLoadedEventEnd - p.domContentLoadedEventStart));
            console.log("DOM complete = " + p.domComplete);
            console.log("DOM interactive = " + p.interactive);

            // document load and unload time
            console.log("document load = " + (p.loadEventEnd - p.loadEventStart));
            console.log("document unload = " + (p.unloadEventEnd - p.unloadEventStart));

            // other properties
            console.log("type = " + p.type);
            console.log("redirectCount = " + p.redirectCount);
        }
    }

    if (document.referrer.indexOf("https://store.kotstagelive.stage.kot.synaigy-cloud.net/BasketDisplay") && url.indexOf("https://store.kotstagelive.stage.kot.synaigy-cloud.net/") > -1) {
        print_nav_timing_data();
    }


    function convertDate(date) {
        var datearray = date.split('/');
        var dateDay = datearray[0];
        var dateMonth = datearray[1];
        var dateYear = datearray[2];
        var releasedate = dateYear + '-' + dateMonth + '-' + dateDay;
        var releasedateToDisplay = new Date(releasedate);
        console.log(releasedateToDisplay);
        var releasedateToMillisecond = releasedateToDisplay.getTime();

        return releasedateToMillisecond;
    }


    function checkAndAppend(rDate) {
        var datemilli = convertDate(rDate);
        if (datemilli > datenowmilliseconds) {
            $('.offerStripe.release-date-gaming').append('<div class="inner"><p><span>Διαθέσιμο από <b> ' + rDate + '!</b></span></p></div>');
        }
    }



    var date17 = '16/04/2020';


    if (url.indexOf('200113') > -1 || url.indexOf('199802') > -1 || url.indexOf('200117') > -1) {
        checkAndAppend(date17);
    }
});

function checkPrice(url) {

    if (url.indexOf('minPrice') > -1 && url.indexOf('maxPrice') > -1) {
        let priceapo = $('#productsFacets .price_content .text_input .fields .priceField').find('#apo').val();
        let priceews = $('#productsFacets .price_content .text_input .fields .priceField').find('#ews').val();
        let pricerange = '€' + priceapo + '-' + '€' + priceews;
        $('.filtersRow .filtersRowInner').find('a').each(function() {
            const filtertext = $(this).find('.actFilter').text().trim();
            const filterposition = $(this).find('.actFilter');
            if (filtertext == pricerange) {

                filterposition.text('Εύρος Τιμής: ' + filtertext);

            }
        });
    }
}

function checkOtherFilters(url) {
    var counter = 1;
    if (url.indexOf('facetName') > -1) {
        $('#productsFacets').find('.filtersBlock').each(function() {

            const filterblock = $(this);
            filterblock.find('.acc-block .acc-content .list_content .checkboxes.facetSelect li').each(function() {
                const filter = $(this);
                if (filter.find('input').is(':checked') == true) {
                    //console.log(counter);
                    var filterurl = filter.find('input').attr('data-url');
                    console.log(filterurl);

                    const dataid = filter.find('.checkbox').attr('data-id');
                    const facetvalue0 = filter.find('.checkbox label').text();
                    const facetvalue = facetvalue0.substring(0, facetvalue0.length - 7).trim();

                    const facetid = dataid.split('_')[1];

                    const facetname = filterblock.find('.accHeader .open-acc').text();

                    filterblock.find('.acc-block').addClass('open');



                    $('.filtersRowInner').find('a').each(function(index) {

                        var dataurl = $(this).attr('href');
                        //console.log(dataurl);
                        const filteredvalue = $(this).find('.actFilter').text();

                        if (filterurl === dataurl) {
                            if (filteredvalue === 'Δεν διαθέτει' || filteredvalue === 'Δεν υποστηρίζεται') {
                                const text = $(this).find('.actFilter').text();
                                $(this).find('.actFilter').text(text + ' ' + facetname);
                            } else if (filteredvalue === 'Υποστηρίζεται' || filteredvalue === 'Διαθέτει') {

                                const text = $(this).find('.actFilter').text();
                                $(this).find('.actFilter').text(facetname);

                            } else {
                                const text = $(this).find('.actFilter').text();
                                $(this).find('.actFilter').text(facetname + ': ' + text);
                            }
                        }

                    })

                }
            })
        })
    }
}

function openNav() {
    $("#b2bNav").addClass("opened");
    $(".headerTop").css({ "position": "relative" });
    $("#b2bNav li").on('click', function() {
        closeNav();
    });

}

function closeNav() {
    $("#b2bNav").removeClass("opened");
    $(".headerTop").css({ "position": "fixed" });
}

function disable(e) {
    e.preventDefault();
}

$(function() {

    // REDIRECT FROM ACCOUNT CREATION

    if (window.location.href.indexOf('SuccessfulRegistration') > -1) {

        window.location.href = 'https://www.kotsovolos.gr/BasketDisplay?catalogId=10551&langId=-24&storeId=10151';

    }


    // REDIRECT GIFTCARDS

    if (window.location.href.indexOf('gift4u') > -1) {

        window.location.href = '/pages/e-giftcard';

    }





    // COLLECTION BANNER INCLUDER 
    if (window.location.href.indexOf('collection') > -1 || window.location.href.indexOf('samsung-galaxy-s20') > -1 || window.location.href.indexOf('samsung-galaxy-s20-s20plus-s20ultra') > -1) {
        let collectionid = window.location.pathname.split("/").pop();
        $(".cm-placement-top-product-list").css({ "display": "block" });
        $('.mainContent').children(':first').before("<div class='topbanner_new'></div>");
        //$('.topbanner_new').load('//promo.kotsovolos.gr/content/newsite/include_collections.php?zone=Collection-Banner&dcolid=' + collectionid + '&' + Math.floor((Math.random() * 10000) + 1) + '');
        $('.topbanner_new').load('//promo.kotsovolos.gr/content/newsite/include_collections.php?zone=Collection-Banner&dcolid=' + collectionid);
    } else {
        let thezone = $(".photoGallery").attr("id");

        if (typeof thezone !== "undefined") {
            $(".cm-placement-top-product-list").css({ "display": "none" });
            $('.mainContent').children(':first').before("<div class='cattopbanner_new'></div>");
            $('.cattopbanner_new').load('https://promo.kotsovolos.gr/content/newsite/include_categories.php?zone=' + thezone, function() {
                if ($('.cattopbanner_new').text() !== "") {
                    //console.log("true");
                    $('.cattopbanner_new').css({ "display": "block" });
                    $(".cm-placement-top-product-list").css({ "display": "block" });
                } else {
                    $(".cm-placement-top-product-list").css({ "display": "block" });
                }
            });

        }
    }

    // if ( window.location.href.indexOf("collection") > -1 ) {
    // $(".compare").hide();
    // }

    // $('*').contents().each(function() {
    // if(this.nodeType === Node.COMMENT_NODE) {
    // $(this).remove();
    // }
    // });

    $('.categoryShortDescription .cltn-terms a.terms-more.drop').click(function() {
        const open = 'Διάβασε τους όρους εδώ';
        const close = 'Κλείσιμο';
        const termclass = $('.categoryShortDescription .cltn-terms .terms');
        termclass.toggle();
        if ($(this).hasClass('opened') === true) {
            $(this).removeClass('opened');
            $(this).text(open);
        } else {
            $(this).addClass('opened');
            $(this).text(close);
        }
    });

})


$('.appletv-terms').click(function() {
    $('#appletvmodal').fadeIn();
});

$('#appletvmodal .closeBtn').click(function() {
    $('#appletvmodal').fadeOut();
});

//Nosto Element Reorder in Product Page - Function
function NostoElementReorder(el, cb) {
    if ($(el).length) {
        // Element is now loaded.
        cb($(el));
    } else {
        // Repeat every 500ms.
        setTimeout(function() {
            NostoElementReorder(el, cb)
        }, 300);
    }
};


$(function() {

    var zipCodeDetail = $("#zipCode");
    var func = function() {
        zipCodeDetail.val(zipCodeDetail.val().replace(/\D+/g, ''));
    }
    zipCodeDetail.keyup(func).blur(func);


    const $basketRow = $(".basketRow.item:not(.recycleRow)");
    $basketRow.each(function(elem) {
        console.log(elem);
        const $this = $(this);
        if ($this.find('.contentBox').length > 0) {
            $this.find('.openServices').addClass('open');
            $this.find('.moreServiceCnt').show()
        }
    });


    // Bundle Children hide Button Section
    // if ($('.productPage')[0]) {

    //     var sku = $('.prReview .prCode').text();
    //     bchildrenArray = ['204519', '203880', '203437', '203438', '200824', '200408', '200409', '200328', '200299', '198232', '195192', '194123', '191211', '191210', '190827', '188943', '188685', '188135', '187685', '186074', '184283', '184166', '184164', '184163', '183535', '181731', '181626', '181593', '181592', '181591', '181589', '179741', '179014', '177663', '177592', '177591', '177590', '177415', '177414', '176844', '176377', '175506', '172816', '172815', '172814', '172773', '172396', '171616', '171008', '166697', '166653', '166652', '165334', '164874', '164873', '163721', '162582', '159925', '158897', '157606', '156744', '156484', '155833', '153862', '153861', '149311', '146247', '143783', '129789', '117291', '113777', '111294', '108849'];


    //     if ((jQuery.inArray(sku, bchildrenArray)) !== -1) {
    //         $('.productPage .prDetail').remove();
    //     }
    // }

    // Touch TV Implementation Start

    if (window.location.href.indexOf('touchTV') > -1) {
        $("body").addClass("touchTv");
        $("body").append('<span class="full-screen-btn-trigger"></span>');


        //$('head').append('<script src="https://kotsovolos.blob.core.windows.net/pages/touch-tv/custom.js"></script>');
        var hash = "#touchTV";
        $('a').each(
            function() {
                let href = $(this).attr('href');

                $(this).attr('href', href + hash);

            }
        );

        $('.facetOption input').each(
            function() {
                let dataUrl = $(this).attr('data-url');
                $(this).attr('data-url', dataUrl + hash);
            }
        );

        $('body').append('<div class="loader-overlay" style="display: block;"></div>');
        $('body').append('<div class="my-touchtv-loader" style="display: block;"></div>');
        $('body').append('<style>body.touchTv #uspBar {display:none;} body.touchTv{padding-bottom: 300px !important;}  .my-touchtv-loader{animation:rotate 2s infinite;height:50px;width:50px;position:absolute;top:50%;left:50%;z-index:9999;}.my-touchtv-loader:after,.my-touchtv-loader:before{border-radius:50%;content:"";display:block;height:20px;width:20px}.my-touchtv-loader:before{animation:ball1 2s infinite;background-color:#d51317;box-shadow:30px 0 0 #d51317;margin-bottom:10px}.my-touchtv-loader:after{animation:ball2 2s infinite;background-color:#d51317;box-shadow:30px 0 0 #d51317}@keyframes rotate{0%{-webkit-transform:rotate(0) scale(.8);-moz-transform:rotate(0) scale(.8)}50%{-webkit-transform:rotate(360deg) scale(1.2);-moz-transform:rotate(360deg) scale(1.2)}100%{-webkit-transform:rotate(720deg) scale(.8);-moz-transform:rotate(720deg) scale(.8)}}@keyframes ball1{0%{box-shadow:30px 0 0 #d51317}50%{box-shadow:0 0 0 #d51317;margin-bottom:0;-webkit-transform:translate(15px,15px);-moz-transform:translate(15px,15px)}100%{box-shadow:30px 0 0 #d51317;margin-bottom:10px}}@keyframes ball2{0%{box-shadow:30px 0 0 #d51317}50%{box-shadow:0 0 0 #d51317;margin-top:-20px;-webkit-transform:translate(15px,15px);-moz-transform:translate(15px,15px)}100%{box-shadow:30px 0 0 #d51317;margin-top:0}}</style>');


        $('.prListPage').prepend('<div class="navigation-buttons"> <a href="" class="back nav-btn"> <img src="//kotsovolos.blob.core.windows.net/pages/touch-tv/assets/icons/back.png"> <span>Πίσω</span> </a> <a href="" class="home nav-btn"> <img src="//kotsovolos.blob.core.windows.net/pages/touch-tv/assets/icons/home.png"> <span>Αρχική</span> </a></div>');
        $('.productPage').prepend('<div class="navigation-buttons"> <a href="" class="back nav-btn"> <img src="//kotsovolos.blob.core.windows.net/pages/touch-tv/assets/icons/back.png"> <span>Πίσω</span> </a> <a href="" class="home nav-btn"> <img src="//kotsovolos.blob.core.windows.net/pages/touch-tv/assets/icons/home.png"> <span>Αρχική</span> </a> </div>');
        $('.productPage').append('<style>.touchTv .navigation-buttons{position: fixed; bottom: 0; z-index: 9999; display: flex; justify-content: center; text-align: center; list-style: none !important; padding: 0 !important; width: 100%; min-height: 200px; background-color: rgba(0, 0, 0, .9)}.touchTv .navigation-buttons .nav-btn{padding: 10px !important; margin: 5px 10px !important; min-width: 30%; color: #fff; text-align: center; display: flex; align-items: center; justify-content: center; flex-direction: column}.touchTv .navigation-buttons .nav-btn img{margin: 15px 0; font-size: 30px;}.touchTv .navigation-buttons .nav-btn span{font-size: 20px; margin: 15px 0;}<style>')
        $('.prListPage').append('<style>.touchTv .product {border-bottom: 1px solid black;} .touchTv .compareBar {bottom: 200px!important}   .touchTv .navigation-buttons{position: fixed; bottom: 0; z-index: 9999; display: flex; justify-content: center; text-align: center; list-style: none !important; padding: 0 !important; width: 100%; min-height: 200px; background-color: rgba(0, 0, 0, .9)}.touchTv .navigation-buttons .nav-btn{padding: 10px !important; margin: 5px 10px !important; min-width: 30%; color: #fff; text-align: center; display: flex; align-items: center; justify-content: center; flex-direction: column}.touchTv .navigation-buttons .nav-btn img{margin: 15px 0; font-size: 30px;}.touchTv .navigation-buttons .nav-btn span{font-size: 20px; margin: 15px 0;}<style>')

        if (window.location.href.indexOf('CompareProductsDisplayView') > -1) {

            $(window).scroll(function() {
                var top = $(window).scrollTop();

                var titlePos = $('.prInner .title').offset().top;

                if (top > titlePos) {
                    $('.compareTable .compareRow').find('.value').each(function() {
                        $(this).find('.product .prInner .title').addClass('fixedtop');

                    })
                } else {
                    $('.compareTable .compareRow').find('.value').each(function() {
                        $(this).find('.product .prInner .title').removeClass('fixedtop');
                    })
                }
            });

            $('.comparisonPage').prepend('<div class="navigation-buttons"> <a href="" class="back nav-btn"> <img src="//kotsovolos.blob.core.windows.net/pages/touch-tv/assets/icons/back.png"> <span>Πίσω</span> </a> <a href="" class="home nav-btn"> <img src="//kotsovolos.blob.core.windows.net/pages/touch-tv/assets/icons/home.png"> <span>Αρχική</span> </a></div>');
            $('.comparisonPage').append('<style>.touchTv .inner .wrapper {margin:0px !important; padding:0px !important} .touchTv .product {border-bottom: 1px solid black;} .touchTv .compareBar {bottom: 200px!important}   .touchTv .navigation-buttons{position: fixed; bottom: 0; z-index: 9999; display: flex; justify-content: center; text-align: center; list-style: none !important; padding: 0 !important; width: 100%; min-height: 200px; background-color: rgba(0, 0, 0, .9)}.touchTv .navigation-buttons .nav-btn{padding: 10px !important; margin: 5px 10px !important; min-width: 30%; color: #fff; text-align: center; display: flex; align-items: center; justify-content: center; flex-direction: column}.touchTv .navigation-buttons .nav-btn img{margin: 15px 0; font-size: 30px;}.touchTv .navigation-buttons .nav-btn span{font-size: 20px; margin: 15px 0;}<style>')
            $('.comparisonPage').append('<style>.compareTable .prInner .title.fixedtop{position:fixed;top:0;background-color:rgba(0,0,0,.8);padding:10px 20px;width:auto;height:fit-content}.compareTable .prInner .title.fixedtop h3{color:#fff!important}</style>')
        }


        let productPageClass = $('.productPage').length;

        if (productPageClass > 0) {
            $('.navigation-buttons').append('<a href="" class="back nav-btn"> <img src="//kotsovolos.blob.core.windows.net/pages/touch-tv/assets/icons/products2.png"> <span>Προϊόντα</span> </a>');
        }


        $('.navigation-buttons .back.nav-btn').on("click", function(e) {
            e.preventDefault();
            parent.history.back();
            return false;
        });


        $('.navigation-buttons .home.nav-btn').on("click", function(e) {
            e.preventDefault();
            let locationurl = window.location.href;
            if (locationurl.indexOf('household-appliances') > -1 || locationurl.indexOf('air-condition-heaters') > -1) {
                window.location.href = 'https://www.kotsovolos.gr/pages/touch-tv-mda';
            } else {
                window.location.href = 'https://www.kotsovolos.gr/pages/touch-tv';
            }
        });



        $('.touch-overlay-link').click(function(e) {
            e.preventDefault();
            // console.log('aris');
            $('.touch-overlay').css('display', 'none');
            $('#landing').fadeIn();
        });

        $(".gridView.viewBtn").trigger("click");

        setTimeout(function() {
            // $('.loader-overlay').remove();
            // $('.my-touchtv-loader').remove();
        }, 2000);


        $('.full-screen-btn-trigger').click(function() {
            var el = document.documentElement,
                rfs = el.requestFullscreen ||
                el.webkitRequestFullScreen ||
                el.mozRequestFullScreen ||
                el.msRequestFullscreen;

            rfs.call(el);
            $('.loader-overlay').remove();
            $('.my-touchtv-loader').remove();
        });

        $('.full-screen-btn-trigger').click();


        //Timeout if there is no action to go back to home
        var globalTimeout = setTimeout(() => {
            let loc = window.location.href;
            if (loc.indexOf('household-appliances') > -1 || loc.indexOf('air-condition-heaters') > -1 || loc.indexOf('touch-tv-mda') > -1) {
                window.location.href = 'https://www.kotsovolos.gr/pages/touch-tv-mda';
            } else {
                window.location.href = 'https://www.kotsovolos.gr/pages/touch-tv';
            }
        }, 120000)



        //On every touch event trigger a timeout to go back to home
        var update;

        $('.touchTv').on("touchstart", function() {
            clearTimeout(globalTimeout);
            clearTimeout(update);
            update = setTimeout(() => {
                let loc = window.location.href;
                if (loc.indexOf('household-appliances') > -1 || loc.indexOf('air-condition-heaters') > -1 || loc.indexOf('touch-tv-mda') > -1) {
                    window.location.href = 'https://www.kotsovolos.gr/pages/touch-tv-mda';
                } else {
                    window.location.href = 'https://www.kotsovolos.gr/pages/touch-tv';
                }
            }, 120000);
        });

    }

    // Touch TV Implementation End

    //trolls campaign image fix
    if ($('#trollsCampaignPlacementWrapperPromo').length > 0) {
        if ($(document).width() > 768) {
            $('#trollsCampaignPlacementWrapperPromo img').attr('src', 'https://kotsovolos.blob.core.windows.net/promos/site-trolls/18/yellowbox-off.png');
        } else {
            $('#trollsCampaignPlacementWrapperPromo img').attr('src', 'https://kotsovolos.blob.core.windows.net/promos/site-trolls/18/yellowbox-m.png');
        }
    }

});



$(function() {

    //Auto Sales Flag

    let hasTopRecosHome = $('.hp-top-recommendation').length;
    let hasEidesProsfataHome = $('#frontpage-nosto-3').length;
    let hasDimofiliProionta = $('#categorypage-nosto-2').length;
    let hasEidanEpisis = $('#searchpage-nosto-2').length;
    let haspdpeidesprosfata = $('#productpage-nosto-3').length;
    let alloipelatesagorasan = $('#productpage-nosto-1').length;
    let hasPlp = $('.productList').length;
    let hasPdp = $('.productPage').length;


    const ribbonPath = '//assets.kotsovolos.gr/ribbons/ekptwsi.png';




    //Nosto with timeout 
    setTimeout(function() {


        //For top products Nosto 
        if (hasTopRecosHome > 0) {
            let homenosto1 = $('#frontpage-nosto-1');
            let homenosto2 = $('#frontpage-nosto-2');
            loopnostoproducts(homenosto1);
            loopnostoproducts(homenosto2);
        }

        //For middle products Nosto
        if (hasEidesProsfataHome > 0) {
            let homenosto3 = $('#frontpage-nosto-3');
            loopnostoproducts(homenosto3);
        }

        //For plp products Nosto
        if (hasDimofiliProionta > 0) {
            let categorynosto2 = $('#categorypage-nosto-2');
            loopnostoproducts(categorynosto2);
        }

        //For plp products Nosto - After Search
        if (hasEidanEpisis > 0) {
            let searchnosto2 = $('#searchpage-nosto-2');
            loopnostoproducts(searchnosto2);
        }

        //For pdp - Eides Prosfata
        if (haspdpeidesprosfata > 0) {
            let pdpnosto3 = $('#productpage-nosto-3');
            loopnostoproducts(pdpnosto3);
        }

        //For pdp - Alloi pelates agorasan
        if (alloipelatesagorasan > 0) {
            let pdpnosto1 = $('#productpage-nosto-1');
            loopnostoproducts(pdpnosto1);
        }

    }, 2000);

    //For plp products
    if (hasPlp > 0) {
        $('.mainContent').find('.listWrap.listView .product').each(function() {
            let hascrossedprice = $(this).find('.productWrap .prInner .cntRow .priceBlock .price .init.priceDetail').length;
            let hasTagsList = $(this).find('.productWrap .prInner .tagsList').length;
            if (hascrossedprice > 0) {
                if (hasTagsList > 0) {
                    $(this).find('.productWrap .prInner .tagsList').append('<img src="' + ribbonPath + '">');
                } else {
                    $(this).find('.productWrap .prInner .title').append('<div class="tagsListWrapper"><ul class="tagsList"><img src="' + ribbonPath + '"></ul></div>');
                }
            }
        });
    }

    //For pdp products
    if (hasPdp > 0) {
        let haspdpcrossed = $('.productPage .prDetail .priceBlock').find('.init.priceDetail').length;
        if (haspdpcrossed > 0) {
            $('.prMainInner .prP_title .tagsList').append('<li><img src="' + ribbonPath + '"></li>');
        }
    }

    function loopnostoproducts(nostoid) {
        let nostoitem = $('.recommended-products .owl-carousel .owl-stage .owl-item');
        $(nostoid).find(nostoitem).each(function() {
            let nostothis = $(this);
            checkRibbon(nostothis);
        });
    }

    //Function to append ribbon on home and plp nosto elements
    function checkRibbon(here) {
        // If item has new-price class(the class with the crossed price)
        let crossedpriceflag = here.find('.product .prInner .cntRow .priceBlock .js-new-price').length;
        let hassalesflag = here.find('.product .productWrap .prInner .tagsList img[src="' + ribbonPath + '"]').length;
        if ((crossedpriceflag > 0) && (hassalesflag <= 0)) {
            here.find('.product .productWrap .prInner .tagsList').append('<img src="' + ribbonPath + '">');
        }
    };
});



// $(function() {
//     //Auto total support add to basket page

//     setTimeout(function() {


//         $('.basketTable').find('.basketCnt.basketRow.item').each(function() {
//             //Για κάθε προϊον
//             var item = $(this);
//             var category = item.find('.data_product_basket .category').text().split('/')[0];
//             //console.log(category);

//             var tvsCategory = item.find('.data_product_basket .url').text().indexOf('televisions/led-lcd');
//             var isValidTv = false;

//             if (tvsCategory > -1) {
//                 var tvsprice = item.find('.data_product_basket .price').text();
//                 var tvsbrand = item.find('.data_product_basket .brand').text();
//                 if (tvsprice >= 499 && (tvsbrand === 'LG' || tvsbrand === 'Samsung' || tvsbrand === 'Sony')) {
//                     // console.log('is a valid tv');
//                     isValidTv = true;
//                 }
//             }


//             if ((category.indexOf('Λευκές Συσκευές') > -1) || (isValidTv === true)) {
//                 var hasSimple = false;
//                 var hasPremium = false;
//                 item.find('.serviceRow').each(function() {
//                     //Για κάθε service
//                     var titlebefore = $(this).find('.serviceCell .serviceTitle').text().trim();
//                     var serviceTitle = titlebefore.substring(0, (titlebefore.length - 6))
//                         //console.log(serviceTitle);
//                         // var simpleService = serviceTitle.indexOf('Υπηρεσία 5ετούς τεχνικής υποστήριξης');
//                         // var premiumService = serviceTitle.indexOf('Υπηρεσία 5ετούς προνομιακής τεχνικής υποστήριξης');
//                     if (serviceTitle === 'Υπηρεσία 5ετούς τεχνικής υποστήριξης') {
//                         hasSimple = true;
//                     } else if (serviceTitle === 'Υπηρεσία 5ετούς προνομιακής τεχνικής υποστήριξης') {
//                         hasPremium = true;
//                     }


//                 });
//                 //console.log(hasSimple);
//                 //console.log(hasPremium);

//                 //Εάν ΔΕΝ έχει καμία
//                 // if (hasSimple === false && hasPremium === false) {
//                 //     item.find('.moreServiceCnt .boxesWrap .owl-stage .owl-item').each(function() {
//                 //         //Για κάθε service στο service section
//                 //         var serviceT = $(this).find('.contentBox a').text();
//                 //         if (serviceT.indexOf('Υπηρεσία 5ετούς τεχνικής υποστήριξης') > -1) {
//                 //             console.log('click');
//                 //             $(this).find('.addService').trigger('click');
//                 //         }
//                 //     })
//                 // }
//                 // Εάν έχει ΚΑΙ απλή ΚΑΙ Premium 
//                 // if (hasSimple === true && hasPremium === true) {
//                 //     item.find('.serviceRow').each(function() {
//                 //         var attachedbefore = $(this).find('.serviceTitle').text().trim();
//                 //         var attachedServiceTitle = attachedbefore.substring(0, (attachedbefore.length - 6));
//                 //         //console.log(attachedServiceTitle);
//                 //         if (attachedServiceTitle === 'Υπηρεσία 5ετούς τεχνικής υποστήριξης') {
//                 //             $(this).find('.removeItemLink').trigger('click');
//                 //         }
//                 //     })
//                 // }
//             }
//         })

//     }, 100)
// })


$(function() {

    var url = window.location.href;
    //Array of Ps want to be changed
    var arrayOfPs = ['p3348', 'p3748', 'p3749', 'p3750', 'p3751', 'p3752', 'p3753', 'p3754', 'p3758', 'p3759', 'p3760', 'p3761', 'p3762', 'p3763', 'p3764', 'p3765', 'p3766', 'p3767', 'p3768', 'p3769', 'p3770', 'p3776', 'p3778', 'p3782', 'p3784', 'p3788', 'p3789', 'p3790', 'p3791', 'p3792', 'p3793', 'p3794', 'p3795', 'p3797', 'p3801', 'p3803', 'p3804', 'p3811', 'p3812', 'p3819', 'p3846', 'p3852', 'p3853', 'p3858', 'p3886', 'p3914', 'p3915', 'p3921', 'p3922', 'p3927', 'p3930', 'p3932', 'p3938', 'p3963', 'p3965', 'p3981', 'p3989', 'p3993', 'p4004', 'p4005', 'p4006', 'p4011', 'p4013', 'p4014', 'p4015', 'p4023', 'p4026', 'p4030', 'p4031', 'p4039', 'p4042', 'p4046', 'p4047', 'p4049', 'p4052', 'p4073', 'p4078', 'p4102', 'p4106', 'p4110', 'p4111', 'p3995', 'p3910', 'p4117', 'p3713', 'p3975', 'p3980', 'p4017', 'p4018', 'p4019', 'p4021', 'p4099', 'p4107', 'p4119', 'p4071', 'p4072', 'p3828', 'p3830', 'p3860', 'p3861', 'p3862', 'p3909', 'p3944', 'p3987', 'p3994', 'p4016', 'p4027', 'p4037', 'p4076', 'p4110', 'p4125', 'p4121', 'p3887'];

    var urlSplit = url.split('/');
    var pFromUrl = urlSplit[urlSplit.length - 1].split('-')[0];


    if (jQuery.inArray(pFromUrl, arrayOfPs) !== -1) {
        var arrayOfTermsElements = $('.cltn-terms').not("a").not(".terms").text().split(' ');
        var newTerms = "";
        $.each(arrayOfTermsElements, function(index, value) {

            if (value === '29/02' || value === '29/2' || value === '29/02/2020' || value === '29/2/2020' || value === '29/02/20') {
                arrayOfTermsElements[index] = '02/03';
            } else if (value === '29/02.' || value === '29/2.' || value === '29/02/2020.' || value === '29/2/2020.' || value === '29/02/20.') {
                arrayOfTermsElements[index] = '02/03.';
            }

            newTerms += arrayOfTermsElements[index] + ' ';
        });

        $('.cltn-terms').not("a").not(".terms").text(newTerms);

        var collectionTitle = $('.titleWrap').find('h1').text();

        var titleArray = $('.titleWrap').find('h1').text().split(' ');
        var newHeader = "";
        $.each(titleArray, function(index, value) {

            if (value === 'έκπτωση') {
                titleArray[index] = 'όφελος';
            } else if (value === 'Έκπτωση') {
                titleArray[index] = 'Όφελος';
            } else if (value === 'έκπτωση!') {
                titleArray[index] = 'όφελος!';
            }

            newHeader += titleArray[index] + ' ';
        });
        //Change Header
        $('.titleWrap').find('h1').text(newHeader);
        //Change Meta data
        $('meta[content="' + collectionTitle + '"]').attr('content', newHeader);
        //Change page title
        $('title').text(newHeader);
    }

});


$(function() {

    setTimeout(function() {

        let offerCounter = $('.prMainInner .prDetail .prMore .prButtonBlock .offerList .open-acc b').text();
        let offerText = $('.prMainInner .prDetail .prMore .prButtonBlock .offerList .open-acc .text').text();

        if (offerText === 'προσφορές' && offerCounter === '1') {
            $('.acc-block.offerList').addClass('open');
            $('.acc-block.offerList .open-acc').remove();
        }
    }, 500);

    /* setTimeout(function() {
        //Auto Bazaar Flag

        let hasPlp = $('.productList').length;
        let hasPdp = $('.productPage').length;


        const ribbonPath = '//assets.kotsovolos.gr/ribbons/sikonei-pazari.png';

        //For plp products
        if (hasPlp > 0) {
            $('.mainContent').find('.listWrap.listView .product').each(function() {
                let hasBazaarFlags = $(this).find('.productWrap .prInner .cntRow .priceMsg .inner .bazaar').length;
                let hasTagsList = $(this).find('.productWrap .prInner .tagsList').length;
                if (hasBazaarFlags > 0) {
                    if (hasTagsList > 0) {
                        $(this).find('.productWrap .prInner .tagsList').append('<img src="' + ribbonPath + '">');
                    } else {
                        $(this).find('.productWrap .prInner .tagsListWrapper').append('<ul class="tagsList"><img src="' + ribbonPath + '"></ul>');
                    }
                }
            });
        }

        //For pdp products
        if (hasPdp > 0) {
            let hasBazaarFlags = $('.productPage .prDetail .priceMsg .inner').find('.bazaar').length;
            if (hasBazaarFlags > 0) {
                $('.prMainInner .prP_title .tagsList').append('<li><img src="' + ribbonPath + '"></li>');
            }
        }
    }, 500); */
});