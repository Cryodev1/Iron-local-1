touch ~/.zshrc
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm install node
curl -L https://github.com/Cryodev1/Iron-local-1/archive/master.zip --output master.zip
unzip -n master 
osascript -e 'tell app "Terminal" to do script "cd Iron-local-1-main/uv-app; npm start"'
node Iron-local-1-main/Iron-node
