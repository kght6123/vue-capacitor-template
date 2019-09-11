# vue-capacitor-demo

## Project setup
```
yarn install
```

## Capacitor For Android/iOS/Electron setup
```sh
$ sudo npm install -g @vue/cli
$ vue create vue-capacitor-demo

Vue CLI v3.4.0
┌────────────────────────────┐
│  Update available: 3.11.0  │
└────────────────────────────┘
? Please pick a preset: Manually select features
? Check the features needed for your project: 
? Where do you prefer placing config for Babel, PostCSS, ESLint, etc.? In dedica
ted config files
? Save this as a preset for future projects? No

$ cd vue-capacitor-demo
$ yarn serve
$ code .
# public/index.html に <script src="https://unpkg.com/@ionic/core@4.0.0-alpha.7/dist/ionic.js"></script> を追記
# src/App.vue のtemplateタグの中を<ion-app>で囲む
# src/main.js に Vue.config.ignoredElements = [/^ion-/] を追記
$ yarn add cross-env
$ yarn add vue-router
$ yarn add @capacitor/core @capacitor/cli
$ npx cap init

? App name VueCapacitorDemo
? App Package ID (in Java package format, no dashes) jp.kght6123.
vuecapacitordemo
⠋ Initializing Capacitor project in /Volumes/Develop/capacitor/vu✔ Initializing Capacitor project in /Volumes/Develop/capacitor/vue-capacitor-demo in 2.98ms


🎉   Your Capacitor project is ready to go!  🎉

Add platforms using "npx cap add":

  npx cap add android
  npx cap add ios
  npx cap add electron

Follow the Developer Workflow guide to get building:
https://capacitor.ionicframework.com/docs/basics/workflow

$ yarn build
$ npx cap add android
$ npx cap add ios # Errorが出た https://qiita.com/macococo/items/41a1ea97ddd9f6974032 の sudo xcode-select -r を実行したら、無事に実行できた
$ npx cap add electron # Electron環境の更新？

$ yarn build
$ npx cap copy # 全プラットホームを更新
$ npx cap open android # Android Studioが開く
$ npx cap open ios # XCodeを開く
```

下記の記事を参考にさせていただいた

https://www.smashingmagazine.com/2018/07/mobile-apps-capacitor-vue-js/

## Capacitor For Web setup
```sh
$ yarn build
$ npx cap copy web
$ sudo npx cap serve
```

下記の公式を参考にした

https://capacitor.ionicframework.com/docs/web

## Capacitor For Electron setup
```sh
$ yarn build:electron
$ npx cap add electron
$ npx cap copy electron
$ npx cap open electron
```

下記の公式を参考にした

https://capacitor.ionicframework.com/docs/electron

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
