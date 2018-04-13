<?php

function register_bsgut_jumbotron_block() {
  // Register the block script
  wp_register_script(
    'bsgut-jumbotron-block',
    bsgut_url( 'scripts/jumbotron-block/build/index.js', __FILE__ ),
    array( 'wp-blocks', 'wp-element' )
  );

  // Attach the script to the block
  register_block_type( 'bsgut/jumbotron-block', array(
    'editor_script' => 'bsgut-jumbotron-block'
  ) );
}

add_action( 'init', 'register_bsgut_jumbotron_block' );
