<?php
namespace Bsgut;

defined('ABSPATH') or die('Cheatin&#8217, hu?');

use Bsgut\Helper\Helper;
use Bsgut\Helper\Consts;

use Bsgut\Wp\Admin;
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
    // register and enqueue assets
    $admin = new Admin();
    $admin->register_hooks();

    // call get_blocks and create_blocks
    $this->register_blocks();

    // settings page
    $settings = new Settings();
    $settings->run();
  }

  private function register_blocks() {
    foreach ($this->blocks as $block => $datas) {
      $block = new Block($block, $datas);
      $block->run();
    }
  }

  public function register_editor_categories() {}

}
