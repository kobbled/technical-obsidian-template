function getCurrFolder(filepath, level) {
  const curFilePath = filepath;
  let curFolderPath = curFilePath.replaceAll(/\s+/g, "%20");
  // get vault root
  const vault = app.vault.adapter.getBasePath().replaceAll(/\s+/g, "%20")

  if (curFolderPath !== "") {
    //remove file if a file is at the end
    if (/\.[^/.]+$/.test(curFolderPath)) {
      curFolderPath = curFolderPath.substring(0, curFolderPath.lastIndexOf('/'));
      // console.log("Curr Path: " + curFolderPath);
    }
    //use for getting the nth last index of parent directory
    const dirs = curFolderPath.split("/").length
    const subPath = curFolderPath.split("/", dirs - level).join("/");
    // console.log("Final Path: " + subPath);

    return `${vault}/${subPath}`
  } else {
    return `${vault}`
  }
}
module.exports = getCurrFolder;