$(document).ready(function() {
	if($("#datepicker").length) {
		$( "#datepicker" ).datepicker({
			inline: true,
			firstDay: 1
		});
		var firstDay = $( ".selector" ).datepicker( "option", "firstDay" );
		// Setter
		$( ".selector" ).datepicker( "option", "firstDay", 1 );
	}
	

	$('.btn_big_rounded').click(function() {
		$('.calendar_block').toggle();
	})
	// $("a.ui-state-default").text(23).addClass('ui-state-active2');
});;$(document).ready(function() {
	var $self = $(this),
		$selects = $('.js-example-basic-single'),
		$approverSelects = $('.js-approver_for_request'),
        $multipleSelect = $('.js-example-basic-multiple'),
		approverSelectsText = $approverSelects.data('text');

	$selects.select2({
        minimumResultsForSearch: -1,
        escapeMarkup: function  (markup) {
            return markup;
        }
    });

    $approverSelects.select2({
    	minimumResultsForSearch: -1,
        placeholder: approverSelectsText,
        escapeMarkup: function  (markup) {
            return markup;
        }
    });

    $multipleSelect.select2({
        minimumResultsForSearch: -1,
        escapeMarkup: function  (markup) {
            return markup;
        }
    });
});;$(document).ready(function() {
    var $self = $(this),
    	$navigationDropdown = $('.navigation_dropdown', $self),
    	$navigationDropdownBlock = $('.navigation_dropdown_block', $self),
    	speed = 300;

    $('input:radio, input:checkbox').checkedPolyfill();

    $navigationDropdown.on('click', function(){
    	var $this = $(this);

    	if( $(this).hasClass('active') ){
    		$(this).removeClass('active');
    		$(this).find('.navigation_dropdown_block').animate({
	    		height: 0
	    	}, speed, function() {
		    	opacity: 0
		    });
    	} else {
    		$(this).addClass('active');
    		$(this).find('.navigation_dropdown_block').animate({
	    		height: '396px'
	    	}, speed, function(){
	    		$this.find('.navigation_dropdown_block').animate({
	    			opacity: 1
	    		});
	    	});
    	}

    });

    $navigationDropdownBlock.on('click', function(event){
    	event.stopPropagation();
    });
});