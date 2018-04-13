<?php

class Block() {

  private $block;

  public function __construct($block) {
    $this->block = $block;
  }

  // in run, call the assets (enqueue scripts and all) for this block
}
