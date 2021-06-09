var rellax = new Rellax('.rellax', {
	center: true
});
if(screen.width < 576 && jQuery('.rellax').length !=0) {
	rellax.destroy();
}

var wow = new WOW(
  {
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       0,          // distance to the element when triggering the animation (default is 0)
    mobile:       true,       // trigger animations on mobile devices (default is true)
    live:         true,       // act on asynchronously loaded content (default is true)
    callback:     function(box) {
    	//console.log(box);
    },
    scrollContainer: null // optional scroll container selector, otherwise use window
  }
);
wow.init();


(function (jQuery) {

	function noise_bg(canvas_item) {
		const noise = () => {
			let canvas, ctx;
			let wWidth, wHeight;
			let noiseData = [];
			let frame = 0;
			let loopTimeout;
			// Create Noise
			const createNoise = () => {
				const idata = ctx.createImageData(wWidth, wHeight);
				const buffer32 = new Uint32Array(idata.data.buffer);
				const len = buffer32.length;

				for (let i = 0; i < len; i++) {
					if (Math.random() < 0.5) {
						buffer32[i] = 0xff000000;
					}
				}
				noiseData.push(idata);
			};
			// Play Noise
			const paintNoise = () => {
				if (frame === 9) {
					frame = 0;
				} else {
					frame++;
				}

				ctx.putImageData(noiseData[frame], 0, 0);
			};
			// Loop
			const loop = () => {
				paintNoise(frame);

				loopTimeout = window.setTimeout(() => {
					window.requestAnimationFrame(loop);
				}, (1000 / 25));
			};
			// Setup
			const setup = () => {
				wWidth = window.innerWidth;
				wHeight = window.innerHeight;

				canvas.width = wWidth;
				canvas.height = wHeight;

				for (let i = 0; i < 10; i++) {
					createNoise();
				}

				loop();
			};
			// Reset
			let resizeThrottle;
			const reset = () => {
				window.addEventListener('resize', () => {
					window.clearTimeout(resizeThrottle);

					resizeThrottle = window.setTimeout(() => {
						window.clearTimeout(loopTimeout);
						setup();
					}, 200);
				}, false);
			};

			// Init
			const init = (() => {
				canvas = canvas_item;
				ctx = canvas.getContext('2d');
				setup();
			})();
		};

		noise();
	};

	var canvas_items = document.getElementsByClassName("noise");
	for (var i = 0; i < canvas_items.length; i++) {
		noise_bg(canvas_items.item(i));
		//console.log(canvas_items.item(i));
	}


})(jQuery.noConflict());




(function (jQuery) {
	jQuery('.owl-carousel-testimonials').owlCarousel({
		loop: false,
		margin: 10,
		nav: false,
		dots: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 2
			}
		}
	})
})(jQuery.noConflict());

(function (jQuery) {

	if(screen.width > 576) {

		var owl = jQuery('.owl-carousel-featured');
		owl.owlCarousel({
			loop: false,
			nav: true,
			margin: 70,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				960: {
					items: 2
				},
				1200: {
					items: 2
				},
			}

		});
	}





	jQuery('.owl-carousel-featured').on('translated.owl.carousel', function (event) {
		if (event.page.index == 0 && event.item.index == 0) {
			console.log('start');
			jQuery('body').css('overflow', 'auto');
			jQuery('body').off('mousewheel', 'main');
		}
		if (event.page.index + 1 == event.page.count) {
			console.log('end');
			jQuery('body').css('overflow', 'auto');
			jQuery('body').off('mousewheel', 'main');
		}
	})

})(jQuery.noConflict());


(function (jQuery) {
	jQuery('.testiminial-item p').each(function () {
		//console.log($(this).text().length);
		if (jQuery(this).text().length >= 160) {
			var first = jQuery(this).text().substr(0, 160);
			var second = jQuery(this).text().substr(160);
			var new_str = first + '... </br>' + second;
			jQuery(this).html(new_str);
		}
	});
	jQuery('body').on('click', '.testiminial-item .more', function (event) {
		event.preventDefault();
		jQuery(this).parent().find('p').toggleClass('open');
		jQuery(this).toggleClass('open');
	})
})(jQuery.noConflict());



