let gulp = require('gulp');
let sass = require('gulp-sass');
let watch = require('gulp-watch');

gulp.task('sass', function () {
    var stream = gulp.src('./scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./'))
    return stream;
});

// gulp.task('default', ['sass']);


gulp.task('watch', function () {
	gulp.watch('./scss/*.scss', ['sass']);
});

