'use strict'

import gulp from 'gulp'

const requireDir = require('require-dir'),
    paths = {
        views: {
            src: ['./src/views/*.html', './src/views/pages/*.html'],
            dist: './dist/',
            watch: ['./src/views/**/*.html'],
        },
        styles: {
            src: './src/styles/index.{scss,sass}',
            dist: './dist/css/',
            watch: ['./src/styles/**/*.{scss,sass}'],
        },
        scripts: {
            src: './src/js/index.js',
            dist: './dist/js/',
            watch: ['./src/js/**/*.js'],
        },
        images: {
            src: [
                './src/img/*.{jpg,jpeg,png,gif,tiff,svg,ico,webp,avif}',
                '!./src/img/favicon/*.{jpg,jpeg,png,gif,tiff}',
            ],
            dist: './dist/img/',
            watch: './src/img/**/*.{jpg,jpeg,png,gif,tiff,svg,ico,webp,avif}',
        },
        spriteVector: {
            src: './src/img/sprites/vector/*.svg',
            dist: './dist/img/sprites/',
            watch: './src/img/sprites/vector/*.svg',
        },
        spriteIcon: {
            src: './src/img/sprites/icon/*.svg',
            dist: './dist/img/sprites/',
            watch: './src/img/sprites/icon/*.svg',
        },
        fonts: {
            src: './src/fonts/**/*',
            dist: './dist/fonts/',
            watch: './src/fonts/**/*',
        },
        libs: {
            src: './src/libs/**/*',
            dist: './dist/libs/',
            watch: './src/libs/**/*',
        },
        favicons: {
            src: './src/img/favicon/*.{jpg,jpeg,png,gif}',
            dist: './dist/img/favicons/',
        },
        gzip: {
            src: ['./src/.htaccess', './src/manifest.json'],
            dist: './dist/',
        },
        docs: {
            src: './src/docs/**/*',
            dist: './dist/docs/',
            watch: './src/docs/**/*',
        },
    }

requireDir('./gulp-tasks/')

export { paths }

export const development = gulp.series(
    'clean',
    gulp.parallel([
        'views',
        'styles',
        'scripts',
        'images',
        'spriteVector',
        'spriteIcon',
        'fonts',
        'libs',
        'favicons',
        'docs',
    ]),
    gulp.parallel('serve')
)

export const prod = gulp.series(
    'clean',
    gulp.parallel([
        'views',
        'styles',
        'scripts',
        'images',
        'spriteVector',
        'spriteIcon',
        'fonts',
        'libs',
        'favicons',
        'gzip',
        'docs',
    ])
)

export const ftp = gulp.series(
    'clean',
    gulp.parallel([
        'views',
        'styles',
        'scripts',
        'images',
        'spriteVector',
        'spriteIcon',
        'fonts',
        'libs',
        'favicons',
        'gzip',
        'docs',
    ]),
    gulp.parallel('deploy')
)

export default development
