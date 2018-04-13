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
  /** @var array our custom categories */
  private $categories;

  /**
   * [__construct description]
   * @param [type] $blocks_dir [description]
   */
  public function __construct($blocks_dir = 'dist/') {
    $this->blocks_dir = $blocks_dir;
    $this->blocks = Blocks::get_blocks();
    $this->categories = Blocks::get_categories();
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

  public function register_editor_styles() {
    wp_register_style(
      'bootstrap',
      Helper::bsgut_url( 'node_modules/bootstrap/dist/css/bootstrap.min.css', __FILE__ ),
      array()
    );
    wp_enqueue_style( 'bootstrap' );
  }

  public function register_efitor_categories() {}

}
