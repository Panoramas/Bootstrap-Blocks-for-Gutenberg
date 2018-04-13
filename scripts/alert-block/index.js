const { __ } = wp.i18n; // Import __() from wp.i18n

import {
  registerBlockType,
  InnerBlocks,
  InspectorControls
} from "@wordpress/blocks";
import { Fragment } from "@wordpress/element";
import { SelectControl } from "@wordpress/components";

import "./style.scss";

registerBlockType("bsgut/alert-block", {
  title: __("Alert"),
  icon: __("welcome-learn-more"),
  category: "common",
  description: __(
    "Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages."
  ),
  keywords: ["bootstrap", "bsgut", "message"],
  attributes: {
    type: {
      type: "string",
      default: "info"
    }
  },

  edit({ className, attributes, setAttributes, isSelected }) {
    const { type } = attributes;

    const updateType = type => setAttributes({ type });

    return (
      <Fragment>
        <div className={className + " alert alert-" + type}>
          <InnerBlocks />
        </div>

        {isSelected && (
          <InspectorControls>
            <SelectControl
              label="Message Type"
              value={type}
              options={[
                { label: __("Primary"), value: "primary" },
                { label: __("Secondary"), value: "secondary" },
                { label: __("Success"), value: "success" },
                { label: __("Danger"), value: "danger" },
                { label: __("Warning"), value: "warning" },
                { label: __("Info"), value: "info" },
                { label: __("Light"), value: "light" },
                { label: __("Dark"), value: "dark" }
              ]}
              onChange={updateType}
            />
          </InspectorControls>
        )}
      </Fragment>
    );
  },

  save({ attributes }) {
    const { type, message } = attributes;
    return (
      <div className={"alert alert-" + type} role="alert">
        <InnerBlocks.Content />
      </div>
    );
  }
});
