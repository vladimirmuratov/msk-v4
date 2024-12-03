import {Box, Typography} from '@mui/material'

export const BaseInfoCard = ({alt, img, count, title, desc}) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
                color: 'var(--white)',
            }}>
            <img src={img} alt={alt} style={{width: '100px', height: '100px'}}/>
            <Typography sx={{fontSize: 35}}>{count}</Typography>
            <Typography sx={{fontWeight: 700, textTransform: 'uppercase', textAlign: 'center'}}>{title}</Typography>
            <Typography sx={{
                textAlign: 'center',
                fontSize: 18,
                fontWeight: 500,
                lineHeight: 1.3,
                opacity: 0.5
            }}>{desc}</Typography>
        </Box>
    )
}
