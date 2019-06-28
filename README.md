This package is deprecated, for React projects please switch to: [react-alert](https://www.npmjs.com/package/react-alert)

# Alerts

Put the `<Alerts />` component somewhere sensible in your project. Use `msg` for text or `translate` for translations. `type` can be bootstrap colors. Optionally set `delay` (default = 10000ms). Set to `0` for endless.

```JSX
import { Alerts, NewAlert } from "meteor/lef:alerts";

<Alerts />

NewAlert({ msg: JSON.stringify(error), type: "danger" })
NewAlert({ translate: "message", type: "success" })
```

## Bootstrap colors

`"primary", "secondary", "success", "danger", "warning", "info", "light", "dark"`
