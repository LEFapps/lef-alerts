Package.describe({
  name: "lef:alerts",
  version: "2.0.0",
  summary: "Basic alert system using Bootstrap 4 and React."
});

Package.onUse(api => {
  api.use([
    "coffeescript",
    "ecmascript",
    "mongo",
    "check",
    "react-meteor-data",
    "lef:translations"
  ]);
  api.mainModule("alerts.coffee", "client");
});

Npm.depends({
  react: "16.3.0"
});
