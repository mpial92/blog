<?php
// fichier mpial.js dans le footer
function theme_js(){
	wp_enqueue_script('mpial','http://michelpiallier.info/blog/wp-content/themes/theblog-child/js/mpial.js' );
}
	add_action( 'wp_footer', 'theme_js' );

	
// liste des articles d'une catégorie	
	function jc_post_by_category($atts, $content = null) {
    extract(shortcode_atts(array(
        "nb" => '5',
        "orderby" => 'post_date',
        "order" => 'DESC',
        "category" => '1'
    ), $atts));
    global $post;
    $tmp_post = $post;
    $myposts = get_posts('showposts='.$nb.'&orderby='.$orderby.'&category='.$category);
    $out = '<ul>';
    foreach($myposts as $post){
        setup_postdata( $post );
        $out .= '<li><a href="'.get_permalink().'">'.the_title("","",false).'</a></li>';
    }
    $out .= '</ul>';
    wp_reset_postdata();
    $post = $tmp_post;
    return $out;
}
add_shortcode("post-by-category", "jc_post_by_category");
add_filter('widget_text', 'do_shortcode');

// ajouter un custom post field


?>
