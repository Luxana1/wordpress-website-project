<?php
// enqueue scripts and parent styles

add_action( 'wp_enqueue_scripts', 'twentytwentyone_child_enqueue_styles', 1000 );

function twentytwentyone_child_enqueue_styles() {
    wp_enqueue_style( 'twentytwentyone-style', get_template_directory_uri() . '/style.css' );
    wp_enqueue_style( 'twentytwentyone-child-style', get_stylesheet_directory_uri().'/style.css', array('twentytwentyone-style'), '1.1', 'all', false );
    wp_enqueue_script( 'twentytwentyone-child-script', get_stylesheet_directory_uri().'/js/script.js', array('twentytwentyone-style'), '1.1', true );
}

?>