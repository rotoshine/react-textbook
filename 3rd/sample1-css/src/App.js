import './App.css'

import InlineStyleCard from './InlineStyleCard'
import Card from './Card'
import CardWithCssModule from './CardWithCssModule'
import DarkCard from './DarkCard'
import BlueCard from './BlueCard'
import RedCard from './RedCard'

function App() {
  return (
    <div className="App">
      <InlineStyleCard title="인라인">이것은 인라인 스타일로 작성한 카드</InlineStyleCard>
      <InlineStyleCard title="인라인">이것은 인라인 스타일로 작성한 카드</InlineStyleCard>
      <InlineStyleCard title="인라인">이것은 인라인 스타일로 작성한 카드</InlineStyleCard>
      <InlineStyleCard title="인라인">이것은 인라인 스타일로 작성한 카드</InlineStyleCard>
      <Card title="CSS 카드">CSS 문법으로 만든 카드</Card>
      <CardWithCssModule title="Module 카드">CSS Module로 만든 카드</CardWithCssModule>
      <DarkCard title="DarkCard">다크테마 카드</DarkCard>
      <BlueCard title="Emotion">이모션 카드</BlueCard>
      <RedCard title="Emotion">이모션 카드</RedCard>
    </div>
  )
}

export default App
