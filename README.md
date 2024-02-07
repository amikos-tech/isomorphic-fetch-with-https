# Example Isomorphic Fetch with HTTPs agent

> Production Use: Ignoring SSL cert errors is not a recommended security practice for production environments.

This repo is an example of how to setup custom SSL certs or ignore SSL errors when using `isomorphic-fetch` in Node.js
app.

> Note: The example does not provide example of how to run a server, but we provide certs to do so for testing.

## Generates Certificates

```bash
openssl req -new -newkey rsa:2048 -sha256 -days 365 -nodes -x509 \
  -keyout ./serverkey.pem \
  -out ./servercert.pem \
  -subj "/O=AmikosTech/C=BG" \
  -config ./openssl.cnf
```