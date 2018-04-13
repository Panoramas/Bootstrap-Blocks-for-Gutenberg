<?php

class Block() {

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

  // in run, call the assets (enqueue scripts and all) for this block
}
