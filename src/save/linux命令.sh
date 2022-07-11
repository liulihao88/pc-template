
# HomeBrew
export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.cloud.tencent.com/homebrew-bottles
export PATH="/usr/local/bin:$PATH"
export PATH="/usr/local/sbin:$PATH"
# HomeBrew END

function svnCommit(){
    local day=`date "+%Y/%m/%d %H:%M:%S"`
    if [[ $1 == "" ]]
    then
            svn up && rm -rf node_modules && svn add * --force && svn ci -m "测试"$day && cnpm i && npm run dev
       else
            svn up && rm -rf node_modules && svn add * --force && svn ci -m "$1" &&  
cnpm i && npm run dev
        fi
}

function checkDir(){
	if [[ ! -d "root@182.92.227.130:/"$1 ]]
	then
		echo "root@182.92.227.130:/"$1
		echo '不存在135'
	else
		echo '存在246'
	fi
}

function autoImportProductSass(){
	local nowPwd=`pwd`
    	local targetPath="/Users/andy/jinguiProject/goldenTicket/newSass"
	if [[ $1 == '' ]]
	then
		cd $targetPath && rm -rf ./dist ./frontend && npm run build && cp -R ./dist ./frontend && cd ./frontend && touch `date "+ %Y年%m月%d日%H时%M分"`新版sass最新打包 && cd ../ && scp -r ./frontend/* "root@182.92.227.130:/saas/goldenTicket/dev/h5-wechat" && echo `date "+ %Y年%m月%d日%H时%M分"`新版sass测试打包完成 && cd $nowPwd;
	else
		cd $targetPath && rm -rf ./dist ./frontend && npm run build:production && cp -R ./dist ./frontend && cd ./frontend && touch `date "+ %Y年%m月%d日%H时%M分"`新版sass最新打包 && cd ../ && scp -r ./frontend/* "root@182.92.227.130:/saas/goldenTicket/prod/h5-wechat/531001" && echo `date "+ %Y年%m月%d日%H时%M分"`新版sass在线上打包完成 && cd $nowPwd;
	fi
}

function autoImportProductProviders(){
	local nowPwd=`pwd`
    	local targetPath="/Users/andy/jinguiProject/goldenTicket/providers"
	if [[ $1 == '' ]]
	then
		cd $targetPath && rm -rf ./dist ./backend && npm run build:development && cp -R ./dist ./backend && cd ./backend && touch `date "+ %Y年%m月%d日%H时%M分"`新版providers最新打包 && cd ../ && scp -r ./backend/* "root@182.92.227.130:/saas/goldenTicket/dev/providers" && echo `date "+ %Y年%m月%d日%H时%M分"`新版providers测试打包完成 && cd $nowPwd;
	else
		cd $targetPath && rm -rf ./dist ./backend && npm run build:production && cp -R ./dist ./backend && cd ./backend && touch `date "+ %Y年%m月%d日%H时%M分"`新版providers在线最新打包 && cd ../ && scp -r ./backend/* "root@182.92.227.130:/saas/goldenTicket/prod/providers" && echo `date "+ %Y年%m月%d日%H时%M分"`新版providers在线上打包完成 && cd $nowPwd;
	fi
}

function autoImportProductOperators(){
	local nowPwd=`pwd`
    	local targetPath="/Users/andy/jinguiProject/goldenTicket/operators"
	if [[ $1 == '' ]]
	then
		cd $targetPath && rm -rf ./dist ./backend && npm run build && cp -R ./dist ./backend && cd ./backend && touch `date "+ %Y年%m月%d日%H时%M分"`新版operators最新打包 && cd ../ && scp -r ./backend/* "root@182.92.227.130:/saas/goldenTicket/dev/operators" && echo `date "+ %Y年%m月%d日%H时%M分"`新版operators测试打包完成 && cd $nowPwd; 
	else
		cd $targetPath && rm -rf ./dist ./backend && npm run build && cp -R ./dist ./backend && cd ./backend && touch `date "+ %Y年%m月%d日%H时%M分"`新版operators在线最新打包 && cd ../ && scp -r ./backend/* "root@182.92.227.130:/saas/goldenTicket/prod/operators" && echo `date "+ %Y年%m月%d日%H时%M分"`新版operators在线上打包完成 && cd $nowPwd;	
	fi
}

function autoImportProductProviders2(){
	local nowPwd=`pwd`
    	local targetPath="/Users/andy/test/aa/groupon-pc"
	cd $targetPath && rm -rf ./dist ./backend && npm run build && cp -R ./dist ./backend && cd ./backend && touch `date "+ %Y年%m月%d日%H时%M分"`新版providers最新打包 && cd ../ && scp -r ./backend/* "root@182.92.227.130:/saas/goldenTicket/dev/providers" && echo `date "+ %Y年%m月%d日%H时%M分"`新版22providers打包完成 && cd $nowPwd;
}


function autoImportProductXiShi(){
	local nowPwd=`pwd`
	if [[ $1 == '' ]]
	then
		echo $temp && cd /Users/andy/jinguiProject/wxweb-vue-main && gsed -i 's/\[[0-9]*]/\[1\]/g' ./src/constant.js && rm -rf ./dist && cnpm run build && cd ./dist && mkdir wxweb && mkdir wxweb/page1 && cd ./wxweb && touch `date "+ %Y年%m月%d日%H时%M分"`洗事最新打包 && cd ../ && cp -R ./index.html ./static ./wxweb/page1 && rm -rf ./wxweb/page1/static/image && rm -rf index.html static && cd ../ && scp -r ./dist/* "root@182.92.227.130:/var/www/html" && echo 洗事测试打包3 && cd $nowPwd
	else
		cd /Users/andy/projectRoot/wxweb-vue-base-auto-bound && gsed -i 's/\[[0-9]*]/\[1\]/g' ./src/constant.js && rm -rf ./dist && cnpm run build && cd ./dist && mkdir wxweb && mkdir wxweb/page1 && cd ./wxweb && touch `date "+ %Y年%m月%d日%H时%M分"`x洗事测试打包auto-bound && cd ../ && cp -R ./index.html ./static ./wxweb/page1 && rm -rf ./wxweb/page1/static/image && rm -rf index.html static && cd ../ && scp -r ./dist/wxweb "root@182.92.227.130:/var/www/html/wxSingleStore/"$1 || scp -r ./dist/wxweb "root@182.92.227.130:/data/www/html/wxSingleStore/"$1 && echo 洗事测试打包auto-bound && cd $nowPwd
	fi
}


function autoGitUp(){
	if [[ $1 == '' ]]
	then
		git add . && git commit -m `date "+ %Y年%m月%d日%H时%M分%S秒"` && git push -u origin master
	else
		git add . && git commit -m `date "+ %Y年%m月%d日%H时%M分%S秒——"`$1 && git push -u origin master
	fi
}

function autoGitUp2(){
	if [[ $1 == '' ]]
	then
		git add . && git commit -m `date "+ %Y年%m月%d日%H时%M分%S秒"` && git pull --rebase origin master && git push -u origin master || git push origin main
	else
		git add . && git commit -m `date "+ %Y年%m月%d日%H时%M分%S秒——"`$1 && git pull --rebase origin master && git push -u origin master || git push origin main
	fi
}
function autoGitUp3(){
	if [[ $1 == '' ]]
	then
		git add . && git commit -m `date "+ %Y年%m月%d日%H时%M分%S秒"` && git pull --ff-only && git push origin main || git push origin master
	else
		git add . && git commit -m `date "+ %Y年%m月%d日%H时%M分%S秒——"`$1 && git pull --ff-only && git push origin main || git push origin master
	fi
}

function testFunc(){
	if [[ $2 == 'v' ]]
	then
		echo '哈哈'$1
		echo $2
		echo $1
	elif [[  $2 == 'd' ]]
	then
		echo '不能为空'
		echo $2
		echo $1
	else
		echo '我啥也没有' 
		echo $2
		echo $1
	fi
}

function autoImportProductNow(){
    local nowPwd=`pwd`
    local targetPath="/Users/andy/jinguiProject/wxweb-vue-main"
    local lookVar=$1") var"
    local hasCompanyId=`grep -c "$1" $targetPath/src/constant.js`
    local isVar=`grep -c $lookVar $targetPath/src/constant.js`
    if [[ $hasCompanyId != 0 ]]
    then
        if [[ $isVar == 1 ]]
        then
        	cd $targetPath && gsed -i 's/\[[0-9]*]/\['$1'\]/g' ./src/constant.js && rm -rf ./dist && cnpm run build && cd ./dist && mkdir wxweb && mkdir wxweb/page1 && cd ./wxweb && touch `date "+ %Y年%m月%d日%H时%M分"`新版wxweb最新var打包 && cd ../ && cp -R ./index.html ./static ./wxweb/page1 && rm -rf ./wxweb/page1/static/image && rm -rf index.html static && cd ../ && scp -r ./dist/* "root@182.92.227.130:/var/www/html/wxSingleStore/"$1 &&  scp -r ./dist/* "root@182.92.227.130:/var/www/html/wxSingleStore/"$1 && echo "root@182.92.227.130:/var/www/html/wxSingleStore/"$1在var目录下更新 && cd $targetPath && gsed -i 's/\[[0-9]*]/\[1\]/g' ./src/constant.js && cd $nowPwd

        else
        	cd $targetPath && gsed -i 's/\[[0-9]*]/\['$1'\]/g' ./src/constant.js && rm -rf ./dist && cnpm run build && cd ./dist && mkdir wxweb && mkdir wxweb/page1 && cd ./wxweb && touch `date "+ %Y年%m月%d日%H时%M分"`新版wxweb最新data打包 && cd ../ && cp -R ./index.html ./static ./wxweb/page1 && rm -rf ./wxweb/page1/static/image && rm -rf index.html static && cd ../ && scp -r ./dist/* "root@182.92.227.130:/data/www/html/wxSingleStore/"$1 && echo "root@182.92.227.130:/data/www/html/wxSingleStore/"$1在data目录下更新 && cd $targetPath && gsed -i 's/\[[0-9]*]/\[1\]/g' ./src/constant.js && cd $nowPwd
        fi
    else
        echo "constant.js中没有 $1 这个参数, 请核实"
	fi
}


function autoImportProductBefore(){
    local nowPwd=`pwd`
    local targetPath="/Users/andy/projectRoot/wxweb-V2.21.0926"
    local lookVar=$1") var"
    local hasCompanyId=`grep -c "$1" $targetPath/src/constant.js`
    local isVar=`grep -c $lookVar $targetPath/src/constant.js`
    if [[ $hasCompanyId != 0 ]]
    then
        if [[ $isVar == 1 ]]
        then
        	cd $targetPath && gsed -i 's/\[[0-9]*]/\['$1'\]/g' ./src/constant.js && rm -rf ./dist && cnpm run build && cd ./dist && mkdir wxweb && mkdir wxweb/page1 && cd ./wxweb && touch `date "+ %Y年%m月%d日%H时%M分"`0727打包var && cd ../ && cp -R ./index.html ./static ./wxweb/page1 && rm -rf ./wxweb/page1/static/image && rm -rf index.html static && cd ../ && scp -r ./dist/* "root@182.92.227.130:/var/www/html/wxSingleStore/"$1 &&  scp -r ./dist/* "root@182.92.227.130:/var/www/html/wxSingleStore/"$1 && echo "root@182.92.227.130:/data/www/html/wxSingleStore/"$1在var下更新before && cd $targetPath && gsed -i 's/\[[0-9]*]/\[1\]/g' ./src/constant.js && cd $nowPwd

        else
        	cd $targetPath && gsed -i 's/\[[0-9]*]/\['$1'\]/g' ./src/constant.js && rm -rf ./dist && cnpm run build && cd ./dist && mkdir wxweb && mkdir wxweb/page1 && cd ./wxweb && touch `date "+ %Y年%m月%d日%H时%M分"`0727打包data && cd ../ && cp -R ./index.html ./static ./wxweb/page1 && rm -rf ./wxweb/page1/static/image && rm -rf index.html static && cd ../ && scp -r ./dist/* "root@182.92.227.130:/data/www/html/wxSingleStore/"$1 && echo "root@182.92.227.130:/data/www/html/wxSingleStore/"$1在data下更新before && cd $targetPath && gsed -i 's/\[[0-9]*]/\[1\]/g' ./src/constant.js && cd $nowPwd
        fi
    else
        echo "constant.js中没有 $1 这个参数, 请核实"
	fi
}

function gitClone(){
    if [[ $1 != '' ]]
    then
        local middleWare=${1##*/}
        echo $middleWare
        local splitStr=${middleWare%%.*}
        echo $splitStr
        cd /Users/andy/test/testProject && git clone $1 && cd $splitStr && code . && npm i && npm run dev || npm run start || npm run serve
    fi
}

