module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/vue3-essential", '@vue/airbnb'],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-unused-vars": process.env.NODE_ENV === "production" ? "error" : "warn",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODEs_ENV === "production" ? "warn" : "off"
  }
};
