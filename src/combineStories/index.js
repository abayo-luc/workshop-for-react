import React from 'react';

import { storiesOf } from '@storybook/react';

storiesOf('Exercises', module)
  .add('1. Props', require('../exercises/01-props').Example)
  .add('2. PropTypes', require('../exercises/02-prop-types').Example)
  .add('3. Styling', require('../exercises/03-styling').Example)
  .add('4. Composition', require('../exercises/04-composition').Example)
  .add('5. Component API', require('../exercises/05-component-api').Example)
  .add('6. State', require('../exercises/06-state').Example)
  // .add(
  //   '7. Uncontrolled Form',
  //   require('../exercises/07-uncontrolled-form').Example,
  // )
  // .add('8. Controlled Form', require('../exercises/08-controlled-form').Example)
  // .add('9. Data Fetching', require('../exercises/09-data-fetching').Example)
  // .add('10. Higher Order Component', require('../exercises/10-hoc').Example)
  // .add('11. Render Callback', require('../exercises/11-render-prop').Example);

storiesOf('Final Exercises', module)
  .add('1. Props', require('../exercises-final/01-props').Example)
  .add('2. PropTypes', require('../exercises-final/02-prop-types').Example)
  .add('3. Styling', require('../exercises-final/03-styling').Example)
  .add('4. Composition', require('../exercises-final/04-composition').Example)
  .add(
    '5. Component API',
    require('../exercises-final/05-component-api').Example,
  )
  .add('6. State', require('../exercises-final/06-state').Example)
  // .add(
  //   '7. Uncontrolled Form',
  //   require('../exercises-final/07-uncontrolled-form').Example,
  // )
  // .add(
  //   '8. Controlled Form',
  //   require('../exercises-final/08-controlled-form').Example,
  // )
  // .add(
  //   '9. Data Fetching',
  //   require('../exercises-final/09-data-fetching').Example,
  // )
  // .add(
  //   '10. Higher Order Component',
  //   require('../exercises-final/10-hoc').Example,
  // )
  // .add(
  //   '11. Render Callback',
  //   require('../exercises-final/11-render-prop').Example,
  // );
