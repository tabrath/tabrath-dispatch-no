function Project(name, org, spec, img, desc) {
    this.name = name;
    this.organization = org;
    this.specification = spec;
    this.image = img;
    this.description = desc;
    this.id = name.toLowerCase();
    this.modules = [];
}

Project.prototype.add = function(id, name, description, icon) {
    var module = {
        id: id,
        name: this.name + '.' + name,
        description: description,
        repository: this.organization + '/' + id,
        license: 'MIT',
        icon: icon || this.image,
        badges: [
            { image: 'https://img.shields.io/badge/project-' + this.id + '-blue.svg?style=flat-square', href: this.organization },
            { image: 'https://img.shields.io/badge/freenode-%23ipfs-blue.svg?style=flat-square', href: 'https://webchat.freenode.net/?channels=%23ipfs' },
            { image: 'https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square', href: 'https://github.com/RichardLitt/standard-readme' },
            { image: 'https://img.shields.io/travis/'+this.id+'/'+id+'.svg?style=flat-square&branch=master', href: 'https://travis-ci.org/'+this.id+'/' + id },
            { image: 'https://img.shields.io/appveyor/ci/tabrath/'+id+'/master.svg?style=flat-square', href: 'https://ci.appveyor.com/project/tabrath/' + id },
            { image: 'https://img.shields.io/codecov/c/github/'+this.id+'/'+id+'/master.svg?style=flat-square', href: 'https://codecov.io/gh/'+this.id+'/'+id },
            { image: 'https://img.shields.io/librariesio/github/'+this.id+'/'+id+'.svg?style=flat-square', href: 'https://libraries.io/github/'+this.id+'/'+id },
            { image: 'http://sonar.dispatch.no/api/badges/gate?key='+id+'&metric=alert_status&template=FLAT', href: 'http://sonar.dispatch.no/dashboard/index/'+id },
            { image: 'https://buildstats.info/nuget/'+this.name+'.'+name, href: 'https://www.nuget.org/packages/'+this.name+'.'+name }
        ]
    };

    this.modules.push(module);
    return this;
};

angular.module('tabrath').factory('Projects', [function() {
    var projects = [
        new Project('Multiformats', 'https://github.com/multiformats', 'https://github.com/multiformats/multiformats', 'https://avatars1.githubusercontent.com/u/20296538?v=3&s=200', 'Self-describing protocols')
            .add('cs-multihash', 'Hash', 'Multihash implementation in C#')
            .add('cs-multiaddress', 'Address', 'Multiaddress implementation in C#')
            .add('cs-multibase', 'Base', 'Multibase implementation in C#')
            .add('cs-multicodec', 'Codec', 'Multicodec implementation in C#')
            .add('cs-multistream', 'Stream', 'Multistream implementation in C#'),
        new Project('LibP2P', 'https://github.com/libp2p', 'https://github.com/libp2p/specs', 'https://raw.githubusercontent.com/diasdavid/specs/libp2p-spec/protocol/network/figs/logo.png', 'Modular peer-to-peer networking stack (used by IPFS and others)')
            .add('cs-libp2p-crypto', 'Crypto', 'Crypto implementation in C#')
            .add('cs-libp2p-peer', 'Peer', 'PeerId implementation in C#')
            .add('cs-libp2p-protocol', 'Protocol', 'ProtocolId implementation in C#')
            .add('cs-libp2p-record', 'Record', 'DHT Record implementation in C#')
            .add('cs-libp2p-io', 'IO', 'IO abstractions')
            .add('cs-libp2p-utils', 'Utilities', 'Utilities used all over LibP2P'),
        new Project('IPFS', 'https://github.com/ipfs', 'https://github.com/ipfs/ipfs', 'https://avatars0.githubusercontent.com/u/10536621?v=3&s=200', 'A peer-to-peer hypermedia protocol')
    ];

    return {
        getProjects: function() {
            return projects;
        }
    };
}]);