import nearestColour from 'nearest-color';
import { useMemo } from 'react';
import tailwindColours from '../utils/tailwindColours';
import { isValidColour } from '../utils/colour';

const useColour = (userColour: string) => {
  const { inherit, current, transparent, ...rest } = tailwindColours;
  const getNearestTailwindColour = nearestColour.from(rest);

  const test = useMemo(() => {
    if (isValidColour(userColour)) {
      return {
        nearestTailwindColour: getNearestTailwindColour(userColour),
        tailwindColourVariant: getNearestTailwindColour(userColour)['name'],
        tailwindColourValue: getNearestTailwindColour(userColour)['value'],
        tailwindBaseColourName: getNearestTailwindColour(userColour)[
          'name'
        ].replace(/-\d{2,3}$/gi, ''),
        tailwindBaseColourNumber: getNearestTailwindColour(userColour)[
          'name'
        ].replace(/^\w+-/gi, ''),
      };
    }
    return null;
  }, [userColour]);
  return test;
};

export default useColour;
