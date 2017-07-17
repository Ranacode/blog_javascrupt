import $ from 'jquery';
import jQuery from 'jquery';
window.$ = $;
window.jQuery = jQuery;
require('bootstrap')

$('[data-toggle="tooltip"]').tooltip()

//Hover effect for categories tags
let categories = $('.right-column').find('.categories');

categories.on('mouseover', 'a.link-category', function() {
  $(this).children().css('color', '#FFF')
})
categories.on('mouseleave', 'a.link-category', function() {

  $(this).children().css('color', '#000')
})
