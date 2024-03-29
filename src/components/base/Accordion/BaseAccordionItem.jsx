import {Accordion, AccordionDetails, AccordionSummary, Typography} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export const BaseAccordionItem = ({id, question, answer}) => {

    return(
        <Accordion>
            <AccordionSummary
                sx={{fontWeight: 500, fontSize: 18}}
                expandIcon={<ExpandMoreIcon/>}
                aria-controls={`panel${id}-content`}
                id={`panel${id}-header`}
            >
                <Typography sx={{fontSize: 22, lineHeight: 1.2, ':hover': {color: 'var(--green)'}, transition: '0.2s'}}>{question}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{fontSize: 18, lineHeight: 1.5, backgroundColor: 'var(--green)', color: '#fff', whiteSpace: 'pre-wrap'}}>
                <Typography>{answer}</Typography>
            </AccordionDetails>
        </Accordion>
    )
}
