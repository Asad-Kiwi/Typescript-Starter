# Fortify-ReactNative

### macOS: Environment Setup

This guide assumes that you are using the latest version macOS and default system shell (zsh).

#### Prerequisites

- Homebrew: macOS package manager
  - Android Studio: IDE (Android/Java/Kotlin)
  - n: Node version manager
  - installer - Visual Studio Code: Editor/IDE
  - Xcode: IDE (iOS/iPadOS/macOS/Swift/ObjectiveC)

#### Node:

Install the latest version of Node, NPM and Yarn:

```bash
n latest
npm -g install npm yarn
```

#### Packages need to install

yarn add @react-native-community/netinfo @react-native-masked-view/masked-view @react-navigation/bottom-tabs @react-navigation/native @react-navigation/native @react-navigation/stack @reduxjs/toolkit @types/react-redux axios react-native-keyboard-aware-scroll-view redux-saga redux-devtools-extension react-redux react-native-screens react-native-safe-area-context react-native-reanimated react-native-gesture-handler react-native-encrypted-storage

## Folder structure

- `src`: This folder is the main container of all the code inside your application.
  - `redux/actions`: This folder contains all actions that can be dispatched to redux.
  - `assets`: Asset folder to store all images, vectors, etc.
  - `components`: Folder to store any common component that you use through your app (such as a generic button)
  - `constants`: Folder to store any kind of constant that you have.
  - `AppNavigation`: file to store the navigators.
  - `redux/reducers`: This folder should have all your reducers, and expose the combined result using its `index.js`
  - `redux/saga`: This folder should have all your saga, and It's generated functions
  - `screens`: Folder that contains all your application screens/features.
    - `Screen`: Each screen should be stored inside its folder and inside it a file for its code.
      - `Screen.js`
  - `redux/selectors`: Folder to store your selectors for reducer.
  - `store`: Folder to put all redux middlewares and the store.
  - `App.js`: Main component that starts your whole app.
  - `index.js`: Entry point of your application as per React-Native standards.

## Generate production version

These are the steps to generate `.apk`, `.aab` and `.ipa` files

### Android

1. Generate an upload key
2. Setting up gradle variables
3. Go to the android folder
4. Execute `./gradlew assembleRelease`

OR

Use Android Studio to create release .apk and .aab

For more info please go to https://reactnative.dev/docs/signed-apk-android

### iOS

1. Go to the Xcode
2. Select the schema
3. Select 'Any iOS device' as target
4. Product -> Archive

For more info please go to https://reactnative.dev/docs/publishing-to-app-store

# How to use it

The idea of this section is to explain how the template composition is the best and easiest to use when you try to use well-formed, architectures, especially using redux flow.

The template follows a simple and convenient exporting pattern. The folder index exposes the resources, allowing to import all from the same path.

With that in mind, we are going to look at each folder to explain how to use it.

# Why we are using TypeScript?

TypeScript is a programming language first developed by Microsoft in 2012. Its main ambition is to improve the productivity of developing complex applications.

It is an open-source language developed as a superset of JavaScript. What this means in simple terms is that any code valid in JavaScript is also valuable for TypeScript.

However, the language introduces optional features like typing or object-oriented programming. To benefit from these features, no library is required. Instead, just use the TypeScript compilation tool to transpile it (compiling the source code of one language into another language) into JavaScript. Thus, the executed code will be a Javascript equivalent of the compiled TypeScript code.

### TypeScript offers many advantages over JavaScript:
- `Optional static typing`. JavaScript is a dynamically typed language, which means that types are checked, and data type errors are only detected at runtime. This can be very dangerous and can create errors during production. TypeScript introduces optional strong static typing: once declared, a variable does not change its type and can only take specific values.

- `Readability`. Thanks to the addition of strict types and other elements that make the code more self-expressive, you can see the design intent of the developers who originally wrote the code. This is especially important for distributed teams working on the same project. A code that speaks for itself can compensate for the lack of direct communication between team members.

- `IDE support`. Type information renders editors and integrated development environments (IDEs) much more useful. They can offer features like code navigation and auto-complete, providing accurate suggestions.

- `The power of object-orientation`. TypeScript supports Object-Oriented Programming (OOP) concepts such as classes, interfaces, inheritance, etc. The OOP paradigm makes it easier to build well-organized scalable code, and this advantage becomes more apparent as your project grows in size and complexity.

- `The support of a talented community`. Behind TypeScript is a massive community of very gifted people working day by day to improve the language.

- `Integrated support for updated versions` of ECMAScript, which is the scripting language that forms the basis of JavaScript.

- `ECMAScript defines the standards and novelties of JavaScript`. TypeScript takes great care to include all these new features with each update.


## Components

Components are the basic blocks of a react native application, but since we​​ aim to minimize development complexity, all the components are at the same nesting level.

