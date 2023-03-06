osascript -e "tell application \"Terminal\"" -e "tell application \"System Events\" to keystroke \"t\" using {command down}" -e "do script \"cd $PWD; echo HI\" in front window" -e "end tell" > /dev/null

osascript -e "tell application \"Terminal\"" -e "do script \"code /Users/andy/test/testProject/pc-template && d\" in front window" -e "tell application \"System Events\" to keystroke \"t\" using {command down}" -e "do script \"code /Users/andy/kj/gaea-fe
 && d\" in front window"






osascript -e "tell application \"Terminal\"" -e "tell application \"System Events\" to keystroke \"t\" using {command down}" -e "do script \"echo hahaha\" in front window" -e "end tell" > /dev/null



osascript -e "tell application \"Terminal\"" -e "do script \"code /Users/andy/kj/gaea-fe\" in front window" -e "end tell"