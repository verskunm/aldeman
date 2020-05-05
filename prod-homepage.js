$(function() {

	// $.getScript( "//kotsovolos.blob.core.windows.net/site/include/scripts/base64.min.js", function( data, textStatus, jqxhr ) {
	// 	console.log( data ); // Data returned
	// 	console.log( textStatus ); // Success
	// 	console.log( jqxhr.status ); // 200
	// 	console.log( "Load was performed." );
	// });

	//Lazy Load
	$("img").unveil(200);
	//$("source").unveil();

	// window.dispatchEvent(new Event('resize'));
	
	const status = 1;
	var jsonUrl = '';
	if ( status == 1 ) {
		jsonUrl = "https://promo.kotsovolos.gr/content/include-home.php?zone=home";
	} else {
		jsonUrl = "https://kotsovolos.blob.core.windows.net/site/include/homepage.json";
	}

	//Load Banners
	$.ajax({
		url: jsonUrl,
		cache: false,
		dataType: 'json',
		success: function(results){
			var HOMEpage_TOP = [], HOMEpage_FASA = [],HOMEpage_Lifestyle = [], HOMEpage_Middle_1 = [], HOMEpage_Middle_2 = [], HOMEpage_Middle_3  = [], HOMEpage_Middle_4  = [],HOMEpage_Middle_5  = [], HOMEpage_Middle_6  = [], HOMEpage_B2B_1 = [], HOMEpage_B2B_2 = [], HOMEpage_B2B_3 = [], HOMEpage_Bottom_1 = [], HOMEpage_Bottom_2 = [], HOMEpage_Bottom_3 = [], HOMEpage_Alphabank = [], HOMEpage_Before_Slider = [], HOMEpage_After_Slider = [], HOMEpage_Special_Promo = [], HOMEpage_After_Middle = [];
			for(i=0;i<results.length;i++){
				switch(results[i].zone) {
					case "Homepage-before-slider":
						HOMEpage_Before_Slider.push(results[i]);
						break;
					case "HOMEpage-TOP":
						HOMEpage_TOP.push(results[i]);
						break;
					case "Homepage-after-slider":
						HOMEpage_After_Slider.push(results[i]);
						break;
					case "Homepage-special-promo":
						HOMEpage_Special_Promo.push(results[i]);
						break;
					case "HOMEpage-FASA":
						HOMEpage_FASA.push(results[i]);
						break;
					case "HOMEpage-Lifestyle":
						HOMEpage_Lifestyle.push(results[i]);
						break;
					case "HOMEpage-Middle-1":
						HOMEpage_Middle_1.push(results[i]);
						break;
					case "Homepage-after-middle":
						HOMEpage_After_Middle.push(results[i]);
						break;
					case "HOMEpage-Middle-2":
						HOMEpage_Middle_2.push(results[i]);
						break;
					case "HOMEpage-Middle-3":
						HOMEpage_Middle_3.push(results[i]);
						break;
					case "HOMEpage-Middle-4":
						HOMEpage_Middle_4.push(results[i]);
						break;
					case "HOMEpage-Middle-5":
						HOMEpage_Middle_5.push(results[i]);
						break;
					case "HOMEpage-Middle-6":
						HOMEpage_Middle_6.push(results[i]);
						break;
					case "HOMEpage-B2B-1":
						HOMEpage_B2B_1.push(results[i]);
						break;
					case "HOMEpage-B2B-2":
						HOMEpage_B2B_2.push(results[i]);
						break;
					case "HOMEpage-B2B-3":
						HOMEpage_B2B_3.push(results[i]);
						break;
					case "HOMEpage-Bottom-1":
						HOMEpage_Bottom_1.push(results[i]);
						break;
					case "HOMEpage-Bottom-2":
						HOMEpage_Bottom_2.push(results[i]);
						break;
					case "HOMEpage-Bottom-3":
						HOMEpage_Bottom_3.push(results[i]);
						break;
					case "HOMEpage-Alphabank":
						HOMEpage_Alphabank.push(results[i]);
						break;	

				}
			}

			var context = {Banners_Top:HOMEpage_TOP, Banners_FASA:HOMEpage_FASA, Banners_Lifestyle:HOMEpage_Lifestyle,Banners_Middle_1:HOMEpage_Middle_1, Banners_Middle_2:HOMEpage_Middle_2, Banners_Middle_3:HOMEpage_Middle_3, Banners_Middle_4:HOMEpage_Middle_4,Banners_Middle_5:HOMEpage_Middle_5,Banners_Middle_6:HOMEpage_Middle_6, Banners_B2B_1:HOMEpage_B2B_1, Banners_B2B_2:HOMEpage_B2B_2, Banners_B2B_3:HOMEpage_B2B_3, Banners_Bottom_1:HOMEpage_Bottom_1, Banners_Bottom_2:HOMEpage_Bottom_2, Banners_Bottom_3:HOMEpage_Bottom_3, Banners_Alphabank:HOMEpage_Alphabank, Banners_Before_Slider:HOMEpage_Before_Slider, Banners_After_Slider:HOMEpage_After_Slider, Banners_Special_Promo:HOMEpage_Special_Promo, Banners_After_Middle:HOMEpage_After_Middle};

			Handlebars.registerHelper("setVar", function(varName, varValue, options) {
				options.data.root[varName] = varValue;
			});
			// TOP
			var theTemplateScript = $("#fullBanners-template").html();
			var theTemplate = Handlebars.compile(theTemplateScript);
			var theCompiledHtml = theTemplate(context);
			$('#fullBanners').html(theCompiledHtml);
			// Lifestyle
			var theTemplateScript = $("#lifestyle-template").html();
			var theTemplate = Handlebars.compile(theTemplateScript);
			var theCompiledHtml = theTemplate(context);
			$('#lifestyle').html(theCompiledHtml);	
			// MIDDLE
			var theTemplateScript = $("#middle-template").html();
			var theTemplate = Handlebars.compile(theTemplateScript);
			var theCompiledHtml = theTemplate(context);
			$('#middle').html(theCompiledHtml);	
			// B2B
			var theTemplateScript = $("#kbusiness-template").html();
			var theTemplate = Handlebars.compile(theTemplateScript);
			var theCompiledHtml = theTemplate(context);
			$('#kbusiness').html(theCompiledHtml);	
			// BOTTOM
			var theTemplateScript = $("#bottom-template").html();
			var theTemplate = Handlebars.compile(theTemplateScript);
			var theCompiledHtml = theTemplate(context);
			$('#bottom').html(theCompiledHtml);	
			//ALPHABANK
			var theTemplateScript = $("#alphabank-template").html();
			var theTemplate = Handlebars.compile(theTemplateScript);
			var theCompiledHtml = theTemplate(context);
			$('#alphabank').html(theCompiledHtml);	
			//==== Owl Carousel INITIATON =====
			var owl = $('.fullBanners');
			owl.owlCarousel({
				checkVisible: false,
				items: 1,
				loop: true,
				autoplay: true,
				autoplayTimeout: 8000,
				// autoplayHoverPause: pauseOnHover,
				lazyLoad: true,
				lazyLoadEager: 1,
				slideTransition: "linear",
				// First Approach
				// onInitialized: progressBar,
				// onTranslate: moved,
				// onTranslated: progressBar,
				// onDrag : pauseOnDragging,

				// Second Aprroach
				onInitialized: startProgressBar,
				onLoadedLazy: startProgressBar,
				onTranslate: resetProgressBar,
				onTranslated: startProgressBar,
				onDragged: stopProgressBar,
				dotsContainer: ($(window).width() > 768 ) ? ".smallBannerRow .inner" : "",
				responsive : {
					0 : {
						dots: true,
					},
					769 : {
						dots: true,
						dotsContainer: ".smallBannerRow .inner"
					}
				}
			});

			owl.on('dragged.owl.carousel',function(event) {
				$('.smallBannerRow .inner a.active').addClass("progress-active");
				$("#slide-progress").css({"background":"transparent"});
				owl.trigger('stop.owl.autoplay');
				stopProgressBar(event);
			});

			// owl.on('mouseover',function(){
			// 	var computedStyle = $("#slide-progress").css('width');
			// 	$("#slide-progress").css('width', computedStyle);
			// });

			// owl.on('mouseout',function(){
			// 	var computedStyle = $("#slide-progress").css('width');
			// 	var remainTime = 20 - computedStyle;
			// 	$("#slide-progress").css({
			// 		"transition": remainTime,
			// 	});
			// });

			$('.smallBannerRow .inner .smallBanner').on( "click",function(e){
				e.preventDefault();
				$('.smallBannerRow .inner a.active').addClass("progress-active");
				$("#slide-progress").css({"background":"transparent"});
				owl.on('changed.owl.carousel',function(event) {
					stopProgressBar(event);
				});
				owl.trigger('to.owl.carousel', [$(this).index(), 300]);
				owl.trigger('stop.owl.autoplay');
			});

			$("img").unveil(200);

			var kbusiness = $("#HOMEpage-kBusiness .owl-carousel").owlCarousel({
				nav: false,
				lazyLoad: true,
				pullDrag: false,
				responsive : {
					0 : {
						items: 1,
						dots: true,
						loop: true,
						rewind: true
					},
					480 : {
						items: 2,
						dots: true,
						margin: 27,
						loop: true,
						rewind: true
					},
					768 : {
						items: 2,
						dots: true,
						margin: 27,
						loop: true,
						rewind: true
					},
					992 : {
					    mouseDrag: false,
						items: 3,
						margin: 27,
						loop: false
					}
				},
				// onDragged: callback()
			});

			kbusiness.on('changed.owl.carousel', function(event) {
				$("img").unveil(200);
				console.log('drag');
			});

			function callback() {
				console.log('drag');
			}

			var bottom = $("#HOMEpage-Bottom .owl-carousel").owlCarousel({
				nav: false,
				lazyLoad: true,
				pullDrag: false,
				responsive : {
					0 : {
						items: 1,
						dots: true,
						loop: true
					},
					480 : {
						items: 2,
						dots: true,
						margin: 20,
						loop: false
					},
					768 : {
						items: 2,
						dots: true,
						margin: 20,
						loop: false
					},
					992 : {
					    mouseDrag: false,
						items: 3,
						margin: 20,
						loop: false
					}
				}
			});

			var blogItems = $(".blog-items").owlCarousel({
				nav: false,
				lazyLoad: true,
				pullDrag: false,
				responsive : {
					0 : {
						items: 1,
						dots: true,
						loop: true
					},
					480 : {
						items: 2,
						dots: true,
						margin: 20,
						loop: false
					},
					768 : {
						items: 3,
						margin: 20,
						dots: true,
						loop: false
					},
					992 : {
					    mouseDrag: false,
						items: 4,
						margin:20,
						loop: false
					}
				}
			});

		},//success
		complete: function(){
			//complete
			//Fire GA Functions for Homepage
			registerFrontpageBannersImpression();
			registerFrontpageBannersImpressionClick();

			registerMiddleBannersImpression("lifestyle");
			registerMiddleBannersClick("lifestyle");

			registerMiddleBannersImpression("middle");
			registerMiddleBannersClick("middle");

			registerClick("kbusiness");
			registerImpression("kbusiness");

			registerkServicesImpression();
			registerkServicesImpressionClick();

			registerClick("bottom");
			registerImpression("bottom");

			registerAlphaBankImpression();
			registerAlphaBankClick("alphabank");
		}
	});//ajax call

});//ready

