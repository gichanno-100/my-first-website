import Typography from '@mui/material/Typography'
import MainLayout from './components/layout/MainLayout.jsx'
import { sections } from './components/sections/index.js'

function App() {
  return (
    <MainLayout title="UI Components">
      {sections.length === 0 ? (
        <Typography color="text.secondary">
          아직 추가된 섹션이 없습니다. src/components/sections/index.js 에 섹션을 등록해 주세요.
        </Typography>
      ) : (
        sections.map((Section, i) => <Section key={i} number={i + 1} />)
      )}
    </MainLayout>
  )
}

export default App
