import {Box, Button, Typography} from '@mui/material'
import {phoneNumber} from '@/config'

export const CallBlock = ({router}) => {
    return (
        <Box component="section"
             sx={{
                 display: 'grid',
                 gridTemplateColumns: {xs: '1fr', sm: '2fr 1fr'},
                 alignItems: 'center',
                 gap: {xs: '20px'},
                 paddingY: {xs: '25px', md: '50px'},
                 paddingX: '12px'
             }}>
            <Box>
                <Typography sx={{fontWeight: 700, fontSize: 25, lineHeight: 1.1, color: 'var(--red)'}}>
                    Не нашли ответа на свой вопрос? Звоните!
                </Typography>
            </Box>
            <Box>
                <Button
                    variant="contained"
                    size="large"
                    sx={{backgroundColor: 'var(--red)', borderRadius: '50px'}}
                    onClick={() => router.push(`tel:${phoneNumber}`)}
                >позвонить</Button>
            </Box>
        </Box>
    )
}
