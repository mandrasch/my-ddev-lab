# GitHub Codespaces

- Official docs: [DDEV Installation -> Codespaces](https://ddev.readthedocs.io/en/latest/users/install/ddev-installation/#github-codespaces)
- Example repo with Codespaces compatibility: https://github.com/mandrasch/ddev-craftcms-vite
  - Blog post: https://dev.to/mandrasch/open-craftcms-in-github-codespaces-via-ddev-21he

The source code for the feature `install-ddev` can be found here here:

- https://github.com/ddev/ddev/tree/master/.github/devcontainers/src/install-ddev

You most likely will need a `wait_for_docker` function in your `postCreateCommand`-script:

```bash
# retry, see https://github.com/ddev/ddev/pull/5592
wait_for_docker() {
  while true; do
    docker ps > /dev/null 2>&1 && break
    sleep 1
  done
  echo "Docker is ready."
}
```

See e.g.: https://github.com/mandrasch/ddev-craftcms-vite/blob/main/.devcontainer/postCreateCommand.sh

## Troubleshooting

### Could not connect to docker (daemon)

Update 19.05.2024: The issue seems to still happen randomly, updated issue: https://github.com/devcontainers/features/issues/977

There was a randomly occuring error "Could not connect to docker daemon", which was fixed in recent versions of `docker-in-docker`:

- https://github.com/devcontainers/images/pull/705

Discussed this issue here:

- https://github.com/orgs/community/discussions/63776#discussioncomment-6745270

In-depth infos about the base images for codespaces and it's docker integration can be found in the following answer. The built-in `docker-in-docker` integration might be cached, debug information are also available in this response:

- https://github.com/devcontainers/features/issues/634#issuecomment-1682620353

The issue should now be fixed. If it still happens, do a full rebuild.