//===============  EXTEND HANDLEBARS ==================//
Handlebars.registerHelper('compare', function(lvalue, rvalue, options) {

	if (arguments.length < 3)
		throw new Error("Handlerbars Helper 'compare' needs 2 parameters");

	var operator = options.hash.operator || "==";

	var operators = {
		'==':       function(l,r) { return l == r; },
		'===':      function(l,r) { return l === r; },
		'!=':       function(l,r) { return l != r; },
		'<':        function(l,r) { return l < r; },
		'>':        function(l,r) { return l > r; },
		'<=':       function(l,r) { return l <= r; },
		'>=':       function(l,r) { return l >= r; },
		'typeof':   function(l,r) { return typeof l == r; }
	}

	if (!operators[operator])
		throw new Error("Handlerbars Helper 'compare' doesn't know the operator "+operator);

	var result = operators[operator](lvalue,rvalue);

	if( result ) {
		return options.fn(this);
	} else {
		return options.inverse(this);
	}

});

// Second Approach
function startProgressBar(event) {
	var item = event.item.index;
	var name = event.type;
	//console.log(name);
	// apply keyframe animation

	$("#slide-progress").css({
		"width": "100%",
		"transition": "width",
		"transition-timing-function": "linear"
	});


	if ( item == 2 || item == 6 ){
		$("#slide-progress").css({
			"transition-duration": "32s",
		});
	}else if ( item == 3 ) {
		$("#slide-progress").css({
			"transition-duration": "24s",
		});
	}else if ( item == 4 ) {
		$("#slide-progress").css({
			"transition-duration": "16s",
		});
	}else if ( item == 5 || item == 1 ){
		$("#slide-progress").css({
			"transition-duration": "8s",
		});
	}
  }

  function resetProgressBar(event) {
	var item = event.item.index;
	// console.log(item);

	if ( item == 2 || item == 6 ){
		$("#slide-progress").css({
			"width": "0",
			"transition": "width 0s"
		});
	}else if ( item == 3 ) {
		$("#slide-progress").css({
			"width": "25%",
			"transition": "width 0s"
		});
	}else if ( item == 4 ) {
		$("#slide-progress").css({
			"width": "50%",
			"transition": "width 0s"
		});
	}else if ( item == 5 || item == 1 ){
		$("#slide-progress").css({
			"width": "75%",
			"transition": "width 0s"
		});
	}
  }

