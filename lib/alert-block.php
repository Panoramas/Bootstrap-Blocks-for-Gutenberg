<?php

function register_bsgut_alert_block() {
  // Register the block script
  wp_register_script(
    'bsgut-alert-block',
    bsgut_url( 'scripts/alert-block/build/index.js', __FILE__ ),
    array( 'wp-blocks', 'wp-element' )
  );

  // Register the block style sheet
  wp_register_style(
    'bsgut-alert-block',
    bsgut_url( 'scripts/alert-block/build/style.css', __FILE__ ),
    array()
  );

  // Attach the script to the block
  register_block_type( 'bsgut/alert-block', array(
    'editor_script' => 'bsgut-alert-block',
    'editor_style' => 'bsgut-alert-block',
    'style' => 'bsgut-alert-block',
  ) );
}

add_action( 'init', 'register_bsgut_alert_block' );
