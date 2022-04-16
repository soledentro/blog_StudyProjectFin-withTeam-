import LinkMUI from '@mui/material/Link'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import { pages } from '../headerParts'

function HeaderInscriptions() {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {pages.map((page) => (
        <LinkMUI component={Link} to={page.path}>
          <Button
            key={page.title}
            sx={{ my: 2, color: 'white', display: 'block' }}
          >
            {page.title}
          </Button>
        </LinkMUI>
      ))}
    </Box>
  )
}

export default HeaderInscriptions
