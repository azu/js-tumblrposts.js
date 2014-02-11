var gulp = require("gulp");
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
gulp.task('build', function () {
    gulp.src(["./scripts/banner.js", "./scripts/*.js"])
        .pipe(concat("tumblrposts.min.js"))
        .pipe(uglify({
            "preserveComments": "all"
        }))
        .pipe(gulp.dest("dist"));
});

gulp.task('default', ['build']);