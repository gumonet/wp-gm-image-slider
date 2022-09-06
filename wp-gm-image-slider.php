<?php
/**
 * Plugin Name: Gumonet Image Slider
 * Plugin URI: http://gumonet.com
 * Description: Create a dinamic slider for your website
 * Version: 1.0.0
 * Author: Gumonet
 * Author URI:  http://gumonet.com/
 * License: GPL-3.0-or-later
 **/

/**
 * Autoload classes from the plugin.
 **/

require_once 'includes/required-classes.php';

if ( ! defined( 'ABSPATH' ) ) {
    die( 'Access denied.' );
}

/**
 * Init the plugin
 **/
function wp_gm_image_slider_init() {
    new WP_GM_IS();
}

add_action( 'init', 'wp_gm_image_slider_init' );