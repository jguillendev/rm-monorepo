import imagemin  from 'imagemin';
import imageminWebp from 'imagemin-webp';

(async () => {

	await imagemin(['assets/images/*.png'], {
		destination: 'src/public/assets',
		plugins: [
			imageminWebp({
				quality: 60,
			})
		]
	});
	console.log('Images optimized');

	await imagemin(['assets/images/*.jpg'], {
		destination: 'src/public/assets/1x',
		plugins: [
			imageminWebp({
				quality: 20,
				resize: {
					width: 200,
					height: 0
				}
			})
		]
	});
	console.log('Images optimized');

	await imagemin(['assets/images/*.jpg'], {
		destination: 'src/public/assets/2x',
		plugins: [
			imageminWebp({
				quality: 40,
				resize: {
					width: 400,
					height: 0
				}
			})
		]
	});
	console.log('Images optimized');

	await imagemin(['assets/images/*.jpg'], {
		destination: 'src/public/assets/3x',
		plugins: [
			imageminWebp({
				quality: 60,
				resize: {
					width: 600,
					height: 0
				}
			})
		]
	});
	console.log('Images optimized');

	await imagemin(['assets/images/*.jpg'], {
		destination: 'src/public/assets/4x',
		plugins: [
			imageminWebp({
				quality: 80,
				resize: {
					width: 800,
					height: 0
				}
			})
		]
	});
	console.log('Images optimized');

	await imagemin(['assets/images/*.jpg'], {
		destination: 'src/public/assets/max',
		plugins: [
			imageminWebp({lossless:true})
		]
	});
	console.log('Images optimized');

})();
