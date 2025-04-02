import { Box, Divider, Link, Typography } from '@mui/material';
import { email, phoneNumber } from '@/config';

export const Header = ({ router }) => {
    const goEmail = () => router.push(`mailto:${email}`);
    const goPhone = () => router.push(`tel:${phoneNumber}`);

    return (
        <Box component="header" sx={{
            backgroundColor: 'var(--white)',
            zIndex: 2,
            boxShadow: '0 2px 2px lightgray',
            padding: { sm: '20px' },
            position: 'fixed',
            top: 0,
            right: 0,
            left: 0,
            maxWidth: '1140px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: { xs: '15px' }
        }}>
            <Link href='/'>
                <img src="/logo.svg" alt="logo" />
            </Link>

            <Box sx={{
                display: { xs: 'flex', sm: 'none' },
                alignItems: 'center',
                gap: '10px',
                color: 'var(--red)',
                marginBottom: { xs: '10px' }
            }}>
                <Typography
                    onClick={goPhone}
                    sx={{ fontWeight: 700, fontSize: { xs: 14 }, lineHeight: { xs: '8px' }, cursor: 'pointer' }}>
                    {phoneNumber},
                </Typography>
                <Typography sx={{ fontWeight: 700, fontSize: { xs: 14 }, lineHeight: { xs: '8px' } }}>
                    Круглосуточно 24/7
                </Typography>
            </Box>

            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: { sm: 'translate(-50%, -50%)', md: 'translate(-40%, -50%)' },
                display: { xs: 'none', sm: 'flex', lg: 'none' },
                flexDirection: { sm: 'column', md: 'row' },
                alignItems: 'center',
                gap: '20px',
                marginBottom: { xs: '10px' }
            }}>
                <Typography
                    onClick={goPhone}
                    sx={{
                        whiteSpace: 'nowrap',
                        color: 'var(--red)',
                        fontWeight: 700,
                        fontSize: { xs: 14 },
                        lineHeight: { xs: '8px' },
                        cursor: 'pointer'
                    }}
                >
                    {phoneNumber},
                </Typography>
                <Typography
                    sx={{
                        whiteSpace: 'nowrap',
                        color: 'var(--black)',
                        fontWeight: 700,
                        fontSize: { xs: 14 },
                        lineHeight: { xs: '8px' }
                    }}
                >
                    Круглосуточно
                    24/7
                </Typography>
                <Typography
                    onClick={goEmail}
                    sx={{
                        whiteSpace: 'nowrap',
                        color: 'var(--black)',
                        fontWeight: 700,
                        fontSize: { xs: 14 },
                        lineHeight: { xs: '8px' },
                        cursor: 'pointer'
                    }}
                >
                    {email}
                </Typography>
            </Box>

            <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: '10px', color: 'var(--red)' }}>
                <Typography
                    onClick={goPhone}
                    sx={{ fontWeight: 700, fontSize: 22, cursor: 'pointer' }}>
                    {phoneNumber}
                </Typography>
                <Divider orientation="vertical" flexItem sx={{ backgroundColor: 'var(--red)', width: '2px' }} />
                <Typography sx={{ fontWeight: 700, fontSize: 22 }}>Круглосуточно 24/7</Typography>
            </Box>

        </Box>
    );
};
