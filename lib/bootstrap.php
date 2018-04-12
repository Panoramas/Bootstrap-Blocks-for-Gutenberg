<?php
/**
* Register Bootstrap style sheet from node_modules folder.
*/

function enqueue_bootstrap_styles() {
  wp_register_style(
    'bootstrap',
    bsgut_url( 'node_modules/bootstrap/dist/css/bootstrap.min.css', __FILE__ ),
    array()
  );

  wp_enqueue_style( 'bootstrap' );
}

add_action( 'init', 'enqueue_bootstrap_styles' );
