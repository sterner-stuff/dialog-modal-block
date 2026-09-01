<?php
// This file is generated. Do not modify it manually.
return array(
	'dialog-modal-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'sterner-stuff/dialog-modal-block',
		'version' => '1.0.1',
		'title' => 'Dialog Modal Block',
		'category' => 'media',
		'icon' => 'editor-expand',
		'description' => 'Use blocks to create a modal or popup that uses the native and accessible HTML `dialog` element.',
		'example' => array(
			
		),
		'supports' => array(
			'__experimentalBorder' => array(
				'color' => true,
				'radius' => true,
				'style' => true,
				'width' => true
			),
			'align' => array(
				'wide',
				'full'
			),
			'color' => array(
				'background' => true,
				'text' => true
			),
			'dimensions' => array(
				'minWidth' => true,
				'width' => true
			),
			'html' => false,
			'layout' => array(
				'allowInheriting' => true,
				'allowSizingOnChildren' => true,
				'default' => array(
					'type' => 'constrained'
				)
			),
			'shadow' => true,
			'spacing' => array(
				'margin' => true,
				'padding' => true
			)
		),
		'attributes' => array(
			'backdropColor' => array(
				'type' => 'string',
				'default' => 'rgba(0, 0, 0, 0.5)'
			),
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
