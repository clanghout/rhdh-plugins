/*
 * Copyright Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { useContext } from 'react';

import { InfoCard } from '@backstage/core-components';

import Button from '@mui/material/Button';

import { TestContextOne } from './TestProviderOne';

export const TestCardOne = () => {
  const value = useContext(TestContextOne);
  return (
    <InfoCard title="Context one">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button onClick={value.decrement} style={{ fontSize: '2rem' }}>
          -
        </Button>
        <h2>{value.count}</h2>
        <Button onClick={value.increment} style={{ fontSize: '2rem' }}>
          +
        </Button>
      </div>
    </InfoCard>
  );
};
