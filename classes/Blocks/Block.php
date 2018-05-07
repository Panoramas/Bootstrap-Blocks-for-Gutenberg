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
  private $block_key;
  private $enabled_list;
  private $replaced_list;

  /**
   * [__construct description]
   * @param [type] $block [description]
   */
  public function __construct($block_key, $block = array()) {
    $this->block = $block;
    $this->block_key = $block_key;
    $this->enabled_list = get_option(Consts::SETTING_ENABLED);
    $this->replaced_list = get_option(Consts::SETTING_REPLACE);
  }

  public function run() {
    // DISABLE COMMENT BEFORE PUBLISHING !!!
    if(isset($this->enabled_list[$this->block_key]) && $this->enabled_list[$this->block_key] == true) {
      add_action( 'init', array( $this, 'registerBlock'));
    }
  }

  // in run, call the assets (enqueue scripts and all) for this block
  public function registerBlock() {
    $args = array();
    $args['editor_script'] = Consts::PLUGIN_PREFIX.'-'.$this->block['dir'];

    // Register the block script
    wp_register_script(
      Consts::PLUGIN_PREFIX . '-' . $this->block['dir'],
      Helper::bsgut_url( Consts::BLOCKS_SCRIPT . '/' . $this->block['dir'] . '/build/index.js', __FILE__ ),
      array( 'wp-blocks', 'wp-element' )
      // filemtime( Helper::bsgut_url( Consts::BLOCKS_SCRIPT . '/' . $this->block['dir'] . '/build/index.js', __FILE__ ) )
    );

    // Register css EDITOR
    if (file_exists(Consts::PLUGIN_PREFIX.'/'.$this->block['dir'].'/'.'editor.css')) {
      wp_register_style(
        Consts::PLUGIN_PREFIX . '-' . $this->block['dir'] . '-editor',
        Helper::bsgut_url( Consts::BLOCKS_SCRIPT . '/' . $this->block['dir'] . '/build/editor.css', __FILE__ ),
        array( 'wp-edit-blocks' )
        // filemtime( Helper::bsgut_url( Consts::BLOCKS_SCRIPT . '/' . $this->block['dir'] . '/build/editor.css', __FILE__ ) )
      );

      $args['editor_style'] = Consts::PLUGIN_PREFIX.'-'.$this->block['dir'] . '-editor';
    }

    // Register css FRONT END
    if (file_exists(Consts::PLUGIN_PREFIX.'/'.$this->block['dir'].'/'.'style.css')) {
      wp_register_style(
        Consts::PLUGIN_PREFIX . '-' . $this->block['dir'],
        Helper::bsgut_url( Consts::BLOCKS_SCRIPT . '/' . $this->block['dir'] . '/build/style.css', __FILE__ ),
        array( 'wp-blocks' )
        // filemtime( Helper::bsgut_url( Consts::BLOCKS_SCRIPT . '/' . $this->block['dir'] . '/build/style.css', __FILE__ ) )
      );

      $args['style'] = Consts::PLUGIN_PREFIX.'-'.$this->block['dir'];
    }

    register_block_type( Consts::PLUGIN_PREFIX.'/'.$this->block['dir'], $args );
  }
}
