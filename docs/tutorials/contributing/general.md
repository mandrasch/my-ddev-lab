# Contributing

DDEV is open source, therefore you can participate in various ways to improve and maintain it.

There is an extensive guide already:

- https://ddev.readthedocs.io/en/latest/developers/building-contributing/

Here are some additional personal notes

## Test ddev build in codespaces

## Preview docs changes locally

```bash
docker run -it -p 8000:8000 -v "${PWD}:/docs" -e "ADD_MODULES=mkdocs-material mkdocs-redirects mkdocs-minify-plugin mdx_truly_sane_lists mkdocs-git-revision-date-localized-plugin" -e "LIVE_RELOAD_SUPPORT=true" -e "FAST_MODE=true" -e "DOCS_DIRECTORY=./docs" polinux/mkdocs:1.2.3
```

Source: [Discord](https://discord.com/channels/664580571770388500/1124990159629320262/1125259502468468906)
