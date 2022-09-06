<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

if ( ! class_exists( 'WP_GM_IS' ) ) {
    /**
     * Initial class
     *
     * @since 0.1.0
     */
    class WP_GM_IS {

        public function __construct() {
            $home_sliders    = new WP_GM_IS_Main();
            $home_sliders->register_postype();
            add_action( 'wp_enqueue_scripts', array( $this, 'load_assets' ) );
            add_shortcode( 'wp-gm-is-shortcode', array( $this, 'render_short_code' ) );
            //add_action( 'wp_footer', array( $this, 'wp_gm_sp_insert_social_icons' ) );

        }

        public function load_assets() {

            wp_enqueue_script(
                'wpb-jap-mvp-js',
                WP_GM_IS_URL . 'dist/bundle.js',
                null,
                WP_GM_IS_VERSION,
                true
            );
            wp_enqueue_style(
                WP_GM_IS_URL . 'style',
                WP_GM_IS_URL . 'dist/css/main.css',
                null,
                WP_GM_IS_VERSION
            );
        }

        public function render_short_code() {

            $args = array(
                'post_type'      => 'slider',
                'order'          => 'ASC',
                //'meta_key'	     => 'orden',
                //'orderby'	     => 'meta_value_num',
                'posts_per_page' => '-1',
            );

            $sliders = get_posts( $args );
            $html    = '';
            foreach ( $sliders as $slider){
                $html .= '<div class="wp-g-is-image wp-g-is-fade">
                            <img src="' . wp_get_attachment_image_url( get_post_thumbnail_id( $slider->ID ), 'full' ) . '" width="100%">
                        </div>';
            }

            return '<div class="wp-gumonet-image-slider" >
        <button class="wp-g-is-carousel-control-prev" id="wp-g-is-prev"> <span>&#10094;</span> </button>
        
         <div class="inner">
            ' . $html . '
         </div>
         
        <button class="wp-g-is-carousel-control-next" id="wp-g-is-next"> <span>&#10095;</span> </button>
        
        <!--<div class="wp-g-is-dots">
            <span class="wp-g-is-dot"></span>
            <span class="wp-g-is-dot"></span>
            <span class="wp-g-is-dot"></span>
        </div>-->
</div>';
        }


    }
}