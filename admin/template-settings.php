<?php
  use Bsgut\Helper\Consts;
?>
<div class="wrap">


====================================== <br>
<?php var_dump( get_option( "bsgut-setting-alert-block-enabled" ) ); ?> <br>
====================================== <br>

<header class="bsgut-settings__header">
  <h1>testing testing yeaaah</h1>
  <p>setting group is <?php echo Consts::SETTINGS_GROUP; ?></p>
  <p>what we're going to do here is:</p>
  <ul>
    <li>set default options (wich are…)</li>
    <li>export options (to a php file to put in your theme for example)</li>
    <li>list ALL the blocks (automatically, dont worry)</li>
    <ul>
      <li>name</li>
      <li>short description (to put in classes/blocks)</li>
      <li>enable/disable</li>
      <li>replace/do not replace the corresponding native block</li>
    </ul>
  </ul>
</header>

<form method="post" action="options.php" class="bsgut-settings">
  <?php settings_fields( Consts::SETTINGS_GROUP ); ?>
  <?php do_settings_sections( Consts::SETTINGS_GROUP ); ?>

  <table class="form-table">
          <tr valign="top">
          <th scope="row">enable the alert block</th>
          <td>
            <input
              type="checkbox"
              id="defaultCheck2"
              name="bsgut-setting-alert-block-enabled"
              value="<?php echo esc_attr( get_option("bsgut-setting-alert-block-enabled") ); ?>"
              <?php checked( 1 == get_option("bsgut-setting-alert-block-enabled")); ?>>
          </tr>
    </table>

<?php submit_button(); ?>

</form>
</div>
