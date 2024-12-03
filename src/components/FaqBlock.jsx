import {Box, Typography} from '@mui/material'
import {BaseAccordion} from '@/components/base/Accordion/BaseAccordion'

export const FaqBlock = ({info = []}) => {
    return (
        <Box
            component="section"
            sx={{
                paddingY: {xs: '25px', md: '50px'},
                paddingX: '12px'
            }}
        >
            <Typography
                variant="h2"
                sx={{fontSize: 25, fontWeight: 700, color: 'var(--red)', marginBottom: '20px'}}
            >
                Вопросы
            </Typography>
            <BaseAccordion info={info}/>
        </Box>
    )
}
