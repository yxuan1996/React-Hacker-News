# React-Hacker-News
We will be building a clone of hacker news based on solidsail course

Technologies used:
- React (For front-end client)
- Ionic (UI Framework)
- Firebase (Back-end)

Starter files github repo: https://github.com/SolidSail/Newsy/archive/5b137297b7fd45a3149ab22bb5b9e49864fba1fd.zip

### Installation and Running the App

Installing Ionic
```
npm i -g @ionic/cli
```

Creating a new Ionic App
```
ionic start [AppName]
```

cd to the project directory and install firebase
```
npm install firebase
```

To run the project cd to the project directory and run
```
ionic serve
```

Run `ionic capacitor add` to add a native iOS or Android project.

### Colors and Styling
Ionic has its own system for setting theme colours. 

For example, the primary color is not just one color but a collection of colors that affects the contrast (dark mode light mode), shade and tint. 

```CSS
  --ion-color-primary: #3880ff;
  --ion-color-primary-rgb: 56, 128, 255;
  --ion-color-primary-contrast: #ffffff;
  --ion-color-primary-contrast-rgb: 255, 255, 255;
  --ion-color-primary-shade: #3171e0;
  --ion-color-primary-tint: #4c8dff;
```

It we want to change a color, we should use ionic's color generator: https://ionicframework.com/docs/theming/colors

We can then replace the default colors in `src/theme/variables.css` in the `:root` section and the `body` section. 

### Routing and Tabs
Ionic router is basically Ionic's version of React Router.

We can refer to the tabs component in ionic documentation for details. https://ionicframework.com/docs/api/tabs

For now we implement ionic router in App.tsx

### On hold as I decide not to follow the tutorial on Solidsail. 



