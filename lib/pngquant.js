var pngquant = Npm.require('pngquant');
var fs = Npm.require('fs');
var Future = Npm.require('fibers/future');

PNGQuant = function (srcPath, destPath, args) {
  args = args || [256];
  var future = new Future();

  var readStream = fs.createReadStream(srcPath);
  var writeStream = fs.createWriteStream(destPath);
  readStream.on('error', function (err) {
    future.throw(err);
  });
  writeStream.on('error', function (err) {
    future.throw(err);
  });
  writeStream.on('finish', function () {
    future.return();
  });
  readStream.pipe(new pngquant(args)).pipe(writeStream);

  return future.wait();
};
