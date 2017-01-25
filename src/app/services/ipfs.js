angular.module('tabrath').factory('IPFS', [function() {
    function createModule(id, name, description, icon) {
        return {
            name: 'IPFS.' + name,
            description: description,
            repository: 'https://github.com/ipfs/' + id,
            license: 'MIT',
            icon: icon || 'https://avatars0.githubusercontent.com/u/10536621?v=3&s=200',
            badges: [
                { image: 'https://img.shields.io/badge/project-ipfs-blue.svg?style=flat-square', href: 'https://github.com/ipfs/ipfs' },
                { image: 'https://img.shields.io/badge/freenode-%23ipfs-blue.svg?style=flat-square', href: 'https://webchat.freenode.net/?channels=%23ipfs' },
                { image: 'https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square', href: 'https://github.com/RichardLitt/standard-readme' },
                { image: 'https://img.shields.io/travis/ipfs/'+id+'.svg?style=flat-square&branch=master', href: 'https://travis-ci.org/ipfs/' + id },
                { image: 'https://img.shields.io/appveyor/ci/tabrath/'+id+'/master.svg?style=flat-square', href: 'https://ci.appveyor.com/project/tabrath/' + id },
                { image: 'https://img.shields.io/codecov/c/github/ipfs/'+id+'/master.svg?style=flat-square', href: 'https://codecov.io/gh/ipfs/'+id },
                { image: 'https://img.shields.io/librariesio/github/ipfs/'+id+'.svg?style=flat-square', href: 'https://libraries.io/github/ipfs/'+id },
                { image: 'http://sonar.dispatch.no/api/badges/gate?key='+id+'&metric=alert_status&template=FLAT', href: 'http://sonar.dispatch.no/dashboard/index/'+id },
                { image: 'https://buildstats.info/nuget/IPFS.'+name, href: 'https://www.nuget.org/packages/IPFS.'+name }
            ]
        };
    };
    
    return {
        project: {
            name: 'IPFS',
            organization: 'https://github.com/ipfs',
            specification: 'https://github.com/ipfs/ipfs',
            image: 'https://avatars0.githubusercontent.com/u/10536621?v=3&s=200',
            description: 'A peer-to-peer hypermedia protocol'
        },
        modules: []
    };
}]);