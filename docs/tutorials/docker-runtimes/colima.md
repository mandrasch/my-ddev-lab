# Colima

On an Intel Macbook Pro Colima was for me way faster than Docker Desktop.

- https://github.com/abiosoft/colima

Installing it was super easy since it does not interfere with Docker Desktop.

Make sure to follow the official DDEV docs for config:

- https://ddev.readthedocs.io/en/latest/users/install/docker-installation/#macos

## Troubleshooting

### Issues after reboot

Restart issues can happen, just ran:

```
limactl stop -f colima
colima start
```

Source: [Github](https://github.com/abiosoft/colima/issues/381#issuecomment-1223559442)

### Issues with HTTP requests / APIs

I called an API via HTTP/curl/guzzle and got weird timeout errors with default config (from DDEV docs).

Turned out I needed to change the network drive `gvproxy` to `slirp`:

```bash
colima start --network-driver slirp
```

You can just change config values of `~/.colima/default/colima.yaml ` with this command, the new setting will be saved automatically.

On next start you can just use `colima start` again.

Source: [GitHub issue](https://github.com/abiosoft/colima/issues/466#issuecomment-1671348002), [DDEV discord discussion](https://discord.com/channels/664580571770388500/1138533525319057581/1138816968309362820)
