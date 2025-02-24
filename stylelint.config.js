export default {
  extends: ["stylelint-config-standard-scss"],
  plugins: ["stylelint-order", "stylelint-scss"],
  rules: {
    "order/properties-alphabetical-order": true,
    "scss/dollar-variable-pattern": "^[_a-z]+[a-zA-Z0-9-]*$",
    "scss/at-import-partial-extension": "never",
    "scss/at-mixin-pattern": "^[a-z]+[a-zA-Z0-9-]*$",
    // "scss/at-rule-no-unknown": [
    //   true,
    //   {
    //     ignoreAtRules: ["tailwind", "apply", "layer", "variants", "responsive", "screen"]
    //   }
    // ],
    "scss/dollar-variable-colon-space-after": "always-single-line",
    "scss/operator-no-newline-after": true,
    "scss/operator-no-newline-before": true,
    "scss/operator-no-unspaced": true
  }
};
