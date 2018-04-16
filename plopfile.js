module.exports = function (plop) {
  var folder = "";


  // controller generator
  plop.setGenerator('block', {
      description: 'application controller logic',
      prompts: [
        {
          type: 'input',
          name: 'name',
          message: 'what is the name of your block?'
        },
        {
          type: 'input',
          name: 'slug',
          message: 'what is the slug-name of your block?'
        },
        {
          type: 'input',
          name: 'description',
          message: 'Describe your block'
        },
        {
          type: 'input',
          name: 'keyword',
          message: 'Do you want to add a keyword?'
        },
        {
          type: 'input',
          name: 'folder',
          message: 'block folder name please'
        },
        {
          type: 'input',
          name: 'icon',
          message: 'What Icon shall we use?',
          default: 'welcome-learn-more'
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
            pattern: />>KEYWORD<</gi,
            template: '{{keyword}}'
          },
          {
            type: 'modify',
            path: 'blocks/{{folder}}/index.js',
            pattern: />>DESCRIPTION<</gi,
            template: '{{description}}'
          },
          {
            type: 'modify',
            path: 'blocks/{{folder}}/index.js',
            pattern: />>ICON<</gi,
            template: '{{icon}}'
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

        actions = actions.concat([
          function customAction(answers) {
      				// // move the current working directory to the plop file path
      				// // this allows this action to work even when the generator is
      				// // executed from inside a subdirectory
      				// process.chdir(plop.getPlopfilePath());
              //
      				// // custom function can be synchronous or async (by returning a promise)
      				// var fs = require('fs');
      				// var existsMsg = 'psst {{name}}, change-me.txt already exists';
      				// var copiedMsg = 'hey {{name}}, I copied change-me.txt for you';
      				// var changeFileName = 'change-me.txt';
      				// var changeFilePath = 'folder/' + changeFileName;
              //
      				// // you can use plop.renderString to render templates
      				// existsMsg = plop.renderString(existsMsg, answers);
      				// copiedMsg = plop.renderString(copiedMsg, answers);
              //
      				// if (fs.existsSync(changeFilePath)) {
      				// 	// returned value shows up in the console
      				// 	return existsMsg;
      				// } else {
      				// 	// do a synchronous copy via node fs
      				// 	fs.writeFileSync(changeFilePath, fs.readFileSync('templates/' + changeFileName));
      				// 	return copiedMsg;
      				// }
      				process.chdir(plop.getPlopfilePath());

      				var fs = require('fs');
              var blocks = JSON.parse(fs.readFileSync('blocks/blocks.json', 'utf8'));

              var $name = answers.name;

              blocks[answers.slug] = {
                "name": answers.name,
                "description": answers.description,
                "dir": answers.folder,
                "css": answers.hasCss,
                "type": "content",
                "icon": answers.icon,
                "keyword": answers.keyword
              };

              var json = JSON.stringify(blocks, null, 2);
              fs.writeFileSync('blocks/blocks.json', json, 'utf-8');

      				return 'blocks.json has been updated';
      			}
        ]);

  			return actions;
      }
  });
};
