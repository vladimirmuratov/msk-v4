import {Box} from '@mui/material'
import {BaseCard} from '@/components/base/BaseCard'


export const BannerBlock = ({info = [], router = null}) => {

    return (
        <Box
            component="section"
            sx={{
                display: {xs: 'none', lg: 'grid'},
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '10px',
                paddingBottom: {lg: '50px'},
                marginTop: '94px'
            }}>
            {info.map((item) => <BaseCard key={item.id} {...item} router={router}/>)}
        </Box>
    )
}
