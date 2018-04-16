<?php
namespace Bsgut\Wp;

use Bsgut\Helper\Consts;
use Bsgut\Helper\Helper;

defined('ABSPATH') or die('Cheatin&#8217, hu?');

class Admin {

  public function register_hooks() {
    add_action( 'admin_enqueue_scripts', array($this, 'enqueue_assets' ) );
    add_action( 'enqueue_block_editor_assets', array( $this, 'enqueue_editor_styles') );
  }

  public function enqueue_assets($hook) {
		if( strpos( $hook, Consts::PLUGIN_PREFIX ) === false ) {
			return;
		}

		wp_enqueue_style(
			Consts::PLUGIN_PREFIX.'-settings-style',
			Helper::bsgut_url( 'admin/css/bsgut-settings.css', __FILE__ ),
			array(),
			Consts::VERSION,
			'all'
		);
		wp_enqueue_script(
			Consts::PLUGIN_PREFIX.'-settings',
			Helper::bsgut_url( 'admin/js/bsgut-settings.js', __FILE__ ),
			array('jquery'),
			Consts::VERSION,
			false
		);
	}

  public function enqueue_editor_styles() {
    wp_enqueue_style(
      Consts::PLUGIN_PREFIX.'-bootstrap',
      Helper::bsgut_url( 'node_modules/bootstrap/dist/css/bootstrap.min.css', __FILE__ ),
      array(),
			Consts::VERSION,
      'all'
    );
  }

}
