
/*__________ Custom Js davidruizlopez.es____________
** Code: David Ruiz López @ruizfrontend
***************************************************/

(function($) {
$(document).ready(function(){

  /*___________ initial animation _____________*/
  $viewThumbs = $('.view-thumbs');
  $viewThumbs.find('.views-row-1').delay(100).fadeIn(200);
  $viewThumbs.find('.views-row-2').delay(1100).fadeIn(200);
  $viewThumbs.find('.views-row-3').delay(2100).fadeIn(200);
  $viewThumbs.find('.views-row-4').delay(3100).fadeIn(200);
  $viewThumbs.find('.views-header h2').delay(4500).fadeIn(400);
  $viewThumbs.find('.views-header .h3-1').delay(5200).fadeIn(400);
  $viewThumbs.find('.views-header .h3-2').delay(6000).fadeIn(400);
  $viewThumbs.find('.views-header .h3-3').delay(6800).fadeIn(400);
  $viewThumbs.find('.views-header .h3-4').delay(7600).fadeIn(400);
  $viewThumbs.find('.views-header').delay(8000).animate({'top': '-100px'}, 400, function(){
    $viewThumbs.find('.views-header h3').fadeOut(400);
  });
  $('#block-views-thumbs-block .views-header h2').hover(function(){
    jQuery(this).siblings().fadeIn(500);
  }, function(){
    jQuery(this).siblings().fadeOut(200)
  })

  /*___________ main block bind links _____________*/
  $('#block-views-proyectos-block .views-row').each(function(){
    classes = $(this).attr('class');
    $(this).attr('id', classes.substr(classes.lastIndexOf(' ')+1));
  })
  $viewThumbs.find('.views-field-field-fullscreen a').bind('click', function(){
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500);
  })

  /*___________ menu _____________*/
  $('.mb-menu').hide();
  $('.mb-head a.butt').bind('click', function(e){
    e.preventDefault();
    $(this).parents('#menu-bar').find('.mb-menu').slideToggle(200);
  });
  /*___________ navigation links_____________*/
  $('.mb-local a').bind('click', function(e){
    e.preventDefault();
    $(this).parents('.mb-menu').slideUp(200);
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500);
  })
  /*___________ pagers links_____________*/
  $('.views-field-nothing .wk-col-l a, .node-pager .wk-col-l a').bind('click', function(e){ //prev
    e.preventDefault();
    $target = $(this).parents('.views-row').prev();
    if($target.length){ //we're in views
      $target.attr('id', 'fila-' + $target.index());
      $('html, body').animate({ scrollTop: $('#' + $target.attr('id')).offset().top }, 500);
    } else  if($(this).parents('#node-3').length){
      $('html, body').animate({ scrollTop: $('#block-views-proyectos-block .views-row').last().offset().top }, 500);
    } else {
      $('html, body').animate({ scrollTop: 0 }, 500);
    }
  })
  $('.views-field-nothing .wk-col-r a, .node-pager .wk-col-r a, .thumbs-pager a').bind('click', function(e){ //next
    e.preventDefault();
    if($(this).parents('.views-row').length){ //we're in views
      $target = $(this).parents('.views-row').next();
      if($target.length){
        $target.attr('id', 'fila-' + $target.index());
        $('html, body').animate({ scrollTop: $('#' + $target.attr('id')).offset().top }, 500);
      } else { //last elements views
        if($(this))
        $('html, body').animate({ scrollTop: $('#node-3').offset().top }, 500);
      }
    } else if($(this).parents('#node-3').length) { //bio link
      $('html, body').animate({ scrollTop:$('#block-webform-client-block-1').offset().top }, 500);
    } else { //thumbs views block
      $('html, body').animate({ scrollTop:$('#block-views-proyectos-block').offset().top }, 500);
    }
  })
})
  /*___________ window sizing _____________*/
  /* force each section to be at least as high as the viewport */
  function resizewin(){
    doc_height =  $(window).height();
    doc_height = doc_height < 500 ? 500 : doc_height;
    $('#block-views-thumbs-block, #block-webform-client-block-1, #block-views-proyectos-block .views-row, #block-system-main').each(function(){
      $(this).css({'min-height': doc_height})
    });
    $('#block-views-thumbs-block .view').each(function(){
      $(this).css({'height': doc_height})
    });
  }
  //$(window).bind('resize',resizewin);
