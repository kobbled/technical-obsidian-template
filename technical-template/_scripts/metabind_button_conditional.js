
const mb = engine.getPlugin('obsidian-meta-bind-plugin').api;

const bWeights = mb.createSignal(undefined);
const bCardio = mb.createSignal(undefined);
const bGuitar = mb.createSignal(undefined);
const bPiano = mb.createSignal(undefined);
const bSinging = mb.createSignal(undefined);
const bRecording = mb.createSignal(undefined);
const bDrawing = mb.createSignal(undefined);
const bModelling = mb.createSignal(undefined);
const bCoding = mb.createSignal(undefined);
const bModing = mb.createSignal(undefined);
const bElectronics = mb.createSignal(undefined);
const bPrinting = mb.createSignal(undefined);
const bBookReading = mb.createSignal(undefined);
const bArticleReading = mb.createSignal(undefined);
const bVideoGames = mb.createSignal(undefined);
const bMoviesTV = mb.createSignal(undefined);

component.register(mb.listenToMetadata(bWeights, context.file.path, ['weights']));
component.register(mb.listenToMetadata(bCardio, context.file.path, ['cardio']));
component.register(mb.listenToMetadata(bGuitar, context.file.path, ['guitar']));
component.register(mb.listenToMetadata(bPiano, context.file.path, ['piano']));
component.register(mb.listenToMetadata(bSinging, context.file.path, ['singing']));
component.register(mb.listenToMetadata(bRecording, context.file.path, ['recording']));
component.register(mb.listenToMetadata(bDrawing, context.file.path, ['drawing']));
component.register(mb.listenToMetadata(bModelling, context.file.path, ['modelling']));
component.register(mb.listenToMetadata(bCoding, context.file.path, ['coding']));
component.register(mb.listenToMetadata(bModing, context.file.path, ['moding']));
component.register(mb.listenToMetadata(bElectronics, context.file.path, ['electronics']));
component.register(mb.listenToMetadata(bPrinting, context.file.path, ['printing']));
component.register(mb.listenToMetadata(bBookReading, context.file.path, ['book_reading']));
component.register(mb.listenToMetadata(bArticleReading, context.file.path, ['article_reading']));
component.register(mb.listenToMetadata(bVideoGames, context.file.path, ['videogames']));
component.register(mb.listenToMetadata(bMoviesTV, context.file.path, ['moviestv']));


const comp = new obsidian.Component(component);

