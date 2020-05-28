import chai, {expect} from 'chai'
import sinonChai from 'sinon-chai'
import Tabs from '../../src/tabs'
chai.use(sinonChai)

describe('Tabs.vue', () => {
  it('存在.', () => {
    expect(Tabs).to.exist
  })
})