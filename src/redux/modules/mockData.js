export const mockchangerequests = {
	'60432515': {
		kassenzeichen: 60432515,
		flaechen: {
			'1': {
				groesse: 1430
			},
			'2': {
				groesse: 921,
				pruefung: {
					groesse: {
						value: 921,
						von: 'SteinbacherD102',
						timestamp: 47110815
					}
				}
			},
			'8': {
				flaechenart: {
					art: 'Gründachfläche',
					art_abkuerzung: 'GDF'
				},
				pruefung: {
					flaechenart: {
						value: {
							art: 'Gründachfläche',
							art_abkuerzung: 'GDF'
						},
						von: 'SteinbacherD102',
						timestamp: 47110815
					}
				}
			}
		},
		documents: [
			{
				name: 'Versickerungsgenehmigung.pdf',
				uuid: 'akdjsfhjldsfghlkasdjhfjlkhdfjkl384297'
			}
		],

		nachrichten: {
			buerger: {},
			sachbearbeiter: {
				nachricht: 'Hallo Bürger. Wenn etwas nicht stimmt, dann ändere es einfach ;-)',
				timestamp: 1566915257854,
				bubbleStyles: {
					chatbubble: {
						background: 'red'
					}
				}
			},
			next: {
				buerger: {
					nachricht: 'Da passt was nicht weil isso, siehe lustiges pdf !',
					timestamp: 1566915257744,
					anhang: 'http://meine.domain.de/lustiges.pdf'
				},
				sachbearbeiter: {
					nachricht: 'Konnte nichts feststellen, alles in Ordnung.',
					timestamp: 1566915257854
				},
				next: {
					buerger: {
						nachricht: 'Oh, falsches PDF, siehe richtiges pdf.',
						timestamp: 1566915257858,
						anhang: 'http://meine.domain.de/richtiges.pdf'
					},
					sachbearbeiter: {
						nachricht: 'Ach so, verstehe. Alles Klar !',
						timestamp: 1566915257858
					},
					next: {
						buerger: {
							nachricht: 'Geht doch, danke.',
							timestamp: 1566915257858
						}
					}
				}
			}
		}
	}
};
