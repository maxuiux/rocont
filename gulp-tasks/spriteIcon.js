"use strict";

import { paths } from "../gulpfile.babel";
const gulp = require('gulp');
const sprite = require('gulp-svg-sprite');
import browsersync from "browser-sync";

gulp.task("spriteIcon", () => {
  return gulp.src(paths.spriteIcon.src)
    .pipe(sprite({
      mode: {
        stack: {
          sprite: '../icon.svg',
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
    .pipe(gulp.dest(paths.spriteIcon.dist))
    .on("end", browsersync.reload);
});
