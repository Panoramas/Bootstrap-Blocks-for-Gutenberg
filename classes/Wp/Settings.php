<?php
namespace Bsgut\Wp;

use Bsgut\Helper\Consts;
use Bsgut\Helper\Helper;

use Bsgut\Blocks\Blocks;

defined('ABSPATH') or die('Cheatin&#8217, hu?');

class Settings {

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
      register_setting( Consts::SETTINGS_GROUP, "test-setting" );
    }

    public function settings_page(){
      require_once Helper::bsgut_dir_path() . 'admin/template-settings.php';
  	}
}
