<?php
namespace Bsgut\Blocks;

defined('ABSPATH') or die('Cheatin&#8217, hu?');

use Bsgut\Helper\Consts;

class Blocks {

    public function __construct() {}

    static function get_blocks() {
      return array(
              'first' => array(
                'name' => __('First', Consts::LANG_DOMAIN),
                'description' => __('This is a test', Consts::LANG_DOMAIN), // USED IN SETTINGS
                'dir' => 'first-block',
                'type' => 'content',
                'icon' => 'welcome-learn-more',
                // 'css' => false,
                // 'svg' => // if not an icon, then SVG
                // 'replace' => 'test'
              ),
              'alert' => array(
                'name' => __('Alert', Consts::LANG_DOMAIN),
                'description' => __('Display an alert message', Consts::LANG_DOMAIN),
                'dir' => 'alert-block',
                'type' => 'content',
                'icon' => 'welcome-learn-more'
              ),
              'jumbotron' => array(
                'name' => __('Jumbotron', Consts::LANG_DOMAIN),
                'description' => __('Create a hero well that can extend the entire viewport to showcase key messages', Consts::LANG_DOMAIN),
                'dir' => 'jumbotron-block',
                'type' => 'content',
                'icon' => 'welcome-learn-more'
              )
            );
    }

    static function get_categories() {
      return array(
                 'bootstrap'    => __( 'Bootstrap', Consts::LANG_DOMAIN )
             );
    }

}
