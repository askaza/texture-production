$(document).ready(function() {

  var owl = $('.b-carousel_type_owl');

$('#gallery-carousel').owlCarousel({
	baseClass:			'b-carousel_type_owl',
	controlsClass:		'b-carousel-controls b-carousel-controls_type_owl',
	stageOuterClass:	'b-carousel__frame',
	stageClass:			'b-carousel__list',
	autoHeightClass: 	'b-carousel__frame b-carousel__frame_type_auto-height',
	navContainerClass:	'b-carousel-navigation b-carousel-navigation_type_owl b-carousel-navigation_viewtype_stripe',
	navClass:			['b-carousel-navigation__item b-carousel-navigation__item_type_previous','b-carousel-navigation__item b-carousel-navigation__item_type_next'],
	itemClass:			'b-carousel__item',
	itemActiveClass: 	'b-carousel__item_state_selected',
	dragClass:			'b-carousel_type_draggable',
	refreshClass:		'b-carousel_state_refresh',
	loadedClass:		'b-carousel_state_loaded',
	loadingClass:		'b-carousel_state_loading',
	dotClass: 		'b-pagination__item',
	dotActiveClass: 'b-pagination__item_state_selected',
	dotsClass:		'b-pagination b-pagination_type_owl b-pagination_viewtype_dots',

	autoHeight:false,
	autoWidth:false,
	margin:20,
	center: true,
	items:2,

	responsive:{
		760:{
			items:4,
			autoWidth:false,
			center:false
		}
	},
	loop:true,
	autoplay:true,
	autoplayTimeout:5000,
	autoplayHoverPause:true,

	nav:true,
	navText: ['<span class="b-carousel-navigation__item-text">Previous</span>', '<span class="b-carousel-navigation__item-text">Next</span>'],
	dots:true,

	smartSpeed:400,
	autoplaySpeed:800,

	addClassActive:true,
	startPosition:0
});
});


//
//center: true,
//	items:2,
//	loop:true,
//	margin:10,
//	responsive:{
//	600:{
//		items:4
//	}
//}