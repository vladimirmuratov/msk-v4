import {Box, Typography} from '@mui/material'

export const AboutBlock = () => {
    return (
        <Box
            component='section'
            sx={{
                display: 'grid',
                gridTemplateColumns: {xs: '1fr', md: '2fr 1fr'},
                paddingY: {xs: '25px', md: '50px'},
                paddingX: '12px'
            }}>

            <Box>
                <Typography variant="h2"
                            sx={{fontSize: 25, fontWeight: 700, color: 'var(--red)', marginBottom: '20px'}}>
                    О нас
                </Typography>
                <Typography variant="h1"  sx={{color: 'var(--black)', fontSize: {xs: 16, sm: 20}, fontWeight: 400, lineHeight: '24px'}}>
                    <span style={{color: 'var(--red)', fontWeight: 500}}>Медицинская Сервисная Компания (МСК)</span> уже 10 лет оказывает услуги платной госпитализации и
                    транспортировки пациентов в ведущие клиники Москвы в круглосуточном режиме.
                </Typography>
            </Box>

            <Box
                sx={{
                    color: 'var(--green)',
                    display: {xs: 'none', md: 'flex'},
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Typography sx={{fontSize: 80, fontWeight: 700}}>8856</Typography>
                <Typography sx={{fontSize: 33, fontWeight: 700, textAlign: 'center', lineHeight: 1.1}}>постоянных
                    клиентов</Typography>
            </Box>

        </Box>
    )
}
