import {Box} from '@mui/material'
import {BaseInfoCard} from '@/components/base/BaseInfoCard'

export const InfoBlock = ({info = []}) => {
    return (
        <Box
            component="section"
            sx={{
                display: 'grid',
                gridTemplateColumns: {xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)'},
                gap: '10px',
                backgroundColor: 'var(--green)',
                paddingY: {xs: '25px', md: '50px'}
            }}>
            {info.map((item) => <BaseInfoCard key={item.id} {...item}/>)}
        </Box>
    )
}
