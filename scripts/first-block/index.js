import { registerBlockType } from "@wordpress/blocks";

registerBlockType("bsgut/intro-block", {
  // Title of the block.
  title: "First Block",

  // Icon of the block dashicon string (https://developer.wordpress.org/resource/dashicons) or custom svg element.
  icon: "welcome-learn-more",

  // Category (common, formatting, layout, widgets, embed)
  category: "common",

  // Description of the block
  description: "This block introduces you to block creation",

  // Keywords to search for the block
  keywords: ["bootstrap", "gutenberg", "bs", "bsgut"],

  // Block's editor representation
  edit({ className }) {
    return <p className={className + ' alert alert-info'}>Welcome to Bootstrap Blocks for Gutenberg</p>;
  },

  // Block's frontend representation
  save({ attributes }) {
    return <p className="alert alert-info">Welcome to Bootstrap Blocks for Gutenberg</p>;
  }
});
