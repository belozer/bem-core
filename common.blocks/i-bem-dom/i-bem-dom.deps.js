({
    shouldDeps : [
        'inherit',
        'jquery',
        'objects',
        'functions',
        'dom',
        { elem : 'init' },
        { block : 'i-bem-4' },
        { block : 'i-bem-4', elems : ['internal'] },
        { elem : 'events', mods : { type : ['dom', 'bem'] } },
        { elem : 'collection' }
    ]
})
