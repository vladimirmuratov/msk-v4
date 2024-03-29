import {Box} from '@mui/material'
import {BaseAccordionItem} from '@/components/base/Accordion/BaseAccordionItem'

export const BaseAccordion = ({info = []}) => {

    return (
        <Box>
            {info.map((item) => <BaseAccordionItem key={item.id} {...item}/>)}
        </Box>
    )
}
