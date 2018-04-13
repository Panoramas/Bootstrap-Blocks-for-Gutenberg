<?php

/**
 * [Bsgut description]
 */
class Bsgut {

  /** @var [type] [private description] */
  private $blocks_dir
  /** @var [type] [private description] */
  private $blocks = array();

  /**
   * [__construct description]
   * @param [type] $blocks_dir [description]
   */
  public function __construct($blocks_dir) {
    $this->blocks_dir = $blocks_dir;
  }

  /**
   * [run description]
   * @return [type] [description]
   */
  public function run() {
    // call get_blocks and create_blocks
  }

  /**
   * [get_blocks description]
   * @return [type] [description]
   */
  private function get_blocks() {
    $blocks = array();
    $dir = array_filter(glob($this->blocks_dir . '/*'), 'is_dir');
    foreach ($dir as $key => $value) {
      $blocks[] = $value;
    }
    return $blocks;
  }

  /**
   * [create_blocks description]
   * @return [type] [description]
   */
  private function create_blocks() {
    // call new instance of block for each block in $blocks
  }

}
