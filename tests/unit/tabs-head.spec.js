import chai, {expect} from 'chai'
import sinonChai from 'sinon-chai'
import TabsHead from '../../src/tabs-head'
chai.use(sinonChai)

describe('TabsHead.vue', () => {
  it('存在.', () => {
    expect(TabsHead).to.exist
  })
})