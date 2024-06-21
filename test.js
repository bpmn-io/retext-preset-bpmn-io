import { retext } from 'retext';

import retextPreset from './index.js';

import reporter from 'vfile-reporter';

import { expect } from 'chai';


describe('retext-preset-bpmn-io', function() {

  it('should apply', async function() {

    // given
    const text = 'Some text';

    // when
    const file = await retext()
      .use(retextPreset)
      .process(text);

    const report = reporter(file);

    // then
    expect(report).to.eql('no issues found');
  });

});