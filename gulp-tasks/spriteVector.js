"use strict";

import { paths } from "../gulpfile.babel";
const gulp = require('gulp');
const sprite = require('gulp-svg-sprite');
import browsersync from "browser-sync";

gulp.task("spriteVector", () => {
  return gulp.src(paths.spriteVector.src)
    .pipe(sprite({
      mode: {
        stack: {
          sprite: '../vector.svg',
          inline: true,
          example: true,
        },
      },
      shape: {
        transform: [
          {
            svgo: {
              plugins: [
                {
                  removeAttrs: {
                    attrs: ['class', 'data-name']
                  },
                },
                {
                  removeUselessStrokeAndFill: false,
                },
                {
                  inlineStyles: true,
                },
              ],
            },
          },
        ],
      },
    }))
    .pipe(gulp.dest(paths.spriteVector.dist))
    .on("end", browsersync.reload);
});