Function changeFile(){
	ALL_SH_FILE=$(find . -name "*.txt")
	echo '$ALL_SH_FILE'
}

# 正则切换 分支
gcbFunc() {
 REGEX=$1
 TARGET="$(git branch | grep -E $REGEX | grep -vx "\*.*" | head -n 1 | tr -d '[:space:]')"

 if [[ -z $TARGET ]]; then 
   echo "Use regex '$REGEX' to match null"
 else
   echo "Use regex '$REGEX' to match branch '$TARGET' ====> '$REPLY'"
   git checkout $TARGET
 fi
}


echo $MYDATE
alias b='npm run build'
alias d='npm run dev || npm run start || npm run serve'
alias cpb='npm run build && rm -rf /Users/andy/document-root/rootDist/*.zip && cp ./*.zip /Users/andy/document-root/rootDist && open /Users/andy/document-root/rootDist/'
alias sc='svnCommit'
alias sl='svn up && svn log -l 5'
alias ci='cnpm i && k'
alias c='clear'
alias h='history'
alias oz='open -e ~/.zshrc'
alias sz='source ~/.zshrc'
alias ss="autoImportProductSass"
alias oo="autoImportProductOperators"
alias pp="autoImportProductProviders"
alias ppp="autoImportProductProviders2"
alias oo="autoImportProductOperators"
alias k='pkill node & npm run dev || npm run start || npm run serve'
alias sed='gsed'
alias bbnow='autoImportProductNow'
alias bb='rm -rf ./dist && cnpm run build && cd ./dist && mkdir wxweb && mkdir wxweb/page1 && cd ./wxweb && touch `date "+ %Y年%m月%d日%H时%M分"`$1最新打包v2.21.0423 && cd ../ && cp -R ./index.html ./static ./wxweb/page1 && rm -rf ./wxweb/page1/static/image && rm -rf index.html static && cd ../'

