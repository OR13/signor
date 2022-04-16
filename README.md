# Signor

[![CD](https://github.com/OR13/signor/actions/workflows/cd.yml/badge.svg)](https://github.com/OR13/signor/actions/workflows/cd.yml)

A GitHub, NPM, JOSE, DID Experiment

```
https://api.did.actor/api/identifiers/did:web:or13.github.io:signor
```

```
npm i
npm t
```

### Check signature on npm package

```bash
CURRENT_VERSION="@or13/signor@`jq -r .version package.json`"
echo "🔎  $CURRENT_VERSION - Checking package signature..."
npx verify-npm-signature $CURRENT_VERSION
```

### Check signature inside package

Visit https://jwt.io

### Copy Signature

```
cat ./package.json \
    | jq -r  '.signor.jose.signature'
```

### Copy Public Key

```
curl -s https://api.did.actor/api/identifiers/did:web:or13.github.io:signor \
    | jq '.didDocument.verificationMethod[0].publicKeyJwk'
```

If successful you will see:

<img src="./verified.true.png" style="max-width: 400px" />

If unsuccessful you will see:

<img src="./verified.false.png" style="max-width: 400px" />