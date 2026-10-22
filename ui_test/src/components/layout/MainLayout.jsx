import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

// 네비게이션 없는 단순 레이아웃: 제목 + 본문 영역
function MainLayout({ title, children }) {
  return (
    <Box component="main" sx={{ py: { xs: 4, md: 6 } }}>
      <Container maxWidth="md">
        <Typography variant="h4" component="h1" fontWeight={700} gutterBottom>
          {title}
        </Typography>
        <Box sx={{ mt: 4 }}>{children}</Box>
      </Container>
    </Box>
  )
}

export default MainLayout
