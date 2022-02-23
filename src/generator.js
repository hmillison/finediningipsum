const dishes = [
    'Sour-spicy shimeji mushroom broth',
    'Raw tuna with two kinds of caviar',
    'disk of diced vegetables surrounded by spears of leek and squid ink',
    'braised salmon and crisped artichokes with a syrah wine reduction',
    'snapper in five-spice broth',
    'risotto with white-truffle oil served with casserole of salsify and black truffles',
    'beef short rib in a spice tomato sauce spiked with shredded fried potatoes',
    'bay scallops with truffles, disguised like snails',
    'pike dumpling and lobster sauce',
    'grilled sweetbreads with cream, tarragon and maitake mushrooms',
    'vegetables cooked like tripe',
    'halibut with buerre blanc and fermented daikon',
    'roasted duckling, endives braised with orange',
    'monkfish fried with cumin, fennel, chardonnay vinegar, mint',
    'whoe lobster with crudites and sauce cocktail',
    'Oysters with yuzu kosho mignonette',
    'Scallop with date and uni',
    'Cuttlefish and celeriac',
    'Fluke and uni crudo',
    'Beef tartare with elderberries and sunchoke',
    'Chicories with Asian pear and trout roe',
    'Endive, walnuts, anchovy, and ubriaco rosso',
    'Lobster with XO and Treviso',
    'Grilled foie gras and grape leaf',
    'Fried arroz negro with squid and romesco',
    'Snapper with uni and seaweed',
    'Ricotta dumplings with mushrooms and pecorino Sardo',
    'Pork with truffles and winter greens',
    'Beef with taleggio and sea fennel',
    'Fried green beans with anchovy dressing and bottarga',
    'Mandarin oranges with moscatel and smoked cheese',
    'Pea shoots and watercress with walnuts and vidiago cheese',
    'Fried sourdough with tuna conserva and sweet onions',
    'Golden rice with rock shrimp and bottarga',
    'Louisiana white prawns a la plancha',
    'Manila clams with vinho verde',
    'Fried skate wing with butter beans and preserved lemon',
]

const getRandomSentence = () => {
    return dishes[Math.floor(Math.random() * dishes.length)];
}

export const getParagraph = () => {
    let paragraph = [];
    let minCharacters = 500;
    while (paragraph.join(' ').length < minCharacters) {
        paragraph = [...paragraph, getRandomSentence()];
    }
    return paragraph.join(' ');
}