function render() {
	comp.unload()
	comp.load()
	container.empty();
	if (bWeights.get()) {
        let weightsContainer = document.createElement('div');
        container.appendChild(weightsContainer);
        mb.createInputFieldFromString("INPUT[slider(addLabels, title(weights), minValue(0), maxValue(360), stepSize(30), showcase):weightstime]", "inline", context.file.path, weightsContainer, comp);
        let weighttimeContainer = document.createElement('div');
        container.appendChild(weighttimeContainer);
        mb.createViewFieldFromString("VIEW[weights\: {weightstime}][text]", "inline", context.file.path, weighttimeContainer, comp);
        
    }
    if (bCardio.get()) {
        let cardioContainer = document.createElement('div');
        container.appendChild(cardioContainer);
        mb.createInputFieldFromString("INPUT[slider(addLabels, title(cardio), minValue(0), maxValue(360), stepSize(30), showcase):cardiotime]", "inline", context.file.path, cardioContainer, comp);
        let cardiotimeContainer = document.createElement('div');
        container.appendChild(cardiotimeContainer);
        mb.createViewFieldFromString("VIEW[cardio\: {cardiotime}][text]", "inline", context.file.path, cardiotimeContainer, comp);
    }
    if (bGuitar.get()) {
        let guitarContainer = document.createElement('div');
        container.appendChild(guitarContainer);
        mb.createInputFieldFromString("INPUT[slider(addLabels, title(guitar), minValue(0), maxValue(360), stepSize(30), showcase):guitartime]", "inline", context.file.path, guitarContainer, comp);
        let guitartimeContainer = document.createElement('div');
        container.appendChild(guitartimeContainer);
        mb.createViewFieldFromString("VIEW[guitar: {guitartime}][text]", "inline", context.file.path, guitartimeContainer, comp);
    }
    if (bPiano.get()) {
        let pianoContainer = document.createElement('div');
        container.appendChild(pianoContainer);
        mb.createInputFieldFromString("INPUT[slider(addLabels, title(guitar), minValue(0), maxValue(360), stepSize(30), showcase):pianotime]", "inline", context.file.path, pianoContainer, comp);
        let pianotimeContainer = document.createElement('div');
        container.appendChild(pianotimeContainer);
        mb.createViewFieldFromString("VIEW[piano: {pianotime}][text]", "inline", context.file.path, pianotimeContainer, comp);
    }
    if (bSinging.get()) {
        let singingContainer = document.createElement('div');
        container.appendChild(singingContainer);
        mb.createInputFieldFromString("INPUT[slider(addLabels, title(singing), minValue(0), maxValue(360), stepSize(30), showcase):singingtime]", "inline", context.file.path, singingContainer, comp);
        let singingtimeContainer = document.createElement('div');
        container.appendChild(singingtimeContainer);
        mb.createViewFieldFromString("VIEW[singing: {singingtime}][text]", "inline", context.file.path, singingtimeContainer, comp);
    }
    if (bRecording.get()) {
        let recordingContainer = document.createElement('div');
        container.appendChild(recordingContainer);
        mb.createInputFieldFromString("INPUT[slider(addLabels, title(recording), minValue(0), maxValue(360), stepSize(30), showcase):recordingtime]", "inline", context.file.path, recordingContainer, comp);
        let recordingtimeContainer = document.createElement('div');
        container.appendChild(recordingtimeContainer);
        mb.createViewFieldFromString("VIEW[recording: {recordingtime}][text]", "inline", context.file.path, recordingtimeContainer, comp);
    }
    if (bDrawing.get()) {
        let drawingContainer = document.createElement('div');
        container.appendChild(drawingContainer);
        mb.createInputFieldFromString("INPUT[slider(addLabels, title(drawing), minValue(0), maxValue(360), stepSize(30), showcase):drawingtime]", "inline", context.file.path, drawingContainer, comp);
        let drawingtimeContainer = document.createElement('div');
        container.appendChild(drawingtimeContainer);
        mb.createViewFieldFromString("VIEW[drawing: {drawingtime}][text]", "inline", context.file.path, drawingtimeContainer, comp);
    }
    if (bModelling.get()) {
        let modellingContainer = document.createElement('div');
        container.appendChild(modellingContainer);
        mb.createInputFieldFromString("INPUT[slider(addLabels, title(modelling), minValue(0), maxValue(360), stepSize(30), showcase):modellingtime]", "inline", context.file.path, modellingContainer, comp);
        let modellingtimeContainer = document.createElement('div');
        container.appendChild(modellingtimeContainer);
        mb.createViewFieldFromString("VIEW[modelling: {modellingtime}][text]", "inline", context.file.path, modellingtimeContainer, comp);
    }
    if (bCoding.get()) {
        let codingContainer = document.createElement('div');
        container.appendChild(codingContainer);
        mb.createInputFieldFromString("INPUT[slider(addLabels, title(coding), minValue(0), maxValue(360), stepSize(30), showcase):codingtime]", "inline", context.file.path, codingContainer, comp);
        let codingtimeContainer = document.createElement('div');
        container.appendChild(codingtimeContainer);
        mb.createViewFieldFromString("VIEW[coding: {codingtime}][text]", "inline", context.file.path, codingtimeContainer, comp);
    }
    if (bModing.get()) {
        let modingContainer = document.createElement('div');
        container.appendChild(modingContainer);
        mb.createInputFieldFromString("INPUT[slider(addLabels, title(moding), minValue(0), maxValue(360), stepSize(30), showcase):modingtime]", "inline", context.file.path, modingContainer, comp);
        let modingtimeContainer = document.createElement('div');
        container.appendChild(modingtimeContainer);
        mb.createViewFieldFromString("VIEW[moding: {modingtime}][text]", "inline", context.file.path, modingtimeContainer, comp);
    }
    if (bElectronics.get()) {
        let electronicsContainer = document.createElement('div');
        container.appendChild(electronicsContainer);
        mb.createInputFieldFromString("INPUT[slider(addLabels, title(electronics), minValue(0), maxValue(360), stepSize(30), showcase):makertime]", "inline", context.file.path, electronicsContainer, comp);
        let electronicstimeContainer = document.createElement('div');
        container.appendChild(electronicstimeContainer);
        mb.createViewFieldFromString("VIEW[electronics: {makertime}][text]", "inline", context.file.path, electronicstimeContainer, comp);
    }
    if (bPrinting.get()) {
        let printingContainer = document.createElement('div');
        container.appendChild(printingContainer);
        mb.createInputFieldFromString("INPUT[slider(addLabels, title(printing), minValue(0), maxValue(360), stepSize(30), showcase):makertime]", "inline", context.file.path, printingContainer, comp);
        let printingtimeContainer = document.createElement('div');
        container.appendChild(printingtimeContainer);
        mb.createViewFieldFromString("VIEW[printing: {makertime}][text]", "inline", context.file.path, printingtimeContainer, comp);
    }
    if (bBookReading.get()) {
        let bookreadingContainer = document.createElement('div');
        container.appendChild(bookreadingContainer);
        mb.createInputFieldFromString("INPUT[slider(addLabels, title(bookreading), minValue(0), maxValue(360), stepSize(30), showcase):readingtime]", "inline", context.file.path, bookreadingContainer, comp);
        let bookreadingtimeContainer = document.createElement('div');
        container.appendChild(bookreadingtimeContainer);
        mb.createViewFieldFromString("VIEW[bookreading: {readingtime}][text]", "inline", context.file.path, bookreadingtimeContainer, comp);
    }
    if (bArticleReading.get()) {
        let articlereadingContainer = document.createElement('div');
        container.appendChild(articlereadingContainer);
        mb.createInputFieldFromString("INPUT[slider(addLabels, title(articlereading), minValue(0), maxValue(360), stepSize(30), showcase):readingtime]", "inline", context.file.path, articlereadingContainer, comp);
        let articlereadingtimeContainer = document.createElement('div');
        container.appendChild(articlereadingtimeContainer);
        mb.createViewFieldFromString("VIEW[articlereading: {readingtime}][text]", "inline", context.file.path, articlereadingtimeContainer, comp);
    }
    if (bVideoGames.get()) {
        let videogamesContainer = document.createElement('div');
        container.appendChild(videogamesContainer);
        mb.createInputFieldFromString("INPUT[slider(addLabels, title(videogames), minValue(0), maxValue(360), stepSize(30), showcase):videogametime]", "inline", context.file.path, videogamesContainer, comp);
        let videogametimeContainer = document.createElement('div');
        container.appendChild(videogametimeContainer);
        mb.createViewFieldFromString("VIEW[videogames: {videogametime}][text]", "inline", context.file.path, videogametimeContainer, comp);
    }
    if (bMoviesTV.get()) {
        let moviestvContainer = document.createElement('div');
        container.appendChild(moviestvContainer);
        mb.createInputFieldFromString("INPUT[slider(addLabels, title(moviestv), minValue(0), maxValue(360), stepSize(30), showcase):moviestvtime]", "inline", context.file.path, moviestvContainer, comp);
        let moviestvtimeContainer = document.createElement('div');
        container.appendChild(moviestvtimeContainer);
        mb.createViewFieldFromString("VIEW[moviestv: {moviestvtime}][text]", "inline", context.file.path, moviestvtimeContainer, comp);
    }

}

const reactive = engine.reactive(render);
bWeights.registerListener({
	callback: () => reactive.refresh(),
});
bCardio.registerListener({
	callback: () => reactive.refresh(),
});
bGuitar.registerListener({
	callback: () => reactive.refresh(),
});
bPiano.registerListener({
	callback: () => reactive.refresh(),
});
bSinging.registerListener({
    callback: () => reactive.refresh(),
});
bRecording.registerListener({
    callback: () => reactive.refresh(),
});
bDrawing.registerListener({
    callback: () => reactive.refresh(),
});
bModelling.registerListener({
    callback: () => reactive.refresh(),
});
bCoding.registerListener({
    callback: () => reactive.refresh(),
});
bModing.registerListener({
    callback: () => reactive.refresh(),
});
bElectronics.registerListener({
    callback: () => reactive.refresh(),
});
bPrinting.registerListener({
    callback: () => reactive.refresh(),
});
bBookReading.registerListener({
    callback: () => reactive.refresh(),
});
bArticleReading.registerListener({
    callback: () => reactive.refresh(),
});
bVideoGames.registerListener({
    callback: () => reactive.refresh(),
});
bMoviesTV.registerListener({
    callback: () => reactive.refresh(),
});

return reactive;