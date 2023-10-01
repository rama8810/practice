var gulp = require('gulp'),
    sass = require('gulp-sass')(require('sass')),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    typescript = require('gulp-typescript'),
    uglify = require('gulp-uglify')
    ;

var srcPaths = {
    html: "src/html/",
    scss: "src/scss/",
    ts: "src/ts/"
}

var distPats = {
    html: "dist/html/",
    css: "dist/css/",
    js: "dist/js/"
}

function html() {
    return gulp.src(srcPaths.html+"*.html")
        .pipe(gulp.dest(distPats.html));
}

function css() {
    return gulp.src(srcPaths.scss+"*.scss")        
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(concat('styles.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(distPats.css));
}

var tsProject = typescript.createProject("tsconfig.json");
function ts() {
    return gulp.src(srcPaths.ts+"*.ts")
        .pipe(tsProject())
        .pipe(sourcemaps.init())        
        .pipe(concat('all.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(distPats.js));
}

exports.html = html
exports.css = css
exports.ts = ts