# vote.pokefind.co

The **Java** vote landing page. Static HTML, no build step, no dependencies.

Served by GitHub Pages from this repo's `main` branch, root folder.
The `CNAME` file binds it to `vote.pokefind.co` — **don't delete it**, GitHub Pages
uses it to hold the custom domain.

## Changing a vote link

Edit `index.html`. The links sit in one clearly marked block:

```html
<!-- ===== EDIT YOUR VOTE LINKS HERE ===== -->
   ...
<!-- ===== END OF VOTE LINKS ===== -->
```

Commit and push — GitHub Pages redeploys automatically, usually within a minute.

## Keep in sync with the game

The Minecraft servers do **not** read this page. They hand players the URL
`https://vote.pokefind.co` from the `voting_sites` key in the Mongo network config.

If you add or remove a vote site here, the network config must change too:

- `voting_sites` — the **keys** are Votifier service names and must match what each
  site sends on a vote. Changing a key breaks vote validation and the "voted on all
  sites" bonus count. Only ever change the values, or add/remove whole entries
  deliberately.
- `ServerAddress.VOTING_SITES` is read once at class-load, so any change there needs
  a **full server restart** — `/updateconfig` will not pick it up.

## Bedrock

Bedrock uses a separate page and a slightly different site list (no TopG.org, plus
MinecraftPocket-Servers.com). See the `votebedrock-site` repo.
