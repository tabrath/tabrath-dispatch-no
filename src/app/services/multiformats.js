angular.module('tabrath').factory('Multiformats', [function() {
    function createModule(id, name, description, icon) {
        return {
            name: 'Multiformats.' + name,
            description: description,
            repository: 'https://github.com/multiformats/' + id,
            license: 'MIT',
            icon: icon || 'https://avatars1.githubusercontent.com/u/20296538?v=3&s=200',
            badges: [
                { image: 'https://img.shields.io/badge/project-multiformats-blue.svg?style=flat-square', href: 'https://github.com/multiformats/multiformats' },
                { image: 'https://img.shields.io/badge/freenode-%23ipfs-blue.svg?style=flat-square', href: 'https://webchat.freenode.net/?channels=%23ipfs' },
                { image: 'https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square', href: 'https://github.com/RichardLitt/standard-readme' },
                { image: 'https://img.shields.io/travis/multiformats/'+id+'.svg?style=flat-square&branch=master', href: 'https://travis-ci.org/multiformats/' + id },
                { image: 'https://img.shields.io/appveyor/ci/tabrath/'+id+'/master.svg?style=flat-square', href: 'https://ci.appveyor.com/project/tabrath/' + id },
                { image: 'https://img.shields.io/codecov/c/github/multiformats/'+id+'/master.svg?style=flat-square', href: 'https://codecov.io/gh/multiformats/'+id },
                { image: 'https://img.shields.io/librariesio/github/multiformats/'+id+'.svg?style=flat-square', href: 'https://libraries.io/github/multiformats/'+id },
                { image: 'http://sonar.dispatch.no/api/badges/gate?key='+id+'&metric=alert_status&template=FLAT', href: 'http://sonar.dispatch.no/dashboard/index/'+id },
                { image: 'https://buildstats.info/nuget/Multiformats.'+name, href: 'https://www.nuget.org/packages/Multiformats.'+name }
            ]
        };
    };

    return {
        project: {
            name: 'Multiformats',
            organization: 'https://github.com/multiformats',
            specification: 'https://github.com/multiformats/multiformats',
            image: 'https://avatars1.githubusercontent.com/u/20296538?v=3&s=200',
            description: 'Self-describing protocols'
        },
        modules: [
            createModule('cs-multihash', 'Hash', 'Multihash implementation in C#'),
            createModule('cs-multiaddress', 'Address', 'Multiaddress implementation in C#'),
            createModule('cs-multibase', 'Base', 'Multibase implementation in C#'),
            createModule('cs-multicodec', 'Codec', 'Multicodec implementation in C#'),
            createModule('cs-multistream', 'Stream', 'Multistream implementation in C#')
        ]
    };
}]);