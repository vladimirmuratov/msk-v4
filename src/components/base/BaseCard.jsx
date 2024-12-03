import {Avatar, Box, Button, Typography} from '@mui/material'
import {phoneNumber} from '@/config'

export const BaseCard = ({id, subTitle, title, text, img, icon, router}) => {
    let altText = id === 1
        ? 'платные больницы гинекологии'
        : id === 2 ? 'платные больницы хирургия': 'больница травматология платно'

    return (
        <Box sx={{color: 'var(--white)', position: 'relative', display: 'flex',}}>
            <img className="img" src={img} alt={altText}/>
            <Box sx={{
                height: '100%',
                position: 'absolute',
                top: '8%',
                left: '5%',
                right: '5%',
                display: 'flex',
                flexDirection: 'column',
                gap: {xs: '8px', lg: '14px'}
            }}>
                <Avatar src={icon} alt="icon" sx={{backgroundColor: 'var(--white)'}}/>
                <Typography sx={{
                    fontWeight: 700,
                    fontSize: {xs: 12, sm: 16, md: 18, lg: 14},
                    lineHeight: 1,
                    textTransform: 'uppercase'
                }}>{subTitle}</Typography>
                <Typography
                    sx={{fontWeight: 700, fontSize: {xs: 14, sm: 18, md: 20, lg: 18}, lineHeight: {xs: 1.1, sm: 1.3}, textTransform: 'uppercase'}}>{title}</Typography>
                <Typography sx={{fontSize: {xs: 12, sm: 16, md: 18, lg: 16}, lineHeight: {xs: 1.1, sm: 1.3}}}>{text}</Typography>
                <Button
                    onClick={() => router.push(`tel:${phoneNumber}`)}
                    variant="contained"
                    sx={{backgroundColor: 'var(--green)', alignSelf: {xs: 'start', lg: 'auto'}}}
                >Позвонить</Button>
            </Box>
        </Box>
    )
}
