import {Box, Typography} from '@mui/material'

export const PriceBlock = () => {
    return (
        <Box
            component="section"
            sx={{
                paddingY: {xs: '25px', md: '50px'},
                paddingX: '12px'
            }}>
            <Typography
                variant="h5"
                sx={{fontSize: 25, fontWeight: 700, color: 'var(--red)', marginBottom: '20px'}}
            >
                Цены
            </Typography>

            <Typography sx={{color: 'var(--black)'}}>
                В среднем пакет услуг по платной госпитализации стоит 150 тысяч рублей. Однако все случаи разные, и всё
                следует оговаривать индивидуально. У нас действует гибкая система оплаты, также постоянно проводятся
                акции и предоставляются скидки. Подробности расскажет консультант или ваш персональный менеджер.
            </Typography>
        </Box>
    )
}
