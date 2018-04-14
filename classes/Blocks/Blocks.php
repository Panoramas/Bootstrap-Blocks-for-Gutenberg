<?php
namespace Bsgut\Blocks;

defined('ABSPATH') or die('Cheatin&#8217, hu?');

class Blocks {

    public function __construct() {}

    static function get_blocks() {
      return array(
              'first' => array(
                'name' => __('First', 'bsgut'),
                'description' => __('This is a test', 'bsgut'),
                'dir' => 'first-block',
                'type' => 'content',
                'css' => false
              ),
              'alert' => array(
                'name' => __('Alert', 'bsgut'),
                'description' => __('Display an alert message', 'bsgut'),
                'dir' => 'alert-block',
                'type' => 'content'
              ),
              'jumbotron' => array(
                'name' => __('Jumbotron', 'bsgut'),
                'description' => __('Create a hero well that can extend the entire viewport to showcase key messages', 'bsgut'),
                'dir' => 'jumbotron-block',
                'type' => 'content'
              )
            );
    }

    static function get_categories() {
      return array(
                 'bootstrap'    => __( 'Bootstrap', 'bsgut' )
             );
    }

}
