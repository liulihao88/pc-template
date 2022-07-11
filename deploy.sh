#!/bin/bash
# 这是cdp-web-site的脚本执行代码。  执行方式 sh -x deploy.sh

#set -o verbose
set -o nounset
set -o errexit

base_dir=$(dirname ${0})
dist_file_path=cdp-dist.tar.gz
deploy_path="/opt/service/cdp-web/webapps"
server="root@192.168.12.203"
# server="root@192.168.12.223"

cd ${base_dir}
tar -czvf cdp-dist.tar.gz -C src/main/webapp ./resources ./views

if [[ ! -f "$dist_file_path" ]]; then
    echo "Local file doesn't exit: [${dist_file_path}]!"
    exit 1
fi
# TODO check remote path

echo "Copy to server [${server}]..."
scp -q ${dist_file_path} ${server}:${deploy_path}

cmd="cd ${deploy_path}\
  && rm -rf ./resources ./views\
  && tar -xvf ${dist_file_path}\
  && rm -rf cdp-dist"
echo "Extracting..$cmd"
ssh -q -t ${server} "${cmd}"
echo "Done."
