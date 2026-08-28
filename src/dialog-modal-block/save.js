/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */

import { Dashicon } from '@wordpress/components';

export default function save( { attributes }) {
	const { selector, includeCloseButton } = attributes;
	const frontendAttributes = { triggerSelector: selector };

	let classes = [];
	if (attributes.backdropColor) {
		classes.push('has-backdrop-color');
	}

	const styles = {
		'--backdrop-color' : attributes.backdropColor
	}

	return (
		<>
			<dialog 
				{...useBlockProps.save({
					className: classes.join(' '),
					style: styles,
				})} 
            	data-block-attributes={JSON.stringify(frontendAttributes)}
				>
				{ includeCloseButton && (
				<form className="wp-block-sterner-stuff-dialog-modal-block--close" method="dialog">
					<button>
						<Dashicon icon="no-alt" />
					</button>
				</form>
				) }
				<InnerBlocks.Content />
			</dialog>
		</>
	)
	;
}
