import { example, filterBySuit, filterByType } from '../src/data.js';


describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
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
