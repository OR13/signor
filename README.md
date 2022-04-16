# Signor

[![CI](https://github.com/OR13/signor/actions/workflows/ci.yml/badge.svg)](https://github.com/OR13/signor/actions/workflows/ci.yml) [![CD](https://github.com/OR13/signor/actions/workflows/cd.yml/badge.svg)](https://github.com/OR13/signor/actions/workflows/cd.yml)

A GitHub, NPM, JOSE, DID Experiment

```
https://api.did.actor/api/identifiers/did:web:or13.github.io:signor
```

```bash
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

```bash
cat ./package.json \
    | jq -r  '.signor.jose.signature'
```

### Copy Public Key

```bash
curl -s https://api.did.actor/api/identifiers/did:web:or13.github.io:signor \
    | jq '.didDocument.verificationMethod[0].publicKeyJwk'
```

If successful you will see:

<img src="./verified.true.png" style="max-width: 400px" />

If unsuccessful you will see:

<img src="./verified.false.png" style="max-width: 400px" />

If verification succeeds, look at the payload, it should match:

```bash
git log -n 1 --skip 1 --pretty=format:"%H"
```

What does this prove? ... basically nothing.

It shows that the package json contains a signature for a previous hash from git, 
and that the did that signed it has not yet revoked that key.