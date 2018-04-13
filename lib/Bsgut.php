<?php

class Bsgut {

  private $blocks_dir
  private $blocks = array();

  public function __construct($blocks_dir) {
    $this->blocks_dir = $blocks_dir;
  }

  public function run() {
    // call get_blocks and create_blocks
  }

  private function get_blocks() {
    $dir = array_filter(glob($this->blocks_dir . '/*'), 'is_dir');
    foreach ($dir as $key => $value) {
      $this->blocks[] = $value;
    }
  }

  private function create_blocks() {
    // call new instance of block for each block in $blocks
  }

}
