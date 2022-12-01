touch ~/.zshrc
osascript -e 'tell app "System Events" to display dialog "Started installing in the background, will let you know when its done."'
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm install node
curl -L https://github.com/Cryodev1/Iron-local-1/archive/master.zip --output master.zip
unzip -n master 
osascript -e 'tell app "System Events" to display dialog "Installation Complete! If the page doesnt load just refresh it."'
osascript -e 'tell app "Terminal" to do script "cd Iron-local-1-main/uv-app; npm start"'
osascript -e 'tell application "Terminal"' -e 'do script "node ~/Iron-local-1-main/Iron-node"' -e 'end tell' -e 'tell application "System Events"' -e 'set visible of application process "Terminal" to false' -e 'end tell'
open -a "Google Chrome" http://localhost:8080
rm -rif ~/Desktop/Install.app
rm -rif ~/Downloads/Install.app