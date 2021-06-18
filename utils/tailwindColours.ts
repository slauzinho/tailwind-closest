import colours from 'tailwindcss/colors';
const tailwindColours: Record<string, string> = {};

for (let coloursKey in colours) {
  if (typeof colours[coloursKey] === 'string') {
    tailwindColours[coloursKey] = colours[coloursKey];
  } else {
    for (let nestedKey in colours[coloursKey]) {
      if (colours[coloursKey]) {
        tailwindColours[`${coloursKey}-${nestedKey}`] =
          colours[coloursKey][nestedKey];
      }
    }
  }
}

export default tailwindColours;
