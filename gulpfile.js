
var elixir = require('laravel-elixir');

elixir.config.js.browserify.transformers.push({
    name: 'vueify'
});

elixir(function(mix) {
	mix.browserify('app.js', './public/js/build.js', './assets/js')
		.browserSync({
			 files: [
			 	'public/**/*.js',
			 	'public/**/*.css',
			 	'public/*.html'
			 ],
			 server: {
			 	baseDir: "./public"
			 },
			 proxy: false
		});
});
