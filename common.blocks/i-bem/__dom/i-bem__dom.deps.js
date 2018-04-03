({
    shouldDeps : [
        'jquery',
        'objects',
        'functions',
        'dom',
        { mod : 'init' },
        { block : 'i-bem', elems : ['internal'] },
        { block : 'i-bem-dom' },
        { block : 'i-bem-dom', elem : 'events', mods : { type : ['bem', 'dom'] } }
    ]
})
