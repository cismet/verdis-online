export const kassenzeichenFlaechenSorter = (fa, fb) => {
    if (!isNaN(fa.flaechenbezeichnung) && !isNaN(fb.flaechenbezeichnung)) {
      return (+fa.flaechenbezeichnung) - (+fb.flaechenbezeichnung);
    } else if (!isNaN(fa.flaechenbezeichnung) && isNaN(fb.flaechenbezeichnung)) {
      return -1;
    } else if (isNaN(fa.flaechenbezeichnung) && !isNaN(fb.flaechenbezeichnung)) {
      return 1;
    } else {
      if (fa.flaechenbezeichnung < fb.flaechenbezeichnung) {
        return -1;
      }
      else {
        return 1;
      }
    }
  };