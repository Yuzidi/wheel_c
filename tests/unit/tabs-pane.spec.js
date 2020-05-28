import chai, {expect} from 'chai'
import sinonChai from 'sinon-chai'
import TabsPane from '../../src/tabs-pane'

chai.use(sinonChai)

describe('TabsPane.vue', () => {
  it('存在.', () => {
    expect(TabsPane).to.exist
  })
})