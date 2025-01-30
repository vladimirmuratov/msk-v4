import Head from 'next/head'
import {Box, DialogContentText} from '@mui/material'
import {Header} from '@/components/Header'
import {BannerBlock} from '@/components/BannerBlock'
import {bannerCards, faq, infoCards, partners, services, timeOut} from '@/config'
import {useRouter} from 'next/router'
import {BaseCarousel} from '@/components/base/BaseCarousel'
import {AboutBlock} from '@/components/AboutBlock'
import {InfoBlock} from '@/components/InfoBlock'
import {ServiceBlock} from '@/components/ServiceBlock'
import {TextBlock} from '@/components/TextBlock'
import {FaqBlock} from '@/components/FaqBlock'
import {CallBlock} from '@/components/CallBlock'
import {PriceBlock} from '@/components/PriceBlock'
import {ContactsBlock} from '@/components/ContactsBlock'
import {useEffect, useState} from 'react'
import {FloatBtn} from '@/components/FloatBtn'
import {BaseModal} from '@/components/base/BaseModal'
import {Suspense} from 'react'
import {Metrika} from '@/components/Metrika'
import PartnersBlock from '@/components/PartnersBlock'

export default function Home() {
    const router = useRouter()
    const [success, setSuccess] = useState(false)
    const [failed, setFailed] = useState(false)

    useEffect(() => {
        let timeout
        if (success || failed) {
            timeout = setTimeout(() => {
                handleClose()
            }, timeOut)
        }
        return () => {
            clearTimeout(timeout)
        }
    }, [success, failed])

    const handleClose = () => {
        setFailed(false)
        setSuccess(false)
    }

    return (
        <>
            <Head>
                <title>Платная госпитализация 8(499)719-81-00, 24/7</title>
                <meta name="description" content="Доверьте свою госпитализацию профессионалам! МСК предоставляет услуги транспортировки пациентов в московские клиники уже 10 лет. Мы работаем круглосуточно."/>
                <meta name="keywords" content="гинекология госпитализация, платная госпитализация в москве хирургия, платная травматология москва, госпитализация урология москва, кардиология платная госпитализация, платная госпитализация неврология, платная гастроэнтерология в москве, платный стационар терапия, сомнолог москва лечение храпа"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="yandex-verification" content="e46f6a1bf2c90dee" />
                <link rel="icon" href="/icon.png"/>
            </Head>
            <Box component="main" className="container">
                <Header router={router}/>
                <BannerBlock info={bannerCards} router={router}/>
                <BaseCarousel info={bannerCards} router={router}/>
                <AboutBlock/>
                <InfoBlock info={infoCards}/>
                <ServiceBlock info={services}/>
                <TextBlock/>
                <FaqBlock info={faq}/>
                <CallBlock router={router}/>
                <PriceBlock/>
                <PartnersBlock partners={partners}/>
                <ContactsBlock onSuccess={setSuccess} onFailed={setFailed} router={router}/>
                <FloatBtn router={router}/>
                <Suspense>
                    <Metrika/>
                </Suspense>
            </Box>

            {/*{(success || failed) && <Toast isSuccess={success} isFailed={failed} handleClose={handleClose}/>}*/}

            {success && (
                <BaseModal title="Сообщение отправлено!" open={success} handleClose={handleClose}
                           color="var(--green)">
                    <DialogContentText id="alert-dialog-description">
                        Скоро в Вами свяжется наш специалист
                    </DialogContentText>
                </BaseModal>
            )}

            {failed && (
                <BaseModal title="Ошибка сервера!" open={failed} handleClose={handleClose} color="var(--red)">
                    <DialogContentText id="alert-dialog-description">
                        Попробуйте позже
                    </DialogContentText>
                </BaseModal>
            )}

        </>
    )
}
