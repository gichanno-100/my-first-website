import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import '../../styles/section.css'

// 모든 섹션이 공통으로 사용하는 틀 (번호 + 제목 + 설명 + 내용)
function SectionWrapper({ id, number, title, description, children }) {
  return (
    <Paper component="section" id={id} className="section" variant="outlined" sx={{ p: { xs: 2, md: 4 } }}>
      <Typography variant="overline" color="primary">
        Section {String(number).padStart(2, '0')}
      </Typography>
      <Typography variant="h5" component="h2" fontWeight={600} gutterBottom>
        {title}
      </Typography>
      {description && (
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          {description}
        </Typography>
      )}
      {children}
    </Paper>
  )
}

export default SectionWrapper
