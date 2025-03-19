const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = { resolver: {
    assetExts: ['db', 'mp3', 'ttf', 'obj', 'png', 'jpg', 'gltf', 'glb'],
},
transformer: {
    assetPlugins: ['expo-asset/tools/hashAssetFiles'],
},};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
