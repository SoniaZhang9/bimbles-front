import React from 'react'
import { Checkbox, FormControlLabel, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { DietsIconsList } from '../../../assets/icons/DietsIconsList'

function DietsList({ info, register, saved }) {
    return (
        <>
            <List
                sx={{
                    width: '100%',
                    bgcolor: 'background.paper',
                }}
            >
                {DietsIconsList.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText
                                primary={
                                    <FormControlLabel
                                        labelPlacement="start"
                                        label={item ? item.label : ''}
                                        control={
                                            <Checkbox
                                                value={item.id}
                                                defaultChecked={saved ? saved.includes(item.id) : false}
                                                {...register(`diets.${index}`)}
                                            />
                                        }
                                        sx={{
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
        </>
    )
}

export default DietsList
