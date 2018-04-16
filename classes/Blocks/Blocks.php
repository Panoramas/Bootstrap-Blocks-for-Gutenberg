<?php
namespace Bsgut\Blocks;

defined('ABSPATH') or die('Cheatin&#8217, hu?');

use Bsgut\Helper\Consts;
use Bsgut\Helper\Helper;

class Blocks {

    public function __construct() {}

    static function get_blocks() {
      $string = file_get_contents(Helper::bsgut_url( Consts::BLOCKS_SCRIPT . '/' . Consts::BLOCKS_JSON . '.json' , __FILE__ ));
      $json_a = json_decode($string, true);
      return $json_a;
    }

    static function get_categories() {
      return array(
                 'bootstrap'    => __( 'Bootstrap', Consts::LANG_DOMAIN )
             );
    }

}
