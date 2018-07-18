fis.set('project.ignore', ['node_modules/**', 'output/**', 'fis-conf.js', 'docs/**'])
fis.match('/docs/**', {
    release: false
})
fis.match('**.less', {
    parser: fis.plugin('less-2.x'),
    rExt:'css'
})
