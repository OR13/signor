# Signor

[![CD](https://github.com/OR13/signor/actions/workflows/cd.yml/badge.svg)](https://github.com/OR13/signor/actions/workflows/cd.yml)

A GitHub, NPM, DID Experiment

```
https://api.did.actor/api/identifiers/did:web:or13.github.io:signor
```

```
npm i
npm t
```

### Check signature

```bash
CURRENT_VERSION="@or13/signor@`jq -r .version package.json`"
echo "🔎  $CURRENT_VERSION - Checking package signature..."
npx verify-npm-signature $CURRENT_VERSION
```