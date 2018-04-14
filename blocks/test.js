jQuery( document ).on( 'tinymce-editor-setup', function( event, editor ) {
        editor.settings.toolbar1 += ',mybutton';
        editor.addButton( 'mybutton', {
                text: 'My button',
                icon: false,
                onclick: function () {
                        editor.insertContent('&nbsp;<b>It\'s my button!</b>&nbsp;');
                }
        });
});
