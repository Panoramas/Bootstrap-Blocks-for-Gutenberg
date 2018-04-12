<?php

function register_bsgut_first_block() {
  // Register the block script
  wp_register_script(
    'bsgut-first-block',
    bsgut_url( 'scripts/first-block/build/index.js', __FILE__ ),
    array( 'wp-blocks', 'wp-element' )
  );

  // Register the block style sheet
  wp_register_style(
    'bsgut-first-block',
    bsgut_url( 'scripts/first-block/build/style.css', __FILE__ ),
    array()
  );

  // Attach the script to the block
  register_block_type( 'bsgut/first-block', array(
    'editor_script' => 'bsgut-first-block',
    'editor_style' => 'bsgut-first-block',
    'style' => 'bsgut-first-block',
  ) );
}

add_action( 'init', 'register_bsgut_first_block' );
