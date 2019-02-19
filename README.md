# Alerts

Put the `<Alerts />` component somewhere sensible in your project. Use `msg` for text or `translate` for translations. `type` can be bootstrap colors. Optionally set `duration` (default = 10000ms). Set to `0` for endless.

```JSX
import { Alerts, NewAlert } from "meteor/lef:alerts";

<Alerts />

NewAlert({ msg: JSON.stringify(error), type: "danger" })
NewAlert({ translate: "message", type: "success" })
```

## Bootstrap colors

`"primary", "secondary", "success", "danger", "warning", "info", "light", "dark"`

## Fontawesome icons

_Note: you should install the Fontawesome dependencies yourself!_

You can use any fontawesome icon that is globally registered or use one of the preregistered in the component: `'thumbs-up', 'exclamation-circle', 'exclamation-triangle', 'info', 'bell'`. You can also use `auto` as value for the prop icon to match the icon automatically with the type.
