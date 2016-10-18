var webpack = require('webpack');
var path = require('path');
module.exports = function (config) {
    config.set({
        browsers: ['Chrome'],
        frameworks: ['jasmine'],
        files: [
            'tests/@ts-emitted-functions.js',
            'node_modules/es6-shim/es6-shim.min.js',
            'karma.entry.js'
        ],
        preprocessors: {
            'karma.entry.js': ['webpack', 'sourcemap']
        },
        webpack: {
            devtool: 'inline-source-map',
            ts: {
                compilerOptions: {
                    noEmitHelpers: true
                }
            },
            module: {
                loaders: [
                    {
                        test: /\.ts$/,
                        loader: 'ts',
                        include: [
                            path.resolve(__dirname, 'src'),
                            path.resolve(__dirname, 'tests')
                        ]
                    }
                ]
            },
            resolve: {
                modulesDirectories: [
                    'node_modules'
                ],
                extensions: ['', '.ts', '.tsx', '.json', '.js']
            }
        },
        webpackServer: {
            noLog: true,
            noInfo: true
        }
    });
};