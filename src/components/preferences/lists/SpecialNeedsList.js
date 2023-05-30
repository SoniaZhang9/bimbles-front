import React from 'react'
import { Checkbox, FormControlLabel, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { SpecialNeedsIconsList } from '../../../assets/icons/SpecialNeedsIconsList'

function SpecialNeedsList({ info, register, saved }) {
    //Information ('info') icon selected or unselected (boolean)

    return (
        <Grid container>
            <List>
                {SpecialNeedsIconsList.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText
                                primary={
                                    <FormControlLabel
                                        labelPlacement="start"
                                        label={item.label}
                                        control={
                                            <Checkbox
                                                value={item.id}
                                                defaultChecked={saved?.includes(item.id)}
                                                {...register(`specialNeeds.${index}`)}
                                            />
                                        }
                                        sx={{
                                            width: '100%',
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
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
    )
}

export default SpecialNeedsList
