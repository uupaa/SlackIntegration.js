# Slack integration

A [slack-incoming-webhooks](https://api.slack.com/incoming-webhooks) wrapper.

# Browser and Runtime support

| Browser/Runtime    |            |
|--------------------|------------|
| Chrome             |  :o:       |
| Chrome for Android |  :o:       |
| Mac Safari         |  10.1      |
| iOS Safari         |  10.3      |
| Firefox            |  :o:       |
| Edge               |  14        |

| Runtime            |            |
|--------------------|------------|
| IE                 |  :x:       |
| Node.js            |  :x:       |
| Electron           |  :o:       |

Browser should supports are ES Modules and Fetch functions.

# Usage

in Browser.

```html
<script type="module">
import { SlackIntegration } from "https://uupaa.github.io/SlackIntegration.js/index.js";

const slack = neww SlackIntegration();
slack.url = "https://hooks.slack.com/services/T00000000/B00000000/xxxxxxxxxxxxxxxxxxxxxxxx";
slack.post({
  text: "this is integration test message"
});
```

The "https://hooks.slack.com/services/T00000000/B00000000/xxxxxxxxxxxxxxxxxxxxxxxx" url is Incoming WebHook adress.
You make it from https://slack.com/services/new/incoming-webhook .