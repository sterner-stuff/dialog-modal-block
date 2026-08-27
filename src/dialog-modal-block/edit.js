/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InnerBlocks, InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( { attributes, setAttributes } ) {
	return (
		<>
			<InspectorControls>
				<PanelBody title={__( 'Settings', 'dialog-modal-block' )}>
					<TextControl
						label={__( 'Trigger Selector', 'dialog-modal-block' )}
						value={attributes.selector}
						help={__('A valid CSS selector for the trigger element(s).', 'dialog-modal-block')}
						onChange={( value ) =>
							setAttributes( { selector: value } )
						}
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps() }>
				<p className="dialog-block-divider dialog-block-divider--start">Begin dialog contents</p>
				<InnerBlocks
					defaultBlock={
        				{ 
							name: 'core/paragraph', 
							attributes: { 
								content: 'Dialog contents...' 
							} 
						}
					}
				/>
				<p className="dialog-block-divider dialog-block-divider--end">End dialog contents</p>
			</div>
		</>
	);
}