Drupal.behaviors.resizewin = {
  attach: function(context, settings) {
    resizewin();
  }
}
    //webform behaviour
Drupal.behaviors.webform = {
  attach: function(context, settings) {
      //hide labels if content on reload
    if(!$('.webformint textarea').val()==''){$('.webformint textarea').parents('.form-item').find('label').hide();$('.webform-component-markup').hide();}
    if(!$('.webformint input[type=email]').val()==''){$('.webformint input[type=email]').parents('.form-item').find('label').hide();$('.webform-component-markup').hide();}

      //hide labels on events
    $('.webformint textarea,.webformint input[type=email]').focus(function(){
      $(this).parents('.form-item').find('label').fadeOut(200);
    }).blur(function(){
      if(this.value==''){$(this).parents('.form-item').find('label').fadeIn(200);}
    })
  }
}

    //error messeges behaviour
Drupal.behaviors.hideMesseges = {
  attach: function(context, settings) {
    $('.msg--cnt').click(function(){$(this).fadeOut(200)})
  }
}

/*___________ gallery _____________*/

  //helper to get image chaches URLS from the images
function imgCachesCreate(img, imgStyleBig, imgStyleSmall ){
  if(img && (pos = img.indexOf('/sites/default/files/')) > 0){
    pos += 21;
    ini = img.slice(0,pos);
    end = img.slice(pos);
    imgCaches = {
      'img': img,
      'big': ini + 'styles/' + imgStyleBig + '/public/' + end,
      'small': ini + 'styles/' + imgStyleSmall + '/public/' + end,
    }
  }
  return imgCaches;
}
  //gallery plugin
var methods = {
   init : function( options ) {
     return this.each(function(){
       var $gallery = $(this),
         data = $gallery.data('gallery'),
         currImg = imgCachesCreate($gallery.find('.views-field-field-mainimg a').attr('href'), 'main_img', 'gallert_img');
       $gallery.find('.views-field-field-mainimg a').colorbox({'maxWidth':'100%','maxHeight': '100%', 'close': 'cerrar', 'title': '<a href="' + currImg.big +'" target="_blank">Imagen completa</a>'});
          //preload imgs
       $gallery.find('.views-field-field-gallery a').each(function(){
         imageObj = new Image();
         imageObj.src = imgCachesCreate($(this).attr('href'), 'main_img', 'gallert_img').big;
         imageObj.src = imgCachesCreate($(this).attr('href'), 'main_img', 'gallert_img').small;
       })
         //bind thumbs events
       $gallery.find('.views-field-field-gallery a').bind('click', function(e){
         e.preventDefault();
         nextImg = imgCachesCreate($(this).attr('href'), 'main_img', 'gallert_img');
         $gallery.find('.views-field-field-mainimg img').attr('src', nextImg.big);
         $gallery.find('.views-field-field-mainimg a').attr('src', nextImg.img);
         $gallery.find('.views-field-field-mainimg a').colorbox({href: nextImg.img, 'maxWidth':'100%','maxHeight': '100%', 'close': 'cerrar', 'title': '<a href="' + currImg.big +'" target="_blank">Imagen completa</a>'});
         $(this).find('img').attr('src', currImg.small);
         $(this).attr('href', currImg.img);console.log($gallery)
         $('html, body').animate({
           scrollTop: $gallery.find('.views-field-field-mainimg').parents('.views-row').offset().top
         }, 500);
         currImg = nextImg;
       })
     });
   },
};

$.fn.gallery = function( method ) {
  if ( methods[method] ) {
    return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
  } else if ( typeof method === 'object' || ! method ) {
    return methods.init.apply( this, arguments );
  } else {
    $.error( 'Method ' +  method + ' does not exist on jQuery.gallery' );
  }
};
//call the gallery
Drupal.behaviors.gallery = {
  attach: function(context, settings) {
    $('#block-views-proyectos-block .views-row').gallery();
  }
}
})(jQuery);
