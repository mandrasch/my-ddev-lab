# Tips & tricks

**Clean up all the containers**

Your local files will be kept, but all containers will be deleted (and databases will be deleted).

```bash
ddev delete images
docker rmi -f $(docker images -q)
```

Source: [Discord](https://discord.com/channels/664580571770388500/993786554386489414/993864023634358352), thx to @rfay!

**Save energy**

```bash
ddev poweroff
```


**Update DDEV**

See [latest Release](https://github.com/drud/ddev/releases) for instructions. The current version can be shown via

```bash
ddev -v
```

