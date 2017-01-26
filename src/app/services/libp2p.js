angular.module('tabrath').factory('LibP2P', [function() {
    function createModule(id, name, description, icon) {
        return {
            name: 'LibP2P.' + name,
            description: description,
            repository: 'https://github.com/libp2p/' + id,
            license: 'MIT',
            icon: icon || 'https://avatars2.githubusercontent.com/u/14838238?v=3&s=200',
            badges: [
                { image: 'https://img.shields.io/badge/project-libp2p-blue.svg?style=flat-square', href: 'https://github.com/libp2p/libp2p' },
                { image: 'https://img.shields.io/badge/freenode-%23ipfs-blue.svg?style=flat-square', href: 'https://webchat.freenode.net/?channels=%23ipfs' },
                { image: 'https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square', href: 'https://github.com/RichardLitt/standard-readme' },
                { image: 'https://img.shields.io/travis/libp2p/'+id+'.svg?style=flat-square&branch=master', href: 'https://travis-ci.org/libp2p/' + id },
                { image: 'https://img.shields.io/appveyor/ci/tabrath/'+id+'/master.svg?style=flat-square', href: 'https://ci.appveyor.com/project/tabrath/' + id },
                { image: 'https://img.shields.io/codecov/c/github/libp2p/'+id+'/master.svg?style=flat-square', href: 'https://codecov.io/gh/libp2p/'+id },
                { image: 'https://img.shields.io/librariesio/github/libp2p/'+id+'.svg?style=flat-square', href: 'https://libraries.io/github/libp2p/'+id },
                { image: 'http://sonar.dispatch.no/api/badges/gate?key='+id+'&metric=alert_status&template=FLAT', href: 'http://sonar.dispatch.no/dashboard/index/'+id },
                { image: 'https://buildstats.info/nuget/LibP2P.'+name, href: 'https://www.nuget.org/packages/LibP2P.'+name }
            ]
        };
    };

    return {
        project: {
            name: 'LibP2P',
            organization: 'https://github.com/libp2p',
            specification: 'https://github.com/libp2p/specs',
            image: 'https://raw.githubusercontent.com/diasdavid/specs/libp2p-spec/protocol/network/figs/logo.png',
            description: 'Modular peer-to-peer networking stack (used by IPFS and others)'
        },
        modules: [
            createModule('cs-libp2p-crypto', 'Crypto', 'Crypto implementation in C#'),
            createModule('cs-libp2p-peer', 'Peer', 'PeerId implementation in C#'),
            createModule('cs-libp2p-protocol', 'Protocol', 'ProtocolId implementation in C#'),
            createModule('cs-libp2p-record', 'Record', 'DHT Record implementation in C#'),
            createModule('cs-libp2p-io', 'IO', 'IO abstractions'),
            createModule('cs-libp2p-utils', 'Utilities', 'Utilities used all over LibP2P')
        ]
    };
}]);