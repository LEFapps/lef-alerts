Package.describe({
  name: "lef:alerts",
  version: "2.1.1",
  summary: "Basic alert system using Bootstrap 4 and React."
});

Package.onUse(api => {
  api.use(["ecmascript", "mongo", "react-meteor-data"]);
  api.mainModule("alerts.js", "client");
});

Npm.depends({
  react: "16.3.0"
});
