#!/bin/bash

# Recreate config file
rm -rf ./env-config.js
touch ./env-config.js

# Add assignment
echo "window._env_ = {" >>./env-config.js
echo "}" >>./env-config.js

# Update nginx.conf with relevant environment variables
envsubst '
  ${RADIX_DNS_ZONE}
  ${RADIX_ENVIRONMENT}
  ' </etc/nginx/conf.d/default.conf.template >/etc/nginx/conf.d/default.conf
