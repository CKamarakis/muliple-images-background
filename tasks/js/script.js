$(document).ready(function () {
	var element_selector = '.background-image-part';
	var images_count = $(element_selector).length;
	var img_size = 100 / images_count;

	vertical_background(element_selector, images_count, img_size);

	$(document).on('click', '#horizontal-background', function (e) {
		e.preventDefault();
		horizontal_background(element_selector, images_count, img_size);
	});

	$(document).on('click', '#vertical-background', function (e) {
		e.preventDefault();
		vertical_background(element_selector, images_count, img_size);
	});

});

var horizontal_background = function (element_selector, images_count, img_size) {
	var image_position = 0;
	$(element_selector).css("left", 0);
	$(element_selector).css("right", 0);
	$(element_selector).css("width", "100vw");

	for (i = 1; i <= images_count; i++) {
		var single_element_selector = element_selector.concat(':nth-of-type(' + i + ')');

		$(single_element_selector).css("top", image_position + 'vh');
		$(single_element_selector).css("height", img_size + "vh");
		$(single_element_selector).css("background-position", "50% " + image_position + "%");
		image_position += img_size;
	}
};
var vertical_background = function (element_selector, images_count, img_size) {
	var image_position = 0;
	$(element_selector).css("bottom", 0);
	$(element_selector).css("top", 0);
	$(element_selector).css("height", '100vh');

	for (i = 1; i <= images_count; i++) {
		var single_element_selector = element_selector.concat(':nth-of-type(' + i + ')');

		$(single_element_selector).css("left", image_position + 'vw');
		$(single_element_selector).css("width", img_size + "vw");
		$(single_element_selector).css("background-position", image_position + "% 50%");
		image_position += img_size;
	}
};