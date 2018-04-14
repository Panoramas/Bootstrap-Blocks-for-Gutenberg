<?php
/**
 * Plugin Name: Bootstrap Blocks for Gutenberg
 * Plugin URI: https://github.com/Panoramas/Bootstrap-Blocks-for-Gutenberg
 * Version: 1.0.0-alpha1
 * Author: Panoramas
 */

use \Bsgut\Autoloader;
use \Bsgut\bsgut;
use \Bsgut\Helper\Consts;

defined('ABSPATH') or die('Cheatin&#8217, hu?');

// Get it running
require 'classes/Autoloader.php';
Autoloader::register();

$bsgut = new Bsgut;
$bsgut->run();

// Languages
function bsgut_load_textdomain() {
  load_plugin_textdomain( Consts::LANG_DOMAIN, false, dirname( plugin_basename( __FILE__ ) ) . '/languages' );
}
add_action( 'plugins_loaded', 'bsgut_load_textdomain' );
