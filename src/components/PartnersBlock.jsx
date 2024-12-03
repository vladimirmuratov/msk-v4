import {Box, Typography} from '@mui/material'
import {BasePartnerCard} from '@/components/base/BasePartnerCard'
import React from 'react'

const PartnersBlock = ({partners = []}) => {
    return (
        <Box
            id='partners'
            component="section"
            sx={{
                scrollMarginTop: '150px',
                paddingY: {xs: '25px', sm: '50px'},
                paddingX: {xs: '10px', lg: 0},
            }}
        >
            <Box
                sx={{
                    marginBottom: {xs: '15px', sm: '30px'},
                    display: 'flex',
                    flexDirection: 'column',
                    gap: {xs: '10px', sm: '15px'}
                }}
            >
                <Typography
                    variant="h2"
                    sx={{fontSize: 25, fontWeight: 700, color: 'var(--red)', marginBottom: '20px'}}
                >
                    Клиники
                </Typography>

                <Typography
                    sx={{
                        color: 'var(--black)',
                        fontSize: {xs: '16px', sm: '18px'},
                        fontWeight: 500
                    }}
                >
                    При обращении в сервис МСК&ndash;Групп &mdash; все расчеты ведутся по официальным ценам с конкретной медицинской
                    организацией
                </Typography>
            </Box>

            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr'},
                    gap: {xs: '3px', sm: '5px', md: '10px'},
                }}
            >
                {partners.map((item) => <BasePartnerCard key={item.id} {...item}/>)}
            </Box>
        </Box>
    )
}

export default React.memo(PartnersBlock)
