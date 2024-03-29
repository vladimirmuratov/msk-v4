import {Box, Typography} from '@mui/material'

export const TextBlock = () => {
    return (
        <Box
            component="section"
            sx={{
                backgroundColor: 'var(--green)',
                color: 'var(--white)',
                marginY: {xs: '25px', md: '50px'},
                padding: '30px'
            }}
        >
            <Typography sx={{fontSize: {xs: 17, sm: 22}, lineHeight: 1.1, marginBottom: '20px'}}>
                От правильно выбранной больницы и врача, точно поставленного диагноза и грамотного лечения может
                зависеть жизнь пациента. А для нас помощь пациентам – дело жизни.
            </Typography>
            <Typography sx={{fontSize: 22, lineHeight: 1.1}}>
                Вам или вашим близким нужна помощь? Звоните, ответим на все вопросы!
            </Typography>
        </Box>
    )
}
