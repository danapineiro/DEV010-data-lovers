import { randomCard, filterBySuit, filterByType } from '../src/data.js';


describe('randomCard', () => {
  it('is a function', () => {
    expect(typeof randomCard).toBe('function');
  });

  it('deberia retornar una carta aleatoria', () => {
    const cards = [ {
      "type": "major",
      "name_short": "ar01",
      "name": "The Magician",
      "value": 1,
      "meaning_up": "Skill, diplomacy, address, subtlety; sickness, pain, loss, disaster, snares of enemies; self-confidence, will; the Querent, if male.",
      "meaning_rev": "Physician, Magus, mental disease, disgrace, disquiet.",
      "desc": "A youthful figure in the robe of a magician, having the countenance of divine Apollo, with smile of confidence and shining eyes. Above his head is the mysterious sign of the Holy Spirit, the sign of life, like an endless cord, forming the figure 8 in a horizontal position . About his waist is a serpent-cincture, the serpent appearing to devour its own tail. This is familiar to most as a conventional symbol of eternity, but here it indicates more especially the eternity of attainment in the spirit. In the Magician's right hand is a wand raised towards heaven, while the left hand is pointing to the earth. This dual sign is known in very high grades of the Instituted Mysteries; it shews the descent of grace, virtue and light, drawn from things above and derived to things below. The suggestion throughout is therefore the possession and communication of the Powers and Gifts of the Spirit. On the table in front of the Magician are the symbols of the four Tarot suits, signifying the elements of natural life, which lie like counters before the adept, and he adapts them as he wills. Beneath are roses and lilies, the flos campi and lilium convallium, changed into garden flowers, to shew the culture of aspiration. This card signifies the divine motive in man, reflecting God, the will in the liberation of its union with that which is above. It is also the unity of individual being on all planes, and in a very high sense it is thought, in the fixation thereof. With further reference to what I have called the sign of life and its connexion with the number 8, it may be remembered that Christian Gnosticism speaks of rebirth in Christ as a change \"unto the Ogdoad.\" The mystic number is termed Jerusalem above, the Land flowing with Milk and Honey, the Holy Spirit and the Land of the Lord. According to Martinism, 8 is the number of Christ.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg"
    },
    {
      "type": "major",
      "name_short": "ar02",
      "name": "The High Priestess",
      "value": 2,
      "meaning_up": "Secrets, mystery, the future as yet unrevealed; the woman who interests the Querent, if male; the Querent herself, if female; silence, tenacity; mystery, wisdom, science.",
      "meaning_rev": "Passion, moral or physical ardour, conceit, surface knowledge.",
      "desc": "She has the lunar crescent at her feet, a horned diadem on her head, with a globe in the middle place, and a large solar cross on her breast. The scroll in her hands is inscribed with the word Tora, signifying the Greater Law, the Secret Law and the second sense of the Word. It is partly covered by her mantle, to shew that some things are implied and some spoken. She is seated between the white and black pillars--J. and B.--of the mystic Temple, and the veil of the Temple is behind her: it is embroidered with palms and pomegranates. The vestments are flowing and gauzy, and the mantle suggests light--a shimmering radiance. She has been called occult Science on the threshold of the Sanctuary of Isis, but she is really the Secret Church, the House which is of God and man. She represents also the Second Marriage of the Prince who is no longer of this world; she is the spiritual Bride and Mother, the daughter of the stars and the Higher Garden of Eden. She is, in fine, the Queen of the borrowed light, but this is the light of all. She is the Moon nourished by the milk of the Supernal Mother.\nIn a manner, she is also the Supernal Mother herself--that is to say, she is the bright reflection. It is in this sense of reflection that her truest and highest name in bolism is Shekinah--the co-habiting glory. According to Kabalism, there is a Shekinah both above and below. In the superior world it is called Binah, the Supernal Understanding which reflects to the emanations that are beneath. In the lower world it is MaIkuth--that world being, for this purpose, understood as a blessed Kingdom that with which it is made blessed being the Indwelling Glory. Mystically speaking, the Shekinah is the Spiritual Bride of the just man, and when he reads the Law she gives the Divine meaning. There are some respects in which this card is the highest and holiest of the Greater Arcana.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/590px-RWS_Tarot_02_High_Priestess.jpg"      
    },
    {
      "name": "Five of Wands",
      "name_short": "wa05",
      "value": 5,
      "suit": "wands",
      "type": "minor",
      "meaning_up": "Imitation, as, for example, sham fight, but also the strenuous competition and struggle of the search after riches and fortune. In this sense it connects with the battle of life. Hence some attributions say that it is a card of gold, gain, opulence.",
      "meaning_rev": "Litigation, disputes, trickery, contradiction.",
      "desc": "A posse of youths, who are brandishing staves, as if in sport or strife. It is mimic warfare, and hereto correspond the",
      "img": "https://upload.wikimedia.org/wikipedia/commons/9/9d/Wands05.jpg"
    },
    {
      "name": "Six of Wands",
      "name_short": "wa06",
      "value": 6,
      "suit": "wands",
      "type": "minor",
      "meaning_up": "The card has been so designed that it can cover several significations; on the surface, it is a victor triumphing, but it is also great news, such as might be carried in state by the King's courier; it is expectation crowned with its own desire, the crown of hope, and so forth.",
      "meaning_rev": "Apprehension, fear, as of a victorious enemy at the gate; treachery, disloyalty, as of gates being opened to the enemy; also indefinite delay.",
      "desc": "A laurelled horseman bears one staff adorned with a laurel crown; footmen with staves are at his side.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/3/3b/Wands06.jpg"
    },
    ];
    expect(randomCard(cards).length).toBe();
  });
});


