fis.match('compile/**', {
    release: false
})
if (fis.project.currentMedia() !== 'dev') {
    fis.hook(require('fis3-hook-relative'))
    fis.match('**', {
        relative: true
    })
}
if (fis.project.currentMedia() === 'dev') {
    var fisLivereload = require('fis-livereload').create()
    fis.media('dev').match('*.html', {
        postprocessor: fisLivereload
    })
}

fis.match('**.less', {
    parser: fis.plugin('less-2.x'),
    rExt:'css'
})
