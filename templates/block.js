import { >>DEP2<< } from '@wordpress/components' // Generic, reusable UI WordPress components
import { __ } from '@wordpress/i18n' // Internationalization utilities
import React, { Fragment } from '@wordpress/element' // Abstraction on top of React
// import {} from '@wordpress/date' // Date formatting and manipulation utilities
import { >>DEP1<< } from '@wordpress/blocks' // Module providing utilities for registering and building blocks
// import {} from '@wordpress/data' // Abstraction on top of Redux
// import {} from '@wordpress/editor' // Module representing the WordPress Editor’s page
// import {} from '@wordpress/utils' // Various generic utilities
>>CSS<<

registerBlockType('bsgut/>>FOLDER<<', {
  title: __('>>NAME<<'),
  icon: '>>ICON<<',
  category: 'common',
  description: __('>>DESCRIPTION<<'),
  keywords: [ __('bootstrap'), __('bsgut'), __('>>KEYWORD<<') ],
  attributes: {
    attr: {
      type: 'string'
    }
  },

  edit ({ className, attributes, setAttributes, isSelected }) {
    const { attr } = attributes

    const updateAttr = attr => setAttributes({ attr })

    return (
      <Fragment>
        <div className={className}>
        </div>

        {isSelected && (
          <InspectorControls key="inspector">
            <PanelBody title={__('>>NAME<< Settings')}>
            </PanelBody>
          </InspectorControls>
        )}
      </Fragment>
    )
  },

  save ({ attributes }) {
    const { attr } = attributes

    return (
      <div className={}>
      </div>
    )
  }
})
