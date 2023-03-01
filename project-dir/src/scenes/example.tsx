import { makeScene2D } from '@motion-canvas/2d/lib/scenes';
import { Circle } from '@motion-canvas/2d/lib/components';
import { all, waitFor } from '@motion-canvas/core/lib/flow';
import { createRef } from '@motion-canvas/core/lib/utils';

export default makeScene2D(function* (view) {
  // Create your animations here
  const circle = createRef<Circle>();

  view.add(<Circle ref={circle} width={200} height={200} fill="white"/>);

  yield* all();
});