function stopProgressBar(event) {
	var item = event.item.index;
	//console.log(item);

	$('#slide-progress[class^="width"]').removeClass();

	$('.smallBannerRow .inner a').removeClass("progress-active");

	if ( item == 2 || item == 6 ){
		$("#slide-progress").addClass('width25');
		$('.smallBannerRow .inner a.active').addClass("progress-active");
	}else if ( item == 3 ) {
		$("#slide-progress").addClass('width50');
		$('.smallBannerRow .inner a.active').addClass("progress-active");
	}else if ( item == 4 ) {
		$("#slide-progress").addClass('width75');
		$('.smallBannerRow .inner a.active').addClass("progress-active");
	}else if ( item == 5 || item == 1 ){
		$("#slide-progress").addClass('width100');
		$('.smallBannerRow .inner a.active').addClass("progress-active");
	}

	$("#slide-progress").addClass('notransition');

}

function pauseOnHover(){
	isPause = true;

	return isPause;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//GA Impressions functions
function registerFrontpageBannersImpression(){

    let banners = [];
    let position = $('.promoBannerSlider').attr('id');

    $('.promoBannerSlider .owl-item:not(.cloned)').each(function(index){
      if ($(this).find('a').data('banner-name')) {
        let dataName = $(this).find('a').data('banner-name').trim();

        let id = dataName.split('-')[2];
        let dash = dataName.lastIndexOf("-");
        let name = dataName.substring(0, dash);
    	let slotNumber =  ($(this).find('.banner').data('index')+1);
    	
        banners.push({
          'id': id,
          'name': name,
          'position': position,
          'creative': "slot-"+slotNumber
        });
      }

    });

	pushToDataLayer("impression", banners);

}

function registerFrontpageBannersImpressionClick(){


	$('.promoBannerSlider .owl-item').each(function( index ) {

		$(this).click(function(e){
			//e.preventDefault();
			if(  $(this).find('a').data('banner-name')   ) {
				let banners = [];
				let position = $('.promoBannerSlider').attr('id');
				let dataName = $(this).find('a').data('banner-name').trim();

				let id = dataName.split('-')[2];
				let dash = dataName.lastIndexOf("-");
				let name = dataName.substring(0, dash);
				let slotNumber =  ($(this).find('.banner').data('index')+1);

				banners.push({
					'id': id,
					'name': name,
					'position': position,
					'creative': "slot-"+  slotNumber
				});

				pushToDataLayer("promotionClick", banners)
			}
		});
	});
}

function registerMiddleBannersImpression(zone){

	if( $('#'+zone).length ) {
		let banners = [];
		$('#'+zone+' .tilesCont div.banner').each(function( index ) {

			let dataName = $(this).find('a').data('banner-name');
			let id = dataName.split('-')[2];
			let dash = dataName.lastIndexOf("-");
			let name = dataName.substring(0, dash);

			banners.push({
				'id': id,
				'name': name,
				'position': 'HomePage-'+capitalizeFirstLetter(zone)+'-'+(index+1),
				'creative': ''
			});
		});

		pushToDataLayer("impression", banners);
	}
}

  
function registerMiddleBannersClick(zone){

	$('#'+zone+' .tilesCont div.banner').each(function( index ) {

		//console.log(zone);

		$(this).click(function (e) {
			//e.preventDefault();
			//e.stopPropagation();
			if ($(this).find('a').data('banner-name')) {
				let dataName = $(this).find('a').data('banner-name').trim();
				let banners = [];
				let id = dataName.split('-')[2];
				let dash = dataName.lastIndexOf("-");
				let name = dataName.substring(0, dash);

				banners.push({
					'id': id,
					'name': name,
					'position': 'HomePage-'+capitalizeFirstLetter(zone)+'-'+(index+1),
					'creative': ''
				});

				pushToDataLayer("promotionClick", banners);
			}
		});
	});

}

function registerAlphaBankImpression(){

  if($('.image').length) {

    if ($('.image').closest('a').data('banner-name')) {

      let dataName = $('.image').closest('a').data('banner-name').trim();
      let banners = [];
      let id = dataName.split('-')[2];
      let dash = dataName.lastIndexOf("-");
      let name = dataName.substring(0, dash);

      banners.push({
        'id': id,
        'name': name,
        'position': 'homepage-bottom',
        'creative': ''
      });

	  pushToDataLayer("impression", banners);
    }
  }
}


function registerAlphaBankClick(zone){

  $('#'+zone+' div.banner').click(function (e) {

	//e.preventDefault();
	//e.stopPropagation();
	
    if ($(this).find('a').data('banner-name')) {
		pushToDataLayer("promotionClick", storeBanners(this,zone));
    }
  });
}

function registerImpression(zone){

	let banners = [];
	$('#'+zone+' .owl-item:not(.cloned) > .banner').each(function( index ) {
		//console.log(zone);

		let dataName = $(this).find('a').data('banner-name');
		let id = dataName.split('-')[2];
		let dash = dataName.lastIndexOf("-");
		let name = dataName.substring(0, dash);

		banners.push({
			'id': id,
			'name': name,
			'position': 'HomePage - '+zone,
			'creative': ''
		});
	});

	pushToDataLayer("impression", banners);
}

function registerClick(zone){

	$('#'+zone+' .owl-item:not(.cloned) > .banner').each(function( index ) {

		//console.log(zone);

		$(this).click(function (e) {
			//e.preventDefault();
			//e.stopPropagation();
			if ($(this).find('a').data('banner-name')) {
				pushToDataLayer("promotionClick", storeBanners(this,zone));
			}
		});
	});

}

function registerkServicesImpression(){

	let banners = [];

	$('#kServices .kServicesTile').each(function( index ) {

		let name = $(this).find("h5").text().trim();

		banners.push({
		  'id': "kServices-"+index,
		  'name': name,
		  'position': 'HomePage – kServices',
		  'creative': ''
		});

	});

	pushToDataLayer("impression", banners);
}

function registerkServicesImpressionClick(){

	$('#kServices .kServicesTile').each(function( index ) {

		$(this).click(function (e) {
			let banners = [];

			//e.preventDefault();
			//e.stopPropagation();

			let name = $(this).find("h5").text().trim();

			banners.push({
				'id': "kServices-"+index,
				'name': name,
				'position': 'HomePage – kServices',
				'creative': ''
			});

			pushToDataLayer("promotionClick", banners);
		});
	});

}

function storeBanners(selector,zone) {
	let banners = [];

	let dataName = $(selector).find('a').data('banner-name').trim();
	let id = dataName.split('-')[2];
	let dash = dataName.lastIndexOf("-");
	let name = dataName.substring(0, dash);

	banners.push({
		'id': id,
		'name': name,
		'position': 'HomePage - '+zone,
		'creative': ''
	});

	return banners;
}

function pushToDataLayer(eventType, banners) {

	let ecommerce = (eventType === "promotionClick") ? 'promoClick' : 'promoView';

	if ( eventType == "impression") {
		dataLayer.push({
			'ecommerce': {
				ecommerce: {
				'promotions': banners
			  }
			}
		});
	} else if ( eventType == "promotionClick") {
		dataLayer.push({
			'event': eventType,
			'ecommerce': {
				ecommerce: {
				'promotions': banners
			  }
			}
		});
	}

}