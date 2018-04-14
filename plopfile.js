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
        }
      ],
      actions: [
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
      ]
  });
};
