var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter",
  "level": "1",
  "url": "frontmatter.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "   Universität Heidelberg  Mathematikon         copyright   "
},
{
  "id": "eins",
  "level": "1",
  "url": "eins.html",
  "type": "Section",
  "number": "1",
  "title": "Todo",
  "body": " Todo  Dummy text.  "
},
{
  "id": "zwei",
  "level": "1",
  "url": "zwei.html",
  "type": "Section",
  "number": "2",
  "title": "Todo",
  "body": " Todo  Dummy text.  "
},
{
  "id": "drei",
  "level": "1",
  "url": "drei.html",
  "type": "Section",
  "number": "3",
  "title": "Todo",
  "body": " Todo  Dummy text.  "
},
{
  "id": "vier",
  "level": "1",
  "url": "vier.html",
  "type": "Section",
  "number": "4",
  "title": "Todo",
  "body": " Todo  Dummy text.  "
},
{
  "id": "fuenf",
  "level": "1",
  "url": "fuenf.html",
  "type": "Section",
  "number": "5",
  "title": "Todo",
  "body": " Todo  Dummy text.  "
},
{
  "id": "sechs",
  "level": "1",
  "url": "sechs.html",
  "type": "Section",
  "number": "6",
  "title": "Todo",
  "body": " Todo  Dummy text.  "
},
{
  "id": "sieben",
  "level": "1",
  "url": "sieben.html",
  "type": "Section",
  "number": "7",
  "title": "Todo",
  "body": " Todo  Dummy text.  "
},
{
  "id": "acht",
  "level": "1",
  "url": "acht.html",
  "type": "Section",
  "number": "8",
  "title": "Todo",
  "body": " Todo  Dummy text.  "
},
{
  "id": "neun",
  "level": "1",
  "url": "neun.html",
  "type": "Section",
  "number": "9",
  "title": "Todo",
  "body": " Todo  Dummy text.  "
},
{
  "id": "determinanten",
  "level": "1",
  "url": "determinanten.html",
  "type": "Section",
  "number": "10",
  "title": "Determinanten",
  "body": " Determinanten  Sei ein Körper. Seien ,  -Vektorräume.   Multilinearität     Eine Abbildung heißt -linear (multilinear), wenn gilt:     Gilt in (a) , so heißt  -Linearform.     Menge aller -linearen Abbildungen .     heißt alternierend  mit , so gilt .     .    Bemerkung: .       sind jeweils -Untervektorräume.      Charakteristik   Die Charakteristik von ist definiert als  ist oder eine Primzahl.    "
},
{
  "id": "def-n-linear",
  "level": "2",
  "url": "determinanten.html#def-n-linear",
  "type": "Definition",
  "number": "10.1",
  "title": "Multilinearität.",
  "body": " Multilinearität     Eine Abbildung heißt -linear (multilinear), wenn gilt:     Gilt in (a) , so heißt  -Linearform.     Menge aller -linearen Abbildungen .     heißt alternierend  mit , so gilt .     .    Bemerkung: .   "
},
{
  "id": "lem-alt-n-k-uvr",
  "level": "2",
  "url": "determinanten.html#lem-alt-n-k-uvr",
  "type": "Lemma",
  "number": "10.2",
  "title": "",
  "body": "   sind jeweils -Untervektorräume.    "
},
{
  "id": "def-charakteristik",
  "level": "2",
  "url": "determinanten.html#def-charakteristik",
  "type": "Definition",
  "number": "10.3",
  "title": "Charakteristik.",
  "body": " Charakteristik   Die Charakteristik von ist definiert als  ist oder eine Primzahl.   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
