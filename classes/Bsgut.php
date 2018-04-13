<?php
namespace Bsgut;

defined('ABSPATH') or die('Cheatin&#8217, hu?');

use Bsgut\Helper\Helper;

use Bsgut\Wp\Settings;

use Bsgut\Blocks\Blocks;
use Bsgut\Blocks\Block;

/**
 * [Bsgut description]
 */
class Bsgut {

  /** @var string the subdirectory with our blocks */
  private $blocks_dir;
  /** @var array our block list */
  private $blocks;

  /**
   * [__construct description]
   * @param [type] $blocks_dir [description]
   */
  public function __construct($blocks_dir = 'dist/') {
    $this->blocks_dir = $blocks_dir;
    $this->blocks = Blocks::get_blocks();
  }

  /**
   * [run description]
   * @return [type] [description]
   */
  public function run() {
    // register bootstrap for the editor
    add_action( 'enqueue_block_editor_assets', array( $this, 'register_editor_styles') );

    // call get_blocks and create_blocks
    foreach ($this->blocks as $block => $datas) {
      $block = new Block($datas);
      $block->run();
    }
  }

  /**
   * [get_blocks description]
   * @return [type] [description]
   */
  private function get_blocks() {}

  /**
   * [create_blocks description]
   * @return [type] [description]
   */
  private function create_blocks() {
    // call new instance of block for each block in $blocks
  }

  public function register_editor_styles() {
    wp_register_style(
      'bootstrap',
      Helper::bsgut_url( 'node_modules/bootstrap/dist/css/bootstrap.min.css', __FILE__ ),
      array()
    );
    wp_enqueue_style( 'bootstrap' );
  }

}
