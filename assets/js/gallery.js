/*------------------------------------- Gallery popup -------------------------------------*/
$(".img-zoom").magnificPopup({
	type: "image"
	, closeOnContentClick: !0
	, mainClass: "mfp-fade"
	, gallery: {
		enabled: !0
		, navigateByImgClick: !0
		, preload: [0, 1]
	}
})