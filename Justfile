check:
    node tests/access.contract.cjs
    /usr/bin/grep -F -x -- required src/guard.txt
