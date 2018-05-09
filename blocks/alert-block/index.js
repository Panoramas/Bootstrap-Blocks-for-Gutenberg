import {
	registerBlockType,
	InnerBlocks,
	InspectorControls
} from '@wordpress/blocks';
import { Fragment } from '@wordpress/element';
import { SelectControl, ToggleControl, PanelBody } from '@wordpress/components';
import { Alert } from 'reactstrap';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
import { alert } from '../blocks.json';
import './style.scss';

registerBlockType( 'bsgut/alert-block', {
	title: __( alert.name ),
	icon: alert.icon,
	category: alert.category,
	description: __( alert.description ),
	keywords: [ 'bootstrap', 'bsgut', 'message' ],
	attributes: {
		type: {
			type: 'string',
			default: 'info'
		},
		dismissable: {
			type: 'boolean',
			default: false
		}
	},

	edit({ className, attributes, setAttributes, isSelected }) {
		const { type, dismissable } = attributes;

		const updateType = type => setAttributes({ type });
		const updateDismissable = dismissable => setAttributes({ dismissable });

		return (
			<Fragment>
				<Alert className={className} color={type} toggle={dismissable}>
					<InnerBlocks />
				</Alert>

				{isSelected && (
					<InspectorControls key="inspector">
						<PanelBody title={__( 'Alert Settings' )}>
							<SelectControl
								label={__( 'Message Type' )}
								value={type}
								options={[
									{ label: __( 'Primary' ), value: 'primary' },
									{ label: __( 'Secondary' ), value: 'secondary' },
									{ label: __( 'Success' ), value: 'success' },
									{ label: __( 'Danger' ), value: 'danger' },
									{ label: __( 'Warning' ), value: 'warning' },
									{ label: __( 'Info' ), value: 'info' },
									{ label: __( 'Light' ), value: 'light' },
									{ label: __( 'Dark' ), value: 'dark' }
								]}
								help={__( 'Select the type of your alert.' )}
								onChange={updateType}
							/>
							<ToggleControl
								label={__( 'Dismissable' )}
								checked={!! dismissable}
								help={__(
									'Enable to display a close button on the upper right corner.'
								)}
								onChange={updateDismissable}
							/>
						</PanelBody>
					</InspectorControls>
				)}
			</Fragment>
		);
	},

	save({ attributes }) {
		const { type, dismissable } = attributes;

		return (
			<div className={'alert alert-' + type}>
				{true === dismissable && (
					<button
						type="button"
						className="close"
						data-dismiss="alert"
						aria-label="Close"
					>
						<span aria-hidden="true">&times;</span>
					</button>
				)}
				<InnerBlocks.Content />
			</div>
		);
	}
});
