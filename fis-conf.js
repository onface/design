if (fis.project.currentMedia() !== 'dev') {
    fis.hook(require('fis3-hook-relative'))
    fis.match('**', {
        relative: true
    })
}
fis.match('**.less', {
    parser: fis.plugin('less-2.x'),
    rExt:'css'
})