(function (jQuery) {
	jQuery('a[href*=\\#]').click(function () {
		if (this.hash.slice(1).length >= 0) {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
				&& location.hostname == this.hostname) {
				if (this.hash.slice(1)) {
					var jQuerytarget = jQuery(this.hash);
					jQuerytarget = jQuerytarget.length && jQuerytarget || jQuery('[name=' + this.hash.slice(1) + ']');
					if (jQuerytarget.length) {
						var targetOffset = jQuerytarget.offset().top - 0; //#main-header - заменить на ваш элемент
						jQuery('html,body').animate({ scrollTop: targetOffset }, 1000);
						return false;
					}
				}
			}
		}
	});
})(jQuery.noConflict());



(function (jQuery) {
	jQuery(document).on("mousemove", ".owl-carousel-testimonials", function (e) {
		e.preventDefault();
		var x = e.clientX;
		var y = e.clientY;
		var newposX = x;
		var newposY = y;
		jQuery(".circle").css({ "left": newposX, "top": newposY });
		//console.log(newposY);
	});
	jQuery(document).on("mouseover", ".owl-carousel-testimonials", function (e) {
		e.preventDefault();
		jQuery(".circle").show();
	});
	jQuery(document).on("mouseleave", ".owl-carousel-testimonials", function (e) {
		e.preventDefault();
		jQuery(".circle").hide();
	});

})(jQuery.noConflict());


(function (jQuery) {
	jQuery(document).on("mousemove", ".video_hover", function (e) {
		e.preventDefault();
		var x = e.clientX;
		var y = e.clientY;
		var newposX = x;
		var newposY = y;
		jQuery(".play_hover").css({ "left": newposX, "top": newposY });
		//console.log(newposY);
	});
	jQuery(document).on("mouseover", ".video_hover", function (e) {
		e.preventDefault();
		jQuery(".play_hover").show();
	});
	jQuery(document).on("mouseleave", ".video_hover", function (e) {
		e.preventDefault();
		jQuery(".play_hover").hide();

	});
	jQuery(document).on("click", ".video_hover", function (e) {
		e.preventDefault();
		if (jQuery(this).find('video').get(0).paused) {
			jQuery(this).find('video').trigger('play');
			jQuery(".play_hover").text('Pause');
			jQuery(this).find('.video-button').addClass('play');
		} else {
			jQuery(this).find('video').trigger('pause');
			jQuery(".play_hover").text('Play');
			jQuery(this).find('.video-button').removeClass('play');
		}
	});
})(jQuery.noConflict());



(function (jQuery) {
	jQuery('body').on('click', '.menu-trigger', function (event) {
		event.preventDefault();
		jQuery('.main-nav-holder .main-nav-bottom>div').toggleClass('animated fadeInLeft delay-1s');
		jQuery('.main-nav-holder nav a:first-child').toggleClass('animated fadeInDown');
		jQuery('.main-nav-holder nav a:nth-child(2)').toggleClass('animated fadeInDown delay-500');

		if (jQuery(this).hasClass('open')) {
			jQuery('.main-nav').removeClass('open');
			jQuery(this).removeClass('open');
			jQuery('.main-header').removeClass('open');
		} else {
			jQuery('.main-nav').addClass('open');
			jQuery(this).addClass('open');
			jQuery('.main-header').addClass('open');
		}
	});
})(jQuery.noConflict());

(function (jQuery) {
	jQuery('.c-programm .c-programm_elem').click(function (event) {
		event.preventDefault();
		if (jQuery(this).hasClass('active')) {
			jQuery(this).removeClass('active');
		} else {
			jQuery(this).addClass('active');
		}
	});
})(jQuery.noConflict());

(function (jQuery) {
	var inputQnt = jQuery('.qunt input');
	var upQnt = jQuery('.qunt #upQnt');
	var downQnt = jQuery('.qunt #downQnt');
	var min = inputQnt.attr('min');
	var max = inputQnt.attr('max');
	upQnt.click(function(){
		event.preventDefault();
		var oldValue = parseFloat(inputQnt.val());
        if (oldValue >= max) {
        	var newVal = oldValue;
        } else {
        	var newVal = oldValue + 1;
		}
		inputQnt.val(newVal);
	})
	downQnt.click(function(){
		event.preventDefault();
		var oldValue = parseFloat(inputQnt.val());
        if (oldValue <= min) {
        	var newVal = oldValue;
        } else {
        	var newVal = oldValue - 1;
		}
		inputQnt.val(newVal);
	})
})(jQuery.noConflict());

