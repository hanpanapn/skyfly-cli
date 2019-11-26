'use strict';

var _path = require('path');

var _vinylFs = require('vinyl-fs');

var _vinylFs2 = _interopRequireDefault(_vinylFs);

var _through = require('through2');

var _through2 = _interopRequireDefault(_through);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.run = function (name, other) {
    var cwd = (0, _path.join)(__dirname, '../template');
    var dest = process.cwd();
    console.log('add a project at:' + dest + '.');
    _vinylFs2.default.src(["**/*", "!node_modules/**/*"], { cwd: cwd, cwdbase: true, dot: true }).pipe(template(dest, cwd)).pipe(_vinylFs2.default.dest(dest)).on('end', function () {
        console.log("create project end");
    }).resume();
    function template(dest, cwd) {
        return _through2.default.obj(function (file, enc, cb) {
            if (!file.stat.isFile) {
                return cb();
            }
            console.log(file.path.replace(cwd + '/', ""));
            this.push(file);
            cb();
        });
    }
};