describe('filterByType', () => {
  it('is a function', () => {
    expect(typeof filterByType).toBe('function');
  });

  it('deberia retornar un solo elemento', () => {
    const cards = [ {
      "type": "major",
      "name_short": "ar01",
      "name": "The Magician",
      "value": 1,
      "meaning_up": "Skill, diplomacy, address, subtlety; sickness, pain, loss, disaster, snares of enemies; self-confidence, will; the Querent, if male.",
      "meaning_rev": "Physician, Magus, mental disease, disgrace, disquiet.",
      "desc": "A youthful figure in the robe of a magician, having the countenance of divine Apollo, with smile of confidence and shining eyes. Above his head is the mysterious sign of the Holy Spirit, the sign of life, like an endless cord, forming the figure 8 in a horizontal position . About his waist is a serpent-cincture, the serpent appearing to devour its own tail. This is familiar to most as a conventional symbol of eternity, but here it indicates more especially the eternity of attainment in the spirit. In the Magician's right hand is a wand raised towards heaven, while the left hand is pointing to the earth. This dual sign is known in very high grades of the Instituted Mysteries; it shews the descent of grace, virtue and light, drawn from things above and derived to things below. The suggestion throughout is therefore the possession and communication of the Powers and Gifts of the Spirit. On the table in front of the Magician are the symbols of the four Tarot suits, signifying the elements of natural life, which lie like counters before the adept, and he adapts them as he wills. Beneath are roses and lilies, the flos campi and lilium convallium, changed into garden flowers, to shew the culture of aspiration. This card signifies the divine motive in man, reflecting God, the will in the liberation of its union with that which is above. It is also the unity of individual being on all planes, and in a very high sense it is thought, in the fixation thereof. With further reference to what I have called the sign of life and its connexion with the number 8, it may be remembered that Christian Gnosticism speaks of rebirth in Christ as a change \"unto the Ogdoad.\" The mystic number is termed Jerusalem above, the Land flowing with Milk and Honey, the Holy Spirit and the Land of the Lord. According to Martinism, 8 is the number of Christ.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/d/de/RWS_Tarot_01_Magician.jpg"
    },
    {
      "name": "Page of Wands",
      "name_short": "wapa",
      "value": 11,
      "suit": "wands",
      "type": "minor",
      "meaning_up": "Dark young man, faithful, a lover, an envoy, a postman. Beside a man, he will bear favourable testimony concerning him. A dangerous rival, if followed by the Page of Cups. Has the chief qualities of his suit. He may signify family intelligence.",
      "meaning_rev": "Anecdotes, announcements, evil news. Also indecision and the instability which accompanies it.",
      "desc": "In a scene similar to the former, a young man stands in the act of proclamation. He is unknown but faithful, and his tidings are strange.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Wands11.jpg"
    },];
    const arcano = "major";
    expect(filterByType(cards,arcano).length).toBe(1);
  });
});

describe('filterBySuit', () => {
  it('is a function', () => {
    expect(typeof filterBySuit).toBe('function');
  });

  it('deberia retornar un solo tipo', () => {
    const cards = [{
      "name": "Page of Wands",
      "name_short": "wapa",
      "value": 11,
      "suit": "wands",
      "type": "minor",
      "meaning_up": "Dark young man, faithful, a lover, an envoy, a postman. Beside a man, he will bear favourable testimony concerning him. A dangerous rival, if followed by the Page of Cups. Has the chief qualities of his suit. He may signify family intelligence.",
      "meaning_rev": "Anecdotes, announcements, evil news. Also indecision and the instability which accompanies it.",
      "desc": "In a scene similar to the former, a young man stands in the act of proclamation. He is unknown but faithful, and his tidings are strange.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Wands11.jpg"
    },
    {
      "name": "Page of Cups",
      "name_short": "cupa",
      "value": 11,
      "suit": "cups",
      "type": "minor",
      "meaning_up": "Fair young man, one impelled to render service and with whom the Querent will be connected; a studious youth; news, message; application, reflection, meditation; also these things directed to business.",
      "meaning_rev": "Taste, inclination, attachment, seduction, deception, artifice.",
      "desc": "A fair, pleasing, somewhat effeminate page, of studious and intent aspect, contemplates a fish rising from a cup to look at him. It is the pictures of the mind taking form.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/a/ad/Cups11.jpg"
    },
    {
      "name": "Page of Pentacles",
      "name_short": "pepa",
      "value": 11,
      "suit": "pentacles",
      "type": "minor",
      "meaning_up": "Application, study, scholarship, reflection another reading says news, messages and the bringer thereof; also rule, management.",
      "meaning_rev": "Prodigality, dissipation, liberality, luxury; unfavourable news.",
      "desc": "A youthful figure, looking intently at the pentacle which hovers over his raised hands. He moves slowly, insensible of that which is about him.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Pents11.jpg"
    },
    {
      "name": "Page of Swords",
      "name_short": "swpa",
      "value": 11,
      "suit": "swords",
      "type": "minor",
      "meaning_up": "Authority, overseeing, secret service, vigilance, spying, examination, and the qualities thereto belonging.",
      "meaning_rev": "More evil side of these qualities; what is unforeseen, unprepared state; sickness is also intimated.",
      "desc": "A lithe, active figure holds a sword upright in both hands, while in the act of swift walking. He is passing over rugged land, and about his way the clouds are collocated wildly. He is alert and lithe, looking this way and that, as if an expected enemy might appear at any moment.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Swords11.jpg"
    },
    ]
    const tipo = "suit";
    expect(filterBySuit(cards,tipo).length);
    //console.log(filterBySuit(cards, 'pikachu'));
    // expect(filterBySuit(cards, 'pikachu'))
  });
});
