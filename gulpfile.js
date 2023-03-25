const { src, dest, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const dartSass = require('sass');
const gulpSass = require('gulp-sass');

const sass = gulpSass(dartSass);


// Static server
function bs() {
  serveSass
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./sass/**/*.sass", serveSass);
  watch("./js/*.js").on('change', browserSync.reload);
};


// Compile sass into CSS & auto-inject into browsers
function serveSass() {
  return src("./sass/style.sass")
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(dest("./css"))
    .pipe(browserSync.stream());
};

exports.serve = bs;

