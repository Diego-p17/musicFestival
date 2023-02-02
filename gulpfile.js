const {src, dest, watch} = require("gulp");
const plumber            = require("gulp-plumber");
const sass               = require("gulp-sass")(require("sass"));

function css(callback) {
    src("src/scss/**/*.scss")        //Search file sass
        .pipe( plumber() )
        .pipe( sass() )             // Compile sass
        .pipe( dest("build/css") ); //generated CSS

    callback();
}

function dev(callback) {
    watch("src/scss/**/*.scss", css)
    callback();
}

exports.css = css;
exports.dev = dev;