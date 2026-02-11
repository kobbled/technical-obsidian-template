async function archiveGroceryList(tp) {
    if (!tp || !tp.date) {
        new Notice("Error: Templater object 'tp' or 'tp.date' is not available for archiving script.");
        console.error("Error: Templater object 'tp' or 'tp.date' is not available for archiving script.");
        return;
    }

    const moment = tp.date.now("YYYY-MM-DD");
    const groceryListPath = "cooking/Grocery List.md";
    const groceryListBaseName = "Grocery List";

    const groceryListTFile = tp.file.find_tfile(groceryListPath);

    if (!groceryListTFile) {
        new Notice(`Error: Grocery List file not found at "${groceryListPath}" for archiving.`);
        console.error(`Error: Grocery List file not found at "${groceryListPath}" for archiving.`);
        return;
    }

    const content = await app.vault.read(groceryListTFile);
    const archivePath = `cooking/archive/${groceryListBaseName}-${moment}.md`;
    
    try {
        await app.vault.create(archivePath, content);
        new Notice(`"${groceryListBaseName}.md" successfully archived to "${archivePath}".`);
    } catch (e) {
        new Notice(`Error creating archive file: ${e.message}`);
        console.error("Error creating archive file:", e);
    }
}

module.exports = archiveGroceryList;