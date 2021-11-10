autorest --v3 --typescript \
--override-client-ApiClient \
--output-folder=./src/services \
--source-code-folder-path="SolarCRM" \
--sync-methods=none \
--input-file=./swagger.json --enum-types \
--custom-service-client-options=[baseUri=process.env.REACT_APP_BASE_URI] \
--add-credentials=true \
--use=@microsoft.azure/autorest.typescript@4.2.4 \
--version=3.0.6130 autorest-config.yaml