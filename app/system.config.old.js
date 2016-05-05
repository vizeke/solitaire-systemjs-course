System.config({  
    transpiler: "babel",
    defaultJSExtensions: true,
    babelOptions: {
      stage: 0
    },
    map: {
      "babel": "../node_modules/babel-core/browser.js",
      "card": "cards/card.js",
      "deck": "cards/deck.js"
    }
  });
  