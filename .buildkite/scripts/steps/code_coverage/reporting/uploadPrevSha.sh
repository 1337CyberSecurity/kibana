#!/usr/bin/env bash

set -euo pipefail

collectPrevious() {
    PREVIOUS=$(git log --pretty=format:%h -1)
    echo "### PREVIOUS: ${PREVIOUS}"
    echo $PREVIOUS > previous.txt
}
collectPrevious

# TODO: Safe to remove this after 2024-03-01 (https://github.com/elastic/kibana/issues/175904)
gsutil cp previous.txt gs://elastic-bekitzur-kibana-coverage-live/previous_pointer/

.buildkite/scripts/common/activate_service_account.sh gs://elastic-kibana-coverage-live
gsutil cp previous.txt gs://elastic-kibana-coverage-live/previous_pointer/
