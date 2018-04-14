module.exports = function (plop) {
  var folder = "";
  // controller generator
  plop.setGenerator('block', {
      description: 'application controller logic',
      prompts: [
        {
          type: 'input',
          name: 'folder',
          message: 'block folder name please'
        },
        {
          type: 'input',
          name: 'name',
          message: 'what is the name of your block?'
        },
        {
          type: 'checkbox',
          name: 'dep1',
          message: 'Now, let\'s talk about dependencies shall we… what do we need in @wordpress/blocks ? (use spacebar to check/uncheck)',
          choices: [
            {name: 'registerBlockType', value: 'registerBlockType', checked: true},
  					{name: 'InspectorControls', value: 'InspectorControls', checked: true},
  					{name: 'InnerBlocks', value: 'InnerBlocks'}
  				]
        },
        {
          type: 'checkbox',
          name: 'dep2',
          message: 'what about @wordpress/components ?',
          choices: [
            {name: 'PanelBody', value: 'PanelBody', checked: true},
            {name: 'ToggleControl', value: 'ToggleControl'},
  					{name: 'SelectControl', value: 'SelectControl'}
  				]
        },
        {
          type: 'confirm',
  				name: 'hasCss',
  				message: 'Do you want a css file with that?'
        }
      ],
      actions: function(data){
        var actions = [
          {
            type: 'add',
            path: 'blocks/{{folder}}/index.js',
            templateFile: 'templates/block.js'
          },
          {
            type: 'modify',
            path: 'blocks/{{folder}}/index.js',
            pattern: />>NAME<</gi,
            template: '{{name}}'
          },
          {
            type: 'modify',
            path: 'blocks/{{folder}}/index.js',
            pattern: />>FOLDER<</gi,
            template: '{{folder}}'
          },
          {
            type: 'modify',
            path: 'blocks/{{folder}}/index.js',
            pattern: />>DEP1<</gi,
            template: '{{dep1}}'
          },
          {
            type: 'modify',
            path: 'blocks/{{folder}}/index.js',
            pattern: />>DEP2<</gi,
            template: '{{dep2}}'
          }
        ];

        if(data.hasCss) {
  				actions = actions.concat([
  					{
  						type: 'add',
              path: 'blocks/{{folder}}/index.css',
              templateFile: 'templates/block.css'
  					},
            {
              type: 'modify',
              path: 'blocks/{{folder}}/index.js',
              pattern: />>CSS<</gi,
              template: 'import "./style.scss";'
            },
            {
              type: 'modify',
              path: 'blocks/{{folder}}/index.css',
              pattern: />>NAME<</gi,
              template: '{{name}}'
            }
  				]);
  			} else {
          actions = actions.concat([
            {
              type: 'modify',
              path: 'blocks/{{folder}}/index.js',
              pattern: />>CSS<</gi,
              template: ''
            }
          ]);
        }

  			return actions;
      }
  });
};
