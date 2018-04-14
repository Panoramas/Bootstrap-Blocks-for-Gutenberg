<?php
namespace Bsgut\Wp;

use Bsgut\Helper\Consts;
use Bsgut\Helper\Helper;

use Bsgut\Blocks\Blocks;

defined('ABSPATH') or die('Cheatin&#8217, hu?');

class Settings {

    private $blocks;

    public function run() {
      add_action( 'admin_menu', array( $this, 'add_admin_menu' ) );
      add_action( 'admin_init', array( $this, 'register_settings' ) );
    }

    public function add_admin_menu() {
      add_menu_page(
        __('Bootstrap blocks', Consts::LANG_DOMAIN),
        __('Bootstrap blocks', Consts::LANG_DOMAIN),
        'edit_posts',
        Consts::PLUGIN_PREFIX . '-settings',
  			array( $this, 'settings_page' ),
        'dashicons-admin-generic'
      );
  }

    public function register_settings() {
      // sooo here, for each block in Blocks =>
      $this->blocks = Blocks::get_blocks();

      foreach ($this->blocks as $block_name => $block_datas) {
        $option_name = Consts::PLUGIN_PREFIX . "-setting-" . $block_datas['dir'] . "-enabled";
        update_option( $option_name, true); // CAN BE AN ARRAY, malke an array OF ALL anabled and ALL replaced
        register_setting( Consts::SETTINGS_GROUP, $option_name );
      }
    }

    public function settings_page(){
      require_once Helper::bsgut_dir_path() . 'admin/template-settings.php';
  	}

    public function toggle_block() {}

    public function toggle_block_replace() {}
}
