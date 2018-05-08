import {
	registerBlockType,
	InnerBlocks,
	InspectorControls
} from '@wordpress/blocks';
import { Fragment } from '@wordpress/element';
import { ToggleControl, PanelBody } from '@wordpress/components';
import { Jumbotron } from 'reactstrap';
import { __ } from '@wordpress/i18n';

import './style.scss';

registerBlockType( 'bsgut/jumbotron-block', {
	title: __( 'Jumbotron' ),
	icon: 'welcome-learn-more',
	category: 'common',
	description: __(
		'Lightweight, flexible component for showcasing hero unit style content.'
	),
	keywords: [ 'bootstrap', 'bsgut', __( 'hero' ) ],
	attributes: {
		fluidify: {
			type: 'string'
		}
	},

	edit({ className, attributes, setAttributes, isSelected }) {
		const { fluidify } = attributes;

		const toggleFluidify = fluidify => setAttributes({ fluidify });

		return (
			<Fragment>
				<Jumbotron className={className} fluid={fluidify}>
					<InnerBlocks />
				</Jumbotron>

				{isSelected && (
					<InspectorControls key="inspector">
						<PanelBody title={__( 'Jumbotron Settings' )}>
							<ToggleControl
								label={__( 'Fluid jumbotron' )}
								checked={!! fluidify}
								help={__(
									'To make the jumbotron full width, and without rounded corners.'
								)}
								onChange={toggleFluidify}
							/>
						</PanelBody>
					</InspectorControls>
				)}
			</Fragment>
		);
	},

	save({ attributes }) {
		const { fluidify } = attributes;

		return (
			<Jumbotron fluid={fluidify}>
				<InnerBlocks.Content />
			</Jumbotron>
		);
	}
});
