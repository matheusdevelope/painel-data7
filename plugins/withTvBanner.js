const { withAndroidManifest } = require("@expo/config-plugins");

module.exports = function withTvBanner(config, attributes) {
  const {resolve} = require('path');
  const {copyFileSync} = require('fs')
  const fullPathBanner = resolve(attributes.image)
  const DestPath = resolve('./android/app/src/main/res/drawable-xhdpi/tv_banner.png')
  
  withAndroidManifest(config, (config) => {
    config.modResults.manifest.application[0]['$']['android:banner'] = '@drawable/tv_banner'
    config.modResults.manifest.application[0]['activity'][0]['intent-filter'][0]['category'] = [...config.modResults.manifest.application[0]['activity'][0]['intent-filter'][0]['category'],  { '$': { 'android:name': 'android.intent.category.LEANBACK_LAUNCHER' } }]
    copyFileSync(fullPathBanner, DestPath)
    return config
  })
 
     return config;
};