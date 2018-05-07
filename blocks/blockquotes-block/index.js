import { PanelBody } from '@wordpress/components' // Generic, reusable UI WordPress components
import { __ } from '@wordpress/i18n' // Internationalization utilities
import { Fragment } from '@wordpress/element' // Abstraction on top of React
import {
  registerBlockType,
  InspectorControls,
  InnerBlocks,
  AlignmentToolbar,
  PlainText
} from '@wordpress/blocks' // Module providing utilities for registering and building blocks
import { join } from 'lodash'
import './style.scss'

registerBlockType('bsgut/blockquotes-block', {
  title: __('Blockquotes'),
  icon: 'welcome-learn-more',
  category: 'common',
  description: __(
    'For quoting blocks of content from another source within your document.'
  ),
  keywords: [__('bootstrap'), __('bsgut'), __('quote')],
  attributes: {
    align: {
      type: 'string'
    },
    citation: {
      type: 'string',
      source: 'children',
      selector: 'cite'
    }
  },

  edit ({ className, attributes, setAttributes, isSelected }) {
    const { align, citation } = attributes

    const updateAlign = align => setAttributes({ align })
    const updateCitation = citation => setAttributes({ citation })

    return (
      <Fragment>
        <div className={className}>
          <blockquote
            className={
              align ? join(['blockquote', 'text-' + align], ' ') : 'blockquote'
            }
          >
            <InnerBlocks />
            <footer className="blockquote-footer">
              <PlainText
                tagName="cite"
                value={citation}
                placeholder={__('Source of the citation…')}
                onChange={updateCitation}
              />
            </footer>
          </blockquote>
        </div>

        {isSelected && (
          <InspectorControls key="inspector">
            <PanelBody title={__('Alignment')}>
              <AlignmentToolbar value={align} onChange={updateAlign} />
            </PanelBody>
          </InspectorControls>
        )}
      </Fragment>
    )
  },

  save ({ className, attributes }) {
    const { align, citation } = attributes

    return (
      <blockquote
        className={
          align ? join(['blockquote', 'text-' + align], ' ') : 'blockquote'
        }
      >
        <InnerBlocks.Content />
        {citation &&
          citation.length > 0 && (
          <footer className="blockquote-footer">
            <cite>{citation}</cite>
          </footer>
        )}
      </blockquote>
    )
  }
})
