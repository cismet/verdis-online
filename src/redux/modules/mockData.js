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

		nachrichten: [
			{
				typ: 'CLERK',
				timestamp: 1562059800000,
				name: 'verdis',
				nachricht:
					'Sehr geehrte*r Nutzer*in, hier haben Sie die Möglichkeit Änderungen an Ihren Flächen mitzuteilen.'
			},

			{
				typ: 'CITIZEN',
				timestamp: 1562060700000,
				nachricht:
					'Fläche B ist kleiner. Sie ist nicht 40 m² groß, sondern nur 37 m². Sie ist auch nicht an dem Kanal angeschlossen, sondern besteht aus Ökopflaster und versickert. Siehe Fotos.',
				anhang: [
					{ name: 'Ökopflasterfoto.pdf', uuid: '1337' },
					{ name: 'Ökopflasterfoto2.pdf', uuid: '1338' }
				]
			},

			{
				typ: 'CLERK',
				timestamp: 1562136300000,
				name: 'Dirk Steinbacher',
				nachricht:
					'Die Änderung der Fläche werde ich übernehmen. Das Foto ist nicht ausreichend. Bitte übersenden Sie zusätzlich ein Foto der gesamten Fläche. Ökopflaster wird auch nicht als vollständig versickernd angesehen, sondern muss laut Satzung mit 70% seiner Flächen zur Gebührenerhebung herangezogen werden.'
			},
			{
				typ: 'SYSTEM',
				timestamp: 1562136360000,
				nachricht:
					"SYSTEMMESSAGE({ type: 'changed', flaeche: '1' ,flaechenart:'Dachfläche'}) "
			},

			{
				typ: 'CITIZEN',
				timestamp: 1562179560000,
				nachricht:
					'Hier das gewünschte Foto. Die Zufahrt entwässert seitlich in die Beete.',
				anhang: [ { name: 'Foto2.pdf', uuid: '13374' } ]
			},
			{
				typ: 'CLERK',
				timestamp: 1562227500000,
				name: 'Dirk Steinbacher',
				nachricht:
					'Auf dem 2ten Foto sind Rasenkantensteine und ein Gully zu erkennen. Aus diesem Grund muss ich für diese Fläche 24 m² (70% von 37 m²) zur Veranlagung an das Steueramt weitergeben.'
			},
			{
				typ: 'SYSTEM',
				timestamp: 1562227560000,
				nachricht:
					"SYSTEMMESSAGE({ type: 'changed', flaeche: '1', flaechenart:'Dachfläche' }) "
			},
			{
				typ: 'CITIZEN',
				draft: true,
				timestamp: 1562486760000,
				nachricht: 'So wird eine Nachricht visualisiert, die noch nicht abgesschickt ist.'
			}
		]
	}
};
