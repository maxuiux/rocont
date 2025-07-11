"use strict";

import { paths } from "../gulpfile.babel";
import gulp from "gulp";
import include from "gulp-file-include";
import browsersync from "browser-sync";
import plumber from "gulp-plumber";
import yargs from "yargs";

const argv = yargs.argv,
    production = !!argv.production;

gulp.task("views", () => {
    return gulp.src(paths.views.src)
        .pipe(plumber({
            errorHandler: function (err) {
                console.error("Error in views task:", err.message);
                this.emit("end");
            }
        }))
        .pipe(include({
            prefix: "@@",
            basepath: "src/views",
            debug: true
        }))
        .pipe(gulp.dest(paths.views.dist))
        .pipe(browsersync.stream());
});

gulp.task('watch', () => {
    browserSync.init({
        server: {
            baseDir: paths.dest
        }
    });

    gulp.watch(paths.watch, gulp.series('html')); 
});