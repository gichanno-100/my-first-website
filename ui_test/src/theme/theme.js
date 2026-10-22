import { createTheme } from '@mui/material/styles'

// 프로젝트 전체에서 사용하는 기본 테마
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    secondary: { main: '#9c27b0' },
    background: { default: '#f5f7fa', paper: '#ffffff' },
  },
  typography: {
    fontFamily: ['Roboto', 'Pretendard', 'Apple SD Gothic Neo', 'sans-serif'].join(','),
  },
  shape: { borderRadius: 8 },
})

export default theme
