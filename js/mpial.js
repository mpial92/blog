jQuery(document).ready(function(){	

//jQuery('#menu_background').hide();


	
 
// login
jQuery('#top_sidebar .xoxo>li:first').css({'position':'absolute','top':'0px','right':'600px'});
jQuery('#top_sidebar .xoxo li>ul>li:eq(1)').hide();
jQuery('#top_sidebar .xoxo li>ul>li:eq(2)').css({'position':'absolute','top':'-3px','left':'250px'});

// widget login dans le header
	jQuery('br').remove();
	jQuery('form div').addClass('soumettre');
	jQuery('.soumettre').css("display",'inline');
	jQuery('#header #top_sidebar').css({'width':'850px','top':'10px'});
	jQuery('div .button').css('display','inline');
	
	//search
	jQuery('input[name="s"]').val('Rechercher sur le site');
	jQuery('.widget_search').css({'position':'absolute','top':'5px','right':'10px'});




// Dimensionnement du logo du site et animation

jQuery('#xoxo>li:first').css({
		
		width:'500px',
		height:'58px'
	});

jQuery('#logo img').css({
		width:'500px',
		height:'58px'
	});
	
	
	
	// animation du logo

	jQuery('#logo').css('margin-left','0px');

/*	jQuery('#logo').on('mouseenter',function(){
		jQuery(this).animate({'left': '20x'}, 'fast');
	});
	
	jQuery('#logo').on('mouseleave',function(){
		jQuery(this).animate({'left': '180px'}, 'fast');
	});
*/

// remplacement de "maCategorie_monarticle" par "monarticle"	
	jQuery('.cat-item  a').each(function(){
		var elemdea = jQuery(this);
		var contenu = elemdea.text();
		for(var i= 0 ; i<contenu.length; i++) {
			var car = contenu[i];
			if( car ==("_")){
				var res = contenu.slice(i+1,100);
					elemdea.text(" " + res);
					break;
			};	
		};
	});
	
	// remplacement de "maCategorie_monarticle" par "monarticle" dans le menu	
	jQuery('.sub-menu  a').each(function(){
		var elemdea = jQuery(this);
		var contenu = elemdea.text();
		for(var i= 0 ; i<contenu.length; i++) {
			var car = contenu[i];
			if( car ==("_")){
				var res = contenu.slice(i+1,100);
					elemdea.text(" " + res);
					break;
			};	
		};
	});
	// remplacement de "_" par "-" dans le titre de la catégorie

	jQuery('h1.category-title').each(function(){
		var elemdeh = jQuery(this);
		var contenu = elemdeh.text();
		vcontenu = contenu.replace('_',' - ');
		jQuery(this).text(vcontenu);
	});
	
	// remplacement de "_" par "-" dans le span cat-links

	jQuery('span.cat-links a').each(function(){
		var elemdea = jQuery(this);
		var contenu = elemdea.text();
		vcontenu = contenu.replace('_',' - ');
		jQuery(this).text(vcontenu);
	});	
		
	// remplacement de "_" par "-" dans le title de span cat-links a
	
	var title = jQuery('span.cat-links>a').attr('title');
		var newtitle =title.replace('_',' - ');
		jQuery('span.cat-links>a').attr('title',newtitle);
	
	
	// remplacement de "_" par "-" dans le nom de la catégorie dans la liste des articles
	// et WordPress par Wordpress
	
	jQuery('.widget_listcategorypostswidget a:first').each (function(){
		var elemdea = jQuery(this);
		var contenu = elemdea.text();
		vcontenu =contenu.replace('_',' - ');
		jQuery(this).text(vcontenu);
	});
	
	jQuery('.widget_listcategorypostswidget a:first').each (function(){
		var elemdea = jQuery(this);
		var contenu = elemdea.text();
		vcontenu =contenu.replace('_',' - ');
		jQuery(this).text(vcontenu);
	});
	
	// ajou icone devant le titre des articles
	
	jQuery('.widget_listcategorypostswidget li>a' ).each (function(){
		var elemdea = jQuery(this);
		var contenu = elemdea.text();
		vcontenu =contenu.replace('WordPress',' Wordpress');
		jQuery(this).text(vcontenu);
		jQuery(this).css('padding-left','25px');
		jQuery(this).css('padding-top','10px');
		jQuery(this).css('background', 'url("http://michelpiallier.info/blog/wp-content/themes/theblog-child/images/recent-ico.png") no-repeat scroll 0 3px rgba(0, 0, 0, 0)');
		jQuery(this).css({'background-position': 'left 12px'});	
	});
	
	jQuery('.entry-title-page').each (function(){
		var elemdea = jQuery(this);
		var contenu = elemdea.text();
		vcontenu =contenu.replace('WordPress',' Wordpress');
		jQuery(this).text(vcontenu);
	});
	
	jQuery('h1.entry-title>a').each (function(){
		var elemdea = jQuery(this);
		var contenu = elemdea.text();
		vcontenu =contenu.replace('WordPress',' Wordpress');
		jQuery(this).text(vcontenu);
	});
		
	jQuery('.widget_recent_entries li a').each (function(){
		var elemdea = jQuery(this);
		var contenu = elemdea.text();
		vcontenu =contenu.replace('WordPress',' Wordpress');
		jQuery(this).text(vcontenu);
	});	
		
		
	// css pour hover dans les sous-menus
	jQuery('.sub-menu>li>a').each(function(){
		jQuery('br').remove();
		var elemdelien = jQuery(this);
		elemdelien.hover(function(){
		elemdelien.toggleClass('hover-highlight');
		});
	});
	
	
	
	
	
	
	// liste numérotées  dans un article (ul classe "num") (li classe "numero")
    jQuery('ul.num li').each(function() {
        jQuery(this).prepend("<span class='numero'>" + (jQuery(this).index() +1) + "</span>");
    });
	
});
	 


