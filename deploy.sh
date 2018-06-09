#!/bin/bash

ftppass="./.ftppass"
ftpserv="ftp.tolucamedia.com"
ftpport="21"
ftpuser=$(jq -r '."phlip9.com".username' $ftppass)
ftppass=$(jq -r '."phlip9.com".password' $ftppass)

lftp -e "set ftp:ssl-allow no; mirror --reverse dist /; exit" -u $ftpuser,$ftppass -p $ftpport $ftpserv
