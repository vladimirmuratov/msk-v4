import Carousel from 'react-material-ui-carousel'
import {BaseCard} from '@/components/base/BaseCard'

export const BaseCarousel = ({info = [], router}) => {

    return (
        <Carousel autoPlay={true} navButtonsAlwaysInvisible={true} indicators={false} animation='fade'
                  sx={{display: {xs: 'block', lg: 'none'}, paddingBottom: '25px', marginTop: '94px'}}>
            {info.map((item) => <BaseCard key={item.id} {...item} router={router}/>)}
        </Carousel>
    )
}
