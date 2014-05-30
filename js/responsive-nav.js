jQuery( document ).ready( function( $ ) {
    
    $( ".has-submenu a" ).append( $( "<div class='dropdown-icon'></div>" ) );
 
    	var $menu = $('#menu'),
    	  $menulink = $('.menu-link'),
    	  $menuToggle = $('.has-submenu > a > .dropdown-icon');
    	  
    	$menulink.click(function(e) {
    		e.preventDefault();
    		$menulink.toggleClass('active');
    		$menu.toggleClass('active');
    	});
    	    
    	$menuToggle.click(function(e) {
    		e.preventDefault();
    		var $this = $(this);
    		$this.toggleClass('active').parent().next('ul').toggleClass('active');
    	});
 
    });