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
          type: 'confirm',
  				name: 'hasCss',
  				message: 'Do you want a css file with that?'
        }
      ],
      actions: function(data){
        var actions = [
          {
            type: 'add',
            path: 'scripts/{{folder}}/index.js',
            templateFile: 'templates/block.js'
          },
          {
            type: 'modify',
            path: 'scripts/{{folder}}/index.js',
            pattern: />>NAME<</gi,
            template: '{{name}}'
          },
          {
            type: 'modify',
            path: 'scripts/{{folder}}/index.js',
            pattern: />>FOLDER<</gi,
            template: '{{folder}}'
          }
        ];

        if(data.hasCss) {
  				actions = actions.concat([
  					{
  						type: 'add',
              path: 'scripts/{{folder}}/index.css',
              templateFile: 'templates/block.css'
  					},
            {
              type: 'modify',
              path: 'scripts/{{folder}}/index.js',
              pattern: />>CSS<</gi,
              template: 'import "./style.scss";'
            },
            {
              type: 'modify',
              path: 'scripts/{{folder}}/index.css',
              pattern: />>NAME<</gi,
              template: '{{name}}'
            }
  				]);
  			} else {
          actions = actions.concat([
            {
              type: 'modify',
              path: 'scripts/{{folder}}/index.js',
              pattern: />>CSS<</gi,
              template: ''
            }
          ]);
        }

  			return actions;
      }
  });
};
