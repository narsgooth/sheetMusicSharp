lineSpacing = 10;
offset = 100;
measureSpacing=120;

function getLine(x1, y1, x2, y2,color="Black") {
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" />`;
}

function getMeasure() {
	measure = "";
	for(var i = 0 ; i< 11; i ++)
		if(i!=5)
			measure+=getLine(0, i*lineSpacing+offset, 10000, i*lineSpacing+offset)
	for(var i = 0 ; i< 100; i ++)
	{
		//measure+=getLine(i*measureSpacing, offset, i*measureSpacing, offset+lineSpacing*10)		
		//measure+=getLine(i*measureSpacing+measureSpacing/4, offset, i*measureSpacing+measureSpacing/4, offset+lineSpacing*10,"LightGrey")
		//measure+=getLine(i*measureSpacing+measureSpacing/2, offset, i*measureSpacing+measureSpacing/2, offset+lineSpacing*10,"LightGrey")
		//measure+=getLine(i*measureSpacing+measureSpacing*3/4, offset, i*measureSpacing+measureSpacing*3/4, offset+lineSpacing*10,"LightGrey")
	}
	return measure;
}
function reMap(pitch) {
  pitch-=60;
  // Mapping within a single octave (C to B, ignoring sharps/flats)
  const map = [0, 0, 1, 1, 2, 3, 3, 4, 4, 5, 5, 6];

  // Compute the offset from middle C (MIDI note 60)
  const octaveOffset = Math.floor(pitch / 12) * 7;
  const semitoneInOctave = ((pitch % 12) + 12) % 12;


  // Get mapped value in octave
  const mapped = map[semitoneInOctave];

  // Final result combines the octave level and note index
  const naturalIndex = Math.floor(pitch / 12) * 7 + map[semitoneInOctave];

  return -naturalIndex;
}


function getNote(pitch,startT,endT) {
	fT = 40.0;
	var colors = ['Red',
				'Maroon',
				'Orange',
				'Olive',
				'Yellow',
				'Lime',	
				'Green',
				'Aqua',
				'Teal',
				'blue',
				'Purple',
				'Fuchsia'
			];
	color = colors[pitch%12];
	y_value = reMap(pitch)*lineSpacing/2+lineSpacing*5 + offset;
	return `<line x1="${startT*fT}" y1="${y_value}" x2="${(startT+endT)*fT-1}" y2="${y_value}" stroke="${color}" stroke-width="${lineSpacing/2}"/>`;
}

console.log('a');