'use strict';

const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const minify = require('gulp-minify');

exports.default = function () {
    return src('./src/styles/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cssmin())
        .pipe(rename({suffix: '.min'}))
        .pipe(dest('./dist/styles'));

};

exports.watch = function () {
    watch('./src/styles/style.scss', series('default'));
};

exports.task = function() {
    src(['./src/scripts/script.js'])
        .pipe(minify())
        .pipe(dest('./dist/scripts'))
};