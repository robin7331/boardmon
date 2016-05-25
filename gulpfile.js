
var elixir = require('laravel-elixir');

elixir.config.publicDir = './public';
elixir.config.assetsPath = './src';
elixir.config.css.sass.folder = 'sass';

elixir.config.js.browserify.transformers.push({
    name: 'vueify'
});

elixir(function(mix) {
	mix.copy('bower_components/nouislider/distribute/nouislider.min.css', 'public/css/nouislider.min.css');
    mix.sass('app.scss');
	mix.browserify('app.js');
	mix.browserSync({
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
