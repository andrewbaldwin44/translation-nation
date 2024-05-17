import esbuild from 'esbuild';

esbuild
  .build({
    entryPoints: ['./src/index.ts'], // Update this to your entry file
    bundle: true,
    outfile: './dist/index.js', // Update this to your desired output file
    loader: {
      '.js': 'jsx',
    },
    minify: true, // Optional: add minification for production builds
    format: 'esm',
    platform: 'browser',
    alias: {
      react: 'React',
    },
    sourcemap: true,
  })
  .catch(() => process.exit(1));
