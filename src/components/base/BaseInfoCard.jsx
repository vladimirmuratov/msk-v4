import {Box, Typography} from '@mui/material'

export const BaseInfoCard = ({id, img, count, title, desc}) => {
    let altText = id === 1
        ? 'платная неврология москва'
        : id === 2
            ? ' больница терапия платная палата'
            : id === 3
                ? 'платная госпитализация урология'
                : ' платные палаты кардиологии'
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
                color: 'var(--white)',
            }}>
            <img src={img} alt={altText} style={{width: '100px', height: '100px'}}/>
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
