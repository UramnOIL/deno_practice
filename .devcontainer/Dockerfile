# [Choice] Debian OS version: bullseye, buster
ARG VARIANT=bullseye
FROM --platform=linux/amd64 mcr.microsoft.com/vscode/devcontainers/base:0-${VARIANT}

ENV DENO_INSTALL=/deno
ENV DENO_INSTALL_ROOT=/deno
RUN mkdir -p /deno \
    && mkdir -p /deno/bin \
    && curl -fsSL https://deno.land/x/install/install.sh | sh

ENV PATH=${DENO_INSTALL}/bin:${PATH} \
    DENO_DIR=${DENO_INSTALL}/.cache/deno

RUN deno run -A https://deno.land/x/aleph/install.ts
RUN deno install -qAf --unstable https://deno.land/x/denon/denon.ts


RUN chown -R vscode /deno

# [Optional] Uncomment this section to install additional OS packages.
# RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
#    && apt-get -y install --no-install-recommends <your-package-list-here>
