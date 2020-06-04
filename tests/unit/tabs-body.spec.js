import chai, {expect} from 'chai'
import sinonChai from 'sinon-chai'
import TabsBody from '../../src/tabs/tabs-body'
chai.use(sinonChai)

describe('TabsBody.vue', () => {
  it('存在.', () => {
    expect(TabsBody).to.exist
  })
})