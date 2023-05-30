import React from 'react'
import { Checkbox, FormControlLabel, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { AllergensIconsList } from '../../../assets/icons/AllergensIconsList'

function AllergensList({ info, register, saved }) {
    const allergensListLeft = AllergensIconsList.slice(0, 6)
    const allergensListRight = AllergensIconsList.slice(7, 13)

    return (
        <Grid container>
            <Grid item xs={12} md={6}>
                <List>
                    {allergensListLeft.map((item, index) => {
                        return (
                            <ListItem key={index}>
                                <ListItemIcon>{item.icon({ size: 55 })}</ListItemIcon>
                                <ListItemText
                                    primary={
                                        <FormControlLabel
                                            sx={{
                                                width: '100%',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                            }}
                                            labelPlacement="start"
                                            label={item.label}
                                            control={
                                                <Checkbox
                                                    value={item.id}
                                                    defaultChecked={saved?.includes(item.id)}
                                                    {...register(`allergies.${index}`)}
                                                />
                                            }
                                        />
                                    }
                                    secondary={info ? item.info : null}
                                />
                            </ListItem>
                        )
                    })}
                </List>
            </Grid>
            <Grid item xs={12} md={6}>
                <List>
                    {allergensListRight.map((item, index) => {
                        index += 7
                        return (
                            <ListItem key={index}>
                                <ListItemIcon>{item.icon({ size: 55 })}</ListItemIcon>
                                <ListItemText
                                    primary={
                                        <FormControlLabel
                                            labelPlacement="start"
                                            label={item.label}
                                            control={
                                                <Checkbox
                                                    value={item.id}
                                                    defaultChecked={saved.includes(item.id)}
                                                    {...register(`allergies.${index}`)}
                                                />
                                            }
                                            sx={{
                                                width: '100%',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                            }}
                                        />
                                    }
                                    secondary={info ? item.info : null}
                                />
                            </ListItem>
                        )
                    })}
                </List>
            </Grid>
        </Grid>
    )
}

export default AllergensList