Another important thing is the use of propTypes to check the kind of data that your components need to work properly. If the component receives some data from others, the type of these props must be defined, and in case you need it the default value of the property too.

### Static resources:

To keep an application scalable and organized, the global static resources that are used in the application have to be created in a specific file.

### We manage three main folders for that:

- Assets: Here you can store all the images and icons that you need through the app. You have as an example the icon ic_home.png, to respond with the different device screen densities just create inside the same folder the image and all the scaled versions that you need. RN only handles x1, x2 and x3 in this case, you have.

  - assets
    - ic_home
      - ic_home.png
      - ic_home@2x.png
      - ic_home@3x.png

## Redux

Once the components are defined, they are tied to the management of information through the application. For this, Redux is implemented with the store-reducer-action structure as usual, however, not only the data is handled through the actions but the success and error responses are also defined by the same form.

### API connection handler

To keep the networking layer simple, the template uses a single Axios instance in the `api.js`. It uses interceptors to define common side effects for the responses.

When you need communication with a service you have to create a function to manage the operation and grouping according to the kind of transaction inside a api file.

While the data transfer between the API and the app is working you must use the success and error actions that help you to catch the result of the operation. With this method, you can track the interaction through the redux store. This is useful because you can create behaviors based on those states in a quick and simple way

### Redux folders

4 folders divide the redux work

- store: Here you define the store shape and you can configure the persistReducer and middlewares.
- actions: Remember to create the file and the corresponding test for each action classification. Here you define actions for success and error scenarios.
- reducers: You have the error and success reducers by default. Create the other classifications and try to keep simple each file. Here you modify the store.

## Screens

In this folder, you have the main objects to apply the composition architecture. Just create a folder for each screen you have in your application, call all the components and static resources you need to render the scene and finally use the corresponding hooks to interact with redux and create behaviors depending on the store.

#### Visual Studio Settings:

```json
{
  "[css]": {
    "editor.defaultFormatter": "HookyQR.beautify"
  },
  "[erb]": {
    "editor.insertSpaces": true,
    "editor.tabSize": 2
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.tabSize": 4
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.tabSize": 4
  },
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[ruby]": {
    "editor.defaultFormatter": "castwide.solargraph",
    "editor.tabSize": 2
  },
  "[scss]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[slim]": {
    "editor.tabSize": 2
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[yaml]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "breadcrumbs.enabled": true,
  "cSpell.enableFiletypes": [
    "dockerfile",
    "eex",
    "elixir",
    "erb",
    "gemfile",
    "jsx-tags",
    "objective-c",
    "ruby",
    "slim",
    "smali",
    "sql",
    "swift"
  ],
  "cSpell.enabled": true,
  "cSpell.userWords": ["UIkit", "Turbolinks", "pagy", "rubocop"],
  "editor.cursorSmoothCaretAnimation": true,
  "editor.cursorStyle": "block",
  "editor.cursorWidth": 1,
  "editor.detectIndentation": false,
  "editor.inlineSuggest.enabled": true,
  "editor.renderControlCharacters": true,
  "editor.renderWhitespace": "none",
  "editor.smoothScrolling": true,
  "editor.suggestSelection": "first",
  "editor.tabCompletion": "on",
  "eslint.alwaysShowStatus": true,
  "eslint.format.enable": true,
  "eslint.packageManager": "yarn",
  "explorer.confirmDragAndDrop": false,
  "extensions.ignoreRecommendations": true,
  "files.watcherExclude": {
    "**/.git/objects/**": true,
    "**/.git/subtree-cache/**": true,
    "**/node_modules/*/**": true,
    "**/public/uploads/**": true,
    "**/tmp/*/**": true
  },
  "git.autofetch": true,
  "gitlens.advanced.messages": {
    "suppressCommitHasNoPreviousCommitWarning": false,
    "suppressCommitNotFoundWarning": false,
    "suppressFileNotUnderSourceControlWarning": false,
    "suppressGitVersionWarning": false,
    "suppressLineUncommittedWarning": false,
    "suppressNoRepositoryWarning": false
  },
  "gitlens.keymap": "alternate",
  "gitlens.views.repositories.files.layout": "tree",
  "prettier.tabWidth": 4,
  "redhat.telemetry.enabled": false,
  "ruby.format": "rubocop",
  "ruby.lint": {
    "debride": false,
    "fasterer": false,
    "reek": false,
    "rubocop": true,
    "ruby": false,
    "ruby-lint": false
  },
  "ruby.lintDebounceTime": 500,
  "security.workspace.trust.untrustedFiles": "newWindow",
  "solargraph.completion": true,
  "solargraph.diagnostics": true,
  "solargraph.formatting": true,
  "solargraph.references": true,
  "solargraph.symbols": true,
  "telemetry.enableCrashReporter": true,
  "telemetry.enableTelemetry": false,
  "workbench.startupEditor": "none",
  "workbench.tree.indent": 24
}
```