(function (jQuery) {
	jQuery('.popup_open').magnificPopup({
		src: '.popup',
		closeBtnInside: false,
		removalDelay: 1000, //delay removal by X to allow out-animation
		mainClass: 'animated slideInDown',
		callbacks: {
			open: function() {
			    console.log(this.content);
			    this.content.find('.form-row').addClass('animated fadeInUp delay-1s');
			},
		    beforeClose: function() {
		        this.content.addClass('animated slideOutUp');
		    }, 
		    close: function() {
		        this.content.removeClass('animated slideOutUp'); 
		    }
		  },
	});
	jQuery(document).on('click', '.back', function (e) {
		e.preventDefault();
		jQuery.magnificPopup.close();
	});
})(jQuery.noConflict());

(function (jQuery) {

	let scroll_old;
	let direction = 1;
	var speedindex = 1;
	let timing = 20;
	let title_offset_width = {};
	let title_offset_left = {};
	let title_all = document.getElementsByClassName("title-scroll");
	var pos = [];
	var i_count = [];
	for (let i = 0; i < title_all.length; i++) {
		title_offset_width[i] = title_all[i].offsetWidth;
		title_offset_left[i] = title_all[i].offsetLeft;
		i_count[i] = i;
		title_all[i].style.position = 'relative';
		title_all[i].style.display = 'inline-block';
		setInterval(moove1, timing, speedindex, title_all, i);
	}
	window.onscroll = function(e) {
		if(this.scrollY>=scroll_old){direction = 1; }else if(this.scrollY<=scroll_old){direction = -1; }else{direction = 1; }
		scroll_old = this.scrollY;
		for (var i in i_count) {
			moove1(4, title_all, i_count[i]);
		};
		//header_fix();
	}
	function moove1(speedindex, title_all, i){
		if (typeof pos[i] == 'undefined') { pos[i] = 0;}
		if(speedindex){}else{speedindex = 1; } 
		pos[i] = pos[i] + (1*direction*speedindex);
		title_all[i].style.left = pos[i] + 'px';
		if(direction>=0 && title_all[i].offsetLeft>=0 && title_all[i].offsetLeft>=window.innerWidth){
			pos[i] = title_all[i].style.left = 0 - title_offset_width[i] - title_offset_left[i];
		}
		if(direction<=0 &&  title_all[i].offsetLeft<=0 && title_all[i].offsetLeft<=(title_offset_width[i]+title_offset_left[i])*-1){
			pos[i] = title_all[i].style.left = window.innerWidth-1;
		}
	}

	/*function header_fix(){
		var currentScrollPos = window.pageYOffset;
	  if (currentScrollPos < 100) {
	    document.getElementById("navbar").className = 'main-header';
	  } else {
	    document.getElementById("navbar").className = "main-header scrolled";
	  }
	}*/
})(jQuery.noConflict());



(function (jQuery) {
	if(jQuery('.white--waipoint').length !=0) { 
		jQuery('.white--waipoint').each(function(index) {
			var inview = new Waypoint.Inview({
			  element: jQuery(this)[0],
			  enter: function(direction) {
			    console.log('Enter triggered with direction ' + direction)
			    if(direction=='up'){
			    	jQuery('.main-header').addClass('black');
			    	jQuery(this.element).addClass('inview');

			    }else{
			    	jQuery(this.element).addClass('inview');
			    }
			  },
			  entered: function(direction) {
			    console.log('Entered triggered with direction ' + direction)
			    if(direction=='up'){
			    	if(!jQuery(this.element).siblings().hasClass('inview')){
			    		jQuery('.main-header').removeClass('black');
			    	}
			    	if(!jQuery(this.element).prev().hasClass('inview')){
			    		jQuery('.main-header').removeClass('black');
			    	}
			    }else{}
			  },
			  exit: function(direction) {
			    console.log('Exit triggered with direction ' + direction)
			    if(direction=='up'){}else{
			    	jQuery('.main-header').addClass('black');
			    }
			  },
			  exited: function(direction) {
			    console.log('Exited triggered with direction ' + direction)
			     if(direction=='up'){
			     	jQuery(this.element).removeClass('inview');
			    }else{
			    	jQuery('.main-header').removeClass('black');
			    	jQuery(this.element).removeClass('inview');
			    }
			  },
			  offset: '100%'
			});
		});
	}
})(jQuery.noConflict());