import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

// Components for unsolved exercises
import { Example as Props } from '../exercises/01-props';
import { Example as PropTypes } from '../exercises/02-prop-types';
import { Example as Styling } from '../exercises/03-styling';
import { Example as Composition } from '../exercises/04-composition';
import { Example as ComponentAPI } from '../exercises/05-component-api';
import { Example as State } from '../exercises/06-state';
import { Example as UncontrolledForm } from '../exercises/07-uncontrolled-form';
import { Example as ControlledForm } from '../exercises/08-controlled-form';
import { Example as DataFetching } from '../exercises/09-data-fetching';
import { Example as Hoc } from '../exercises/10-hoc';
import { Example as RenderProp } from '../exercises/11-render-prop';

// Components for solved exercises
import { Example as ResultProps } from '../exercises-final/01-props';
import { Example as ResultPropTypes } from '../exercises-final/02-prop-types';
import { Example as ResultStyling } from '../exercises-final/03-styling';
import { Example as ResultComposition } from '../exercises-final/04-composition';
import { Example as ResultComponentAPI } from '../exercises-final/05-component-api';
import { Example as ResultState } from '../exercises-final/06-state';
import { Example as ResultUncontrolledForm } from '../exercises-final/07-uncontrolled-form';
import { Example as ResultControlledForm } from '../exercises-final/08-controlled-form';
import { Example as ResultDataFetching } from '../exercises-final/09-data-fetching';
import { Example as ResultHoc } from '../exercises-final/10-hoc';
import { Example as ResultRenderProp } from '../exercises-final/11-render-prop';



storiesOf('Exercises', module)
  .add('1. Props', () => <Props />)
  .add('2. PropTypes', () => <PropTypes />)
  .add('3. Styling', () => <Styling />)
  .add('4. Composition', () => <Composition />)
  .add('5. Component API', () => <ComponentAPI />)
  .add('6. State', () => <State />)
  .add('7. Uncontrolled Form', () => <UncontrolledForm />)
  .add('8. Controlled Form', () => <ControlledForm />)
  .add('9. Data Fetching', () => <DataFetching />)
  .add('10. Higher Order Component', () => <Hoc />)
  .add('11. Render Callback', () => <RenderProp />);

storiesOf('Final Exercises', module)
  .add('1. Props', () => <ResultProps />)
  .add('2. PropTypes', () => <ResultPropTypes />)
  .add('3. Styling', () => <ResultStyling />)
  .add('4. Composition', () => <ResultComposition />)
  .add('5. Component API', () => <ResultComponentAPI />)
  .add('6. State', () => <ResultState />)
  .add('7. Uncontrolled Form', () => <ResultUncontrolledForm />)
  .add('8. Controlled Form', () => <ResultControlledForm />)
  .add('9. Data Fetching', () => <ResultDataFetching />)
  .add('10. Higher Order Component', () => <ResultHoc />)
  .add('11. Render Callback', () => <ResultRenderProp />);
