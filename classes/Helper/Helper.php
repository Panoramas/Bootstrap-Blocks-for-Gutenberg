<?php
namespace Bsgut\Helper;

/**
 * Helper static functions
 */
class Helper {
  /**
   * Retrieves the root plugin path.
   *
   * @return string
   */
  public static function bsgut_dir_path() {
    return plugin_dir_path( dirname( __DIR__ ) );
  }

  /**
   * Retrieves a URL to a file in the Bootstrap Blocks for Gutenberg plugin.
   *
   * @param  string $path Relative path of the desired file.
   * @return string Fully qualified URL pointing to the desired file.
   */
  public static function bsgut_url( $path ) {
    return plugins_url( $path, dirname( __DIR__ ) );
  }
}
