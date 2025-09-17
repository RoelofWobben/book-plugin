<?php
// This file is generated. Do not modify it manually.
return array(
	'my-reading-list' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'my-reading-list/reading-list-block',
		'version' => '0.0.1',
		'title' => 'My Reading List Block',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Displays a list of books for a reading list.',
		'example' => array(
			
		),
		'attributes' => array(
			'showContent' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showImage' => array(
				'type' => 'boolean',
				'default' => true
			)
		),
		'supports' => array(
			'html' => false,
			'align' => true,
			'color' => array(
				'background' => true,
				'text' => true
			)
		),
		'textdomain' => 'my-reading-list',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
