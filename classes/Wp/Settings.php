<?php
namespace Bsgut\Wp;

use Bsgut\Helper\Consts;
use Bsgut\Helper\Helper;

use Bsgut\Blocks\Blocks;

defined('ABSPATH') or die('Cheatin&#8217, hu?');

class Settings {

    private $blocks;

    public function __construct() {
      $this->blocks = Blocks::get_blocks();
    }

    public function run() {
      // check if options exists
      $this->create_settings();

      // create settings page register settings
      add_action( 'admin_menu', array( $this, 'add_admin_menu' ) );
      add_action( 'admin_init', array( $this, 'register_settings' ) );

      // use AJAX to toggle blocks and restore default options
      add_action( 'wp_ajax_bsgut_toggle_block', array( $this, 'bsgut_toggle_block' ) );
      add_action( 'wp_ajax_bsgut_restore_default', array( $this, 'bsgut_restore_default' ) );
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
      register_setting( Consts::SETTINGS_GROUP, Consts::SETTING_ENABLED );
      register_setting( Consts::SETTINGS_GROUP, Consts::SETTING_REPLACE );
    }

    public function create_settings() {
      if(!get_option(Consts::SETTING_ENABLED)){
        $blocks = array();
        foreach ($this->blocks as $block => $datas) {
          $blocks[$block] = true;
        }
        add_option( Consts::SETTING_ENABLED, $blocks );
      }
      if(!get_option(Consts::SETTING_REPLACE)){
        $replaced = array();
        foreach ($this->blocks as $block => $datas) {
          if (isset($datas['replace']) &&  $datas['replace'] != false) {
            $replaced[$block] = $datas['replace'];
          }
        }
        add_option( Consts::SETTING_REPLACE, $replaced );
      }
    }

    public function settings_page(){
      require_once Helper::bsgut_dir_path() . 'admin/template-settings.php';
  	}

    public function update_settings($setting, $blocks) {
      update_option( $setting, $blocks);
    }

    public function reset_settings() {
      $this->delete_settings();
      $this->create_settings();
    }

    public function delete_settings() {
      delete_option( Consts::SETTING_ENABLED );
      delete_option( Consts::SETTING_REPLACE );
    }

    public function bsgut_restore_default() {
      $this->reset_settings();
    }

    public function bsgut_toggle_block() {
      $block_type = $_POST['block'];

      $enabled_list = get_option( Consts::SETTING_ENABLED );
      $block_value = $enabled_list[$block_type];

      $enabled_list[$block_type] = !$block_value;

      update_option( Consts::SETTING_ENABLED, $enabled_list);
    }

    public function bsgut_toggle_block_replace() {}
}
