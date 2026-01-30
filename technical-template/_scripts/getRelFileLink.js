const getCurrFolder = require(app.vault.adapter.getBasePath() + "/_scripts/getCurrFolder.js");
function getRelFileLink(currPath, parent_level, alias, path) {
    //use absolute path if parent_level is -1
    if (parent_level == -1) {
        return(`[${alias}](file:///${path.replaceAll(/\s+/g, "%20")})`)
    } else {
        return(`[${alias}](file:///${getCurrFolder(currPath, parent_level)}/${path.replaceAll(/\s+/g, "%20")})`)
    }
}
module.exports = getRelFileLink;