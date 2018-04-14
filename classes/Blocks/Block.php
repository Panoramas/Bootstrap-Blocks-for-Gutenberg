<?php
namespace Bsgut\Blocks;

defined('ABSPATH') or die('Cheatin&#8217, hu?');

use Bsgut\Helper\Consts;
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
    // here, IF bsgut-stting-BlockDIR[enabled] == true
      add_action( 'init', array( $this, 'registerBlock'));
      // IF bsgut-stting-BlockDIR[replace] == true, disable the other one
    // endif
  }

  // in run, call the assets (enqueue scripts and all) for this block
  public function registerBlock() {
    // Register the block script
    wp_register_script(
      Consts::PLUGIN_PREFIX . '-' . $this->block['dir'],
      Helper::bsgut_url( Consts::BLOCKS_SCRIPT . '/' . $this->block['dir'] . '/build/index.js', __FILE__ ),
      array( 'wp-blocks', 'wp-element' )
    );

    // if $this->block['css'] = true

    register_block_type( Consts::PLUGIN_PREFIX.'/'.$this->block['dir'], array(
      'editor_script' => Consts::PLUGIN_PREFIX.'-'.$this->block['dir'],
      'editor_style' => Consts::PLUGIN_PREFIX.'-'.$this->block['dir'],
      'style' => Consts::PLUGIN_PREFIX.'-'.$this->block['dir']
    ) );
  }
}
