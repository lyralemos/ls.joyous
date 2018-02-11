(function() {
  ({
    "version": 3,
    "names": [],
    "mappings": "",
    "sources": ["gulpfile.coffee"],
    "sourcesContent": ["process.env.NODE_DISABLE_COLORS=1\ngulp       = require \"gulp\"\nutil       = require \"gulp-util\"\nplumber    = require \"gulp-plumber\"\nnotify     = require \"gulp-notify\"\ncrashsound = require \"gulp-crash-sound\"\ncoffee     = require \"gulp-coffee\"\nsourcemaps = require \"gulp-sourcemaps\"\n\ngulp.task \"src.coffee\", ->\n  gulp.src  \"*.coffee\"\n      .pipe plumber crashsound.plumb notify.onError (err) ->\n          util.log(err)\n          title:   \"Burnt the coffee\"\n          message: \"" + err + "\"\n      .pipe coffee()\n      .pipe gulp.dest \".\"\n\ngulp.task \"src.coffee.with.maps\", ->\n  gulp.src  \"*.coffee\"\n      .pipe plumber crashsound.plumb notify.onError (err) ->\n          util.log(err)\n          title:   \"Burnt the coffee\"\n          message: \"" + err + "\"\n      .pipe sourcemaps.init()\n      .pipe sourcemaps.write(\"maps/\")\n      .pipe coffee()\n      .pipe gulp.dest \".\"\n\ngulp.task 'build', ['src.coffee.with.maps']\ngulp.task 'watch', ->\n  gulp.watch(\"*.coffee\", ['src.coffee.with.maps'])\n\ngulp.task('default', ['watch', 'build'])\n"],
    "file": "gulpfile.coffee",
    "sourceRoot": "/source/"
  });

}).call(this);