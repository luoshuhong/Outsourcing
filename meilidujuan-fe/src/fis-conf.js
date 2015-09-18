/**
 * Created by liunickluck on 15/8/10.
 */
fis.set('project.files',['*.html','*.js',"*.png","*.css",'*.jsx'])
var requireConfig = require("./require.json");
fis.hook('module', fis.util.merge({
    mode: 'auto',
    forwardDeclaration: true
},requireConfig));
fis.util.each(requireConfig.paths, function (val, key) {
    fis.match(val + '.js', {
        id: key,
        isMod : true
    });
});
fis.match('::package', {
    // npm install [-g] fis3-postpackager-loader
    postpackager: fis.plugin('loader', {
        resourceType: 'amd'
    })
});
fis.match('*.js', {
    // fis-optimizer-uglify-js 插件进行压缩，已内置
    optimizer: fis.plugin('uglify-js')
});
fis.match('*.css', {
    // fis-optimizer-clean-css 插件进行压缩，已内置
    optimizer: fis.plugin('clean-css')
});
fis.match('*.png', {
    // fis-optimizer-png-compressor 插件进行压缩，已内置
    optimizer: fis.plugin('png-compressor')
});

fis.match('{/bower_components/**/*.js,/common/lib/**/*.js,/common/lib/*.js,/common/*.js}', {
    isMod:true,
    release:'/static/vendor/vendor.js',
    packTo:'/static/vendor/vendor.js'
});

fis.match('/bower_components/requirejs/require.js',{
    isMod:false,
    release:'/static/vendor/require.js',
    packTo:'/static/vendor/require.js'
});
fis.match('/bower_components/handlebars/handlebars.runtime.amd.js',{
    isMod:false,
    release:'/static/vendor/handlebars.js',
    packTo:'/static/vendor/handlebars.js'
});
//css库合并
fis.match('{/bower_components/**/*.css,/common/**.css}', {
    release:'/static/vendor/vendor.css',
    packTo:'/static/vendor/vendor.css'
});
//字体图片类静态资源
fis.match('/{bower_components,common}/**/*.{png,jpg,gif,ttf,woff,svg,eot,woff2}', {
    release:'/static/vendor/$0'
});
fis.match('*.less', {
    // fis-optimizer-clean-css 插件进行压缩，已内置
    parser: fis.plugin('less'),
    rExt:'css'
});
fis.match('**.jsx', {
    isMod: true,
    parser: fis.plugin('react'),
    release: '/static/components.jsx.js',
    packTo:'/static/components.jsx.js',
    optimizer: fis.plugin('uglify-js'),
    rExt:'.js',
    id:'$0.jsx',
    isJsLike:true
});
fis.match('**.hbs', {
    isMod: true,
    parser: fis.plugin('handlebars'),
    release: '/static/templates.hbs.js',
    packTo:'/static/templates.hbs.js',
    rExt:'.js',
    id:'$0.hbs',
    isJsLike:true
});

fis.match('{actions,collections,dispatcher,stores,models,routes,templates}/*.*', {
    isMod:true,
    release: '/static/$0'
});
fis.match('**.tpl', {
    isMod: false,
    parser: fis.plugin('utc'),
    rExt:'.js',
    isJsLike:true,
    release:false
});
fis.media("prod").match("*",{
    deploy:[
            fis.plugin("replace",{
                from:"http://ssh.com:8080",
                to:"http://server.meilidujuan.com:8080"
            }),
        fis.plugin('local-deliver')
    ]
})
