#!/bin/sh
# $1 search_keyword
# $2 replace_original
# $3 replace_destination
# $4 search file type
echo $1 $2 $3 $4

find ./ -type f -name "*.$4" -exec grep -l "$1" | xargs sed -i "" -e "s/$2/$3/g"