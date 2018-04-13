const { __ } = wp.i18n; // Import __() from wp.i18n

import {
  registerBlockType,
  InnerBlocks,
  InspectorControls
} from "@wordpress/blocks";
import { Fragment } from "@wordpress/element";
import {
  ToggleControl,
  PanelBody
} from "@wordpress/components";

import "./style.scss";

const getBlockClass = fluidify => {
  if (fluidify) {
    return " jumbotron jumbotron-fluid";
  }
  return " jumbotron";
};

registerBlockType("bsgut/jumbotron-block", {
  title: __("Jumbotron"),
  icon: "welcome-learn-more",
  category: "common",
  description: __(
    "Lightweight, flexible component for showcasing hero unit style content."
  ),
  keywords: ["bootstrap", "bsgut", "hero"],
  attributes: {
    fluidify: {
      type: "string"
    }
  },

  edit({ className, attributes, setAttributes, isSelected }) {
    const { fluidify } = attributes;

    const toggleFluidify = fluidify => setAttributes({ fluidify });

    let blockClass = getBlockClass(fluidify);

    return (
      <Fragment>
        <div className={className + blockClass}>
          <InnerBlocks />
        </div>

        {isSelected && (
          <InspectorControls key="inspector">
            <PanelBody title={ __( 'Jumbotron Settings' ) }>
              <ToggleControl
                label={__("Fluid jumbotron")}
                checked={!!fluidify}
                help={__(
                  "To make the jumbotron full width, and without rounded corners."
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

    let blockClass = getBlockClass(fluidify);

    return (
      <div className={blockClass}>
        <InnerBlocks.Content />
      </div>
    );
  }
});
