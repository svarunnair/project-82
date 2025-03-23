const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Add support for glb, gltf, png, jpg file types
config.resolver.assetExts.push("glb", "gltf", "png", "jpg");

// Add support for .cjs and .mjs file extensions
config.resolver.sourceExts.push("cjs", "mjs");

module.exports = config;
