import {TextField, Typography} from '@mui/material'
import {Controller} from 'react-hook-form'
import {useState} from 'react'

export const BaseDatePicker = ({
                              control,
                              name,
                              label = '',
                              required = false,
                              errorType = '',
                          }) => {

    const [type, setType] = useState('text')

    return (
        <>
            <Controller
                name={name}
                control={control}
                rules={{required: required}}
                render={({
                             field: {onChange, value},
                             fieldState: {error},
                             formState,
                         }) => (
                    <TextField
                        // InputLabelProps={{ shrink: true }}
                        type={type}
                        onFocus={() => setType('date')}
                        onBlur={() => setType('text')}
                        value={value}
                        error={!!errorType}
                        onChange={onChange}
                        size="small"
                        id="outlined-basic"
                        label={`${label}${required ? '*' : ''}`}
                        variant="outlined"
                        sx={{backgroundColor: 'var(--white)', borderRadius: '5px'}}
                    />
                )}
            />

            {errorType === 'required' &&
                <Typography sx={{fontSize: '10px', color: 'var(--red)'}}>Обязательное поле</Typography>}

        </>
    )
}
