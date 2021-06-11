#!/bin/sh
flutter clean
flutter build web
cp  -r -n  build/web/  chrome_extension/