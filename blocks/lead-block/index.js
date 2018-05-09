/**
 * External dependencies
 */
import { join } from 'lodash';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n'; // Internationalization utilities
import { Fragment } from '@wordpress/element'; // Abstraction on top of React
import {
	registerBlockType,
	RichText
} from '@wordpress/blocks'; // Module providing utilities for registering and building blocks

/**
 * Internal dependencies
 */
import './style.scss';

registerBlockType( 'bsgut/lead-block', {
	title: __( 'Lead' ),
	icon: 'welcome-learn-more',
	category: 'common',
	description: __( 'Make a paragraph stand out.' ),
	keywords: [ __( 'bootstrap' ), __( 'bsgut' ) ],
	attributes: {
		content: {
			source: 'children',
			selector: 'p'
		}
	},

	edit({ className, attributes, setAttributes, isSelected }) {
		const { content } = attributes;

		const updateContent = content => setAttributes({ content });

		return (
			<Fragment>
				<RichText
					tageName="p"
					className={join([ 'lead', className ], ' ' )}
					value={content}
					onChange={updateContent}
					isSelected={isSelected}
				/>
			</Fragment>
		);
	},

	save({ className, attributes }) {
		const { content } = attributes;

		return (
			<p className={join([ 'lead', className ], ' ' )}>
				{content}
			</p>
		);
	}
});
