<?php


class WP_GM_IS_Main {

    public function __construct()
    {

    }

    public function register_postype()
    {
        $labels = array(
            'name' => __('Sliders', 'custom-post-type-ui'),
            'singular_name' => __('Slider', 'custom-post-type-ui'),
            'menu_name' => __('Slider', 'custom-post-type-ui'),
            'all_items' => __('All Sliders', 'custom-post-type-ui'),
            'add_new' => __('Add new', 'custom-post-type-ui'),
            'add_new_item' => __('Add new Slider', 'custom-post-type-ui'),
            'edit_item' => __('Edit Slider', 'custom-post-type-ui'),
            'new_item' => __('New Slider', 'custom-post-type-ui'),
            'view_item' => __('View Slider', 'custom-post-type-ui'),
            'view_items' => __('View Sliders', 'custom-post-type-ui'),
            'search_items' => __('Search Sliders', 'custom-post-type-ui'),
            'not_found' => __('No Sliders found', 'custom-post-type-ui'),
            'not_found_in_trash' => __('No Sliders found in trash', 'custom-post-type-ui'),
            'parent' => __('Parent Slider:', 'custom-post-type-ui'),
            'featured_image' => __('Featured image for this Slider', 'custom-post-type-ui'),
            'set_featured_image' => __('Set featured image for this Slider', 'custom-post-type-ui'),
            'remove_featured_image' => __('Remove featured image for this Slider', 'custom-post-type-ui'),
            'use_featured_image' => __('Use as featured image for this Slider', 'custom-post-type-ui'),
            'archives' => __('Slider archives', 'custom-post-type-ui'),
            'insert_into_item' => __('Insert into Slider', 'custom-post-type-ui'),
            'uploaded_to_this_item' => __('Upload to this Slider', 'custom-post-type-ui'),
            'filter_items_list' => __('Filter Sliders list', 'custom-post-type-ui'),
            'items_list_navigation' => __('Sliders list navigation', 'custom-post-type-ui'),
            'items_list' => __('Sliders list', 'custom-post-type-ui'),
            'attributes' => __('Sliders attributes', 'custom-post-type-ui'),
            'name_admin_bar' => __('Slider', 'custom-post-type-ui'),
            'item_published' => __('Slider published', 'custom-post-type-ui'),
            'item_published_privately' => __('Slider published privately.', 'custom-post-type-ui'),
            'item_reverted_to_draft' => __('Slider reverted to draft.', 'custom-post-type-ui'),
            'item_scheduled' => __('Slider scheduled', 'custom-post-type-ui'),
            'item_updated' => __('Slider updated.', 'custom-post-type-ui'),
            'parent_item_colon' => __('Parent Slider:', 'custom-post-type-ui'),
        );

        $args = array(
            'label' => __('Sliders', 'custom-post-type-ui'),
            'labels' => $labels,
            'description' => 'Holds our custom home sliders',
            'public' => true,
            'publicly_queryable' => true,
            'show_ui' => true,
            'show_in_rest' => true,
            'rest_base' => '',
            'rest_controller_class' => 'WP_REST_Posts_Controller',
            'has_archive' => false,
            'show_in_menu' => true,
            'menu_icon' => 'dashicons-format-image',
            'show_in_nav_menus' => true,
            'delete_with_user' => false,
            'exclude_from_search' => false,
            'capability_type' => 'post',
            'map_meta_cap' => true,
            'hierarchical' => false,
            'rewrite' => array(
                'slug' => 'slider',
                'with_front' => true,
            ),
            'query_var' => true,
            'supports' => array('title', 'thumbnail'),
            'show_in_graphql' => false,
        );

        register_post_type('slider', $args);
    }
}