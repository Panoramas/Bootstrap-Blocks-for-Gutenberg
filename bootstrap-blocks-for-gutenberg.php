<?php
/**
 * Plugin Name: Bootstrap Blocks for Gutenberg
 * Plugin URI: https://github.com/Panoramas/Bootstrap-Blocks-for-Gutenberg
 * Version: 1.0.0-alpha1
 * Author: Panoramas
 */

defined('ABSPATH') or die('Cheatin&#8217 much?');

require_once dirname( __FILE__ ) . '/lib/Bootstrap.php';
require_once dirname( __FILE__ ) . '/lib/Common.php';

// blocks
require_once dirname( __FILE__ ) . '/lib/first-block.php';
require_once dirname( __FILE__ ) . '/lib/alert-block.php';

// call the main class with the blocks directory as a param here
