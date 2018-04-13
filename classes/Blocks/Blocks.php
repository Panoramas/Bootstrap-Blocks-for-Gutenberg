<?php
namespace Bsgut\Blocks;

class Blocks {

    public function __construct() {}

    static function get_blocks() {
      return array(
              'first' => array(
                'name' => __('First', 'bsgut'),
                'dir' => 'first-block',
                'type' => 'content'
              ),
              'alert' => array(
                'name' => __('Alert', 'bsgut'),
                'dir' => 'alert-block',
                'type' => 'content'
              )
            );
    }

    static function get_block($block) {}

}