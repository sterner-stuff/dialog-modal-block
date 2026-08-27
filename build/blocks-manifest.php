<?php
// This file is generated. Do not modify it manually.
return array(
	'dialog-modal-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'sterner-stuff/dialog-modal-block',
		'version' => '0.1.0',
		'title' => 'Dialog Modal Block',
		'category' => 'media',
		'icon' => 'expand',
		'description' => 'Use blocks to create a modal or popup that uses the native and accessible HTML `dialog` element.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'align' => array(
				'wide',
				'full'
			)
		),
		'attributes' => array(
			'includeCloseButton' => array(
				'type' => 'boolean',
				'default' => true
			),
			'selector' => array(
				'type' => 'string'
			)
		),
		'textdomain' => 'dialog-modal-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
