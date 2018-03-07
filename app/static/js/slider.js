$(document).ready(function(){

  $('.jcarousel').jcarousel({
          wrap:'circular'
      });
      $('.jcarousel-prev').jcarouselControl({
          target: '-=1'
      });
      $('.jcarousel-next').jcarouselControl({
          target: '+=1'
      });
      $('.j-sub').click(function(event) {
          $('html').addClass('overlay');
          return false;
      });
	var select = new Select({ elem : $(".select") });

	$(".inp").focus(function(){
	    var defVal = $(this).attr("defaultValue");
	    if($(this).val() == defVal) $(this).val("");
	  }).blur(function(){
	    var defVal = $(this).attr("defaultValue");
	    if($(this).val() == "") $(this).val(defVal);
	  });

  $('.j-order').click(function() {
     var $form = $("#orderform").offset().top;
     $("html, body").animate({scrollTop : $form}, 900);
     return false;
     });




$(".slide-list").on("swipeleft",function(){

   $('.jcarousel-next').jcarouselControl({
          target: '+=1'
      });
});





});

function Select(option) {
    var elem = option.elem;
    var self = this;
    
    elem.on("click", selectOnClick);
    elem.on("click", ".drop_down div", selectOnItem);
    
    $("body").click(function(){
      $(".select.open").removeClass("open");
    });
    
    function selectOnClick(e) {
      if($(this).hasClass("open")) self.close($(this));
      else self.open($(this));
      return false;
    }
    
    function selectOnItem() {
      var parent = $(this).parents(".select"),
        text = $(this).text();
      parent.find("input").val(text).siblings(".select-value").text(text);
      self.close(parent);
      return false;
    }
    
    function allClose() {
      self.close(elem);
    }
    
    self.open = function(sel) {
      sel.addClass("open");
    }
    
    self.close = function(sel){
      sel.removeClass("open");
    }
  }
