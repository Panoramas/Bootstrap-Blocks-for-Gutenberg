<?php
namespace Bsgut\Blocks;

use Bsgut\Helper\Helper;

class Block {

  /**
   * [private description]
   * @var [type]
   */
  private $block;

  /**
   * [__construct description]
   * @param [type] $block [description]
   */
  public function __construct($block) {
    $this->block = $block;
  }

  public function run() {
    add_action( 'init', array( $this, 'registerBlock'));
  }

  // in run, call the assets (enqueue scripts and all) for this block
  public function registerBlock() {
    // Register the block script
    wp_register_script(
      'bsgut-' . $this->block['dir'],
      Helper::bsgut_url( 'scripts/' . $this->block['dir'] . '/build/index.js', __FILE__ ),
      array( 'wp-blocks', 'wp-element' )
    );

    register_block_type( 'bsgut/'.$this->block['dir'], array(
      'editor_script' => 'bsgut-'.$this->block['dir'],
      'editor_style' => 'bsgut-'.$this->block['dir'],
      'style' => 'bsgut-'.$this->block['dir']
    ) );
  }
}
