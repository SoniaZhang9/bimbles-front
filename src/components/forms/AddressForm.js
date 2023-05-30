import { TextField } from '@mui/material'
import React from 'react'

export default function AddressForm({ register, errors, data }) {
    return (
        <>
            <TextField
                {...register('address.street')}
                id="street"
                fullWidth
                variant="standard"
                defaultValue={data?.address?.street}
                error={!!errors.address?.street}
                helperText={errors.address?.street?.message}
                label="Calle"
            />
            <TextField
                sx={{ mr: 3 }}
                {...register('address.number')}
                id="number"
                variant="standard"
                defaultValue={data?.address?.number}
                error={!!errors.address?.number}
                helperText={errors.address?.number?.message}
                label="Número"
            />
            <TextField
                {...register('address.flat')}
                id="flat"
                variant="standard"
                error={!!errors.address?.flat}
                defaultValue={data?.address?.flat}
                helperText={errors.address?.flat?.message}
                label="Piso"
            />
            <TextField
                sx={{ mr: 3 }}
                {...register('address.postalCode')}
                id="postalCode"
                variant="standard"
                defaultValue={data?.address?.postalCode}
                error={!!errors.address?.postalCode}
                helperText={errors.address?.postalCode?.message}
                label="Cógigo postal"
            />
            <TextField
                {...register('address.city')}
                id="city"
                variant="standard"
                error={!!errors.address?.city}
                defaultValue={data?.address?.city}
                helperText={errors.address?.city?.message}
                label="Ciudad"
            />
            <TextField
                {...register('address.province')}
                id="province"
                variant="standard"
                error={!!errors.address?.province}
                defaultValue={data?.address?.province}
                helperText={errors.address?.province?.message}
                label="Provincia"
            />
        </>
    )
}
