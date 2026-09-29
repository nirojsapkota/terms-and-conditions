#!/usr/bin/env bash
# Compiles Tailwind CSS for every app folder that has a tailwind.config.js.
# Run after editing any index.html, then commit the updated styles.css.
set -euo pipefail
cd "$(dirname "$0")"

for config in */tailwind.config.js; do
  dir=$(dirname "$config")
  echo "Building $dir/styles.css"
  (cd "$dir" && printf '@tailwind base;\n@tailwind components;\n@tailwind utilities;\n' \
    | npx --yes tailwindcss@3 -c tailwind.config.js -i - -o styles.css --minify)
done