alias bbn='autoImportProductBefore'
alias xs='autoImportProductXiShi'
alias gg='autoGitUp'
alias t='testFunc' 
alias eq='cat /Users/andy/jinguiProject/wxweb-vue-main/src/constant.js > /Users/andy/projectRoot/wxweb-V2.21.0607/src/constant.js && cat /Users/andy/jinguiProject/wxweb-vue-main/src/constant.js > /Users/andy/projectRoot/wxweb-V2.21.0825/src/constant.js'
alias ii="cd /Users/andy/jinguiProject/wxweb-vue-main && gsed -i 's/\[[0-9]*]/\[1\]/g' ./src/constant.js"
alias rn="rm -rf node_modules && rm package-lock.json; npm cache clear --force && npm i && d"
alias tt='test'
alias gcl='gitClone'
alias gb='git branch'
alias ga='git add .'
alias gs='git status'
alias gc='git commit -m `date "+ %Y年%m月%d日%H时%M分"`'
alias tt='echo `date "+ %Y年%m月%d日%H时%M分"`'
alias gp='git push'
alias gd='git diff'
alias gpl='git pull'
alias ll='ls -l'
alias la='ls -a'
alias gl='git log'
alias glo='git log --oneline'
alias .='../'
alias ..='../../'
alias ...='../../../'
alias ip="ifconfig | grep -oE 'inet.*netmask' | grep -oE '(\d+\.){3}\d+' | sed -n 2p"
alias glol='git log –graph –pretty = format:’%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset’ –abbrev-commit'
alias pwdc="pwd && pwd | pbcopy"
alias test='changeFile'
alias gcb='gcbFunc'
