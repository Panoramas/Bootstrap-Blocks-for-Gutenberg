const { __ } = wp.i18n; // Import __() from wp.i18n

import {
  registerBlockType,
  InspectorControls
} from "@wordpress/blocks";
import { Fragment } from "@wordpress/element";
import {
  PanelBody
} from "@wordpress/components";

registerBlockType("bsgut/>>FOLDER<<", {
  title: __(">>NAME<<"),
  icon: "welcome-learn-more",
  category: "common",
  description: __("Some description"),
  keywords: ["bootstrap", "bsgut"],
  attributes: {
    attr: {
      type: "string"
    }
  },

  edit({ className, attributes, setAttributes, isSelected }) {
    const { attr } = attributes;

    const updateAttr = attr => setAttributes({ attr });

    return (
      <Fragment>
        <div className={className}>
        </div>

        {isSelected && (
          <InspectorControls key="inspector">
            <PanelBody title={__( '">>NAME<< Settings' )}>
            </PanelBody>
          </InspectorControls>
        )}
      </Fragment>
    );
  },

  save({ attributes }) {
    const { attr } = attributes;

    return (
      <div className={}>
      </div>
    );
  }
});
