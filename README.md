# Alerts

Put the `<Alerts />` component somewhere sensible in your project. Use `msg` for text or `translate` for translations. Type can be bootstrap colors. Optionally set `duration` (default = 10000ms). Set to `0` for endless.

```JSX
import { Alerts, NewAlert } from "meteor/lef:alerts";

<Alerts />

NewAlert({ msg: JSON.stringify(error), type: "danger" })
NewAlert({ translate: "sync_done", type: "success" })
```

## Installation

Create a symbolic link to this package in your meteor's package folder:

`ln -s ../../packages/lef-alerts/ lef-alerts`
