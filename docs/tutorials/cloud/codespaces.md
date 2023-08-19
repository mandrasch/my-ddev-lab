# GitHub Codespaces

- Official docs: [DDEV Installation -> Codespaces](https://ddev.readthedocs.io/en/latest/users/install/ddev-installation/#github-codespaces)
- Example repo with Codespaces compatibility: https://github.com/mandrasch/ddev-craftcms-vite
  - Blog post: https://dev.to/mandrasch/open-craftcms-in-github-codespaces-via-ddev-21he

The source code for the feature `install-ddev` can be found here here:

- https://github.com/ddev/ddev/tree/master/.github/devcontainers/src/install-ddev

## Troubleshooting

### Could not connect to docker (daemon)

There was a randomly occuring error "Could not connect to docker daemon", which was fixed in recent versions of `docker-in-docker`:

- https://github.com/devcontainers/images/pull/705

Discussed this issue here:

- https://github.com/orgs/community/discussions/63776#discussioncomment-6745270

In-depth infos about the base images for codespaces and it's docker integration can be found in the following answer. The built-in `docker-in-docker` integration might be cached, debug information are also available in this response:

- https://github.com/devcontainers/features/issues/634#issuecomment-1682620353

The issue should now be fixed. If it still happens, do a full rebuild.
