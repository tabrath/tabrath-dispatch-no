angular.module('tabrath').factory('Blog', [function() {
    return {
        posts: [
            {
                title: 'First blog post',
                author: 'Trond Arne Bråthen',
                published: Date.now(),
                categories: ['tech', 'random'],
                description: 
'Here goes some code:\n'+
'``` cs\n' +
'public async Task<int> AccessTheWebAsync()\n' +
'{\n' +
'    return 1;\n' +
'}\n' +
'```\n'

            }
        ]
    };
}]);